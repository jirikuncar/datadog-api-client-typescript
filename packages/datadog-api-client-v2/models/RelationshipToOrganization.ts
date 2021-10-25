/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RelationshipToOrganizationData } from "./RelationshipToOrganizationData";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Relationship to an organization.
 */

export class RelationshipToOrganization {
  "data": RelationshipToOrganizationData;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    data: {
      baseName: "data",
      type: "RelationshipToOrganizationData",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return RelationshipToOrganization.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): RelationshipToOrganization {
    const res = new RelationshipToOrganization();

    if (data.data === undefined) {
      throw new TypeError(
        "missing required attribute 'data' on 'RelationshipToOrganization' object"
      );
    }
    res.data = ObjectSerializer.deserialize(
      data.data,
      "RelationshipToOrganizationData",
      ""
    );

    return res;
  }

  static serialize(data: RelationshipToOrganization): { [key: string]: any } {
    const attributeTypes = RelationshipToOrganization.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.data === undefined) {
      throw new TypeError(
        "missing required attribute 'data' on 'RelationshipToOrganization' object"
      );
    }
    res.data = ObjectSerializer.serialize(
      data.data,
      "RelationshipToOrganizationData",
      ""
    );

    return res;
  }

  public constructor() {}
}