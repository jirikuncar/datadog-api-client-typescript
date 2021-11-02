/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IPPrefixesAPI } from "./IPPrefixesAPI";
import { IPPrefixesAPM } from "./IPPrefixesAPM";
import { IPPrefixesAgents } from "./IPPrefixesAgents";
import { IPPrefixesLogs } from "./IPPrefixesLogs";
import { IPPrefixesProcess } from "./IPPrefixesProcess";
import { IPPrefixesSynthetics } from "./IPPrefixesSynthetics";
import { IPPrefixesWebhooks } from "./IPPrefixesWebhooks";

export class IPRanges {
  "agents"?: IPPrefixesAgents;
  "api"?: IPPrefixesAPI;
  "apm"?: IPPrefixesAPM;
  "logs"?: IPPrefixesLogs;
  /**
   * Date when last updated, in the form `YYYY-MM-DD-hh-mm-ss`.
   */
  "modified"?: string;
  "process"?: IPPrefixesProcess;
  "synthetics"?: IPPrefixesSynthetics;
  /**
   * Version of the IP list.
   */
  "version"?: number;
  "webhooks"?: IPPrefixesWebhooks;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: {
      name: string;
      baseName: string;
      type: string;
      required: boolean;
      format?: string;
    };
  } = {
    agents: {
      name: "agents",
      baseName: "agents",
      type: "IPPrefixesAgents",
      required: false,
    },
    api: {
      name: "api",
      baseName: "api",
      type: "IPPrefixesAPI",
      required: false,
    },
    apm: {
      name: "apm",
      baseName: "apm",
      type: "IPPrefixesAPM",
      required: false,
    },
    logs: {
      name: "logs",
      baseName: "logs",
      type: "IPPrefixesLogs",
      required: false,
    },
    modified: {
      name: "modified",
      baseName: "modified",
      type: "string",
      required: false,
    },
    process: {
      name: "process",
      baseName: "process",
      type: "IPPrefixesProcess",
      required: false,
    },
    synthetics: {
      name: "synthetics",
      baseName: "synthetics",
      type: "IPPrefixesSynthetics",
      required: false,
    },
    version: {
      name: "version",
      baseName: "version",
      type: "number",
      required: false,
      format: "int64",
    },
    webhooks: {
      name: "webhooks",
      baseName: "webhooks",
      type: "IPPrefixesWebhooks",
      required: false,
    },
  };

  static getAttributeTypeMap() {
    return IPRanges.attributeTypeMap;
  }

  public constructor() {}
}
