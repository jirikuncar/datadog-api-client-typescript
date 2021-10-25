/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RelationshipToUser } from "./RelationshipToUser";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * The incident service's relationships.
 */

export class IncidentServiceRelationships {
  "createdBy"?: RelationshipToUser;
  "lastModifiedBy"?: RelationshipToUser;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    createdBy: {
      baseName: "created_by",
      type: "RelationshipToUser",
      format: "",
    },
    lastModifiedBy: {
      baseName: "last_modified_by",
      type: "RelationshipToUser",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return IncidentServiceRelationships.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): IncidentServiceRelationships {
    const res = new IncidentServiceRelationships();

    res.createdBy = ObjectSerializer.deserialize(
      data.created_by,
      "RelationshipToUser",
      ""
    );

    res.lastModifiedBy = ObjectSerializer.deserialize(
      data.last_modified_by,
      "RelationshipToUser",
      ""
    );

    return res;
  }

  static serialize(data: IncidentServiceRelationships): { [key: string]: any } {
    const attributeTypes = IncidentServiceRelationships.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.created_by = ObjectSerializer.serialize(
      data.createdBy,
      "RelationshipToUser",
      ""
    );

    res.last_modified_by = ObjectSerializer.serialize(
      data.lastModifiedBy,
      "RelationshipToUser",
      ""
    );

    return res;
  }

  public constructor() {}
}