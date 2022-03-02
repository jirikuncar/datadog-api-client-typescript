/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UsageRumUnitsHour } from "./UsageRumUnitsHour";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Response containing the number of RUM Units for each hour for a given organization.
 */

export class UsageRumUnitsResponse {
  /**
   * Get hourly usage for RUM Units.
   */
  "usage"?: Array<UsageRumUnitsHour>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    usage: {
      baseName: "usage",
      type: "Array<UsageRumUnitsHour>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageRumUnitsResponse.attributeTypeMap;
  }

  public constructor() {}
}