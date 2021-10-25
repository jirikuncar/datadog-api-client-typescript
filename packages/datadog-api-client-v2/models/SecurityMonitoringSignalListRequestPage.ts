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
 * The paging attributes for listing security signals.
 */

export class SecurityMonitoringSignalListRequestPage {
  /**
   * A list of results using the cursor provided in the previous query.
   */
  "cursor"?: string;
  /**
   * The maximum number of security signals in the response.
   */
  "limit"?: number;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    cursor: {
      baseName: "cursor",
      type: "string",
      format: "",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int32",
    },
  };

  static getAttributeTypeMap() {
    return SecurityMonitoringSignalListRequestPage.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): SecurityMonitoringSignalListRequestPage {
    const res = new SecurityMonitoringSignalListRequestPage();

    res.cursor = ObjectSerializer.deserialize(data.cursor, "string", "");

    res.limit = ObjectSerializer.deserialize(data.limit, "number", "int32");

    return res;
  }

  static serialize(data: SecurityMonitoringSignalListRequestPage): {
    [key: string]: any;
  } {
    const attributeTypes =
      SecurityMonitoringSignalListRequestPage.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.cursor = ObjectSerializer.serialize(data.cursor, "string", "");

    res.limit = ObjectSerializer.serialize(data.limit, "number", "int32");

    return res;
  }

  public constructor() {}
}