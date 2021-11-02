/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SecurityFilterType } from "./SecurityFilterType";
import { SecurityFilterUpdateAttributes } from "./SecurityFilterUpdateAttributes";

export class SecurityFilterUpdateData {
  "attributes": SecurityFilterUpdateAttributes;
  "type": SecurityFilterType;

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
      type: "SecurityFilterUpdateAttributes",
      required: true,
      format: "",
    },
    type: {
      name: "type",
      baseName: "type",
      type: "SecurityFilterType",
      required: true,
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SecurityFilterUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
