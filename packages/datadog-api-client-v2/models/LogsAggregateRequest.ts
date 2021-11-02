/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsAggregateRequestPage } from "./LogsAggregateRequestPage";
import { LogsCompute } from "./LogsCompute";
import { LogsGroupBy } from "./LogsGroupBy";
import { LogsQueryFilter } from "./LogsQueryFilter";
import { LogsQueryOptions } from "./LogsQueryOptions";

export class LogsAggregateRequest {
  /**
   * The list of metrics or timeseries to compute for the retrieved buckets.
   */
  "compute"?: Array<LogsCompute>;
  "filter"?: LogsQueryFilter;
  /**
   * The rules for the group by
   */
  "groupBy"?: Array<LogsGroupBy>;
  "options"?: LogsQueryOptions;
  "page"?: LogsAggregateRequestPage;

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
    compute: {
      name: "compute",
      baseName: "compute",
      type: "Array<LogsCompute>",
      required: false,
      format: "",
    },
    filter: {
      name: "filter",
      baseName: "filter",
      type: "LogsQueryFilter",
      required: false,
      format: "",
    },
    groupBy: {
      name: "groupBy",
      baseName: "group_by",
      type: "Array<LogsGroupBy>",
      required: false,
      format: "",
    },
    options: {
      name: "options",
      baseName: "options",
      type: "LogsQueryOptions",
      required: false,
      format: "",
    },
    page: {
      name: "page",
      baseName: "page",
      type: "LogsAggregateRequestPage",
      required: false,
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return LogsAggregateRequest.attributeTypeMap;
  }

  public constructor() {}
}
