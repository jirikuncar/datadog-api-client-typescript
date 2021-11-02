/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { NotebookMarkdownCellDefinitionType } from "./NotebookMarkdownCellDefinitionType";

export class NotebookMarkdownCellDefinition {
  /**
   * The markdown content.
   */
  "text": string;
  "type": NotebookMarkdownCellDefinitionType;

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
    text: {
      name: "text",
      baseName: "text",
      type: "string",
      required: true,
    },
    type: {
      name: "type",
      baseName: "type",
      type: "NotebookMarkdownCellDefinitionType",
      required: true,
    },
  };

  static getAttributeTypeMap() {
    return NotebookMarkdownCellDefinition.attributeTypeMap;
  }

  public constructor() {}
}
