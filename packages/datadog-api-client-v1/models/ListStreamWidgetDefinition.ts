/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ListStreamWidgetDefinitionType } from "./ListStreamWidgetDefinitionType";
import { ListStreamWidgetRequest } from "./ListStreamWidgetRequest";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

export class ListStreamWidgetDefinition {
  /**
   * Available legend sizes for a widget. Should be one of \"0\", \"2\", \"4\", \"8\", \"16\", or \"auto\".
   */
  "legendSize"?: string;
  /**
   * Request payload used to query items.
   */
  "requests": Array<ListStreamWidgetRequest>;
  /**
   * Whether or not to display the legend on this widget.
   */
  "showLegend"?: boolean;
  "time"?: WidgetTime;
  /**
   * Title of the widget.
   */
  "title"?: string;
  "titleAlign"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "titleSize"?: string;
  "type": ListStreamWidgetDefinitionType;

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
    legendSize: {
      name: "legendSize",
      baseName: "legend_size",
      type: "string",
      required: false,
      format: "",
    },
    requests: {
      name: "requests",
      baseName: "requests",
      type: "Array<ListStreamWidgetRequest>",
      required: true,
      format: "",
    },
    showLegend: {
      name: "showLegend",
      baseName: "show_legend",
      type: "boolean",
      required: false,
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
      type: "ListStreamWidgetDefinitionType",
      required: true,
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return ListStreamWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
