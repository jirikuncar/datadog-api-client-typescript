/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { NotebookCellResourceType } from "./NotebookCellResourceType";
import { NotebookCellResponseAttributes } from "./NotebookCellResponseAttributes";

export class NotebookCellResponse {
  "attributes": NotebookCellResponseAttributes;
  /**
   * Notebook cell ID.
   */
  "id": string;
  "type": NotebookCellResourceType;

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
      type: "NotebookCellResponseAttributes",
      required: true,
    },
    id: {
      name: "id",
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      name: "type",
      baseName: "type",
      type: "NotebookCellResourceType",
      required: true,
    },
  };

  static getAttributeTypeMap() {
    return NotebookCellResponse.attributeTypeMap;
  }

  public constructor() {}
}
