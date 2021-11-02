/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RolesType } from "./RolesType";

export class RelationshipToRoleData {
  /**
   * ID of the role.
   */
  "id"?: string;
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
      enumValues?: any;
    };
  } = {
    id: {
      name: "id",
      baseName: "id",
      type: "string",
      required: false,
      format: "",
    },
    type: {
      name: "type",
      baseName: "type",
      type: "RolesType",
      required: false,
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return RelationshipToRoleData.attributeTypeMap;
  }

  public constructor() {}
}
