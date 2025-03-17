import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerBlockchainTools } from "./blockchain/index.js";

export function registerAvalancheCLITools(server: McpServer) {
  registerBlockchainTools(server);
}
