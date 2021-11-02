/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UsageAttributionValues } from "./UsageAttributionValues";

export class UsageAttributionBody {
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: [YYYY-MM].
   */
  "month"?: Date;
  /**
   * The name of the organization.
   */
  "orgName"?: string;
  /**
   * The organization public ID.
   */
  "publicId"?: string;
  /**
   * The source of the usage attribution tag configuration and the selected tags in the format `<source_org_name>:<selected tag 1>-<selected tag 2>-<selected tag 3>`.
   */
  "tagConfigSource"?: string;
  /**
   * Usage Summary by tag name.
   */
  "tags"?: { [key: string]: Array<string> };
  /**
   * Shows the the most recent hour in the current months for all organizations for which all usages were calculated.
   */
  "updatedAt"?: string;
  "values"?: UsageAttributionValues;

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
    month: {
      name: "month",
      baseName: "month",
      type: "Date",
      required: false,
      format: "date-time",
    },
    orgName: {
      name: "orgName",
      baseName: "org_name",
      type: "string",
      required: false,
    },
    publicId: {
      name: "publicId",
      baseName: "public_id",
      type: "string",
      required: false,
    },
    tagConfigSource: {
      name: "tagConfigSource",
      baseName: "tag_config_source",
      type: "string",
      required: false,
    },
    tags: {
      name: "tags",
      baseName: "tags",
      type: "{ [key: string]: Array<string>; }",
      required: false,
    },
    updatedAt: {
      name: "updatedAt",
      baseName: "updated_at",
      type: "string",
      required: false,
    },
    values: {
      name: "values",
      baseName: "values",
      type: "UsageAttributionValues",
      required: false,
    },
  };

  static getAttributeTypeMap() {
    return UsageAttributionBody.attributeTypeMap;
  }

  public constructor() {}
}
