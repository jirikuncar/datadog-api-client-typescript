/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Attributes of the created user.
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

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    email: {
      baseName: "email",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
    },
    title: {
      baseName: "title",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UserCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
