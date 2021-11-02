/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class LogsResponseMetadataPage {
  /**
   * The cursor to use to get the next results, if any. To make the next request, use the same. parameters with the addition of the `page[cursor]`.
   */
  "after"?: string;

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
    after: {
      name: "after",
      baseName: "after",
      type: "string",
      required: false,
    },
  };

  static getAttributeTypeMap() {
    return LogsResponseMetadataPage.attributeTypeMap;
  }

  public constructor() {}
}
