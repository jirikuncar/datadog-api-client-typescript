/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IncidentFieldAttributesValueType } from "./IncidentFieldAttributesValueType";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * A field with potentially multiple values selected.
 */

export class IncidentFieldAttributesMultipleValue {
  "type"?: IncidentFieldAttributesValueType;
  /**
   * The multiple values selected for this field.
   */
  "value"?: Array<string>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    type: {
      baseName: "type",
      type: "IncidentFieldAttributesValueType",
    },
    value: {
      baseName: "value",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentFieldAttributesMultipleValue.attributeTypeMap;
  }

  public constructor() {}
}
