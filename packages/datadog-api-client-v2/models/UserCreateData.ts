/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UserCreateAttributes } from "./UserCreateAttributes";
import { UserRelationships } from "./UserRelationships";
import { UsersType } from "./UsersType";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Object to create a user.
 */

export class UserCreateData {
  "attributes": UserCreateAttributes;
  "relationships"?: UserRelationships;
  "type": UsersType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    attributes: {
      baseName: "attributes",
      type: "UserCreateAttributes",
      format: "",
    },
    relationships: {
      baseName: "relationships",
      type: "UserRelationships",
      format: "",
    },
    type: {
      baseName: "type",
      type: "UsersType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return UserCreateData.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): UserCreateData {
    const res = new UserCreateData();

    if (data.attributes === undefined) {
      throw new TypeError(
        "missing required attribute 'attributes' on 'UserCreateData' object"
      );
    }
    res.attributes = ObjectSerializer.deserialize(
      data.attributes,
      "UserCreateAttributes",
      ""
    );

    res.relationships = ObjectSerializer.deserialize(
      data.relationships,
      "UserRelationships",
      ""
    );

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'UserCreateData' object"
      );
    }
    if (["users", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      const raw = new UserCreateData();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: UserCreateData): { [key: string]: any } {
    const attributeTypes = UserCreateData.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.attributes === undefined) {
      throw new TypeError(
        "missing required attribute 'attributes' on 'UserCreateData' object"
      );
    }
    res.attributes = ObjectSerializer.serialize(
      data.attributes,
      "UserCreateAttributes",
      ""
    );

    res.relationships = ObjectSerializer.serialize(
      data.relationships,
      "UserRelationships",
      ""
    );

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'UserCreateData' object"
      );
    }
    if (["users", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}