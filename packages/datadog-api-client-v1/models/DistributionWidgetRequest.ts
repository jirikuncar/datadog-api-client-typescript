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
import { LogQueryDefinition } from "./LogQueryDefinition";
import { ProcessQueryDefinition } from "./ProcessQueryDefinition";
import { WidgetStyle } from "./WidgetStyle";

export class DistributionWidgetRequest {
  "apmQuery"?: LogQueryDefinition;
  "apmStatsQuery"?: ApmStatsQueryDefinition;
  "eventQuery"?: LogQueryDefinition;
  "logQuery"?: LogQueryDefinition;
  "networkQuery"?: LogQueryDefinition;
  "processQuery"?: ProcessQueryDefinition;
  "profileMetricsQuery"?: LogQueryDefinition;
  /**
   * Widget query.
   */
  "q"?: string;
  "rumQuery"?: LogQueryDefinition;
  "securityQuery"?: LogQueryDefinition;
  "style"?: WidgetStyle;

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
    apmQuery: {
      name: "apmQuery",
      baseName: "apm_query",
      type: "LogQueryDefinition",
      required: false,
      format: "",
    },
    apmStatsQuery: {
      name: "apmStatsQuery",
      baseName: "apm_stats_query",
      type: "ApmStatsQueryDefinition",
      required: false,
      format: "",
    },
    eventQuery: {
      name: "eventQuery",
      baseName: "event_query",
      type: "LogQueryDefinition",
      required: false,
      format: "",
    },
    logQuery: {
      name: "logQuery",
      baseName: "log_query",
      type: "LogQueryDefinition",
      required: false,
      format: "",
    },
    networkQuery: {
      name: "networkQuery",
      baseName: "network_query",
      type: "LogQueryDefinition",
      required: false,
      format: "",
    },
    processQuery: {
      name: "processQuery",
      baseName: "process_query",
      type: "ProcessQueryDefinition",
      required: false,
      format: "",
    },
    profileMetricsQuery: {
      name: "profileMetricsQuery",
      baseName: "profile_metrics_query",
      type: "LogQueryDefinition",
      required: false,
      format: "",
    },
    q: {
      name: "q",
      baseName: "q",
      type: "string",
      required: false,
      format: "",
    },
    rumQuery: {
      name: "rumQuery",
      baseName: "rum_query",
      type: "LogQueryDefinition",
      required: false,
      format: "",
    },
    securityQuery: {
      name: "securityQuery",
      baseName: "security_query",
      type: "LogQueryDefinition",
      required: false,
      format: "",
    },
    style: {
      name: "style",
      baseName: "style",
      type: "WidgetStyle",
      required: false,
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return DistributionWidgetRequest.attributeTypeMap;
  }

  public constructor() {}
}
