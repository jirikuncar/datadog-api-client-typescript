/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CheckCanDeleteSLOResponseData } from "./CheckCanDeleteSLOResponseData";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * A service level objective response containing the requested object.
 */

export class CheckCanDeleteSLOResponse {
  "data"?: CheckCanDeleteSLOResponseData;
  /**
   * A mapping of SLO id to it's current usages.
   */
  "errors"?: { [key: string]: string };

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    data: {
      baseName: "data",
      type: "CheckCanDeleteSLOResponseData",
      format: "",
    },
    errors: {
      baseName: "errors",
      type: "{ [key: string]: string; }",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return CheckCanDeleteSLOResponse.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): CheckCanDeleteSLOResponse {
    const res = new CheckCanDeleteSLOResponse();

    res.data = ObjectSerializer.deserialize(
      data.data,
      "CheckCanDeleteSLOResponseData",
      ""
    );

    res.errors = ObjectSerializer.deserialize(
      data.errors,
      "{ [key: string]: string; }",
      ""
    );

    return res;
  }

  static serialize(data: CheckCanDeleteSLOResponse): { [key: string]: any } {
    const attributeTypes = CheckCanDeleteSLOResponse.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.data = ObjectSerializer.serialize(
      data.data,
      "CheckCanDeleteSLOResponseData",
      ""
    );

    res.errors = ObjectSerializer.serialize(
      data.errors,
      "{ [key: string]: string; }",
      ""
    );

    return res;
  }

  public constructor() {}
}