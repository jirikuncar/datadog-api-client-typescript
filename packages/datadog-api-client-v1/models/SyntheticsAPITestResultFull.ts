/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsAPITestResultData } from "./SyntheticsAPITestResultData";
import { SyntheticsAPITestResultFullCheck } from "./SyntheticsAPITestResultFullCheck";
import { SyntheticsTestMonitorStatus } from "./SyntheticsTestMonitorStatus";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Object returned describing a API test result.
 */

export class SyntheticsAPITestResultFull {
  "check"?: SyntheticsAPITestResultFullCheck;
  /**
   * When the API test was conducted.
   */
  "checkTime"?: number;
  /**
   * Version of the API test used.
   */
  "checkVersion"?: number;
  /**
   * Locations for which to query the API test results.
   */
  "probeDc"?: string;
  "result"?: SyntheticsAPITestResultData;
  /**
   * ID of the API test result.
   */
  "resultId"?: string;
  "status"?: SyntheticsTestMonitorStatus;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    check: {
      baseName: "check",
      type: "SyntheticsAPITestResultFullCheck",
      format: "",
    },
    checkTime: {
      baseName: "check_time",
      type: "number",
      format: "double",
    },
    checkVersion: {
      baseName: "check_version",
      type: "number",
      format: "int64",
    },
    probeDc: {
      baseName: "probe_dc",
      type: "string",
      format: "",
    },
    result: {
      baseName: "result",
      type: "SyntheticsAPITestResultData",
      format: "",
    },
    resultId: {
      baseName: "result_id",
      type: "string",
      format: "",
    },
    status: {
      baseName: "status",
      type: "SyntheticsTestMonitorStatus",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsAPITestResultFull.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): SyntheticsAPITestResultFull {
    const res = new SyntheticsAPITestResultFull();

    res.check = ObjectSerializer.deserialize(
      data.check,
      "SyntheticsAPITestResultFullCheck",
      ""
    );

    res.checkTime = ObjectSerializer.deserialize(
      data.check_time,
      "number",
      "double"
    );

    res.checkVersion = ObjectSerializer.deserialize(
      data.check_version,
      "number",
      "int64"
    );

    res.probeDc = ObjectSerializer.deserialize(data.probe_dc, "string", "");

    res.result = ObjectSerializer.deserialize(
      data.result,
      "SyntheticsAPITestResultData",
      ""
    );

    res.resultId = ObjectSerializer.deserialize(data.result_id, "string", "");

    if ([0, 1, 2, undefined].includes(data.status)) {
      res.status = data.status;
    } else {
      const raw = new SyntheticsAPITestResultFull();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: SyntheticsAPITestResultFull): { [key: string]: any } {
    const attributeTypes = SyntheticsAPITestResultFull.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.check = ObjectSerializer.serialize(
      data.check,
      "SyntheticsAPITestResultFullCheck",
      ""
    );

    res.check_time = ObjectSerializer.serialize(
      data.checkTime,
      "number",
      "double"
    );

    res.check_version = ObjectSerializer.serialize(
      data.checkVersion,
      "number",
      "int64"
    );

    res.probe_dc = ObjectSerializer.serialize(data.probeDc, "string", "");

    res.result = ObjectSerializer.serialize(
      data.result,
      "SyntheticsAPITestResultData",
      ""
    );

    res.result_id = ObjectSerializer.serialize(data.resultId, "string", "");

    if ([0, 1, 2, undefined].includes(data.status)) {
      res.status = data.status;
    } else {
      throw TypeError(`invalid enum value ${data.status} for status`);
    }

    return res;
  }

  public constructor() {}
}