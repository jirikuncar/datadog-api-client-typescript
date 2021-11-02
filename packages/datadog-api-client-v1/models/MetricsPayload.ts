/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Series } from "./Series";

export class MetricsPayload {
  /**
   * A list of time series to submit to Datadog.
   */
  "series": Array<Series>;

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
    series: {
      name: "series",
      baseName: "series",
      type: "Array<Series>",
      required: true,
    },
  };

  static getAttributeTypeMap() {
    return MetricsPayload.attributeTypeMap;
  }

  public constructor() {}
}
