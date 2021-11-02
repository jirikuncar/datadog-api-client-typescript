/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogAttributes } from "./LogAttributes";
import { LogType } from "./LogType";

export class Log {
  "attributes"?: LogAttributes;
  /**
   * Unique ID of the Log.
   */
  "id"?: string;
  "type"?: LogType;

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
    attributes: {
      name: "attributes",
      baseName: "attributes",
      type: "LogAttributes",
      required: false,
      format: "",
    },
    id: {
      name: "id",
      baseName: "id",
      type: "string",
      required: false,
      format: "",
    },
    type: {
      name: "type",
      baseName: "type",
      type: "LogType",
      required: false,
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return Log.attributeTypeMap;
  }

  public constructor() {}
}
