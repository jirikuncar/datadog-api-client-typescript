/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DistributionWidgetDefinitionType } from "./DistributionWidgetDefinitionType";
import { DistributionWidgetRequest } from "./DistributionWidgetRequest";
import { DistributionWidgetXAxis } from "./DistributionWidgetXAxis";
import { DistributionWidgetYAxis } from "./DistributionWidgetYAxis";
import { WidgetMarker } from "./WidgetMarker";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

export class DistributionWidgetDefinition {
  /**
   * (Deprecated) The widget legend was replaced by a tooltip and sidebar.
   */
  "legendSize"?: string;
  /**
   * List of markers.
   */
  "markers"?: Array<WidgetMarker>;
  /**
   * Array of one request object to display in the widget.  See the dedicated [Request JSON schema documentation](https://docs.datadoghq.com/dashboards/graphing_json/request_json)  to learn how to build the `REQUEST_SCHEMA`.
   */
  "requests": Array<DistributionWidgetRequest>;
  /**
   * (Deprecated) The widget legend was replaced by a tooltip and sidebar.
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
  "type": DistributionWidgetDefinitionType;
  "xaxis"?: DistributionWidgetXAxis;
  "yaxis"?: DistributionWidgetYAxis;

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
    legendSize: {
      name: "legendSize",
      baseName: "legend_size",
      type: "string",
      required: false,
    },
    markers: {
      name: "markers",
      baseName: "markers",
      type: "Array<WidgetMarker>",
      required: false,
    },
    requests: {
      name: "requests",
      baseName: "requests",
      type: "Array<DistributionWidgetRequest>",
      required: true,
    },
    showLegend: {
      name: "showLegend",
      baseName: "show_legend",
      type: "boolean",
      required: false,
    },
    time: {
      name: "time",
      baseName: "time",
      type: "WidgetTime",
      required: false,
    },
    title: {
      name: "title",
      baseName: "title",
      type: "string",
      required: false,
    },
    titleAlign: {
      name: "titleAlign",
      baseName: "title_align",
      type: "WidgetTextAlign",
      required: false,
    },
    titleSize: {
      name: "titleSize",
      baseName: "title_size",
      type: "string",
      required: false,
    },
    type: {
      name: "type",
      baseName: "type",
      type: "DistributionWidgetDefinitionType",
      required: true,
    },
    xaxis: {
      name: "xaxis",
      baseName: "xaxis",
      type: "DistributionWidgetXAxis",
      required: false,
    },
    yaxis: {
      name: "yaxis",
      baseName: "yaxis",
      type: "DistributionWidgetYAxis",
      required: false,
    },
  };

  static getAttributeTypeMap() {
    return DistributionWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
