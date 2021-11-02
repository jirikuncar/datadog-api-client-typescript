/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DashboardList } from "./DashboardList";

export class DashboardListListResponse {
  /**
   * List of all your dashboard lists.
   */
  "dashboardLists"?: Array<DashboardList>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: {
      name: string;
      baseName: string;
      type: string;
      required: boolean;
      format?: string;
      enumValues?: any;
    };
  } = {
    dashboardLists: {
      name: "dashboardLists",
      baseName: "dashboard_lists",
      type: "Array<DashboardList>",
      required: false,
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return DashboardListListResponse.attributeTypeMap;
  }

  public constructor() {}
}
