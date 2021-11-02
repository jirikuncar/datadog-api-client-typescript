/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { OrganizationBilling } from "./OrganizationBilling";
import { OrganizationSubscription } from "./OrganizationSubscription";

export class OrganizationCreateBody {
  "billing"?: OrganizationBilling;
  /**
   * The name of the new child-organization, limited to 32 characters.
   */
  "name": string;
  "subscription"?: OrganizationSubscription;

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
    billing: {
      name: "billing",
      baseName: "billing",
      type: "OrganizationBilling",
      required: false,
    },
    name: {
      name: "name",
      baseName: "name",
      type: "string",
      required: true,
    },
    subscription: {
      name: "subscription",
      baseName: "subscription",
      type: "OrganizationSubscription",
      required: false,
    },
  };

  static getAttributeTypeMap() {
    return OrganizationCreateBody.attributeTypeMap;
  }

  public constructor() {}
}
