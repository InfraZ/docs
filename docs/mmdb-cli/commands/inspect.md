---
sidebar_position: 2
sidebar_label: Inspect
description: MMDB CLI Inspect Command
tags:
  - cli
  - mmdb
  - mmdb-cli
---

# Inspect Command 🔦

The `inspect` command allows you to inspect matching records in an MMDB file for one or more IP addresses/CIDRs.

:::note[Disclaimer]

The data shown in the examples above is for demonstration purposes only and may not reflect the actual data in the MMDB file you are inspecting. The actual data may vary based on the version of the database and the IP addresses queried.

:::

## Usage

```bash
mmdb-cli inspect -i <MMDB_FILE_PATH> [OPTIONS] <IP_OR_CIDR> [MORE_IPS_OR_CIDRS...]
```

## Options

- `-i, --input <MMDB_FILE_PATH>`: The path to the MMDB file to inspect.
- `-f, --format <FORMAT>`: Output format. Supported values: `yaml`, `json`, `json-pretty` (default: `yaml`).
- `-j, --jsonpath <EXPRESSION>`: JSONPath filter applied to each record, for example `{[?(@.country.iso_code=="US")]}`.

:::info[JSONPath Filter]

The `jsonpath` option allows you to filter the records in the output file using JSONPath expressions. For more information, see [JSONPath](https://goessner.net/articles/JsonPath/).

:::

## Examples Single IP

In the following example, we inspect the `GeoLite2-ASN.mmdb` file for the IP address:

```bash
mmdb-cli inspect -i GeoLite2-ASN.mmdb 1.1.1.1
```

### Output (YAML)

```yaml
- query: 1.1.1.1
  records:
    - network: 1.1.1.0/24
      record:
        autonomous_system_number: 13335
        autonomous_system_organization: CLOUDFLARENET
```

### Output (JSON)

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

### Output YAML (CIDR Range)

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

### Output JSON (CIDR Range)

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

### Output YAML

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

### Output JSON

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
