/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class HostTags {
  /**
   * Your host name.
   */
  "host"?: string;
  /**
   * A list of tags to apply to the host.
   */
  "tags"?: Array<string>;

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
    host: {
      name: "host",
      baseName: "host",
      type: "string",
      required: false,
      format: "",
    },
    tags: {
      name: "tags",
      baseName: "tags",
      type: "Array<string>",
      required: false,
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return HostTags.attributeTypeMap;
  }

  public constructor() {}
}
