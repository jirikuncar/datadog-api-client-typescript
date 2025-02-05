/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { NotebooksResponseData } from "./NotebooksResponseData";
import { NotebooksResponseMeta } from "./NotebooksResponseMeta";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Notebooks get all response.
 */

export class NotebooksResponse {
  /**
   * List of notebook definitions.
   */
  "data"?: Array<NotebooksResponseData>;
  "meta"?: NotebooksResponseMeta;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<NotebooksResponseData>",
    },
    meta: {
      baseName: "meta",
      type: "NotebooksResponseMeta",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NotebooksResponse.attributeTypeMap;
  }

  public constructor() {}
}
