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
 * Set the boolean property enabled to enable or disable single sign on with SAML. See the SAML documentation for more information about all SAML settings.
 */
export class OrganizationSettingsSaml {
  /**
   * Whether or not SAML is enabled for this organization.
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
    return OrganizationSettingsSaml.attributeTypeMap;
  }

  public constructor() {}
}
