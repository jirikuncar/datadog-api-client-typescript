/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UserUpdateData } from "./UserUpdateData";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Update a user.
 */

export class UserUpdateRequest {
  "data": UserUpdateData;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "UserUpdateData",
      required: true,
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return UserUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
