/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { User } from "./User";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Array of Datadog users for a given organization.
 */

export class UserListResponse {
  /**
   * Array of users.
   */
  "users"?: Array<User>;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    users: {
      baseName: "users",
      type: "Array<User>",
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return UserListResponse.attributeTypeMap;
  }

  public constructor() {}
}
