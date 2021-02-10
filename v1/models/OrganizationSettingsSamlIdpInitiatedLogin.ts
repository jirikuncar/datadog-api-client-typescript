/**
 * Datadog API V1 Collection
 * Collection of all Datadog Public endpoints.
 *
 * OpenAPI spec version: 1.0
 * Contact: support@datadoghq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from "../http/http";

/**
 * Has one property enabled (boolean).
 */
export class OrganizationSettingsSamlIdpInitiatedLogin {
  /**
   * Whether SAML IdP initiated login is enabled, learn more in the [SAML documentation](https://docs.datadoghq.com/account_management/saml/#idp-initiated-login).
   */
  "enabled"?: boolean;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "enabled",
      baseName: "enabled",
      type: "boolean",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return OrganizationSettingsSamlIdpInitiatedLogin.attributeTypeMap;
  }

  public constructor() {}
}
