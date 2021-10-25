/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UsageBillableSummaryKeys } from "./UsageBillableSummaryKeys";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Response with monthly summary of data billed by Datadog.
 */

export class UsageBillableSummaryHour {
  /**
   * The billing plan.
   */
  "billingPlan"?: string;
  /**
   * Shows the last date of usage.
   */
  "endDate"?: Date;
  /**
   * The number of organizations.
   */
  "numOrgs"?: number;
  /**
   * The organization name.
   */
  "orgName"?: string;
  /**
   * The organization public ID.
   */
  "publicId"?: string;
  /**
   * Shows usage aggregation for a billing period.
   */
  "ratioInMonth"?: number;
  /**
   * Shows the first date of usage.
   */
  "startDate"?: Date;
  "usage"?: UsageBillableSummaryKeys;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    billingPlan: {
      baseName: "billing_plan",
      type: "string",
      format: "",
    },
    endDate: {
      baseName: "end_date",
      type: "Date",
      format: "date-time",
    },
    numOrgs: {
      baseName: "num_orgs",
      type: "number",
      format: "int64",
    },
    orgName: {
      baseName: "org_name",
      type: "string",
      format: "",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
      format: "",
    },
    ratioInMonth: {
      baseName: "ratio_in_month",
      type: "number",
      format: "int64",
    },
    startDate: {
      baseName: "start_date",
      type: "Date",
      format: "date-time",
    },
    usage: {
      baseName: "usage",
      type: "UsageBillableSummaryKeys",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return UsageBillableSummaryHour.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): UsageBillableSummaryHour {
    const res = new UsageBillableSummaryHour();

    res.billingPlan = ObjectSerializer.deserialize(
      data.billing_plan,
      "string",
      ""
    );

    res.endDate = ObjectSerializer.deserialize(
      data.end_date,
      "Date",
      "date-time"
    );

    res.numOrgs = ObjectSerializer.deserialize(
      data.num_orgs,
      "number",
      "int64"
    );

    res.orgName = ObjectSerializer.deserialize(data.org_name, "string", "");

    res.publicId = ObjectSerializer.deserialize(data.public_id, "string", "");

    res.ratioInMonth = ObjectSerializer.deserialize(
      data.ratio_in_month,
      "number",
      "int64"
    );

    res.startDate = ObjectSerializer.deserialize(
      data.start_date,
      "Date",
      "date-time"
    );

    res.usage = ObjectSerializer.deserialize(
      data.usage,
      "UsageBillableSummaryKeys",
      ""
    );

    return res;
  }

  static serialize(data: UsageBillableSummaryHour): { [key: string]: any } {
    const attributeTypes = UsageBillableSummaryHour.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.billing_plan = ObjectSerializer.serialize(
      data.billingPlan,
      "string",
      ""
    );

    res.end_date = ObjectSerializer.serialize(
      data.endDate,
      "Date",
      "date-time"
    );

    res.num_orgs = ObjectSerializer.serialize(data.numOrgs, "number", "int64");

    res.org_name = ObjectSerializer.serialize(data.orgName, "string", "");

    res.public_id = ObjectSerializer.serialize(data.publicId, "string", "");

    res.ratio_in_month = ObjectSerializer.serialize(
      data.ratioInMonth,
      "number",
      "int64"
    );

    res.start_date = ObjectSerializer.serialize(
      data.startDate,
      "Date",
      "date-time"
    );

    res.usage = ObjectSerializer.serialize(
      data.usage,
      "UsageBillableSummaryKeys",
      ""
    );

    return res;
  }

  public constructor() {}
}