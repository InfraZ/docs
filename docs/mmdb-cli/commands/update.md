---
sidebar_position: 9
sidebar_label: Update
description: MMDB CLI Update Command
tags:
  - cli
  - mmdb
  - mmdb-cli
---

# Update Command 🧠

The `update` command is one of the amazing core features of MMDB CLI that allows you to update existing MMDB files. You can use this command to insert, update, and delete records in an MMDB file. This command is useful for keeping your MMDB files up-to-date with the latest data and making changes to the database without recreating it from scratch.

## Usage

```bash
mmdb-cli update -i <MMDB_FILE_PATH> -o <MMDB_OUTPUT_PATH> -d <JSON_FILE_PATH>
```

## Options

- `-i, --input <MMDB_FILE_PATH>`: The path to the MMDB file you want to update.
- `-o, --output <MMDB_OUTPUT_PATH>`: The path to the updated MMDB file where the changes will be saved. (must have a .mmdb extension)
- `-d, --data <JSON_FILE_PATH>`: The path to the JSON file that contains the data you want to insert, update, or delete in the MMDB file.
- `-v, --verbose`: Enable the verbose mode

## JSON Update Schema

The update data in the JSON format must contain an array of objects, where each object represents a network CIDR block and the action to be performed on it and the data to be updated.

| Field   | Type   | Description                           | Required |
| ------- | ------ | ------------------------------------- | -------- |
| network | string | The network CIDR block to update      | Yes      |
| method  | string | The action to perform on the network. | Yes      |
| data    | object | The data to insert, update, or delete | Yes      |

## Supported Methods

:::info[Supported Methods]

The supported methods are `remove`, `replace`, `top_level_merge`, and `deep_merge`. these methods are implemented base on Official MMDB Writer library, for more information about these methods please refer to the [MMDB Writer Documentation](https://github.com/maxmind/mmdbwriter).

:::

|     Method      | Description                                                |
| :-------------: | ---------------------------------------------------------- |
|     remove      | Remove the network from the MMDB file                      |
|     replace     | Replace the data of the network with the new data          |
| top_level_merge | Merge the new data with the existing data at the top level |
|   deep_merge    | Deep merge the new data with the existing data             |

```json
[
    {
        "network": "<NETWORK_CIDR>",
        "method": "<ACTION_METHOD>",
        "data": {
            <UPDATE_DATA>
        }
    },
    ...
]
```

## Examples

In the following example, we update the `GeoLite2-ASN.mmdb` file with new data from a JSON file:

```json
[
    {
        "network": "1.1.1.1/32",
        "method": "deep_merge",
        "data": {
            "record": {
                "organization": "Cloudflare",
                "is_cloudflare": true,
                "attributes": {
                    "country": "US",
                    "city": "San Francisco"
                }
            }
        }
    }
]
```

```bash
mmdb-cli update -i GeoLite2-ASN.mmdb -o GeoLite2-ASN-Updated.mmdb -d update-data.json
```

To verify the changes, you can use the `inspect` command to check the updated data in the MMDB file.

:::note[Disclaimer]

The data shown in the examples above is for demonstration purposes only and may not reflect the actual data in the MMDB file you are inspecting. The actual data may vary based on the version of the database and the IP addresses queried.

:::

```json
[
  {
    "query": "1.1.1.1",
    "records": [
      {
        "network": "1.1.1.1/32",
        "record": {
          "autonomous_system_number": 13335,
          "autonomous_system_organization": "CLOUDFLARENET",
          "record": {
            "attributes": {
              "city": "San Francisco",
              "country": "US"
            },
            "is_cloudflare": true,
            "organization": "Cloudflare"
          }
        }
      }
    ]
  }
]
```
