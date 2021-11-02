/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ChangeWidgetDefinitionType } from "./ChangeWidgetDefinitionType";
import { ChangeWidgetRequest } from "./ChangeWidgetRequest";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

export class ChangeWidgetDefinition {
  /**
   * List of custom links.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * Array of one request object to display in the widget.  See the dedicated [Request JSON schema documentation](https://docs.datadoghq.com/dashboards/graphing_json/request_json)  to learn how to build the `REQUEST_SCHEMA`.
   */
  "requests": Array<ChangeWidgetRequest>;
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
  "type": ChangeWidgetDefinitionType;

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
    customLinks: {
      name: "customLinks",
      baseName: "custom_links",
      type: "Array<WidgetCustomLink>",
      required: false,
    },
    requests: {
      name: "requests",
      baseName: "requests",
      type: "Array<ChangeWidgetRequest>",
      required: true,
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
      type: "ChangeWidgetDefinitionType",
      required: true,
    },
  };

  static getAttributeTypeMap() {
    return ChangeWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
