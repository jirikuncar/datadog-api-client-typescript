/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsDevice } from "./SyntheticsDevice";

export class SyntheticsBrowserTestResultShortResult {
  "device"?: SyntheticsDevice;
  /**
   * Length in second of the browser test run.
   */
  "duration"?: number;
  /**
   * Amount of errors collected for a single browser test run.
   */
  "errorCount"?: number;
  /**
   * Amount of browser test steps completed before failing.
   */
  "stepCountCompleted"?: number;
  /**
   * Total amount of browser test steps.
   */
  "stepCountTotal"?: number;

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
    device: {
      name: "device",
      baseName: "device",
      type: "SyntheticsDevice",
      required: false,
    },
    duration: {
      name: "duration",
      baseName: "duration",
      type: "number",
      required: false,
      format: "double",
    },
    errorCount: {
      name: "errorCount",
      baseName: "errorCount",
      type: "number",
      required: false,
      format: "int64",
    },
    stepCountCompleted: {
      name: "stepCountCompleted",
      baseName: "stepCountCompleted",
      type: "number",
      required: false,
      format: "int64",
    },
    stepCountTotal: {
      name: "stepCountTotal",
      baseName: "stepCountTotal",
      type: "number",
      required: false,
      format: "int64",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsBrowserTestResultShortResult.attributeTypeMap;
  }

  public constructor() {}
}
