/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FormulaAndFunctionMetricAggregation } from "./FormulaAndFunctionMetricAggregation";
import { FormulaAndFunctionProcessQueryDataSource } from "./FormulaAndFunctionProcessQueryDataSource";
import { QuerySortOrder } from "./QuerySortOrder";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Process query using formulas and functions.
 */

export class FormulaAndFunctionProcessQueryDefinition {
  "aggregator"?: FormulaAndFunctionMetricAggregation;
  "dataSource": FormulaAndFunctionProcessQueryDataSource;
  /**
   * Whether to normalize the CPU percentages.
   */
  "isNormalizedCpu"?: boolean;
  /**
   * Number of hits to return.
   */
  "limit"?: number;
  /**
   * Process metric name.
   */
  "metric": string;
  /**
   * Name of query for use in formulas.
   */
  "name": string;
  "sort"?: QuerySortOrder;
  /**
   * An array of tags to filter by.
   */
  "tagFilters"?: Array<string>;
  /**
   * Text to use as filter.
   */
  "textFilter"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggregator: {
      baseName: "aggregator",
      type: "FormulaAndFunctionMetricAggregation",
    },
    dataSource: {
      baseName: "data_source",
      type: "FormulaAndFunctionProcessQueryDataSource",
      required: true,
    },
    isNormalizedCpu: {
      baseName: "is_normalized_cpu",
      type: "boolean",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int64",
    },
    metric: {
      baseName: "metric",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    sort: {
      baseName: "sort",
      type: "QuerySortOrder",
    },
    tagFilters: {
      baseName: "tag_filters",
      type: "Array<string>",
    },
    textFilter: {
      baseName: "text_filter",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaAndFunctionProcessQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
