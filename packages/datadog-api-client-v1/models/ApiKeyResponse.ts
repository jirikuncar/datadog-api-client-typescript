/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApiKey } from "./ApiKey";

export class ApiKeyResponse {
  "apiKey"?: ApiKey;

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
    apiKey: {
      name: "apiKey",
      baseName: "api_key",
      type: "ApiKey",
      required: false,
    },
  };

  static getAttributeTypeMap() {
    return ApiKeyResponse.attributeTypeMap;
  }

  public constructor() {}
}
