/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class OrganizationSettingsSamlIdpInitiatedLogin {
  /**
   * Whether SAML IdP initiated login is enabled, learn more in the [SAML documentation](https://docs.datadoghq.com/account_management/saml/#idp-initiated-login).
   */
  "enabled"?: boolean;

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
    enabled: {
      name: "enabled",
      baseName: "enabled",
      type: "boolean",
      required: false,
    },
  };

  static getAttributeTypeMap() {
    return OrganizationSettingsSamlIdpInitiatedLogin.attributeTypeMap;
  }

  public constructor() {}
}
