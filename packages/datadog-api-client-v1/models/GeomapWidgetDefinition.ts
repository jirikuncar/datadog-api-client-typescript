/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { GeomapWidgetDefinitionStyle } from "./GeomapWidgetDefinitionStyle";
import { GeomapWidgetDefinitionType } from "./GeomapWidgetDefinitionType";
import { GeomapWidgetDefinitionView } from "./GeomapWidgetDefinitionView";
import { GeomapWidgetRequest } from "./GeomapWidgetRequest";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

export class GeomapWidgetDefinition {
  /**
   * A list of custom links.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * Array of one request object to display in the widget. The request must contain a `group-by` tag whose value is a country ISO code.  See the [Request JSON schema documentation](https://docs.datadoghq.com/dashboards/graphing_json/request_json) for information about building the `REQUEST_SCHEMA`.
   */
  "requests": Array<GeomapWidgetRequest>;
  "style": GeomapWidgetDefinitionStyle;
  "time"?: WidgetTime;
  /**
   * The title of your widget.
   */
  "title"?: string;
  "titleAlign"?: WidgetTextAlign;
  /**
   * The size of the title.
   */
  "titleSize"?: string;
  "type": GeomapWidgetDefinitionType;
  "view": GeomapWidgetDefinitionView;

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
    customLinks: {
      name: "customLinks",
      baseName: "custom_links",
      type: "Array<WidgetCustomLink>",
      required: false,
      format: "",
    },
    requests: {
      name: "requests",
      baseName: "requests",
      type: "Array<GeomapWidgetRequest>",
      required: true,
      format: "",
    },
    style: {
      name: "style",
      baseName: "style",
      type: "GeomapWidgetDefinitionStyle",
      required: true,
      format: "",
    },
    time: {
      name: "time",
      baseName: "time",
      type: "WidgetTime",
      required: false,
      format: "",
    },
    title: {
      name: "title",
      baseName: "title",
      type: "string",
      required: false,
      format: "",
    },
    titleAlign: {
      name: "titleAlign",
      baseName: "title_align",
      type: "WidgetTextAlign",
      required: false,
      format: "",
    },
    titleSize: {
      name: "titleSize",
      baseName: "title_size",
      type: "string",
      required: false,
      format: "",
    },
    type: {
      name: "type",
      baseName: "type",
      type: "GeomapWidgetDefinitionType",
      required: true,
      format: "",
    },
    view: {
      name: "view",
      baseName: "view",
      type: "GeomapWidgetDefinitionView",
      required: true,
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return GeomapWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
