# Avalanche MCP Tools

## Introduction

The Model Context Protocol (MCP) represents a groundbreaking standardized approach that enhances AI assistants' capabilities by enabling them to perform concrete actions with greater contextual awareness. This rapidly emerging protocol has quickly captured developers' attention and stands as one of the most exciting innovations in AI integration today.

Avalanche MCP Tools democratize blockchain access by transforming the entire Avalanche CLI command set and AvalancheJS API into intuitive AI interactions, creating:

- **Direct access**: Query Avalanche directly through any AI assistant interface that supports MCP format
- **Natural language commands**: Execute complex Avalanche operations through simple conversations
- **Real-time analysis**: Perform sophisticated blockchain analysis without specialized knowledge or additional software
- **Simplified workflows**: Complete everyday blockchain tasks without memorizing technical commands or syntax
- **AI agent integration**: Empower your custom AI agents to interact with Avalanche for autonomous operations
- **Auto-installation**: Seamlessly install Avalanche CLI commands to your computer

## Who This Is For

### For Everyday Users & AI Enthusiasts

- Chat naturally with Avalanche through your preferred AI interface
- Manage accounts, send payments, and explore assets without learning technical commands
- Access the full power of Avalanche through conversational interactions

### For Developers & DeFi Applications

- Incorporate Avalanche capabilities into your applications with zero Avalanche-specific code
- Integrate these MCP tools directly into your AI agents for autonomous blockchain operations
- Access Avalanche functionality directly from within your code editor while developing
- Accelerate development from initial prototyping through production deployment

## Features

### Blockchain Management

- **blockchainList** - List all created Avalanche Blockchain configurations
- **blockchainPublish** - Publish a Blockchain's VM to a repository

### Subnet Management (Coming Soon)

- Subnet creation and management
- Subnet deployment and monitoring
- Validator operations

### Key Management (Coming Soon)

- Key generation and storage
- Address management
- Signing operations

### Transaction Operations (Coming Soon)

- Transaction building and signing
- Transaction submission and monitoring
- Gas optimization

And many more...

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/avalanche-mcp-tools.git
cd avalanche-mcp-tools

# Install dependencies
npm install

# Build the project
npm run build
```

## Prerequisites

- Node.js 16+
- Avalanche CLI installed and accessible in your PATH
- Avalanche node connection (local or remote)

## Usage

### Start the MCP Server

```bash
npm start
```

### Integrate with Claude or other AI Assistants

The MCP server runs on stdio, allowing it to be integrated with AI assistants that support MCP tools.

Example conversation with Claude:

```
User: List all my avalanche blockchains
Claude: I'll check your Avalanche blockchains.
[Uses blockchainList MCP tool]
Here are your Avalanche blockchains:
- mySubnet (deployed)
- testChain
- devNet
```

## Project Structure

```
avalanche-mcp-tools/
├── src/
│   ├── tools/
│   │   ├── avalanche-cli/     # Avalanche CLI command tools
│   │   │   ├── blockchain/    # Blockchain management commands
│   │   │   ├── subnet/        # Subnet management commands
│   │   │   └── keys/          # Key management commands
│   │   ├── avalanche-js/      # Avalanche JS SDK tools
│   │   └── common.ts          # Shared utilities
│   └── index.ts               # Main entry point
├── package.json
└── README.md
```

## Development

### Adding New Tools

To add new Avalanche CLI commands, follow the pattern established in existing tools:

1. Create a new file in the appropriate directory under `src/tools/avalanche-cli/`
2. Define a function to register the tools with the MCP server
3. Implement the tool with appropriate parameters and error handling
4. Register the new tool in the main tools index

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
