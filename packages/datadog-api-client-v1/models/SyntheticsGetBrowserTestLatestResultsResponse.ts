/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsBrowserTestResultShort } from "./SyntheticsBrowserTestResultShort";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Object with the latest Synthetic browser test run.
 */

export class SyntheticsGetBrowserTestLatestResultsResponse {
  /**
   * Timestamp of the latest browser test run.
   */
  "lastTimestampFetched"?: number;
  /**
   * Result of the latest browser test run.
   */
  "results"?: Array<SyntheticsBrowserTestResultShort>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    lastTimestampFetched: {
      baseName: "last_timestamp_fetched",
      type: "number",
      format: "int64",
    },
    results: {
      baseName: "results",
      type: "Array<SyntheticsBrowserTestResultShort>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsGetBrowserTestLatestResultsResponse.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): SyntheticsGetBrowserTestLatestResultsResponse {
    const res = new SyntheticsGetBrowserTestLatestResultsResponse();

    res.lastTimestampFetched = ObjectSerializer.deserialize(
      data.last_timestamp_fetched,
      "number",
      "int64"
    );

    res.results = ObjectSerializer.deserialize(
      data.results,
      "Array<SyntheticsBrowserTestResultShort>",
      ""
    );

    return res;
  }

  static serialize(data: SyntheticsGetBrowserTestLatestResultsResponse): {
    [key: string]: any;
  } {
    const attributeTypes =
      SyntheticsGetBrowserTestLatestResultsResponse.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.last_timestamp_fetched = ObjectSerializer.serialize(
      data.lastTimestampFetched,
      "number",
      "int64"
    );

    res.results = ObjectSerializer.serialize(
      data.results,
      "Array<SyntheticsBrowserTestResultShort>",
      ""
    );

    return res;
  }

  public constructor() {}
}