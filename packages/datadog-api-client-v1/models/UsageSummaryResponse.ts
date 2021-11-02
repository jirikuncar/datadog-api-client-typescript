/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsByRetention } from "./LogsByRetention";
import { UsageSummaryDate } from "./UsageSummaryDate";

export class UsageSummaryResponse {
  /**
   * Shows the 99th percentile of all agent hosts over all hours in the current months for all organizations.
   */
  "agentHostTop99pSum"?: number;
  /**
   * Shows the 99th percentile of all Azure app services using APM over all hours in the current months all organizations.
   */
  "apmAzureAppServiceHostTop99pSum"?: number;
  /**
   * Shows the 99th percentile of all distinct APM hosts over all hours in the current months for all organizations.
   */
  "apmHostTop99pSum"?: number;
  /**
   * Shows the sum of all audit logs lines indexed over all hours in the current months for all organizations.
   */
  "auditLogsLinesIndexedAggSum"?: number;
  /**
   * Shows the 99th percentile of all AWS hosts over all hours in the current months for all organizations.
   */
  "awsHostTop99pSum"?: number;
  /**
   * Shows the average of the number of functions that executed 1 or more times each hour in the current months for all organizations.
   */
  "awsLambdaFuncCount"?: number;
  /**
   * Shows the sum of all AWS Lambda invocations over all hours in the current months for all organizations.
   */
  "awsLambdaInvocationsSum"?: number;
  /**
   * Shows the 99th percentile of all Azure app services over all hours in the current months for all organizations.
   */
  "azureAppServiceTop99pSum"?: number;
  /**
   * Shows the 99th percentile of all Azure hosts over all hours in the current months for all organizations.
   */
  "azureHostTop99pSum"?: number;
  /**
   * Shows the sum of all log bytes ingested over all hours in the current months for all organizations.
   */
  "billableIngestedBytesAggSum"?: number;
  /**
   * Shows the average of all distinct containers over all hours in the current months for all organizations.
   */
  "containerAvgSum"?: number;
  /**
   * Shows the sum of the high-water marks of all distinct containers over all hours in the current months for all organizations.
   */
  "containerHwmSum"?: number;
  /**
   * Shows the average number of Cloud Security Posture Management containers over all hours in the current months for all organizations.
   */
  "cspmContainerAvgSum"?: number;
  /**
   * Shows the sum of the the high-water marks of Cloud Security Posture Management containers over all hours in the current months for all organizations.
   */
  "cspmContainerHwmSum"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Posture Management hosts over all hours in the current months for all organizations.
   */
  "cspmHostTop99pSum"?: number;
  /**
   * Shows the average number of distinct custom metrics over all hours in the current months for all organizations.
   */
  "customTsSum"?: number;
  /**
   * Shows the average of all distinct Cloud Workload Security containers over all hours in the current months for all organizations.
   */
  "cwsContainersAvgSum"?: number;
  /**
   * Shows the 99th percentile of all Cloud Workload Security hosts over all hours in the current months for all organizations.
   */
  "cwsHostTop99pSum"?: number;
  /**
   * Shows the 99th percentile of all Database Monitoring hosts over all hours in the current month for all organizations.
   */
  "dbmHostTop99pSum"?: number;
  /**
   * Shows the average of all distinct Database Monitoring Normalized Queries over all hours in the current month for all organizations.
   */
  "dbmQueriesAvgSum"?: number;
  /**
   * Shows the last date of usage in the current months for all organizations.
   */
  "endDate"?: Date;
  /**
   * Shows the average of all Fargate tasks over all hours in the current months for all organizations.
   */
  "fargateTasksCountAvgSum"?: number;
  /**
   * Shows the sum of the high-water marks of all Fargate tasks over all hours in the current months for all organizations.
   */
  "fargateTasksCountHwmSum"?: number;
  /**
   * Shows the 99th percentile of all GCP hosts over all hours in the current months for all organizations.
   */
  "gcpHostTop99pSum"?: number;
  /**
   * Shows the 99th percentile of all Heroku dynos over all hours in the current months for all organizations.
   */
  "herokuHostTop99pSum"?: number;
  /**
   * Shows sum of the the high-water marks of incident management monthly active users in the current months for all organizations.
   */
  "incidentManagementMonthlyActiveUsersHwmSum"?: number;
  /**
   * Shows the sum of all log events indexed over all hours in the current months for all organizations.
   */
  "indexedEventsCountAggSum"?: number;
  /**
   * Shows the 99th percentile of all distinct infrastructure hosts over all hours in the current months for all organizations.
   */
  "infraHostTop99pSum"?: number;
  /**
   * Shows the sum of all log bytes ingested over all hours in the current months for all organizations.
   */
  "ingestedEventsBytesAggSum"?: number;
  /**
   * Shows the sum of all IoT devices over all hours in the current months for all organizations.
   */
  "iotDeviceAggSum"?: number;
  /**
   * Shows the 99th percentile of all IoT devices over all hours in the current months of all organizations.
   */
  "iotDeviceTop99pSum"?: number;
  /**
   * Shows the the most recent hour in the current months for all organizations for which all usages were calculated.
   */
  "lastUpdated"?: Date;
  /**
   * Shows the sum of all live logs indexed over all hours in the current months for all organizations (data available as of December 1, 2020).
   */
  "liveIndexedEventsAggSum"?: number;
  /**
   * Shows the sum of all live logs bytes ingested over all hours in the current months for all organizations (data available as of December 1, 2020).
   */
  "liveIngestedBytesAggSum"?: number;
  "logsByRetention"?: LogsByRetention;
  /**
   * Shows the sum of all mobile RUM Sessions over all hours in the current months for all organizations.
   */
  "mobileRumSessionCountAggSum"?: number;
  /**
   * Shows the sum of all mobile RUM Sessions on Android over all hours in the current months for all organizations.
   */
  "mobileRumSessionCountAndroidAggSum"?: number;
  /**
   * Shows the sum of all mobile RUM Sessions on iOS over all hours in the current months for all organizations.
   */
  "mobileRumSessionCountIosAggSum"?: number;
  /**
   * Shows the sum of all Network flows indexed over all hours in the current months for all organizations.
   */
  "netflowIndexedEventsCountAggSum"?: number;
  /**
   * Shows the 99th percentile of all distinct Networks hosts over all hours in the current months for all organizations.
   */
  "npmHostTop99pSum"?: number;
  /**
   * Shows the 99th percentile of all hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current months for all organizations.
   */
  "opentelemetryHostTop99pSum"?: number;
  /**
   * Shows the average number of profiled containers over all hours in the current months for all organizations.
   */
  "profilingContainerAgentCountAvg"?: number;
  /**
   * Shows the 99th percentile of all profiled hosts over all hours in the current months for all organizations.
   */
  "profilingHostCountTop99pSum"?: number;
  /**
   * Shows the sum of all rehydrated logs indexed over all hours in the current months for all organizations (data available as of December 1, 2020).
   */
  "rehydratedIndexedEventsAggSum"?: number;
  /**
   * Shows the sum of all rehydrated logs bytes ingested over all hours in the current months for all organizations (data available as of December 1, 2020).
   */
  "rehydratedIngestedBytesAggSum"?: number;
  /**
   * Shows the sum of all browser RUM Sessions over all hours in the current months for all organizations.
   */
  "rumSessionCountAggSum"?: number;
  /**
   * Shows the sum of RUM Sessions (browser and mobile) over all hours in the current months for all organizations.
   */
  "rumTotalSessionCountAggSum"?: number;
  /**
   * Shows the sum of all bytes scanned of logs usage by the Sensitive Data Scanner over all hours in the current month for all organizations.
   */
  "sdsLogsScannedBytesSum"?: number;
  /**
   * Shows the sum of all bytes scanned across all usage types by the Sensitive Data Scanner over all hours in the current month for all organizations.
   */
  "sdsTotalScannedBytesSum"?: number;
  /**
   * Shows the first date of usage in the current months for all organizations.
   */
  "startDate"?: Date;
  /**
   * Shows the sum of all Synthetic browser tests over all hours in the current months for all organizations.
   */
  "syntheticsBrowserCheckCallsCountAggSum"?: number;
  /**
   * Shows the sum of all Synthetic API tests over all hours in the current months for all organizations.
   */
  "syntheticsCheckCallsCountAggSum"?: number;
  /**
   * Shows the sum of all Indexed Spans indexed over all hours in the current months for all organizations.
   */
  "traceSearchIndexedEventsCountAggSum"?: number;
  /**
   * Shows the sum of all tracing without limits bytes ingested over all hours in the current months for all organizations.
   */
  "twolIngestedEventsBytesAggSum"?: number;
  /**
   * An array of objects regarding hourly usage.
   */
  "usage"?: Array<UsageSummaryDate>;
  /**
   * Shows the 99th percentile of all vSphere hosts over all hours in the current months for all organizations.
   */
  "vsphereHostTop99pSum"?: number;

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
    agentHostTop99pSum: {
      name: "agentHostTop99pSum",
      baseName: "agent_host_top99p_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    apmAzureAppServiceHostTop99pSum: {
      name: "apmAzureAppServiceHostTop99pSum",
      baseName: "apm_azure_app_service_host_top99p_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    apmHostTop99pSum: {
      name: "apmHostTop99pSum",
      baseName: "apm_host_top99p_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    auditLogsLinesIndexedAggSum: {
      name: "auditLogsLinesIndexedAggSum",
      baseName: "audit_logs_lines_indexed_agg_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    awsHostTop99pSum: {
      name: "awsHostTop99pSum",
      baseName: "aws_host_top99p_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    awsLambdaFuncCount: {
      name: "awsLambdaFuncCount",
      baseName: "aws_lambda_func_count",
      type: "number",
      required: false,
      format: "int64",
    },
    awsLambdaInvocationsSum: {
      name: "awsLambdaInvocationsSum",
      baseName: "aws_lambda_invocations_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    azureAppServiceTop99pSum: {
      name: "azureAppServiceTop99pSum",
      baseName: "azure_app_service_top99p_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    azureHostTop99pSum: {
      name: "azureHostTop99pSum",
      baseName: "azure_host_top99p_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    billableIngestedBytesAggSum: {
      name: "billableIngestedBytesAggSum",
      baseName: "billable_ingested_bytes_agg_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    containerAvgSum: {
      name: "containerAvgSum",
      baseName: "container_avg_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    containerHwmSum: {
      name: "containerHwmSum",
      baseName: "container_hwm_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    cspmContainerAvgSum: {
      name: "cspmContainerAvgSum",
      baseName: "cspm_container_avg_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    cspmContainerHwmSum: {
      name: "cspmContainerHwmSum",
      baseName: "cspm_container_hwm_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    cspmHostTop99pSum: {
      name: "cspmHostTop99pSum",
      baseName: "cspm_host_top99p_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    customTsSum: {
      name: "customTsSum",
      baseName: "custom_ts_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    cwsContainersAvgSum: {
      name: "cwsContainersAvgSum",
      baseName: "cws_containers_avg_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    cwsHostTop99pSum: {
      name: "cwsHostTop99pSum",
      baseName: "cws_host_top99p_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    dbmHostTop99pSum: {
      name: "dbmHostTop99pSum",
      baseName: "dbm_host_top99p_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    dbmQueriesAvgSum: {
      name: "dbmQueriesAvgSum",
      baseName: "dbm_queries_avg_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    endDate: {
      name: "endDate",
      baseName: "end_date",
      type: "Date",
      required: false,
      format: "date-time",
    },
    fargateTasksCountAvgSum: {
      name: "fargateTasksCountAvgSum",
      baseName: "fargate_tasks_count_avg_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    fargateTasksCountHwmSum: {
      name: "fargateTasksCountHwmSum",
      baseName: "fargate_tasks_count_hwm_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    gcpHostTop99pSum: {
      name: "gcpHostTop99pSum",
      baseName: "gcp_host_top99p_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    herokuHostTop99pSum: {
      name: "herokuHostTop99pSum",
      baseName: "heroku_host_top99p_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    incidentManagementMonthlyActiveUsersHwmSum: {
      name: "incidentManagementMonthlyActiveUsersHwmSum",
      baseName: "incident_management_monthly_active_users_hwm_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    indexedEventsCountAggSum: {
      name: "indexedEventsCountAggSum",
      baseName: "indexed_events_count_agg_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    infraHostTop99pSum: {
      name: "infraHostTop99pSum",
      baseName: "infra_host_top99p_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    ingestedEventsBytesAggSum: {
      name: "ingestedEventsBytesAggSum",
      baseName: "ingested_events_bytes_agg_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    iotDeviceAggSum: {
      name: "iotDeviceAggSum",
      baseName: "iot_device_agg_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    iotDeviceTop99pSum: {
      name: "iotDeviceTop99pSum",
      baseName: "iot_device_top99p_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    lastUpdated: {
      name: "lastUpdated",
      baseName: "last_updated",
      type: "Date",
      required: false,
      format: "date-time",
    },
    liveIndexedEventsAggSum: {
      name: "liveIndexedEventsAggSum",
      baseName: "live_indexed_events_agg_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    liveIngestedBytesAggSum: {
      name: "liveIngestedBytesAggSum",
      baseName: "live_ingested_bytes_agg_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    logsByRetention: {
      name: "logsByRetention",
      baseName: "logs_by_retention",
      type: "LogsByRetention",
      required: false,
      format: "",
    },
    mobileRumSessionCountAggSum: {
      name: "mobileRumSessionCountAggSum",
      baseName: "mobile_rum_session_count_agg_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    mobileRumSessionCountAndroidAggSum: {
      name: "mobileRumSessionCountAndroidAggSum",
      baseName: "mobile_rum_session_count_android_agg_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    mobileRumSessionCountIosAggSum: {
      name: "mobileRumSessionCountIosAggSum",
      baseName: "mobile_rum_session_count_ios_agg_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    netflowIndexedEventsCountAggSum: {
      name: "netflowIndexedEventsCountAggSum",
      baseName: "netflow_indexed_events_count_agg_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    npmHostTop99pSum: {
      name: "npmHostTop99pSum",
      baseName: "npm_host_top99p_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    opentelemetryHostTop99pSum: {
      name: "opentelemetryHostTop99pSum",
      baseName: "opentelemetry_host_top99p_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    profilingContainerAgentCountAvg: {
      name: "profilingContainerAgentCountAvg",
      baseName: "profiling_container_agent_count_avg",
      type: "number",
      required: false,
      format: "int64",
    },
    profilingHostCountTop99pSum: {
      name: "profilingHostCountTop99pSum",
      baseName: "profiling_host_count_top99p_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    rehydratedIndexedEventsAggSum: {
      name: "rehydratedIndexedEventsAggSum",
      baseName: "rehydrated_indexed_events_agg_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    rehydratedIngestedBytesAggSum: {
      name: "rehydratedIngestedBytesAggSum",
      baseName: "rehydrated_ingested_bytes_agg_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    rumSessionCountAggSum: {
      name: "rumSessionCountAggSum",
      baseName: "rum_session_count_agg_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    rumTotalSessionCountAggSum: {
      name: "rumTotalSessionCountAggSum",
      baseName: "rum_total_session_count_agg_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    sdsLogsScannedBytesSum: {
      name: "sdsLogsScannedBytesSum",
      baseName: "sds_logs_scanned_bytes_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    sdsTotalScannedBytesSum: {
      name: "sdsTotalScannedBytesSum",
      baseName: "sds_total_scanned_bytes_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    startDate: {
      name: "startDate",
      baseName: "start_date",
      type: "Date",
      required: false,
      format: "date-time",
    },
    syntheticsBrowserCheckCallsCountAggSum: {
      name: "syntheticsBrowserCheckCallsCountAggSum",
      baseName: "synthetics_browser_check_calls_count_agg_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    syntheticsCheckCallsCountAggSum: {
      name: "syntheticsCheckCallsCountAggSum",
      baseName: "synthetics_check_calls_count_agg_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    traceSearchIndexedEventsCountAggSum: {
      name: "traceSearchIndexedEventsCountAggSum",
      baseName: "trace_search_indexed_events_count_agg_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    twolIngestedEventsBytesAggSum: {
      name: "twolIngestedEventsBytesAggSum",
      baseName: "twol_ingested_events_bytes_agg_sum",
      type: "number",
      required: false,
      format: "int64",
    },
    usage: {
      name: "usage",
      baseName: "usage",
      type: "Array<UsageSummaryDate>",
      required: false,
      format: "",
    },
    vsphereHostTop99pSum: {
      name: "vsphereHostTop99pSum",
      baseName: "vsphere_host_top99p_sum",
      type: "number",
      required: false,
      format: "int64",
    },
  };

  static getAttributeTypeMap() {
    return UsageSummaryResponse.attributeTypeMap;
  }

  public constructor() {}
}
