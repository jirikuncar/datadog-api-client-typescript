/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FunnelSource } from "./FunnelSource";
import { FunnelStep } from "./FunnelStep";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Updated funnel widget.
 */

export class FunnelQuery {
  "dataSource": FunnelSource;
  /**
   * The widget query.
   */
  "queryString": string;
  /**
   * List of funnel steps.
   */
  "steps": Array<FunnelStep>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    dataSource: {
      baseName: "data_source",
      type: "FunnelSource",
      required: true,
    },
    queryString: {
      baseName: "query_string",
      type: "string",
      required: true,
    },
    steps: {
      baseName: "steps",
      type: "Array<FunnelStep>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FunnelQuery.attributeTypeMap;
  }

  public constructor() {}
}