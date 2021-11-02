/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogQueryDefinition } from "./LogQueryDefinition";
import { ProcessQueryDefinition } from "./ProcessQueryDefinition";

export class HostMapRequest {
  "apmQuery"?: LogQueryDefinition;
  "eventQuery"?: LogQueryDefinition;
  "logQuery"?: LogQueryDefinition;
  "networkQuery"?: LogQueryDefinition;
  "processQuery"?: ProcessQueryDefinition;
  "profileMetricsQuery"?: LogQueryDefinition;
  /**
   * Query definition.
   */
  "q"?: string;
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
    apmQuery: {
      name: "apmQuery",
      baseName: "apm_query",
      type: "LogQueryDefinition",
      required: false,
    },
    eventQuery: {
      name: "eventQuery",
      baseName: "event_query",
      type: "LogQueryDefinition",
      required: false,
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
    return HostMapRequest.attributeTypeMap;
  }

  public constructor() {}
}
