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

import { LogQueryDefinitionGroupBy } from "./LogQueryDefinitionGroupBy";
import { LogQueryDefinitionSearch } from "./LogQueryDefinitionSearch";
import { LogsQueryCompute } from "./LogsQueryCompute";
import { HttpFile } from "../http/http";

/**
 * The log query.
 */
export class LogQueryDefinition {
  "compute"?: LogsQueryCompute;
  /**
   * List of tag prefixes to group by in the case of a cluster check.
   */
  "groupBy"?: Array<LogQueryDefinitionGroupBy>;
  /**
   * A coma separated-list of index names. Use \"*\" query all indexes at once. [Multiple Indexes](https://docs.datadoghq.com/logs/indexes/#multiple-indexes)
   */
  "index"?: string;
  /**
   * This field is mutually exclusive with `compute`.
   */
  "multiCompute"?: Array<LogsQueryCompute>;
  "search"?: LogQueryDefinitionSearch;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "compute",
      baseName: "compute",
      type: "LogsQueryCompute",
      format: "",
    },
    {
      name: "groupBy",
      baseName: "group_by",
      type: "Array<LogQueryDefinitionGroupBy>",
      format: "",
    },
    {
      name: "index",
      baseName: "index",
      type: "string",
      format: "",
    },
    {
      name: "multiCompute",
      baseName: "multi_compute",
      type: "Array<LogsQueryCompute>",
      format: "",
    },
    {
      name: "search",
      baseName: "search",
      type: "LogQueryDefinitionSearch",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return LogQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
