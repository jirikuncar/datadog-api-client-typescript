/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class LogsAggregateBucketValueTimeseriesPoint {
  /**
   * The time value for this point
   */
  "time"?: string;
  /**
   * The value for this point
   */
  "value"?: number;

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
    time: {
      name: "time",
      baseName: "time",
      type: "string",
      required: false,
      format: "",
    },
    value: {
      name: "value",
      baseName: "value",
      type: "number",
      required: false,
      format: "double",
    },
  };

  static getAttributeTypeMap() {
    return LogsAggregateBucketValueTimeseriesPoint.attributeTypeMap;
  }

  public constructor() {}
}
