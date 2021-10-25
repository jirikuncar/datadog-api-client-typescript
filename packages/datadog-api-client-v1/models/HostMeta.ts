/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Metadata associated with your host.
 */

export class HostMeta {
  /**
   * Array of Unix versions.
   */
  "nixV"?: Array<string>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    nixV: {
      baseName: "nixV",
      type: "Array<string>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return HostMeta.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): HostMeta {
    const res = new HostMeta();

    res.nixV = ObjectSerializer.deserialize(data.nixV, "Array<string>", "");

    return res;
  }

  static serialize(data: HostMeta): { [key: string]: any } {
    const attributeTypes = HostMeta.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.nixV = ObjectSerializer.serialize(data.nixV, "Array<string>", "");

    return res;
  }

  public constructor() {}
}