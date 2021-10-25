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
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Object describing an organization to create.
 */

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
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    billing: {
      baseName: "billing",
      type: "OrganizationBilling",
      format: "",
    },
    name: {
      baseName: "name",
      type: "string",
      format: "",
    },
    subscription: {
      baseName: "subscription",
      type: "OrganizationSubscription",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return OrganizationCreateBody.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): OrganizationCreateBody {
    const res = new OrganizationCreateBody();

    res.billing = ObjectSerializer.deserialize(
      data.billing,
      "OrganizationBilling",
      ""
    );

    if (data.name === undefined) {
      throw new TypeError(
        "missing required attribute 'name' on 'OrganizationCreateBody' object"
      );
    }
    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    res.subscription = ObjectSerializer.deserialize(
      data.subscription,
      "OrganizationSubscription",
      ""
    );

    return res;
  }

  static serialize(data: OrganizationCreateBody): { [key: string]: any } {
    const attributeTypes = OrganizationCreateBody.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.billing = ObjectSerializer.serialize(
      data.billing,
      "OrganizationBilling",
      ""
    );

    if (data.name === undefined) {
      throw new TypeError(
        "missing required attribute 'name' on 'OrganizationCreateBody' object"
      );
    }
    res.name = ObjectSerializer.serialize(data.name, "string", "");

    res.subscription = ObjectSerializer.serialize(
      data.subscription,
      "OrganizationSubscription",
      ""
    );

    return res;
  }

  public constructor() {}
}