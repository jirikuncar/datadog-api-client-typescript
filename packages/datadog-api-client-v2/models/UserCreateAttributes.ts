/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class UserCreateAttributes {
  /**
   * The email of the user.
   */
  "email": string;
  /**
   * The name of the user.
   */
  "name"?: string;
  /**
   * The title of the user.
   */
  "title"?: string;

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
    email: {
      name: "email",
      baseName: "email",
      type: "string",
      required: true,
      format: "",
    },
    name: {
      name: "name",
      baseName: "name",
      type: "string",
      required: false,
      format: "",
    },
    title: {
      name: "title",
      baseName: "title",
      type: "string",
      required: false,
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return UserCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
