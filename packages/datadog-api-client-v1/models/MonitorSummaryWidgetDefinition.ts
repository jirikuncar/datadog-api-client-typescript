/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MonitorSummaryWidgetDefinitionType } from "./MonitorSummaryWidgetDefinitionType";
import { WidgetColorPreference } from "./WidgetColorPreference";
import { WidgetMonitorSummaryDisplayFormat } from "./WidgetMonitorSummaryDisplayFormat";
import { WidgetMonitorSummarySort } from "./WidgetMonitorSummarySort";
import { WidgetSummaryType } from "./WidgetSummaryType";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * The monitor summary widget displays a summary view of all your Datadog monitors, or a subset based on a query. Only available on FREE layout dashboards.
 */

export class MonitorSummaryWidgetDefinition {
  "colorPreference"?: WidgetColorPreference;
  /**
   * The number of monitors to display.
   */
  "count"?: number;
  "displayFormat"?: WidgetMonitorSummaryDisplayFormat;
  /**
   * Whether to show counts of 0 or not.
   */
  "hideZeroCounts"?: boolean;
  /**
   * Query to filter the monitors with.
   */
  "query": string;
  /**
   * Whether to show the time that has elapsed since the monitor/group triggered.
   */
  "showLastTriggered"?: boolean;
  "sort"?: WidgetMonitorSummarySort;
  /**
   * The start of the list. Typically 0.
   */
  "start"?: number;
  "summaryType"?: WidgetSummaryType;
  /**
   * Title of the widget.
   */
  "title"?: string;
  "titleAlign"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "titleSize"?: string;
  "type": MonitorSummaryWidgetDefinitionType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    colorPreference: {
      baseName: "color_preference",
      type: "WidgetColorPreference",
      format: "",
    },
    count: {
      baseName: "count",
      type: "number",
      format: "int64",
    },
    displayFormat: {
      baseName: "display_format",
      type: "WidgetMonitorSummaryDisplayFormat",
      format: "",
    },
    hideZeroCounts: {
      baseName: "hide_zero_counts",
      type: "boolean",
      format: "",
    },
    query: {
      baseName: "query",
      type: "string",
      format: "",
    },
    showLastTriggered: {
      baseName: "show_last_triggered",
      type: "boolean",
      format: "",
    },
    sort: {
      baseName: "sort",
      type: "WidgetMonitorSummarySort",
      format: "",
    },
    start: {
      baseName: "start",
      type: "number",
      format: "int64",
    },
    summaryType: {
      baseName: "summary_type",
      type: "WidgetSummaryType",
      format: "",
    },
    title: {
      baseName: "title",
      type: "string",
      format: "",
    },
    titleAlign: {
      baseName: "title_align",
      type: "WidgetTextAlign",
      format: "",
    },
    titleSize: {
      baseName: "title_size",
      type: "string",
      format: "",
    },
    type: {
      baseName: "type",
      type: "MonitorSummaryWidgetDefinitionType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return MonitorSummaryWidgetDefinition.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): MonitorSummaryWidgetDefinition {
    const res = new MonitorSummaryWidgetDefinition();

    if (["background", "text", undefined].includes(data.color_preference)) {
      res.colorPreference = data.color_preference;
    } else {
      const raw = new MonitorSummaryWidgetDefinition();
      raw.unparsedObject = data;
      return raw;
    }

    res.count = ObjectSerializer.deserialize(data.count, "number", "int64");

    if (
      ["counts", "countsAndList", "list", undefined].includes(
        data.display_format
      )
    ) {
      res.displayFormat = data.display_format;
    } else {
      const raw = new MonitorSummaryWidgetDefinition();
      raw.unparsedObject = data;
      return raw;
    }

    res.hideZeroCounts = ObjectSerializer.deserialize(
      data.hide_zero_counts,
      "boolean",
      ""
    );

    if (data.query === undefined) {
      throw new TypeError(
        "missing required attribute 'query' on 'MonitorSummaryWidgetDefinition' object"
      );
    }
    res.query = ObjectSerializer.deserialize(data.query, "string", "");

    res.showLastTriggered = ObjectSerializer.deserialize(
      data.show_last_triggered,
      "boolean",
      ""
    );

    if (
      [
        "name",
        "group",
        "status",
        "tags",
        "triggered",
        "group,asc",
        "group,desc",
        "name,asc",
        "name,desc",
        "status,asc",
        "status,desc",
        "tags,asc",
        "tags,desc",
        "triggered,asc",
        "triggered,desc",
        undefined,
      ].includes(data.sort)
    ) {
      res.sort = data.sort;
    } else {
      const raw = new MonitorSummaryWidgetDefinition();
      raw.unparsedObject = data;
      return raw;
    }

    res.start = ObjectSerializer.deserialize(data.start, "number", "int64");

    if (
      ["monitors", "groups", "combined", undefined].includes(data.summary_type)
    ) {
      res.summaryType = data.summary_type;
    } else {
      const raw = new MonitorSummaryWidgetDefinition();
      raw.unparsedObject = data;
      return raw;
    }

    res.title = ObjectSerializer.deserialize(data.title, "string", "");

    if (["center", "left", "right", undefined].includes(data.title_align)) {
      res.titleAlign = data.title_align;
    } else {
      const raw = new MonitorSummaryWidgetDefinition();
      raw.unparsedObject = data;
      return raw;
    }

    res.titleSize = ObjectSerializer.deserialize(data.title_size, "string", "");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'MonitorSummaryWidgetDefinition' object"
      );
    }
    if (["manage_status", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      const raw = new MonitorSummaryWidgetDefinition();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: MonitorSummaryWidgetDefinition): {
    [key: string]: any;
  } {
    const attributeTypes = MonitorSummaryWidgetDefinition.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (["background", "text", undefined].includes(data.colorPreference)) {
      res.color_preference = data.colorPreference;
    } else {
      throw TypeError(
        `invalid enum value ${data.colorPreference} for colorPreference`
      );
    }

    res.count = ObjectSerializer.serialize(data.count, "number", "int64");

    if (
      ["counts", "countsAndList", "list", undefined].includes(
        data.displayFormat
      )
    ) {
      res.display_format = data.displayFormat;
    } else {
      throw TypeError(
        `invalid enum value ${data.displayFormat} for displayFormat`
      );
    }

    res.hide_zero_counts = ObjectSerializer.serialize(
      data.hideZeroCounts,
      "boolean",
      ""
    );

    if (data.query === undefined) {
      throw new TypeError(
        "missing required attribute 'query' on 'MonitorSummaryWidgetDefinition' object"
      );
    }
    res.query = ObjectSerializer.serialize(data.query, "string", "");

    res.show_last_triggered = ObjectSerializer.serialize(
      data.showLastTriggered,
      "boolean",
      ""
    );

    if (
      [
        "name",
        "group",
        "status",
        "tags",
        "triggered",
        "group,asc",
        "group,desc",
        "name,asc",
        "name,desc",
        "status,asc",
        "status,desc",
        "tags,asc",
        "tags,desc",
        "triggered,asc",
        "triggered,desc",
        undefined,
      ].includes(data.sort)
    ) {
      res.sort = data.sort;
    } else {
      throw TypeError(`invalid enum value ${data.sort} for sort`);
    }

    res.start = ObjectSerializer.serialize(data.start, "number", "int64");

    if (
      ["monitors", "groups", "combined", undefined].includes(data.summaryType)
    ) {
      res.summary_type = data.summaryType;
    } else {
      throw TypeError(`invalid enum value ${data.summaryType} for summaryType`);
    }

    res.title = ObjectSerializer.serialize(data.title, "string", "");

    if (["center", "left", "right", undefined].includes(data.titleAlign)) {
      res.title_align = data.titleAlign;
    } else {
      throw TypeError(`invalid enum value ${data.titleAlign} for titleAlign`);
    }

    res.title_size = ObjectSerializer.serialize(data.titleSize, "string", "");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'MonitorSummaryWidgetDefinition' object"
      );
    }
    if (["manage_status", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}