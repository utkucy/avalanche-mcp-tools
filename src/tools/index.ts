import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import { registerAvalancheCLITools } from "./avalanche-cli/index.js";

export function registerAllTools(server: McpServer) {
  registerAvalancheCLITools(server);
}
