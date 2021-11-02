/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EventTimelineWidgetDefinitionType } from "./EventTimelineWidgetDefinitionType";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

export class EventTimelineWidgetDefinition {
  /**
   * Query to filter the event timeline with.
   */
  "query": string;
  /**
   * The execution method for multi-value filters. Can be either and or or.
   */
  "tagsExecution"?: string;
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
  "type": EventTimelineWidgetDefinitionType;

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
    query: {
      name: "query",
      baseName: "query",
      type: "string",
      required: true,
    },
    tagsExecution: {
      name: "tagsExecution",
      baseName: "tags_execution",
      type: "string",
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
      type: "EventTimelineWidgetDefinitionType",
      required: true,
    },
  };

  static getAttributeTypeMap() {
    return EventTimelineWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
