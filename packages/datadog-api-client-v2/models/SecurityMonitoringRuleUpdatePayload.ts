/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SecurityMonitoringFilter } from "./SecurityMonitoringFilter";
import { SecurityMonitoringRuleCase } from "./SecurityMonitoringRuleCase";
import { SecurityMonitoringRuleOptions } from "./SecurityMonitoringRuleOptions";
import { SecurityMonitoringRuleQuery } from "./SecurityMonitoringRuleQuery";

export class SecurityMonitoringRuleUpdatePayload {
  /**
   * Cases for generating signals.
   */
  "cases"?: Array<SecurityMonitoringRuleCase>;
  /**
   * Additional queries to filter matched events before they are processed.
   */
  "filters"?: Array<SecurityMonitoringFilter>;
  /**
   * Whether the notifications include the triggering group-by values in their title.
   */
  "hasExtendedTitle"?: boolean;
  /**
   * Whether the rule is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * Message for generated signals.
   */
  "message"?: string;
  /**
   * Name of the rule.
   */
  "name"?: string;
  "options"?: SecurityMonitoringRuleOptions;
  /**
   * Queries for selecting logs which are part of the rule.
   */
  "queries"?: Array<SecurityMonitoringRuleQuery>;
  /**
   * Tags for generated signals.
   */
  "tags"?: Array<string>;
  /**
   * The version of the rule being updated.
   */
  "version"?: number;

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
    cases: {
      name: "cases",
      baseName: "cases",
      type: "Array<SecurityMonitoringRuleCase>",
      required: false,
      format: "",
    },
    filters: {
      name: "filters",
      baseName: "filters",
      type: "Array<SecurityMonitoringFilter>",
      required: false,
      format: "",
    },
    hasExtendedTitle: {
      name: "hasExtendedTitle",
      baseName: "hasExtendedTitle",
      type: "boolean",
      required: false,
      format: "",
    },
    isEnabled: {
      name: "isEnabled",
      baseName: "isEnabled",
      type: "boolean",
      required: false,
      format: "",
    },
    message: {
      name: "message",
      baseName: "message",
      type: "string",
      required: false,
      format: "",
    },
    name: {
      name: "name",
      baseName: "name",
      type: "string",
      required: false,
      format: "",
    },
    options: {
      name: "options",
      baseName: "options",
      type: "SecurityMonitoringRuleOptions",
      required: false,
      format: "",
    },
    queries: {
      name: "queries",
      baseName: "queries",
      type: "Array<SecurityMonitoringRuleQuery>",
      required: false,
      format: "",
    },
    tags: {
      name: "tags",
      baseName: "tags",
      type: "Array<string>",
      required: false,
      format: "",
    },
    version: {
      name: "version",
      baseName: "version",
      type: "number",
      required: false,
      format: "int32",
    },
  };

  static getAttributeTypeMap() {
    return SecurityMonitoringRuleUpdatePayload.attributeTypeMap;
  }

  public constructor() {}
}
