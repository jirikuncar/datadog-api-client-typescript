/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ServiceSummaryWidgetDefinitionType } from "./ServiceSummaryWidgetDefinitionType";
import { WidgetServiceSummaryDisplayFormat } from "./WidgetServiceSummaryDisplayFormat";
import { WidgetSizeFormat } from "./WidgetSizeFormat";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * The service summary displays the graphs of a chosen service in your screenboard. Only available on FREE layout dashboards.
 */

export class ServiceSummaryWidgetDefinition {
  "displayFormat"?: WidgetServiceSummaryDisplayFormat;
  /**
   * APM environment.
   */
  "env": string;
  /**
   * APM service.
   */
  "service": string;
  /**
   * Whether to show the latency breakdown or not.
   */
  "showBreakdown"?: boolean;
  /**
   * Whether to show the latency distribution or not.
   */
  "showDistribution"?: boolean;
  /**
   * Whether to show the error metrics or not.
   */
  "showErrors"?: boolean;
  /**
   * Whether to show the hits metrics or not.
   */
  "showHits"?: boolean;
  /**
   * Whether to show the latency metrics or not.
   */
  "showLatency"?: boolean;
  /**
   * Whether to show the resource list or not.
   */
  "showResourceList"?: boolean;
  "sizeFormat"?: WidgetSizeFormat;
  /**
   * APM span name.
   */
  "spanName": string;
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
  "type": ServiceSummaryWidgetDefinitionType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    displayFormat: {
      baseName: "display_format",
      type: "WidgetServiceSummaryDisplayFormat",
    },
    env: {
      baseName: "env",
      type: "string",
      required: true,
    },
    service: {
      baseName: "service",
      type: "string",
      required: true,
    },
    showBreakdown: {
      baseName: "show_breakdown",
      type: "boolean",
    },
    showDistribution: {
      baseName: "show_distribution",
      type: "boolean",
    },
    showErrors: {
      baseName: "show_errors",
      type: "boolean",
    },
    showHits: {
      baseName: "show_hits",
      type: "boolean",
    },
    showLatency: {
      baseName: "show_latency",
      type: "boolean",
    },
    showResourceList: {
      baseName: "show_resource_list",
      type: "boolean",
    },
    sizeFormat: {
      baseName: "size_format",
      type: "WidgetSizeFormat",
    },
    spanName: {
      baseName: "span_name",
      type: "string",
      required: true,
    },
    time: {
      baseName: "time",
      type: "WidgetTime",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    titleAlign: {
      baseName: "title_align",
      type: "WidgetTextAlign",
    },
    titleSize: {
      baseName: "title_size",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ServiceSummaryWidgetDefinitionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ServiceSummaryWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
