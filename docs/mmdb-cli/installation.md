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
|  macOS   |         amd64         |    ✅     |
|  macOS   | arm64 (Apple Silicon) |    ✅     |
| Windows  |         amd64         |    ✅     |
| Windows  |         arm64         |    ✅     |

**Note:** If your platform is not listed above, you can build the MMDB CLI from the source code. Please refer to the [Building from Source](./building-from-source.md) section for more information.

**Note:** We mainly test MMDB CLI on Linux (amd64) and macOS (arm64). If you encounter any issues on other platforms, please let us know by creating an issue on our GitHub repository.

:::tip
We also provide `deb` and `rpm` packages for Linux distributions that support these package formats. You can download the package from the [GitHub releases page](https://github.com/InfraZ/mmdb-cli/releases)
:::

| Package Format | Architecture | Supported |
| :------------: | :----------: | :-------: |
|      deb       |    amd64     |    ✅     |
|      deb       |    arm64     |    ✅     |
|      rpm       |    amd64     |    ✅     |
|      rpm       |    arm64     |    ✅     |
|      apk       |    amd64     |    ✅     |
|      apk       |    arm64     |    ✅     |

## Installation Instructions ( Linux Package Manager )

We currently provide `deb`, `rpm`, and `apk` packages for Linux distributions that support these package formats. You can download the package from the [GitHub releases page](https://github.com/InfraZ/mmdb-cli/releases) and install it on your system by following the instructions below.

### Debian and Ubuntu

1. Check the latest MMDB CLI `rpm` package version and architecture
```bash
export MMDB_CLI_VERSION=$(curl -s https://api.github.com/repos/InfraZ/mmdb-cli/releases/latest | grep tag_name | cut -d '"' -f 4 | sed 's/v//') 
export ARCH=$(dpkg --print-architecture)
```

2. Download the `.deb` package using `curl` or `wget`
```bash
curl -LO "https://github.com/InfraZ/mmdb-cli/releases/download/v${MMDB_CLI_VERSION}/mmdb-cli_${MMDB_CLI_VERSION}_linux_${ARCH}.deb"
```

3. Install `.deb` package using `apt`
```bash
apt install ./mmdb-cli_${MMDB_CLI_VERSION}_linux_${ARCH}.deb
```

4. Verify the installation by running the following command.
```bash
mmdb-cli version
```

### RH-based (RHEL, Fedora, CentOS, Rocky Linux, AlmaLinux)

1. Check the latest MMDB CLI `rpm` package version and architecture
```bash
export MMDB_CLI_VERSION=$(curl -s https://api.github.com/repos/InfraZ/mmdb-cli/releases/latest | grep tag_name | cut -d '"' -f 4 | sed 's/v//')
```

2. Install `.rpm` package using `yum` or `dnf`
```bash
dnf install "https://github.com/InfraZ/mmdb-cli/releases/download/v${MMDB_CLI_VERSION}/mmdb-cli_${MMDB_CLI_VERSION}_linux_amd64.rpm"
```

3. Verify the installation by running the following command.
```bash
mmdb-cli version
```

### Alpine Linux

1. Check the latest MMDB CLI `apk` package version and architecture
```bash
export MMDB_CLI_VERSION=$(curl -s https://api.github.com/repos/InfraZ/mmdb-cli/releases/latest | grep tag_name | cut -d '"' -f 4 | sed 's/v//')
```

2. Download the `.apk` package using `curl` or `wget`
```bash
curl -LO "https://github.com/InfraZ/mmdb-cli/releases/download/v${MMDB_CLI_VERSION}/mmdb-cli_${MMDB_CLI_VERSION}_linux_amd64.apk"
```

2. Install `.apk` package using `apk`
```bash
apk add --allow-untrusted ./mmdb-cli_${MMDB_CLI_VERSION}_linux_amd64.apk
```

3. Verify the installation by running the following command.
```bash
mmdb-cli version
```

## Installation Instructions ( Pre-built Binary )

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
