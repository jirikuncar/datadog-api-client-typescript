/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Creator } from "./Creator";

export class DashboardList {
  "author"?: Creator;
  /**
   * Date of creation of the dashboard list.
   */
  "created"?: Date;
  /**
   * The number of dashboards in the list.
   */
  "dashboardCount"?: number;
  /**
   * The ID of the dashboard list.
   */
  "id"?: number;
  /**
   * Whether or not the list is in the favorites.
   */
  "isFavorite"?: boolean;
  /**
   * Date of last edition of the dashboard list.
   */
  "modified"?: Date;
  /**
   * The name of the dashboard list.
   */
  "name": string;
  /**
   * The type of dashboard list.
   */
  "type"?: string;

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
    author: {
      name: "author",
      baseName: "author",
      type: "Creator",
      required: false,
    },
    created: {
      name: "created",
      baseName: "created",
      type: "Date",
      required: false,
      format: "date-time",
    },
    dashboardCount: {
      name: "dashboardCount",
      baseName: "dashboard_count",
      type: "number",
      required: false,
      format: "int64",
    },
    id: {
      name: "id",
      baseName: "id",
      type: "number",
      required: false,
      format: "int64",
    },
    isFavorite: {
      name: "isFavorite",
      baseName: "is_favorite",
      type: "boolean",
      required: false,
    },
    modified: {
      name: "modified",
      baseName: "modified",
      type: "Date",
      required: false,
      format: "date-time",
    },
    name: {
      name: "name",
      baseName: "name",
      type: "string",
      required: true,
    },
    type: {
      name: "type",
      baseName: "type",
      type: "string",
      required: false,
    },
  };

  static getAttributeTypeMap() {
    return DashboardList.attributeTypeMap;
  }

  public constructor() {}
}
