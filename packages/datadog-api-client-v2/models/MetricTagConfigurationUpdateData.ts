/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MetricTagConfigurationType } from "./MetricTagConfigurationType";
import { MetricTagConfigurationUpdateAttributes } from "./MetricTagConfigurationUpdateAttributes";

export class MetricTagConfigurationUpdateData {
  "attributes"?: MetricTagConfigurationUpdateAttributes;
  /**
   * The metric name for this resource.
   */
  "id": string;
  "type": MetricTagConfigurationType;

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
    attributes: {
      name: "attributes",
      baseName: "attributes",
      type: "MetricTagConfigurationUpdateAttributes",
      required: false,
      format: "",
    },
    id: {
      name: "id",
      baseName: "id",
      type: "string",
      required: true,
      format: "",
    },
    type: {
      name: "type",
      baseName: "type",
      type: "MetricTagConfigurationType",
      required: true,
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return MetricTagConfigurationUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
