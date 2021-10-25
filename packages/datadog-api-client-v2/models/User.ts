/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UserAttributes } from "./UserAttributes";
import { UserResponseRelationships } from "./UserResponseRelationships";
import { UsersType } from "./UsersType";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * User object returned by the API.
 */

export class User {
  "attributes"?: UserAttributes;
  /**
   * ID of the user.
   */
  "id"?: string;
  "relationships"?: UserResponseRelationships;
  "type"?: UsersType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    attributes: {
      baseName: "attributes",
      type: "UserAttributes",
      format: "",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "",
    },
    relationships: {
      baseName: "relationships",
      type: "UserResponseRelationships",
      format: "",
    },
    type: {
      baseName: "type",
      type: "UsersType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return User.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): User {
    const res = new User();

    res.attributes = ObjectSerializer.deserialize(
      data.attributes,
      "UserAttributes",
      ""
    );

    res.id = ObjectSerializer.deserialize(data.id, "string", "");

    res.relationships = ObjectSerializer.deserialize(
      data.relationships,
      "UserResponseRelationships",
      ""
    );

    if (["users", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      const raw = new User();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: User): { [key: string]: any } {
    const attributeTypes = User.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.attributes = ObjectSerializer.serialize(
      data.attributes,
      "UserAttributes",
      ""
    );

    res.id = ObjectSerializer.serialize(data.id, "string", "");

    res.relationships = ObjectSerializer.serialize(
      data.relationships,
      "UserResponseRelationships",
      ""
    );

    if (["users", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}