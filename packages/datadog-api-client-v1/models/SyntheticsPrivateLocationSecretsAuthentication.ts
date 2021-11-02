/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class SyntheticsPrivateLocationSecretsAuthentication {
  /**
   * Access key for the private location.
   */
  "id"?: string;
  /**
   * Secret access key for the private location.
   */
  "key"?: string;

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
    id: {
      name: "id",
      baseName: "id",
      type: "string",
      required: false,
    },
    key: {
      name: "key",
      baseName: "key",
      type: "string",
      required: false,
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsPrivateLocationSecretsAuthentication.attributeTypeMap;
  }

  public constructor() {}
}
