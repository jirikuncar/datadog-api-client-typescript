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
 * Your Google Cloud Platform Account.
 */
export class GCPAccount {
  /**
   * Should be `https://www.googleapis.com/oauth2/v1/certs`.
   */
  "authProviderX509CertUrl"?: string;
  /**
   * Should be `https://accounts.google.com/o/oauth2/auth`.
   */
  "authUri"?: string;
  /**
   * Silence monitors for expected GCE instance shutdowns.
   */
  "automute"?: boolean;
  /**
   * Your email found in your JSON service account key.
   */
  "clientEmail"?: string;
  /**
   * Your ID found in your JSON service account key.
   */
  "clientId"?: string;
  /**
   * Should be `https://www.googleapis.com/robot/v1/metadata/x509/<CLIENT_EMAIL>` where `<CLIENT_EMAIL>` is the email found in your JSON service account key.
   */
  "clientX509CertUrl"?: string;
  /**
   * An array of errors.
   */
  "errors"?: Array<string>;
  /**
   * Limit the GCE instances that are pulled into Datadog by using tags. Only hosts that match one of the defined tags are imported into Datadog.
   */
  "hostFilters"?: string;
  /**
   * Your private key name found in your JSON service account key.
   */
  "privateKey"?: string;
  /**
   * Your private key ID found in your JSON service account key.
   */
  "privateKeyId"?: string;
  /**
   * Your Google Cloud project ID found in your JSON service account key.
   */
  "projectId"?: string;
  /**
   * Should be `https://accounts.google.com/o/oauth2/token`.
   */
  "tokenUri"?: string;
  /**
   * The value for service_account found in your JSON service account key.
   */
  "type"?: string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "authProviderX509CertUrl",
      baseName: "auth_provider_x509_cert_url",
      type: "string",
      format: "",
    },
    {
      name: "authUri",
      baseName: "auth_uri",
      type: "string",
      format: "",
    },
    {
      name: "automute",
      baseName: "automute",
      type: "boolean",
      format: "",
    },
    {
      name: "clientEmail",
      baseName: "client_email",
      type: "string",
      format: "",
    },
    {
      name: "clientId",
      baseName: "client_id",
      type: "string",
      format: "",
    },
    {
      name: "clientX509CertUrl",
      baseName: "client_x509_cert_url",
      type: "string",
      format: "",
    },
    {
      name: "errors",
      baseName: "errors",
      type: "Array<string>",
      format: "",
    },
    {
      name: "hostFilters",
      baseName: "host_filters",
      type: "string",
      format: "",
    },
    {
      name: "privateKey",
      baseName: "private_key",
      type: "string",
      format: "",
    },
    {
      name: "privateKeyId",
      baseName: "private_key_id",
      type: "string",
      format: "",
    },
    {
      name: "projectId",
      baseName: "project_id",
      type: "string",
      format: "",
    },
    {
      name: "tokenUri",
      baseName: "token_uri",
      type: "string",
      format: "",
    },
    {
      name: "type",
      baseName: "type",
      type: "string",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return GCPAccount.attributeTypeMap;
  }

  public constructor() {}
}
