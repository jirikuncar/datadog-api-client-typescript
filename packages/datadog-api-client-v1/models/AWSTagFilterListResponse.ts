/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AWSTagFilter } from "./AWSTagFilter";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * An array of tag filter rules by `namespace` and tag filter string.
 */

export class AWSTagFilterListResponse {
  /**
   * An array of tag filters.
   */
  "filters"?: Array<AWSTagFilter>;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    filters: {
      baseName: "filters",
      type: "Array<AWSTagFilter>",
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return AWSTagFilterListResponse.attributeTypeMap;
  }

  public constructor() {}
}
