/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IncidentTimelineCellMarkdownContentType } from "./IncidentTimelineCellMarkdownContentType";
import { IncidentTimelineCellMarkdownCreateAttributesContent } from "./IncidentTimelineCellMarkdownCreateAttributesContent";

export class IncidentTimelineCellMarkdownCreateAttributes {
  "cellType": IncidentTimelineCellMarkdownContentType;
  "content": IncidentTimelineCellMarkdownCreateAttributesContent;
  /**
   * A flag indicating whether the timeline cell is important and should be highlighted.
   */
  "important"?: boolean;

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
    cellType: {
      name: "cellType",
      baseName: "cell_type",
      type: "IncidentTimelineCellMarkdownContentType",
      required: true,
    },
    content: {
      name: "content",
      baseName: "content",
      type: "IncidentTimelineCellMarkdownCreateAttributesContent",
      required: true,
    },
    important: {
      name: "important",
      baseName: "important",
      type: "boolean",
      required: false,
    },
  };

  static getAttributeTypeMap() {
    return IncidentTimelineCellMarkdownCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
