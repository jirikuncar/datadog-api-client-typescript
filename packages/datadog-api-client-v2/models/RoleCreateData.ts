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
import { RoleRelationships } from "./RoleRelationships";
import { RolesType } from "./RolesType";

export class RoleCreateData {
  "attributes": RoleCreateAttributes;
  "relationships"?: RoleRelationships;
  "type"?: RolesType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: {
      name: string;
      baseName: string;
      type: string;
      required: boolean;
      format?: string;
    };
  } = {
    attributes: {
      name: "attributes",
      baseName: "attributes",
      type: "RoleCreateAttributes",
      required: true,
    },
    relationships: {
      name: "relationships",
      baseName: "relationships",
      type: "RoleRelationships",
      required: false,
    },
    type: {
      name: "type",
      baseName: "type",
      type: "RolesType",
      required: false,
    },
  };

  static getAttributeTypeMap() {
    return RoleCreateData.attributeTypeMap;
  }

  public constructor() {}
}
