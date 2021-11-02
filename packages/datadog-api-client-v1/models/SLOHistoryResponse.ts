/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SLOHistoryResponseData } from "./SLOHistoryResponseData";
import { SLOHistoryResponseError } from "./SLOHistoryResponseError";

export class SLOHistoryResponse {
  "data"?: SLOHistoryResponseData;
  /**
   * A list of errors while querying the history data for the service level objective.
   */
  "errors"?: Array<SLOHistoryResponseError>;

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
    data: {
      name: "data",
      baseName: "data",
      type: "SLOHistoryResponseData",
      required: false,
    },
    errors: {
      name: "errors",
      baseName: "errors",
      type: "Array<SLOHistoryResponseError>",
      required: false,
    },
  };

  static getAttributeTypeMap() {
    return SLOHistoryResponse.attributeTypeMap;
  }

  public constructor() {}
}
