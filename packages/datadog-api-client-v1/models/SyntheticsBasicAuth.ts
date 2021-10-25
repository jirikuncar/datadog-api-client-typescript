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
 * Object to handle basic authentication when performing the test.
 */

export class SyntheticsBasicAuth {
  /**
   * Password to use for the basic authentication.
   */
  "password": string;
  /**
   * Username to use for the basic authentication.
   */
  "username": string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    password: {
      baseName: "password",
      type: "string",
      format: "",
    },
    username: {
      baseName: "username",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsBasicAuth.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): SyntheticsBasicAuth {
    const res = new SyntheticsBasicAuth();

    if (data.password === undefined) {
      throw new TypeError(
        "missing required attribute 'password' on 'SyntheticsBasicAuth' object"
      );
    }
    res.password = ObjectSerializer.deserialize(data.password, "string", "");

    if (data.username === undefined) {
      throw new TypeError(
        "missing required attribute 'username' on 'SyntheticsBasicAuth' object"
      );
    }
    res.username = ObjectSerializer.deserialize(data.username, "string", "");

    return res;
  }

  static serialize(data: SyntheticsBasicAuth): { [key: string]: any } {
    const attributeTypes = SyntheticsBasicAuth.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.password === undefined) {
      throw new TypeError(
        "missing required attribute 'password' on 'SyntheticsBasicAuth' object"
      );
    }
    res.password = ObjectSerializer.serialize(data.password, "string", "");

    if (data.username === undefined) {
      throw new TypeError(
        "missing required attribute 'username' on 'SyntheticsBasicAuth' object"
      );
    }
    res.username = ObjectSerializer.serialize(data.username, "string", "");

    return res;
  }

  public constructor() {}
}