/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Host } from "./Host";

export class HostListResponse {
  /**
   * Array of hosts.
   */
  "hostList"?: Array<Host>;
  /**
   * Number of host matching the query.
   */
  "totalMatching"?: number;
  /**
   * Number of host returned.
   */
  "totalReturned"?: number;

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
    hostList: {
      name: "hostList",
      baseName: "host_list",
      type: "Array<Host>",
      required: false,
    },
    totalMatching: {
      name: "totalMatching",
      baseName: "total_matching",
      type: "number",
      required: false,
      format: "int64",
    },
    totalReturned: {
      name: "totalReturned",
      baseName: "total_returned",
      type: "number",
      required: false,
      format: "int64",
    },
  };

  static getAttributeTypeMap() {
    return HostListResponse.attributeTypeMap;
  }

  public constructor() {}
}
