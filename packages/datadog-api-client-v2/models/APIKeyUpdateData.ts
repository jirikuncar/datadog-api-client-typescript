/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { APIKeyUpdateAttributes } from "./APIKeyUpdateAttributes";
import { APIKeysType } from "./APIKeysType";

export class APIKeyUpdateData {
  "attributes": APIKeyUpdateAttributes;
  /**
   * ID of the API key.
   */
  "id": string;
  "type": APIKeysType;

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
      type: "APIKeyUpdateAttributes",
      required: true,
    },
    id: {
      name: "id",
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      name: "type",
      baseName: "type",
      type: "APIKeysType",
      required: true,
    },
  };

  static getAttributeTypeMap() {
    return APIKeyUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
