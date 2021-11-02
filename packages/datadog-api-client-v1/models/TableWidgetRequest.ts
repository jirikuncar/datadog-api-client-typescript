/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApmStatsQueryDefinition } from "./ApmStatsQueryDefinition";
import { FormulaAndFunctionQueryDefinition } from "./FormulaAndFunctionQueryDefinition";
import { FormulaAndFunctionResponseFormat } from "./FormulaAndFunctionResponseFormat";
import { LogQueryDefinition } from "./LogQueryDefinition";
import { ProcessQueryDefinition } from "./ProcessQueryDefinition";
import { TableWidgetCellDisplayMode } from "./TableWidgetCellDisplayMode";
import { WidgetAggregator } from "./WidgetAggregator";
import { WidgetConditionalFormat } from "./WidgetConditionalFormat";
import { WidgetFormula } from "./WidgetFormula";
import { WidgetSort } from "./WidgetSort";

export class TableWidgetRequest {
  "aggregator"?: WidgetAggregator;
  /**
   * The column name (defaults to the metric name).
   */
  "alias"?: string;
  "apmQuery"?: LogQueryDefinition;
  "apmStatsQuery"?: ApmStatsQueryDefinition;
  /**
   * A list of display modes for each table cell.
   */
  "cellDisplayMode"?: Array<TableWidgetCellDisplayMode>;
  /**
   * List of conditional formats.
   */
  "conditionalFormats"?: Array<WidgetConditionalFormat>;
  "eventQuery"?: LogQueryDefinition;
  /**
   * List of formulas that operate on queries. **This feature is currently in beta.**
   */
  "formulas"?: Array<WidgetFormula>;
  /**
   * For metric queries, the number of lines to show in the table. Only one request should have this property.
   */
  "limit"?: number;
  "logQuery"?: LogQueryDefinition;
  "networkQuery"?: LogQueryDefinition;
  "order"?: WidgetSort;
  "processQuery"?: ProcessQueryDefinition;
  "profileMetricsQuery"?: LogQueryDefinition;
  /**
   * Query definition.
   */
  "q"?: string;
  /**
   * List of queries that can be returned directly or used in formulas. **This feature is currently in beta.**
   */
  "queries"?: Array<FormulaAndFunctionQueryDefinition>;
  "responseFormat"?: FormulaAndFunctionResponseFormat;
  "rumQuery"?: LogQueryDefinition;
  "securityQuery"?: LogQueryDefinition;

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
    aggregator: {
      name: "aggregator",
      baseName: "aggregator",
      type: "WidgetAggregator",
      required: false,
    },
    alias: {
      name: "alias",
      baseName: "alias",
      type: "string",
      required: false,
    },
    apmQuery: {
      name: "apmQuery",
      baseName: "apm_query",
      type: "LogQueryDefinition",
      required: false,
    },
    apmStatsQuery: {
      name: "apmStatsQuery",
      baseName: "apm_stats_query",
      type: "ApmStatsQueryDefinition",
      required: false,
    },
    cellDisplayMode: {
      name: "cellDisplayMode",
      baseName: "cell_display_mode",
      type: "Array<TableWidgetCellDisplayMode>",
      required: false,
    },
    conditionalFormats: {
      name: "conditionalFormats",
      baseName: "conditional_formats",
      type: "Array<WidgetConditionalFormat>",
      required: false,
    },
    eventQuery: {
      name: "eventQuery",
      baseName: "event_query",
      type: "LogQueryDefinition",
      required: false,
    },
    formulas: {
      name: "formulas",
      baseName: "formulas",
      type: "Array<WidgetFormula>",
      required: false,
    },
    limit: {
      name: "limit",
      baseName: "limit",
      type: "number",
      required: false,
      format: "int64",
    },
    logQuery: {
      name: "logQuery",
      baseName: "log_query",
      type: "LogQueryDefinition",
      required: false,
    },
    networkQuery: {
      name: "networkQuery",
      baseName: "network_query",
      type: "LogQueryDefinition",
      required: false,
    },
    order: {
      name: "order",
      baseName: "order",
      type: "WidgetSort",
      required: false,
    },
    processQuery: {
      name: "processQuery",
      baseName: "process_query",
      type: "ProcessQueryDefinition",
      required: false,
    },
    profileMetricsQuery: {
      name: "profileMetricsQuery",
      baseName: "profile_metrics_query",
      type: "LogQueryDefinition",
      required: false,
    },
    q: {
      name: "q",
      baseName: "q",
      type: "string",
      required: false,
    },
    queries: {
      name: "queries",
      baseName: "queries",
      type: "Array<FormulaAndFunctionQueryDefinition>",
      required: false,
    },
    responseFormat: {
      name: "responseFormat",
      baseName: "response_format",
      type: "FormulaAndFunctionResponseFormat",
      required: false,
    },
    rumQuery: {
      name: "rumQuery",
      baseName: "rum_query",
      type: "LogQueryDefinition",
      required: false,
    },
    securityQuery: {
      name: "securityQuery",
      baseName: "security_query",
      type: "LogQueryDefinition",
      required: false,
    },
  };

  static getAttributeTypeMap() {
    return TableWidgetRequest.attributeTypeMap;
  }

  public constructor() {}
}
