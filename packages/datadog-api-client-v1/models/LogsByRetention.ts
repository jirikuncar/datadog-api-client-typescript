/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsByRetentionMonthlyUsage } from "./LogsByRetentionMonthlyUsage";
import { LogsByRetentionOrgs } from "./LogsByRetentionOrgs";
import { LogsRetentionAggSumUsage } from "./LogsRetentionAggSumUsage";

export class LogsByRetention {
  "orgs"?: LogsByRetentionOrgs;
  /**
   * Aggregated index logs usage for each retention period with usage.
   */
  "usage"?: Array<LogsRetentionAggSumUsage>;
  "usageByMonth"?: LogsByRetentionMonthlyUsage;

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
    orgs: {
      name: "orgs",
      baseName: "orgs",
      type: "LogsByRetentionOrgs",
      required: false,
      format: "",
    },
    usage: {
      name: "usage",
      baseName: "usage",
      type: "Array<LogsRetentionAggSumUsage>",
      required: false,
      format: "",
    },
    usageByMonth: {
      name: "usageByMonth",
      baseName: "usage_by_month",
      type: "LogsByRetentionMonthlyUsage",
      required: false,
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return LogsByRetention.attributeTypeMap;
  }

  public constructor() {}
}
