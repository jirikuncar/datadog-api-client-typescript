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
import { ApplicationKey } from "./ApplicationKey";
import { Organization } from "./Organization";
import { User } from "./User";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Response object for an organization creation.
 */

export class OrganizationCreateResponse {
  "apiKey"?: ApiKey;
  "applicationKey"?: ApplicationKey;
  "org"?: Organization;
  "user"?: User;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    apiKey: {
      baseName: "api_key",
      type: "ApiKey",
    },
    applicationKey: {
      baseName: "application_key",
      type: "ApplicationKey",
    },
    org: {
      baseName: "org",
      type: "Organization",
    },
    user: {
      baseName: "user",
      type: "User",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OrganizationCreateResponse.attributeTypeMap;
  }

  public constructor() {}
}
