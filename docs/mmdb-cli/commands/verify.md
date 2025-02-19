---
sidebar_position: 10
sidebar_label: Verify
description: MMDB CLI Verify Command
tags:
  - cli
  - mmdb
  - mmdb-cli
---

# Verify Command 🔍

It is essential to verify the integrity of the MMDB file before using it in your applications. The `verify` command helps you to validate the MMDB file and ensure that it is not corrupted.

## Usage

```bash
mmdb verify -i <MMDB_FILE_PATH>
```

## Options

- `-i, --input <MMDB_FILE_PATH>`: The path to the MMDB file from which you want to verify.

## Examples

In the following example, we check verify the `GeoLite2-ASN.mmdb` file:

```bash
mmdb verify -i GeoLite2-ASN.mmdb
```

### Output:

```text
The MMDB file is valid
```
