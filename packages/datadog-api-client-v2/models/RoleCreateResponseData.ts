/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RoleCreateAttributes } from "./RoleCreateAttributes";
import { RoleResponseRelationships } from "./RoleResponseRelationships";
import { RolesType } from "./RolesType";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Role object returned by the API.
 */

export class RoleCreateResponseData {
  "attributes"?: RoleCreateAttributes;
  /**
   * ID of the role.
   */
  "id"?: string;
  "relationships"?: RoleResponseRelationships;
  "type": RolesType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    attributes: {
      baseName: "attributes",
      type: "RoleCreateAttributes",
      format: "",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "",
    },
    relationships: {
      baseName: "relationships",
      type: "RoleResponseRelationships",
      format: "",
    },
    type: {
      baseName: "type",
      type: "RolesType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return RoleCreateResponseData.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): RoleCreateResponseData {
    const res = new RoleCreateResponseData();

    res.attributes = ObjectSerializer.deserialize(
      data.attributes,
      "RoleCreateAttributes",
      ""
    );

    res.id = ObjectSerializer.deserialize(data.id, "string", "");

    res.relationships = ObjectSerializer.deserialize(
      data.relationships,
      "RoleResponseRelationships",
      ""
    );

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'RoleCreateResponseData' object"
      );
    }
    if (["roles", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      const raw = new RoleCreateResponseData();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: RoleCreateResponseData): { [key: string]: any } {
    const attributeTypes = RoleCreateResponseData.getAttributeTypeMap();
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
      "RoleCreateAttributes",
      ""
    );

    res.id = ObjectSerializer.serialize(data.id, "string", "");

    res.relationships = ObjectSerializer.serialize(
      data.relationships,
      "RoleResponseRelationships",
      ""
    );

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'RoleCreateResponseData' object"
      );
    }
    if (["roles", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}