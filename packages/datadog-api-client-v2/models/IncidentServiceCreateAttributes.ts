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
 * The incident service's attributes for a create request.
 */

export class IncidentServiceCreateAttributes {
  /**
   * Name of the incident service.
   */
  "name": string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    name: {
      baseName: "name",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return IncidentServiceCreateAttributes.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): IncidentServiceCreateAttributes {
    const res = new IncidentServiceCreateAttributes();

    if (data.name === undefined) {
      throw new TypeError(
        "missing required attribute 'name' on 'IncidentServiceCreateAttributes' object"
      );
    }
    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    return res;
  }

  static serialize(data: IncidentServiceCreateAttributes): {
    [key: string]: any;
  } {
    const attributeTypes =
      IncidentServiceCreateAttributes.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.name === undefined) {
      throw new TypeError(
        "missing required attribute 'name' on 'IncidentServiceCreateAttributes' object"
      );
    }
    res.name = ObjectSerializer.serialize(data.name, "string", "");

    return res;
  }

  public constructor() {}
}