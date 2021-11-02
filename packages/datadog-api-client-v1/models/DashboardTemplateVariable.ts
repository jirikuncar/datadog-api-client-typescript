/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class DashboardTemplateVariable {
  /**
   * The list of values that the template variable drop-down is limited to.
   */
  "availableValues"?: Array<string>;
  /**
   * The default value for the template variable on dashboard load.
   */
  "_default"?: string;
  /**
   * The name of the variable.
   */
  "name": string;
  /**
   * The tag prefix associated with the variable. Only tags with this prefix appear in the variable drop-down.
   */
  "prefix"?: string;

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
    availableValues: {
      name: "availableValues",
      baseName: "available_values",
      type: "Array<string>",
      required: false,
    },
    _default: {
      name: "_default",
      baseName: "default",
      type: "string",
      required: false,
    },
    name: {
      name: "name",
      baseName: "name",
      type: "string",
      required: true,
    },
    prefix: {
      name: "prefix",
      baseName: "prefix",
      type: "string",
      required: false,
    },
  };

  static getAttributeTypeMap() {
    return DashboardTemplateVariable.attributeTypeMap;
  }

  public constructor() {}
}
