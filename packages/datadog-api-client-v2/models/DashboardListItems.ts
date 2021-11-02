/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DashboardListItem } from "./DashboardListItem";

export class DashboardListItems {
  /**
   * List of dashboards in the dashboard list.
   */
  "dashboards": Array<DashboardListItem>;
  /**
   * Number of dashboards in the dashboard list.
   */
  "total"?: number;

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
    dashboards: {
      name: "dashboards",
      baseName: "dashboards",
      type: "Array<DashboardListItem>",
      required: true,
    },
    total: {
      name: "total",
      baseName: "total",
      type: "number",
      required: false,
      format: "int64",
    },
  };

  static getAttributeTypeMap() {
    return DashboardListItems.attributeTypeMap;
  }

  public constructor() {}
}
