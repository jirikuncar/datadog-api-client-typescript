/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AWSAccount } from "./AWSAccount";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * List of enabled AWS accounts.
 */

export class AWSAccountListResponse {
  /**
   * List of enabled AWS accounts.
   */
  "accounts"?: Array<AWSAccount>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    accounts: {
      baseName: "accounts",
      type: "Array<AWSAccount>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AWSAccountListResponse.attributeTypeMap;
  }

  public constructor() {}
}
