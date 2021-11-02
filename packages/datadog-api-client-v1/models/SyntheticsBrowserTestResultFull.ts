/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsBrowserTestResultData } from "./SyntheticsBrowserTestResultData";
import { SyntheticsBrowserTestResultFullCheck } from "./SyntheticsBrowserTestResultFullCheck";
import { SyntheticsTestMonitorStatus } from "./SyntheticsTestMonitorStatus";

export class SyntheticsBrowserTestResultFull {
  "check"?: SyntheticsBrowserTestResultFullCheck;
  /**
   * When the browser test was conducted.
   */
  "checkTime"?: number;
  /**
   * Version of the browser test used.
   */
  "checkVersion"?: number;
  /**
   * Location from which the browser test was performed.
   */
  "probeDc"?: string;
  "result"?: SyntheticsBrowserTestResultData;
  /**
   * ID of the browser test result.
   */
  "resultId"?: string;
  "status"?: SyntheticsTestMonitorStatus;

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
    check: {
      name: "check",
      baseName: "check",
      type: "SyntheticsBrowserTestResultFullCheck",
      required: false,
      format: "",
    },
    checkTime: {
      name: "checkTime",
      baseName: "check_time",
      type: "number",
      required: false,
      format: "double",
    },
    checkVersion: {
      name: "checkVersion",
      baseName: "check_version",
      type: "number",
      required: false,
      format: "int64",
    },
    probeDc: {
      name: "probeDc",
      baseName: "probe_dc",
      type: "string",
      required: false,
      format: "",
    },
    result: {
      name: "result",
      baseName: "result",
      type: "SyntheticsBrowserTestResultData",
      required: false,
      format: "",
    },
    resultId: {
      name: "resultId",
      baseName: "result_id",
      type: "string",
      required: false,
      format: "",
    },
    status: {
      name: "status",
      baseName: "status",
      type: "SyntheticsTestMonitorStatus",
      required: false,
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsBrowserTestResultFull.attributeTypeMap;
  }

  public constructor() {}
}
