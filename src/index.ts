import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { registerAllTools } from "./tools/index.js";

// Create server instance
const server = new McpServer({
  name: "avalanche",
  version: "1.0.0",
});

// Register all tools
registerAllTools(server);

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Avalanche MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
