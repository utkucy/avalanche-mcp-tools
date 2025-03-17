import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { execAsync, formatError } from "../../common.js";

export function registerBlockchainTools(server: McpServer) {
  server.tool(
    "blockchainList",
    "List all created Avalanche Blockchain configurations",
    {
      deployed: z
        .boolean()
        .optional()
        .describe("Show additional deploy information"),
      config: z
        .string()
        .optional()
        .describe(
          "Config file path (default is $HOME/.avalanche-cli/config.json)"
        ),
      logLevel: z
        .string()
        .optional()
        .describe("Log level for the application (default is ERROR)"),
      skipUpdateCheck: z
        .boolean()
        .optional()
        .describe("Skip check for new versions"),
    },
    async ({ deployed, config, logLevel, skipUpdateCheck }) => {
      try {
        let command = "avalanche blockchain list";

        if (deployed) command += " --deployed";
        if (config) command += ` --config ${config}`;
        if (logLevel) command += ` --log-level ${logLevel}`;
        if (skipUpdateCheck) command += " --skip-update-check";

        const { stdout, stderr } = await execAsync(command);

        return {
          content: [
            {
              type: "text",
              text: stdout || stderr,
            },
          ],
        };
      } catch (error: unknown) {
        return {
          content: [
            {
              type: "text",
              text: `Error listing Avalanche blockchains: ${formatError(
                error
              )}`,
            },
          ],
        };
      }
    }
  );

  server.tool(
    "blockchainPublish",
    "Publish the Blockchain's VM to a repository",
    {
      alias: z
        .string()
        .optional()
        .describe(
          "Identify the repo locally under a user-provided alias (e.g. myrepo)"
        ),
      force: z
        .boolean()
        .optional()
        .describe(
          "If true, ignores if the blockchain has been published in the past, and attempts a forced publish"
        ),
      noRepoPath: z
        .string()
        .optional()
        .describe(
          "Do not let the tool manage file publishing, but have it only generate the files and put them in the location given by this flag"
        ),
      repoUrl: z
        .string()
        .optional()
        .describe("The URL of the repo where we are publishing"),
      subnetFilePath: z
        .string()
        .optional()
        .describe(
          "Path to the Blockchain description file. If not given, a prompting sequence will be initiated"
        ),
      vmFilePath: z
        .string()
        .optional()
        .describe(
          "Path to the VM description file. If not given, a prompting sequence will be initiated"
        ),
      config: z
        .string()
        .optional()
        .describe(
          "Config file path (default is $HOME/.avalanche-cli/config.json)"
        ),
      logLevel: z
        .string()
        .optional()
        .describe("Log level for the application (default is ERROR)"),
      skipUpdateCheck: z
        .boolean()
        .optional()
        .describe("Skip check for new versions"),
    },
    async ({
      alias,
      force,
      noRepoPath,
      repoUrl,
      subnetFilePath,
      vmFilePath,
      config,
      logLevel,
      skipUpdateCheck,
    }) => {
      try {
        let command = "avalanche blockchain publish";

        if (alias) command += ` --alias ${alias}`;
        if (force) command += " --force";
        if (noRepoPath) command += ` --no-repo-path ${noRepoPath}`;
        if (repoUrl) command += ` --repo-url ${repoUrl}`;
        if (subnetFilePath) command += ` --subnet-file-path ${subnetFilePath}`;
        if (vmFilePath) command += ` --vm-file-path ${vmFilePath}`;
        if (config) command += ` --config ${config}`;
        if (logLevel) command += ` --log-level ${logLevel}`;
        if (skipUpdateCheck) command += " --skip-update-check";

        const { stdout, stderr } = await execAsync(command);

        return {
          content: [
            {
              type: "text",
              text: stdout || stderr,
            },
          ],
        };
      } catch (error: unknown) {
        return {
          content: [
            {
              type: "text",
              text: `Error publishing Avalanche blockchain: ${formatError(
                error
              )}`,
            },
          ],
        };
      }
    }
  );
}
