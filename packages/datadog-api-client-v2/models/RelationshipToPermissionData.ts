/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PermissionsType } from "./PermissionsType";

export class RelationshipToPermissionData {
  /**
   * ID of the permission.
   */
  "id"?: string;
  "type"?: PermissionsType;

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
    id: {
      name: "id",
      baseName: "id",
      type: "string",
      required: false,
    },
    type: {
      name: "type",
      baseName: "type",
      type: "PermissionsType",
      required: false,
    },
  };

  static getAttributeTypeMap() {
    return RelationshipToPermissionData.attributeTypeMap;
  }

  public constructor() {}
}
