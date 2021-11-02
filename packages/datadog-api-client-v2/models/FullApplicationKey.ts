/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApplicationKeyRelationships } from "./ApplicationKeyRelationships";
import { ApplicationKeysType } from "./ApplicationKeysType";
import { FullApplicationKeyAttributes } from "./FullApplicationKeyAttributes";

export class FullApplicationKey {
  "attributes"?: FullApplicationKeyAttributes;
  /**
   * ID of the application key.
   */
  "id"?: string;
  "relationships"?: ApplicationKeyRelationships;
  "type"?: ApplicationKeysType;

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
    attributes: {
      name: "attributes",
      baseName: "attributes",
      type: "FullApplicationKeyAttributes",
      required: false,
      format: "",
    },
    id: {
      name: "id",
      baseName: "id",
      type: "string",
      required: false,
      format: "",
    },
    relationships: {
      name: "relationships",
      baseName: "relationships",
      type: "ApplicationKeyRelationships",
      required: false,
      format: "",
    },
    type: {
      name: "type",
      baseName: "type",
      type: "ApplicationKeysType",
      required: false,
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return FullApplicationKey.attributeTypeMap;
  }

  public constructor() {}
}
