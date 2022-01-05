/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ProcessSummariesMeta } from "./ProcessSummariesMeta";
import { ProcessSummary } from "./ProcessSummary";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * List of process summaries.
 */

export class ProcessSummariesResponse {
  /**
   * Array of process summary objects.
   */
  "data"?: Array<ProcessSummary>;
  "meta"?: ProcessSummariesMeta;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<ProcessSummary>",
    },
    meta: {
      baseName: "meta",
      type: "ProcessSummariesMeta",
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return ProcessSummariesResponse.attributeTypeMap;
  }

  public constructor() {}
}
