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
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * The object sent with the request to retrieve a list of logs from your organization.
 */

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
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    compute: {
      baseName: "compute",
      type: "Array<LogsCompute>",
      format: "",
    },
    filter: {
      baseName: "filter",
      type: "LogsQueryFilter",
      format: "",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<LogsGroupBy>",
      format: "",
    },
    options: {
      baseName: "options",
      type: "LogsQueryOptions",
      format: "",
    },
    page: {
      baseName: "page",
      type: "LogsAggregateRequestPage",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return LogsAggregateRequest.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): LogsAggregateRequest {
    const res = new LogsAggregateRequest();

    res.compute = ObjectSerializer.deserialize(
      data.compute,
      "Array<LogsCompute>",
      ""
    );

    res.filter = ObjectSerializer.deserialize(
      data.filter,
      "LogsQueryFilter",
      ""
    );

    res.groupBy = ObjectSerializer.deserialize(
      data.group_by,
      "Array<LogsGroupBy>",
      ""
    );

    res.options = ObjectSerializer.deserialize(
      data.options,
      "LogsQueryOptions",
      ""
    );

    res.page = ObjectSerializer.deserialize(
      data.page,
      "LogsAggregateRequestPage",
      ""
    );

    return res;
  }

  static serialize(data: LogsAggregateRequest): { [key: string]: any } {
    const attributeTypes = LogsAggregateRequest.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.compute = ObjectSerializer.serialize(
      data.compute,
      "Array<LogsCompute>",
      ""
    );

    res.filter = ObjectSerializer.serialize(data.filter, "LogsQueryFilter", "");

    res.group_by = ObjectSerializer.serialize(
      data.groupBy,
      "Array<LogsGroupBy>",
      ""
    );

    res.options = ObjectSerializer.serialize(
      data.options,
      "LogsQueryOptions",
      ""
    );

    res.page = ObjectSerializer.serialize(
      data.page,
      "LogsAggregateRequestPage",
      ""
    );

    return res;
  }

  public constructor() {}
}