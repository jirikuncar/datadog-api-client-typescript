/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsExclusionFilter } from "./LogsExclusionFilter";

export class LogsExclusion {
  "filter"?: LogsExclusionFilter;
  /**
   * Whether or not the exclusion filter is active.
   */
  "isEnabled"?: boolean;
  /**
   * Name of the index exclusion filter.
   */
  "name": string;

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
    filter: {
      name: "filter",
      baseName: "filter",
      type: "LogsExclusionFilter",
      required: false,
      format: "",
    },
    isEnabled: {
      name: "isEnabled",
      baseName: "is_enabled",
      type: "boolean",
      required: false,
      format: "",
    },
    name: {
      name: "name",
      baseName: "name",
      type: "string",
      required: true,
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return LogsExclusion.attributeTypeMap;
  }

  public constructor() {}
}
