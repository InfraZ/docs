---
sidebar_position: 3
sidebar_label: Installation
description: MMDB CLI Installation
tags:
  - cli
  - mmdb
  - mmdb-cli
  - installation
---

# MMDB CLI Installation 🧰

MMDB CLI is a command line tool that ships as a single binary file. You can download the binary file from the [GitHub releases page](https://github.com/InfraZ/mmdb-cli/releases) and install it on your system by following the instructions below.

## Supported Platforms

| Platform |     Architecture      | Supported |
| :------: | :-------------------: | :-------: |
|  Linux   |         amd64         |    ✅     |
|  Linux   |         arm64         |    ✅     |
|  Linux   |          386          |    ✅     |
|  macOS   |         amd64         |    ✅     |
|  macOS   | arm64 (Apple Silicon) |    ✅     |
| Windows  |         amd64         |    ✅     |
| Windows  |         arm64         |    ✅     |

**Note:** If your platform is not listed above, you can build the MMDB CLI from the source code. Please refer to the [Building from Source](./building-from-source.md) section for more information.

**Note:** We mainly test MMDB CLI on Linux (amd64) and macOS (arm64). If you encounter any issues on other platforms, please let us know by creating an issue on our GitHub repository.

## Installation Instructions

### Linux and macOS

1. Choose the version and platform you want to install from the [GitHub releases page](https://github.com/InfraZ/mmdb-cli/releases).

```bash
export MMDB_CLI_VERSION=0.5.0
export MMDB_CLI_PLATFORM=linux_amd64
```

2. Download the MMDB CLI tarball using `curl`, `wget`, or any other tool.

```bash
curl -LO "https://github.com/InfraZ/mmdb-cli/releases/download/v${MMDB_CLI_VERSION}/mmdb-cli_${MMDB_CLI_VERSION}_${MMDB_CLI_PLATFORM}.tar.gz"
```

3. Extract the downloaded tarball.

```bash
tar -xzf mmdb-cli_${MMDB_CLI_VERSION}_${MMDB_CLI_PLATFORM}.tar.gz
```

4. Move the extracted binary file to a directory in your PATH.

```bash
sudo mv mmdb-cli /usr/local/bin/
```

5. Verify the installation by running the following command.

```bash
mmdb-cli --version
```
