/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class AWSLogsServicesRequest {
  /**
   * Your AWS Account ID without dashes.
   */
  "accountId": string;
  /**
   * Array of services IDs set to enable automatic log collection. Discover the list of available services with the get list of AWS log ready services API endpoint.
   */
  "services": Array<string>;

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
    accountId: {
      name: "accountId",
      baseName: "account_id",
      type: "string",
      required: true,
      format: "",
    },
    services: {
      name: "services",
      baseName: "services",
      type: "Array<string>",
      required: true,
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return AWSLogsServicesRequest.attributeTypeMap;
  }

  public constructor() {}
}
