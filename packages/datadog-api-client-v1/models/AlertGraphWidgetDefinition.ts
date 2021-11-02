/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AlertGraphWidgetDefinitionType } from "./AlertGraphWidgetDefinitionType";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";
import { WidgetVizType } from "./WidgetVizType";

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
    alertId: {
      name: "alertId",
      baseName: "alert_id",
      type: "string",
      required: true,
      format: "",
    },
    time: {
      name: "time",
      baseName: "time",
      type: "WidgetTime",
      required: false,
      format: "",
    },
    title: {
      name: "title",
      baseName: "title",
      type: "string",
      required: false,
      format: "",
    },
    titleAlign: {
      name: "titleAlign",
      baseName: "title_align",
      type: "WidgetTextAlign",
      required: false,
      format: "",
    },
    titleSize: {
      name: "titleSize",
      baseName: "title_size",
      type: "string",
      required: false,
      format: "",
    },
    type: {
      name: "type",
      baseName: "type",
      type: "AlertGraphWidgetDefinitionType",
      required: true,
      format: "",
    },
    vizType: {
      name: "vizType",
      baseName: "viz_type",
      type: "WidgetVizType",
      required: true,
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return AlertGraphWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
