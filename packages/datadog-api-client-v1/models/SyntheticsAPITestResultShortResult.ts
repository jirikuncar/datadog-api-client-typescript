/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsTiming } from "./SyntheticsTiming";

export class SyntheticsAPITestResultShortResult {
  /**
   * Describes if the test run has passed or failed.
   */
  "passed"?: boolean;
  "timings"?: SyntheticsTiming;

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
    passed: {
      name: "passed",
      baseName: "passed",
      type: "boolean",
      required: false,
    },
    timings: {
      name: "timings",
      baseName: "timings",
      type: "SyntheticsTiming",
      required: false,
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsAPITestResultShortResult.attributeTypeMap;
  }

  public constructor() {}
}
