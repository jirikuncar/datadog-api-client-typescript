/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Permission } from "./Permission";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Payload with API-returned permissions.
 */

export class PermissionsResponse {
  /**
   * Array of permissions.
   */
  "data"?: Array<Permission>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    data: {
      baseName: "data",
      type: "Array<Permission>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return PermissionsResponse.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): PermissionsResponse {
    const res = new PermissionsResponse();

    res.data = ObjectSerializer.deserialize(data.data, "Array<Permission>", "");

    return res;
  }

  static serialize(data: PermissionsResponse): { [key: string]: any } {
    const attributeTypes = PermissionsResponse.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.data = ObjectSerializer.serialize(data.data, "Array<Permission>", "");

    return res;
  }

  public constructor() {}
}