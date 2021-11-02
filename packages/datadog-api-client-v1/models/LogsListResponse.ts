/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Log } from "./Log";

export class LogsListResponse {
  /**
   * Array of logs matching the request and the `nextLogId` if sent.
   */
  "logs"?: Array<Log>;
  /**
   * Hash identifier of the next log to return in the list. This parameter is used for the pagination feature.
   */
  "nextLogId"?: string;
  /**
   * Status of the response.
   */
  "status"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: {
      name: string;
      baseName: string;
      type: string;
      required: boolean;
      format?: string;
      enumValues?: any;
    };
  } = {
    logs: {
      name: "logs",
      baseName: "logs",
      type: "Array<Log>",
      required: false,
      format: "",
    },
    nextLogId: {
      name: "nextLogId",
      baseName: "nextLogId",
      type: "string",
      required: false,
      format: "",
    },
    status: {
      name: "status",
      baseName: "status",
      type: "string",
      required: false,
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return LogsListResponse.attributeTypeMap;
  }

  public constructor() {}
}
