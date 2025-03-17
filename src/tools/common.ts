import { Avalanche } from "avalanche";
import axios from "axios";
import { exec } from "child_process";
import { promisify } from "util";

// Promisify exec to use with async/await
export const execAsync = promisify(exec);

// Default network configurations
export const NETWORKS = {
  MAINNET: {
    nodeUrl: "https://api.avax.network",
    chainId: 43114,
    networkId: 1,
    name: "Mainnet",
  },
  FUJI: {
    nodeUrl: "https://api.avax-test.network",
    chainId: 43113,
    networkId: 5,
    name: "Fuji Testnet",
  },
  LOCAL: {
    nodeUrl: "http://localhost:9650",
    chainId: 43112,
    networkId: 12345,
    name: "Local Network",
  },
};

// Default network
let currentNetwork = NETWORKS.FUJI;

// Initialize Avalanche client
export const getAvalancheClient = () => {
  const host = currentNetwork.nodeUrl
    .replace("https://", "")
    .replace("http://", "");
  const protocol = currentNetwork.nodeUrl.startsWith("https")
    ? "https"
    : "http";
  const port = currentNetwork.nodeUrl.startsWith("https") ? 443 : 9650;
  return new Avalanche(host, port, protocol, currentNetwork.networkId);
};

// Helper to execute Avalanche CLI commands
export async function runAvalancheCli(
  command: string
): Promise<{ stdout: string; stderr: string }> {
  try {
    const { stdout, stderr } = await execAsync(`avalanche ${command}`);
    return { stdout, stderr };
  } catch (error: any) {
    // If command fails but returns output, we still want to see it
    if (error.stdout || error.stderr) {
      return { stdout: error.stdout || "", stderr: error.stderr || "" };
    }
    throw error;
  }
}

// Set active network
export function setNetwork(network: "MAINNET" | "FUJI" | "LOCAL"): void {
  currentNetwork = NETWORKS[network];
}

// Get current network info
export function getNetwork() {
  return currentNetwork;
}

// Helper to format error responses
export function formatError(error: any): string {
  if (typeof error === "string") return error;
  if (error.message) return error.message;
  if (error.response?.data) return JSON.stringify(error.response.data);
  return JSON.stringify(error);
}
