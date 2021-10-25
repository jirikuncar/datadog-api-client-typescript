/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DashboardBulkActionData } from "./DashboardBulkActionData";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Dashboard restore request body.
 */

export class DashboardRestoreRequest {
  /**
   * List of dashboard bulk action request data objects.
   */
  "data": Array<DashboardBulkActionData>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    data: {
      baseName: "data",
      type: "Array<DashboardBulkActionData>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return DashboardRestoreRequest.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): DashboardRestoreRequest {
    const res = new DashboardRestoreRequest();

    if (data.data === undefined) {
      throw new TypeError(
        "missing required attribute 'data' on 'DashboardRestoreRequest' object"
      );
    }
    res.data = ObjectSerializer.deserialize(
      data.data,
      "Array<DashboardBulkActionData>",
      ""
    );

    return res;
  }

  static serialize(data: DashboardRestoreRequest): { [key: string]: any } {
    const attributeTypes = DashboardRestoreRequest.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.data === undefined) {
      throw new TypeError(
        "missing required attribute 'data' on 'DashboardRestoreRequest' object"
      );
    }
    res.data = ObjectSerializer.serialize(
      data.data,
      "Array<DashboardBulkActionData>",
      ""
    );

    return res;
  }

  public constructor() {}
}