/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Creator } from "./Creator";
import { DashboardType } from "./DashboardType";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * A dashboard within a list.
 */

export class DashboardListItem {
  "author"?: Creator;
  /**
   * Date of creation of the dashboard.
   */
  "created"?: Date;
  /**
   * URL to the icon of the dashboard.
   */
  "icon"?: string;
  /**
   * ID of the dashboard.
   */
  "id": string;
  /**
   * Whether or not the dashboard is in the favorites.
   */
  "isFavorite"?: boolean;
  /**
   * Whether or not the dashboard is read only.
   */
  "isReadOnly"?: boolean;
  /**
   * Whether the dashboard is publicly shared or not.
   */
  "isShared"?: boolean;
  /**
   * Date of last edition of the dashboard.
   */
  "modified"?: Date;
  /**
   * Popularity of the dashboard.
   */
  "popularity"?: number;
  /**
   * Title of the dashboard.
   */
  "title"?: string;
  "type": DashboardType;
  /**
   * URL path to the dashboard.
   */
  "url"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    author: {
      baseName: "author",
      type: "Creator",
      format: "",
    },
    created: {
      baseName: "created",
      type: "Date",
      format: "date-time",
    },
    icon: {
      baseName: "icon",
      type: "string",
      format: "",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "",
    },
    isFavorite: {
      baseName: "is_favorite",
      type: "boolean",
      format: "",
    },
    isReadOnly: {
      baseName: "is_read_only",
      type: "boolean",
      format: "",
    },
    isShared: {
      baseName: "is_shared",
      type: "boolean",
      format: "",
    },
    modified: {
      baseName: "modified",
      type: "Date",
      format: "date-time",
    },
    popularity: {
      baseName: "popularity",
      type: "number",
      format: "int32",
    },
    title: {
      baseName: "title",
      type: "string",
      format: "",
    },
    type: {
      baseName: "type",
      type: "DashboardType",
      format: "",
    },
    url: {
      baseName: "url",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return DashboardListItem.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): DashboardListItem {
    const res = new DashboardListItem();

    res.author = ObjectSerializer.deserialize(data.author, "Creator", "");

    res.created = ObjectSerializer.deserialize(
      data.created,
      "Date",
      "date-time"
    );

    res.icon = ObjectSerializer.deserialize(data.icon, "string", "");

    if (data.id === undefined) {
      throw new TypeError(
        "missing required attribute 'id' on 'DashboardListItem' object"
      );
    }
    res.id = ObjectSerializer.deserialize(data.id, "string", "");

    res.isFavorite = ObjectSerializer.deserialize(
      data.is_favorite,
      "boolean",
      ""
    );

    res.isReadOnly = ObjectSerializer.deserialize(
      data.is_read_only,
      "boolean",
      ""
    );

    res.isShared = ObjectSerializer.deserialize(data.is_shared, "boolean", "");

    res.modified = ObjectSerializer.deserialize(
      data.modified,
      "Date",
      "date-time"
    );

    res.popularity = ObjectSerializer.deserialize(
      data.popularity,
      "number",
      "int32"
    );

    res.title = ObjectSerializer.deserialize(data.title, "string", "");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'DashboardListItem' object"
      );
    }
    if (
      [
        "custom_timeboard",
        "custom_screenboard",
        "integration_screenboard",
        "integration_timeboard",
        "host_timeboard",
        undefined,
      ].includes(data.type)
    ) {
      res.type = data.type;
    } else {
      const raw = new DashboardListItem();
      raw.unparsedObject = data;
      return raw;
    }

    res.url = ObjectSerializer.deserialize(data.url, "string", "");

    return res;
  }

  static serialize(data: DashboardListItem): { [key: string]: any } {
    const attributeTypes = DashboardListItem.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.author = ObjectSerializer.serialize(data.author, "Creator", "");

    res.created = ObjectSerializer.serialize(data.created, "Date", "date-time");

    res.icon = ObjectSerializer.serialize(data.icon, "string", "");

    if (data.id === undefined) {
      throw new TypeError(
        "missing required attribute 'id' on 'DashboardListItem' object"
      );
    }
    res.id = ObjectSerializer.serialize(data.id, "string", "");

    res.is_favorite = ObjectSerializer.serialize(
      data.isFavorite,
      "boolean",
      ""
    );

    res.is_read_only = ObjectSerializer.serialize(
      data.isReadOnly,
      "boolean",
      ""
    );

    res.is_shared = ObjectSerializer.serialize(data.isShared, "boolean", "");

    res.modified = ObjectSerializer.serialize(
      data.modified,
      "Date",
      "date-time"
    );

    res.popularity = ObjectSerializer.serialize(
      data.popularity,
      "number",
      "int32"
    );

    res.title = ObjectSerializer.serialize(data.title, "string", "");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'DashboardListItem' object"
      );
    }
    if (
      [
        "custom_timeboard",
        "custom_screenboard",
        "integration_screenboard",
        "integration_timeboard",
        "host_timeboard",
        undefined,
      ].includes(data.type)
    ) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    res.url = ObjectSerializer.serialize(data.url, "string", "");

    return res;
  }

  public constructor() {}
}