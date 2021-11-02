/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ServiceCheckStatus } from "./ServiceCheckStatus";

export class ServiceCheck {
  /**
   * The check.
   */
  "check": string;
  /**
   * The host name correlated with the check.
   */
  "hostName": string;
  /**
   * Message containing check status.
   */
  "message"?: string;
  "status": ServiceCheckStatus;
  /**
   * Tags related to a check.
   */
  "tags": Array<string>;
  /**
   * Time of check.
   */
  "timestamp"?: number;

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
    check: {
      name: "check",
      baseName: "check",
      type: "string",
      required: true,
    },
    hostName: {
      name: "hostName",
      baseName: "host_name",
      type: "string",
      required: true,
    },
    message: {
      name: "message",
      baseName: "message",
      type: "string",
      required: false,
    },
    status: {
      name: "status",
      baseName: "status",
      type: "ServiceCheckStatus",
      required: true,
    },
    tags: {
      name: "tags",
      baseName: "tags",
      type: "Array<string>",
      required: true,
    },
    timestamp: {
      name: "timestamp",
      baseName: "timestamp",
      type: "number",
      required: false,
      format: "int64",
    },
  };

  static getAttributeTypeMap() {
    return ServiceCheck.attributeTypeMap;
  }

  public constructor() {}
}
