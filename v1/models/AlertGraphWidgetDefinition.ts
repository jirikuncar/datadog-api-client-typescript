/**
 * Datadog API V1 Collection
 * Collection of all Datadog Public endpoints.
 *
 * OpenAPI spec version: 1.0
 * Contact: support@datadoghq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AlertGraphWidgetDefinitionType } from "./AlertGraphWidgetDefinitionType";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";
import { WidgetVizType } from "./WidgetVizType";
import { HttpFile } from "../http/http";

/**
 * Alert graphs are timeseries graphs showing the current status of any monitor defined on your system.
 */
export class AlertGraphWidgetDefinition {
  /**
   * ID of the alert to use in the widget.
   */
  "alertId": string;
  "time"?: WidgetTime;
  /**
   * The title of the widget.
   */
  "title"?: string;
  "titleAlign"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "titleSize"?: string;
  "type": AlertGraphWidgetDefinitionType;
  "vizType": WidgetVizType;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "alertId",
      baseName: "alert_id",
      type: "string",
      format: "",
    },
    {
      name: "time",
      baseName: "time",
      type: "WidgetTime",
      format: "",
    },
    {
      name: "title",
      baseName: "title",
      type: "string",
      format: "",
    },
    {
      name: "titleAlign",
      baseName: "title_align",
      type: "WidgetTextAlign",
      format: "",
    },
    {
      name: "titleSize",
      baseName: "title_size",
      type: "string",
      format: "",
    },
    {
      name: "type",
      baseName: "type",
      type: "AlertGraphWidgetDefinitionType",
      format: "",
    },
    {
      name: "vizType",
      baseName: "viz_type",
      type: "WidgetVizType",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return AlertGraphWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
