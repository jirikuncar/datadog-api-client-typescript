/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SecurityMonitoringRuleDetectionMethod } from "./SecurityMonitoringRuleDetectionMethod";
import { SecurityMonitoringRuleEvaluationWindow } from "./SecurityMonitoringRuleEvaluationWindow";
import { SecurityMonitoringRuleKeepAlive } from "./SecurityMonitoringRuleKeepAlive";
import { SecurityMonitoringRuleMaxSignalDuration } from "./SecurityMonitoringRuleMaxSignalDuration";
import { SecurityMonitoringRuleNewValueOptions } from "./SecurityMonitoringRuleNewValueOptions";
import { SecurityMonitoringRuleThirdPartyOptions } from "./SecurityMonitoringRuleThirdPartyOptions";

export class SecurityMonitoringRuleOptions {
  "detectionMethod"?: SecurityMonitoringRuleDetectionMethod;
  "evaluationWindow"?: SecurityMonitoringRuleEvaluationWindow;
  "keepAlive"?: SecurityMonitoringRuleKeepAlive;
  "maxSignalDuration"?: SecurityMonitoringRuleMaxSignalDuration;
  "newValueOptions"?: SecurityMonitoringRuleNewValueOptions;
  "thirdPartyOptions"?: SecurityMonitoringRuleThirdPartyOptions;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    detectionMethod: {
      baseName: "detectionMethod",
      type: "SecurityMonitoringRuleDetectionMethod",
    },
    evaluationWindow: {
      baseName: "evaluationWindow",
      type: "SecurityMonitoringRuleEvaluationWindow",
    },
    keepAlive: {
      baseName: "keepAlive",
      type: "SecurityMonitoringRuleKeepAlive",
    },
    maxSignalDuration: {
      baseName: "maxSignalDuration",
      type: "SecurityMonitoringRuleMaxSignalDuration",
    },
    newValueOptions: {
      baseName: "newValueOptions",
      type: "SecurityMonitoringRuleNewValueOptions",
    },
    thirdPartyOptions: {
      baseName: "thirdPartyOptions",
      type: "SecurityMonitoringRuleThirdPartyOptions",
    },
  };

  static getAttributeTypeMap() {
    return SecurityMonitoringRuleOptions.attributeTypeMap;
  }

  public constructor() {}
}
