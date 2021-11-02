/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class WebhooksIntegrationCustomVariableResponse {
  /**
   * Make custom variable is secret or not. If the custom variable is secret, the value is not returned in the response payload.
   */
  "isSecret": boolean;
  /**
   * The name of the variable. It corresponds with `<CUSTOM_VARIABLE_NAME>`. It must only contains upper-case characters, integers or underscores.
   */
  "name": string;
  /**
   * Value of the custom variable. It won't be returned if the variable is secret.
   */
  "value"?: string;

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
    isSecret: {
      name: "isSecret",
      baseName: "is_secret",
      type: "boolean",
      required: true,
    },
    name: {
      name: "name",
      baseName: "name",
      type: "string",
      required: true,
    },
    value: {
      name: "value",
      baseName: "value",
      type: "string",
      required: false,
    },
  };

  static getAttributeTypeMap() {
    return WebhooksIntegrationCustomVariableResponse.attributeTypeMap;
  }

  public constructor() {}
}
