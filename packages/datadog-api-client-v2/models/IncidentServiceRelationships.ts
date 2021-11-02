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

export class IncidentServiceRelationships {
  "createdBy"?: RelationshipToUser;
  "lastModifiedBy"?: RelationshipToUser;

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
    createdBy: {
      name: "createdBy",
      baseName: "created_by",
      type: "RelationshipToUser",
      required: false,
      format: "",
    },
    lastModifiedBy: {
      name: "lastModifiedBy",
      baseName: "last_modified_by",
      type: "RelationshipToUser",
      required: false,
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return IncidentServiceRelationships.attributeTypeMap;
  }

  public constructor() {}
}
