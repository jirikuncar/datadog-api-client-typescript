/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsBatchDetailsData } from "./SyntheticsBatchDetailsData";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Details about a batch response.
 */

export class SyntheticsBatchDetails {
  "data"?: SyntheticsBatchDetailsData;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "SyntheticsBatchDetailsData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsBatchDetails.attributeTypeMap;
  }

  public constructor() {}
}