---
sidebar_position: 7
sidebar_label: Dump
description: MMDB CLI Dump Command
tags:
  - cli
  - mmdb
  - mmdb-cli
---

# Dump Command 🐣

The `dump` command in MMDB CLI allows you to dump the contents of an MMDB file in a human-readable format. You can view the metadata, search for IP addresses, and extract specific fields from the database. This command is useful for exploring the structure of an MMDB file and understanding its data.

:::tip

The output file structure is designed to be human-readable and easy to understand. The data is organized into sections such as `version`, `metadata`, and `dataset`. For more information, see [Dataset Schema](../dataset-schema).

:::

## Usage

```bash
mmdb-cli dump -i <MMDB_FILE_PATH> -o <JSON_OUTPUT_PATH>
```

## Options

- `-i, --input <MMDB_FILE_PATH>`: The path to the MMDB file from which you want to extract metadata.
- `-o, --output <JSON_OUTPUT_PATH>`: The path to the JSON file where the output will be saved. (must have a .json extension)
- `-j, --jsonpath <EXPRESSION>`: JSONPath filter applied to each record, for example `{[?(@.country.iso_code=="US")]}`.
- `-v, --verbose`: Enable the verbose mode

:::info[Supported Formats]

The `dump` command currently supports dumping the contents of an MMDB file in JSON format and `json` file extension is mandatory for the output file.

:::

:::info[JSONPath Filter]

The `jsonpath` option allows you to filter the records in the output file using JSONPath expressions. For more information, see [JSONPath](https://goessner.net/articles/JsonPath/).

:::

## Examples

In the following example, we dump the contents of the `GeoLite2-ASN.mmdb` file to a JSON file:

```bash
mmdb-cli dump -i GeoLite2-ASN.mmdb -o GeoLite2-ASN.json
```

### Output (JSON)

:::note[Disclaimer]

The data shown in the examples above is for demonstration purposes only and may not reflect the actual data in the MMDB file you are inspecting. The actual data may vary based on the version of the database and the IP addresses queried.

:::

```json
{
  "dataset": [
    {
      "network": "::100:0/120",
      "record": {
        "autonomous_system_number": 13335,
        "autonomous_system_organization": "CLOUDFLARENET"
      }
    },
    {
      "network": "::100:400/118",
      "record": {
        "autonomous_system_number": 38803,
        "autonomous_system_organization": "Gtelecom Pty Ltd"
      }
    },
    ...
  ],
  "metadata": {
    "Description": {
      "en": "GeoLite2 ASN database"
    },
    "DatabaseType": "GeoLite2-ASN",
    "Languages": [
      "en"
    ],
    "BinaryFormatMajorVersion": 2,
    "BinaryFormatMinorVersion": 0,
    "BuildEpoch": 1728288921,
    "IPVersion": 6,
    "NodeCount": 1056663,
    "RecordSize": 24
  },
  "version": "v1"
}
```
