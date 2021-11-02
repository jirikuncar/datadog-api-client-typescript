/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CheckStatusWidgetDefinitionType } from "./CheckStatusWidgetDefinitionType";
import { WidgetGrouping } from "./WidgetGrouping";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

export class CheckStatusWidgetDefinition {
  /**
   * Name of the check to use in the widget.
   */
  "check": string;
  /**
   * Group reporting a single check.
   */
  "group"?: string;
  /**
   * List of tag prefixes to group by in the case of a cluster check.
   */
  "groupBy"?: Array<string>;
  "grouping": WidgetGrouping;
  /**
   * List of tags used to filter the groups reporting a cluster check.
   */
  "tags"?: Array<string>;
  "time"?: WidgetTime;
  /**
   * Title of the widget.
   */
  "title"?: string;
  "titleAlign"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "titleSize"?: string;
  "type": CheckStatusWidgetDefinitionType;

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
    check: {
      name: "check",
      baseName: "check",
      type: "string",
      required: true,
    },
    group: {
      name: "group",
      baseName: "group",
      type: "string",
      required: false,
    },
    groupBy: {
      name: "groupBy",
      baseName: "group_by",
      type: "Array<string>",
      required: false,
    },
    grouping: {
      name: "grouping",
      baseName: "grouping",
      type: "WidgetGrouping",
      required: true,
    },
    tags: {
      name: "tags",
      baseName: "tags",
      type: "Array<string>",
      required: false,
    },
    time: {
      name: "time",
      baseName: "time",
      type: "WidgetTime",
      required: false,
    },
    title: {
      name: "title",
      baseName: "title",
      type: "string",
      required: false,
    },
    titleAlign: {
      name: "titleAlign",
      baseName: "title_align",
      type: "WidgetTextAlign",
      required: false,
    },
    titleSize: {
      name: "titleSize",
      baseName: "title_size",
      type: "string",
      required: false,
    },
    type: {
      name: "type",
      baseName: "type",
      type: "CheckStatusWidgetDefinitionType",
      required: true,
    },
  };

  static getAttributeTypeMap() {
    return CheckStatusWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
