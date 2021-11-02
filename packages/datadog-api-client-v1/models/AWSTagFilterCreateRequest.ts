/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AWSNamespace } from "./AWSNamespace";

export class AWSTagFilterCreateRequest {
  /**
   * Your AWS Account ID without dashes.
   */
  "accountId"?: string;
  "namespace"?: AWSNamespace;
  /**
   * The tag filter string.
   */
  "tagFilterStr"?: string;

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
    accountId: {
      name: "accountId",
      baseName: "account_id",
      type: "string",
      required: false,
    },
    namespace: {
      name: "namespace",
      baseName: "namespace",
      type: "AWSNamespace",
      required: false,
    },
    tagFilterStr: {
      name: "tagFilterStr",
      baseName: "tag_filter_str",
      type: "string",
      required: false,
    },
  };

  static getAttributeTypeMap() {
    return AWSTagFilterCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
