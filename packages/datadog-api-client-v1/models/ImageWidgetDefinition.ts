/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ImageWidgetDefinitionType } from "./ImageWidgetDefinitionType";
import { WidgetHorizontalAlign } from "./WidgetHorizontalAlign";
import { WidgetImageSizing } from "./WidgetImageSizing";
import { WidgetMargin } from "./WidgetMargin";
import { WidgetVerticalAlign } from "./WidgetVerticalAlign";

export class ImageWidgetDefinition {
  /**
   * Whether to display a background or not.
   */
  "hasBackground"?: boolean;
  /**
   * Whether to display a border or not.
   */
  "hasBorder"?: boolean;
  "horizontalAlign"?: WidgetHorizontalAlign;
  "margin"?: WidgetMargin;
  "sizing"?: WidgetImageSizing;
  "type": ImageWidgetDefinitionType;
  /**
   * URL of the image.
   */
  "url": string;
  /**
   * URL of the image in dark mode.
   */
  "urlDarkTheme"?: string;
  "verticalAlign"?: WidgetVerticalAlign;

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
    hasBackground: {
      name: "hasBackground",
      baseName: "has_background",
      type: "boolean",
      required: false,
      format: "",
    },
    hasBorder: {
      name: "hasBorder",
      baseName: "has_border",
      type: "boolean",
      required: false,
      format: "",
    },
    horizontalAlign: {
      name: "horizontalAlign",
      baseName: "horizontal_align",
      type: "WidgetHorizontalAlign",
      required: false,
      format: "",
    },
    margin: {
      name: "margin",
      baseName: "margin",
      type: "WidgetMargin",
      required: false,
      format: "",
    },
    sizing: {
      name: "sizing",
      baseName: "sizing",
      type: "WidgetImageSizing",
      required: false,
      format: "",
    },
    type: {
      name: "type",
      baseName: "type",
      type: "ImageWidgetDefinitionType",
      required: true,
      format: "",
    },
    url: {
      name: "url",
      baseName: "url",
      type: "string",
      required: true,
      format: "",
    },
    urlDarkTheme: {
      name: "urlDarkTheme",
      baseName: "url_dark_theme",
      type: "string",
      required: false,
      format: "",
    },
    verticalAlign: {
      name: "verticalAlign",
      baseName: "vertical_align",
      type: "WidgetVerticalAlign",
      required: false,
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return ImageWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
