/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsLocation } from "./SyntheticsLocation";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * List of Synthetics locations.
 */

export class SyntheticsLocations {
  /**
   * List of Synthetics locations.
   */
  "locations"?: Array<SyntheticsLocation>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    locations: {
      baseName: "locations",
      type: "Array<SyntheticsLocation>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsLocations.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): SyntheticsLocations {
    const res = new SyntheticsLocations();

    res.locations = ObjectSerializer.deserialize(
      data.locations,
      "Array<SyntheticsLocation>",
      ""
    );

    return res;
  }

  static serialize(data: SyntheticsLocations): { [key: string]: any } {
    const attributeTypes = SyntheticsLocations.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.locations = ObjectSerializer.serialize(
      data.locations,
      "Array<SyntheticsLocation>",
      ""
    );

    return res;
  }

  public constructor() {}
}