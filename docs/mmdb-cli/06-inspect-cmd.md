---
sidebar_position: 6
sidebar_label: Inspect
description: MMDB CLI Inspect Command
tags:
  - cli
  - mmdb
  - mmdb-cli
---

# Inspect Command 🔦

The `inspect` command in MMDB CLI allows you to inspect the contents of an MMDB file. You can view the metadata, search for IP addresses, and extract specific fields from the database. This command is useful for exploring the structure of an MMDB file and understanding its data.

:::note[Disclaimer]

The data shown in the examples above is for demonstration purposes only and may not reflect the actual data in the MMDB file you are inspecting. The actual data may vary based on the version of the database and the IP addresses queried.

:::

## Usage

```bash
mmdb-cli inspect -i <MMDB_FILE_PATH> <IP_OR_CIDR>
```

## Options

- `-i, --input <MMDB_FILE_PATH>`: The path to the MMDB file from which you want to extract metadata.
- `-f, --format <FORMAT>`: The output format of the metadata. The supported formats are `yaml`, `json`, and `json-pretty`. The default format is `yaml`.

## Examples Single IP

In the following example, we inspect the `GeoLite2-ASN.mmdb` file for the IP address:

```bash
mmdb-cli inspect -i GeoLite2-ASN.mmdb 1.1.1.1
````

### Output (YAML):

```yaml
- query: 1.1.1.1
  records:
    - network: 1.1.1.0/24
      record:
        autonomous_system_number: 13335
        autonomous_system_organization: CLOUDFLARENET
```

### Output (JSON):

```json
[
    {
        "query": "1.1.1.1",
        "records": [
            {
                "network": "1.1.1.0/24",
                "record": {
                    "autonomous_system_number": 13335,
                    "autonomous_system_organization": "CLOUDFLARENET"
                }
            }
        ]
    }
]
```

## Examples CIDR Range

In the following example, we inspect the `GeoLite2-ASN.mmdb` file for the CIDR range:

```bash
mmdb-cli inspect -i GeoLite2-ASN.mmdb 1.1.1.1/20
```

### Output (YAML):

```yaml
- query: 1.1.1.1/20
  records:
    - network: 1.1.1.0/24
      record:
        autonomous_system_number: 13335
        autonomous_system_organization: CLOUDFLARENET
    - network: 1.1.8.0/24
      record:
        autonomous_system_number: 138421
        autonomous_system_organization: China Unicom
```

### Output (JSON):

```json
[
    {
        "query": "1.1.1.1/20",
        "records": [
            {
                "network": "1.1.1.0/24",
                "record": {
                    "autonomous_system_number": 13335,
                    "autonomous_system_organization": "CLOUDFLARENET"
                }
            },
            {
                "network": "1.1.8.0/24",
                "record": {
                    "autonomous_system_number": 138421,
                    "autonomous_system_organization": "China Unicom"
                }
            }
        ]
    }
]
```

## Examples Multiple IPs

In the following example, we inspect the `GeoLite2-ASN.mmdb` file for multiple IP addresses:

```bash
mmdb-cli inspect -i GeoLite2-ASN.mmdb 1.0.0.1 1.1.1.1
```

### Output (YAML):

```yaml
- query: 1.0.0.1
  records:
    - network: 1.0.0.0/24
      record:
        autonomous_system_number: 13335
        autonomous_system_organization: CLOUDFLARENET
- query: 1.1.1.1
  records:
    - network: 1.1.1.0/24
      record:
        autonomous_system_number: 13335
        autonomous_system_organization: CLOUDFLARENET
```

### Output (JSON):

```json
[
    {
        "query": "1.0.0.1",
        "records": [
            {
                "network": "1.0.0.0/24",
                "record": {
                    "autonomous_system_number": 13335,
                    "autonomous_system_organization": "CLOUDFLARENET"
                }
            }
        ]
    },
    {
        "query": "1.1.1.1",
        "records": [
            {
                "network": "1.1.1.0/24",
                "record": {
                    "autonomous_system_number": 13335,
                    "autonomous_system_organization": "CLOUDFLARENET"
                }
            }
        ]
    }
]
```
