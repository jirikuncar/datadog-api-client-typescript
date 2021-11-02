/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SLOCorrectionType } from "./SLOCorrectionType";
import { SLOCorrectionUpdateRequestAttributes } from "./SLOCorrectionUpdateRequestAttributes";

export class SLOCorrectionUpdateData {
  "attributes"?: SLOCorrectionUpdateRequestAttributes;
  "type"?: SLOCorrectionType;

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
      type: "SLOCorrectionUpdateRequestAttributes",
      required: false,
      format: "",
    },
    type: {
      name: "type",
      baseName: "type",
      type: "SLOCorrectionType",
      required: false,
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SLOCorrectionUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
