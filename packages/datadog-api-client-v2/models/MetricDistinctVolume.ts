/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MetricDistinctVolumeAttributes } from "./MetricDistinctVolumeAttributes";
import { MetricDistinctVolumeType } from "./MetricDistinctVolumeType";

export class MetricDistinctVolume {
  "attributes"?: MetricDistinctVolumeAttributes;
  /**
   * The metric name for this resource.
   */
  "id"?: string;
  "type"?: MetricDistinctVolumeType;

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
    attributes: {
      name: "attributes",
      baseName: "attributes",
      type: "MetricDistinctVolumeAttributes",
      required: false,
    },
    id: {
      name: "id",
      baseName: "id",
      type: "string",
      required: false,
    },
    type: {
      name: "type",
      baseName: "type",
      type: "MetricDistinctVolumeType",
      required: false,
    },
  };

  static getAttributeTypeMap() {
    return MetricDistinctVolume.attributeTypeMap;
  }

  public constructor() {}
}
