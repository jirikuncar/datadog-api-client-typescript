/**
 * Datadog API V2 Collection
 * Collection of all Datadog Public endpoints.
 *
 * OpenAPI spec version: 1.0
 * Contact: support@datadoghq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DashboardListItemResponse } from "./DashboardListItemResponse";
import { HttpFile } from "../http/http";

/**
 * Response containing a list of deleted dashboards.
 */
export class DashboardListDeleteItemsResponse {
  /**
   * List of dashboards deleted from the dashboard list.
   */
  "deletedDashboardsFromList"?: Array<DashboardListItemResponse>;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "deletedDashboardsFromList",
      baseName: "deleted_dashboards_from_list",
      type: "Array<DashboardListItemResponse>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return DashboardListDeleteItemsResponse.attributeTypeMap;
  }

  public constructor() {}
}
