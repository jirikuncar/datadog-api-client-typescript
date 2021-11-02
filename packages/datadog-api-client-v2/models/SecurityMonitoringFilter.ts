/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SecurityMonitoringFilterAction } from "./SecurityMonitoringFilterAction";

export class SecurityMonitoringFilter {
  "action"?: SecurityMonitoringFilterAction;
  /**
   * Query for selecting logs to apply the filtering action.
   */
  "query"?: string;

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
    action: {
      name: "action",
      baseName: "action",
      type: "SecurityMonitoringFilterAction",
      required: false,
    },
    query: {
      name: "query",
      baseName: "query",
      type: "string",
      required: false,
    },
  };

  static getAttributeTypeMap() {
    return SecurityMonitoringFilter.attributeTypeMap;
  }

  public constructor() {}
}
