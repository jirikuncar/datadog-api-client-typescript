/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsTestDetails } from "./SyntheticsTestDetails";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Object containing an array of Synthetic tests configuration.
 */

export class SyntheticsListTestsResponse {
  /**
   * Array of Synthetic tests configuration.
   */
  "tests"?: Array<SyntheticsTestDetails>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    tests: {
      baseName: "tests",
      type: "Array<SyntheticsTestDetails>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsListTestsResponse.attributeTypeMap;
  }

  public constructor() {}
}
