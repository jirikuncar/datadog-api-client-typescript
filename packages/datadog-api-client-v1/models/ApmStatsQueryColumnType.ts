/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TableWidgetCellDisplayMode } from "./TableWidgetCellDisplayMode";
import { WidgetSort } from "./WidgetSort";

export class ApmStatsQueryColumnType {
  /**
   * A user-assigned alias for the column.
   */
  "alias"?: string;
  "cellDisplayMode"?: TableWidgetCellDisplayMode;
  /**
   * Column name.
   */
  "name": string;
  "order"?: WidgetSort;

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
    alias: {
      name: "alias",
      baseName: "alias",
      type: "string",
      required: false,
      format: "",
    },
    cellDisplayMode: {
      name: "cellDisplayMode",
      baseName: "cell_display_mode",
      type: "TableWidgetCellDisplayMode",
      required: false,
      format: "",
    },
    name: {
      name: "name",
      baseName: "name",
      type: "string",
      required: true,
      format: "",
    },
    order: {
      name: "order",
      baseName: "order",
      type: "WidgetSort",
      required: false,
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return ApmStatsQueryColumnType.attributeTypeMap;
  }

  public constructor() {}
}
