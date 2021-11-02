/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class FullAPIKeyAttributes {
  /**
   * Creation date of the API key.
   */
  "createdAt"?: string;
  /**
   * The API key.
   */
  "key"?: string;
  /**
   * The last four characters of the API key.
   */
  "last4"?: string;
  /**
   * Date the API key was last modified.
   */
  "modifiedAt"?: string;
  /**
   * Name of the API key.
   */
  "name"?: string;

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
    createdAt: {
      name: "createdAt",
      baseName: "created_at",
      type: "string",
      required: false,
      format: "",
    },
    key: {
      name: "key",
      baseName: "key",
      type: "string",
      required: false,
      format: "",
    },
    last4: {
      name: "last4",
      baseName: "last4",
      type: "string",
      required: false,
      format: "",
    },
    modifiedAt: {
      name: "modifiedAt",
      baseName: "modified_at",
      type: "string",
      required: false,
      format: "",
    },
    name: {
      name: "name",
      baseName: "name",
      type: "string",
      required: false,
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return FullAPIKeyAttributes.attributeTypeMap;
  }

  public constructor() {}
}
