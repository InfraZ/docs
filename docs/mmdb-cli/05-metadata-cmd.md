---
sidebar_position: 5
sidebar_label: Metadata
description: MMDB CLI Metadata Command
tags:
  - cli
  - mmdb
  - mmdb-cli
---

# Metadata Command 🪨

One of the most important features of MMDB CLI is the ability to extract metadata from an MMDB file. The metadata contains information about the MMDB file, such as the database type, languages, binary format version, build epoch, IP version, node count, and record size. You can use the `metadata` command to extract this information from an MMDB file.

:::note[Disclaimer]

The data shown in the examples above is for demonstration purposes only and may not reflect the actual data in the MMDB file you are inspecting. The actual data may vary based on the version of the database and the IP addresses queried.

:::

## Usage

```bash
mmdb metadata -i <MMDB_FILE_PATH>
```

## Options

- `-i, --input <MMDB_FILE_PATH>`: The path to the MMDB file from which you want to extract metadata.
- `-f, --format <FORMAT>`: The output format of the metadata. The supported formats are `yaml`, `json`, and `json-pretty`. The default format is `yaml`.

## Examples

In the following example, we extract metadata from the `GeoLite2-ASN.mmdb` file in YAML format:

```bash
mmdb metadata -i GeoLite2-ASN.mmdb
```

### Output (YAML):

```yaml
binary_format_major_version: 2
binary_format_minor_version: 0
build_epoch: 1728288921
database_type: GeoLite2-ASN
description:
    en: GeoLite2 ASN database
ip_version: 6
languages:
    - en
node_count: 1056663
record_size: 24
```

### Output (JSON):

```json
{
    "description": {
        "en": "GeoLite2 ASN database"
    },
    "database_type": "GeoLite2-ASN",
    "languages": [
        "en"
    ],
    "binary_format_major_version": 2,
    "binary_format_minor_version": 0,
    "build_epoch": 1728288921,
    "ip_version": 6,
    "node_count": 1056663,
    "record_size": 24
}
```