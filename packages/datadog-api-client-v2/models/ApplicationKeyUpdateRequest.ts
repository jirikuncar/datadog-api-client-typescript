/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApplicationKeyUpdateData } from "./ApplicationKeyUpdateData";

export class ApplicationKeyUpdateRequest {
  "data": ApplicationKeyUpdateData;

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
    data: {
      name: "data",
      baseName: "data",
      type: "ApplicationKeyUpdateData",
      required: true,
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return ApplicationKeyUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
