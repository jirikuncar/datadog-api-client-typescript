/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsErrorCode } from "./SyntheticsErrorCode";
import { SyntheticsSSLCertificate } from "./SyntheticsSSLCertificate";
import { SyntheticsTestProcessStatus } from "./SyntheticsTestProcessStatus";
import { SyntheticsTiming } from "./SyntheticsTiming";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Object containing results for your Synthetic API test.
 */

export class SyntheticsAPITestResultData {
  "cert"?: SyntheticsSSLCertificate;
  "errorCode"?: SyntheticsErrorCode;
  /**
   * The API test error message.
   */
  "errorMessage"?: string;
  "eventType"?: SyntheticsTestProcessStatus;
  /**
   * The API test HTTP status code.
   */
  "httpStatusCode"?: number;
  /**
   * Request header object used for the API test.
   */
  "requestHeaders"?: { [key: string]: any };
  /**
   * Response body returned for the API test.
   */
  "responseBody"?: string;
  /**
   * Response headers returned for the API test.
   */
  "responseHeaders"?: { [key: string]: any };
  /**
   * Global size in byte of the API test response.
   */
  "responseSize"?: number;
  "timings"?: SyntheticsTiming;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    cert: {
      baseName: "cert",
      type: "SyntheticsSSLCertificate",
      format: "",
    },
    errorCode: {
      baseName: "errorCode",
      type: "SyntheticsErrorCode",
      format: "",
    },
    errorMessage: {
      baseName: "errorMessage",
      type: "string",
      format: "",
    },
    eventType: {
      baseName: "eventType",
      type: "SyntheticsTestProcessStatus",
      format: "",
    },
    httpStatusCode: {
      baseName: "httpStatusCode",
      type: "number",
      format: "int64",
    },
    requestHeaders: {
      baseName: "requestHeaders",
      type: "{ [key: string]: any; }",
      format: "",
    },
    responseBody: {
      baseName: "responseBody",
      type: "string",
      format: "",
    },
    responseHeaders: {
      baseName: "responseHeaders",
      type: "{ [key: string]: any; }",
      format: "",
    },
    responseSize: {
      baseName: "responseSize",
      type: "number",
      format: "int64",
    },
    timings: {
      baseName: "timings",
      type: "SyntheticsTiming",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsAPITestResultData.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): SyntheticsAPITestResultData {
    const res = new SyntheticsAPITestResultData();

    res.cert = ObjectSerializer.deserialize(
      data.cert,
      "SyntheticsSSLCertificate",
      ""
    );

    if (
      [
        "NO_ERROR",
        "UNKNOWN",
        "DNS",
        "SSL",
        "TIMEOUT",
        "DENIED",
        "INCORRECT_ASSERTION",
        undefined,
      ].includes(data.errorCode)
    ) {
      res.errorCode = data.errorCode;
    } else {
      const raw = new SyntheticsAPITestResultData();
      raw.unparsedObject = data;
      return raw;
    }

    res.errorMessage = ObjectSerializer.deserialize(
      data.errorMessage,
      "string",
      ""
    );

    if (
      [
        "not_scheduled",
        "scheduled",
        "started",
        "finished",
        "finished_with_error",
        undefined,
      ].includes(data.eventType)
    ) {
      res.eventType = data.eventType;
    } else {
      const raw = new SyntheticsAPITestResultData();
      raw.unparsedObject = data;
      return raw;
    }

    res.httpStatusCode = ObjectSerializer.deserialize(
      data.httpStatusCode,
      "number",
      "int64"
    );

    res.requestHeaders = ObjectSerializer.deserialize(
      data.requestHeaders,
      "{ [key: string]: any; }",
      ""
    );

    res.responseBody = ObjectSerializer.deserialize(
      data.responseBody,
      "string",
      ""
    );

    res.responseHeaders = ObjectSerializer.deserialize(
      data.responseHeaders,
      "{ [key: string]: any; }",
      ""
    );

    res.responseSize = ObjectSerializer.deserialize(
      data.responseSize,
      "number",
      "int64"
    );

    res.timings = ObjectSerializer.deserialize(
      data.timings,
      "SyntheticsTiming",
      ""
    );

    return res;
  }

  static serialize(data: SyntheticsAPITestResultData): { [key: string]: any } {
    const attributeTypes = SyntheticsAPITestResultData.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.cert = ObjectSerializer.serialize(
      data.cert,
      "SyntheticsSSLCertificate",
      ""
    );

    if (
      [
        "NO_ERROR",
        "UNKNOWN",
        "DNS",
        "SSL",
        "TIMEOUT",
        "DENIED",
        "INCORRECT_ASSERTION",
        undefined,
      ].includes(data.errorCode)
    ) {
      res.errorCode = data.errorCode;
    } else {
      throw TypeError(`invalid enum value ${data.errorCode} for errorCode`);
    }

    res.errorMessage = ObjectSerializer.serialize(
      data.errorMessage,
      "string",
      ""
    );

    if (
      [
        "not_scheduled",
        "scheduled",
        "started",
        "finished",
        "finished_with_error",
        undefined,
      ].includes(data.eventType)
    ) {
      res.eventType = data.eventType;
    } else {
      throw TypeError(`invalid enum value ${data.eventType} for eventType`);
    }

    res.httpStatusCode = ObjectSerializer.serialize(
      data.httpStatusCode,
      "number",
      "int64"
    );

    res.requestHeaders = ObjectSerializer.serialize(
      data.requestHeaders,
      "{ [key: string]: any; }",
      ""
    );

    res.responseBody = ObjectSerializer.serialize(
      data.responseBody,
      "string",
      ""
    );

    res.responseHeaders = ObjectSerializer.serialize(
      data.responseHeaders,
      "{ [key: string]: any; }",
      ""
    );

    res.responseSize = ObjectSerializer.serialize(
      data.responseSize,
      "number",
      "int64"
    );

    res.timings = ObjectSerializer.serialize(
      data.timings,
      "SyntheticsTiming",
      ""
    );

    return res;
  }

  public constructor() {}
}