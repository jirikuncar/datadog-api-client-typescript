/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class ApplicationKey {
  /**
   * Hash of an application key.
   */
  "hash"?: string;
  /**
   * Name of an application key.
   */
  "name"?: string;
  /**
   * Owner of an application key.
   */
  "owner"?: string;

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
    hash: {
      name: "hash",
      baseName: "hash",
      type: "string",
      required: false,
    },
    name: {
      name: "name",
      baseName: "name",
      type: "string",
      required: false,
    },
    owner: {
      name: "owner",
      baseName: "owner",
      type: "string",
      required: false,
    },
  };

  static getAttributeTypeMap() {
    return ApplicationKey.attributeTypeMap;
  }

  public constructor() {}
}
