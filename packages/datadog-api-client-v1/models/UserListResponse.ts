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
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Array of Datadog users for a given organization.
 */

export class UserListResponse {
  /**
   * Array of users.
   */
  "users"?: Array<User>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    users: {
      baseName: "users",
      type: "Array<User>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return UserListResponse.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): UserListResponse {
    const res = new UserListResponse();

    res.users = ObjectSerializer.deserialize(data.users, "Array<User>", "");

    return res;
  }

  static serialize(data: UserListResponse): { [key: string]: any } {
    const attributeTypes = UserListResponse.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.users = ObjectSerializer.serialize(data.users, "Array<User>", "");

    return res;
  }

  public constructor() {}
}