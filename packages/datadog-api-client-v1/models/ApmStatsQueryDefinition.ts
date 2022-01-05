/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApmStatsQueryColumnType } from "./ApmStatsQueryColumnType";
import { ApmStatsQueryRowType } from "./ApmStatsQueryRowType";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * The APM stats query for table and distributions widgets.
 */

export class ApmStatsQueryDefinition {
  /**
   * Column properties used by the front end for display.
   */
  "columns"?: Array<ApmStatsQueryColumnType>;
  /**
   * Environment name.
   */
  "env": string;
  /**
   * Operation name associated with service.
   */
  "name": string;
  /**
   * The organization's host group name and value.
   */
  "primaryTag": string;
  /**
   * Resource name.
   */
  "resource"?: string;
  "rowType": ApmStatsQueryRowType;
  /**
   * Service name.
   */
  "service": string;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    columns: {
      baseName: "columns",
      type: "Array<ApmStatsQueryColumnType>",
    },
    env: {
      baseName: "env",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    primaryTag: {
      baseName: "primary_tag",
      type: "string",
      required: true,
    },
    resource: {
      baseName: "resource",
      type: "string",
    },
    rowType: {
      baseName: "row_type",
      type: "ApmStatsQueryRowType",
      required: true,
    },
    service: {
      baseName: "service",
      type: "string",
      required: true,
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return ApmStatsQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
