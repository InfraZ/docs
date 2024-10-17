---
sidebar_position: 1
sidebar_label: MMDB CLI
description: MMDB CLI
slug: /mmdb-cli
tags:
  - cli
  - mmdb
  - mmdb-cli
---

# MMDB CLI 🛠️

**MMDB CLI** is our first publicly available open-source project, developed to simplify working with MMDB files. It is a command-line tool that allows you to generate, modify, export, and inspect MMDB files, among other functionalities.

![InfraZ MMDB CLI Cover](/img/docs/mmdb-cli/mmdb-cli-cover.png)

## What is MMDB?

The **MMDB** (MaxMind Database) is a widely used database file format designed to map IPv4 and IPv6 addresses to specific data records through an efficient binary search tree structure. For more details, please refer to the [MMDB File Format Specification](https://maxmind.github.io/MaxMind-DB/).

## Why MMDB CLI?

We’ve always wanted a comprehensive and easy-to-use tool for working with MMDB files. That’s why we developed **MMDB CLI**, to make handling MMDB files simple and efficient, without the need for coding.

With MMDB CLI, you can:

- Generate MMDB files from JSON datasets
- Modify existing MMDB files (Insert, Update, Delete)
- Dump MMDB files into JSON format
- Inspect the contents of MMDB files
- And much more…

## Table of Contents

- [Installation](./mmdb-cli/installation)
- [Capabilities](./mmdb-cli/capabilities)
- [Building from Source](./mmdb-cli/building-from-source)
- [Dataset Schema](./mmdb-cli/dataset-schema)
- Commands:
  - [Metadata](./mmdb-cli/commands/metadata)
  - [Inspect](./mmdb-cli/commands/inspect)
  - [Dump](./mmdb-cli/commands/dump)
  - [Generate](./mmdb-cli/commands/generate)
  - [Update](./mmdb-cli/commands/update)


## License

We have released MMDB CLI under the Apache License 2.0. You can access the source code and find more information in our [GitHub repository](https://github.com/InfraZ/mmdb-cli).
