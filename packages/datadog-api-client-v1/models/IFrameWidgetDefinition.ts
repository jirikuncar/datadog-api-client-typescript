/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IFrameWidgetDefinitionType } from "./IFrameWidgetDefinitionType";

export class IFrameWidgetDefinition {
  "type": IFrameWidgetDefinitionType;
  /**
   * URL of the iframe.
   */
  "url": string;

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
    type: {
      name: "type",
      baseName: "type",
      type: "IFrameWidgetDefinitionType",
      required: true,
    },
    url: {
      name: "url",
      baseName: "url",
      type: "string",
      required: true,
    },
  };

  static getAttributeTypeMap() {
    return IFrameWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
