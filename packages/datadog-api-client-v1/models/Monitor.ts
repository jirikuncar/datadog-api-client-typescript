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
import { MonitorOptions } from "./MonitorOptions";
import { MonitorOverallStates } from "./MonitorOverallStates";
import { MonitorState } from "./MonitorState";
import { MonitorType } from "./MonitorType";

export class Monitor {
  /**
   * Timestamp of the monitor creation.
   */
  "created"?: Date;
  "creator"?: Creator;
  /**
   * Whether or not the monitor is deleted. (Always `null`)
   */
  "deleted"?: Date;
  /**
   * ID of this monitor.
   */
  "id"?: number;
  /**
   * A message to include with notifications for this monitor.
   */
  "message"?: string;
  /**
   * Last timestamp when the monitor was edited.
   */
  "modified"?: Date;
  /**
   * Whether or not the monitor is broken down on different groups.
   */
  "multi"?: boolean;
  /**
   * The monitor name.
   */
  "name"?: string;
  "options"?: MonitorOptions;
  "overallState"?: MonitorOverallStates;
  /**
   * Integer from 1 (high) to 5 (low) indicating alert severity.
   */
  "priority"?: number;
  /**
   * The monitor query.
   */
  "query": string;
  /**
   * A list of role identifiers that can be pulled from the Roles API. Cannot be used with `locked` option.
   */
  "restrictedRoles"?: Array<string>;
  "state"?: MonitorState;
  /**
   * Tags associated to your monitor.
   */
  "tags"?: Array<string>;
  "type": MonitorType;

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
    created: {
      name: "created",
      baseName: "created",
      type: "Date",
      required: false,
      format: "date-time",
    },
    creator: {
      name: "creator",
      baseName: "creator",
      type: "Creator",
      required: false,
      format: "",
    },
    deleted: {
      name: "deleted",
      baseName: "deleted",
      type: "Date",
      required: false,
      format: "date-time",
    },
    id: {
      name: "id",
      baseName: "id",
      type: "number",
      required: false,
      format: "int64",
    },
    message: {
      name: "message",
      baseName: "message",
      type: "string",
      required: false,
      format: "",
    },
    modified: {
      name: "modified",
      baseName: "modified",
      type: "Date",
      required: false,
      format: "date-time",
    },
    multi: {
      name: "multi",
      baseName: "multi",
      type: "boolean",
      required: false,
      format: "",
    },
    name: {
      name: "name",
      baseName: "name",
      type: "string",
      required: false,
      format: "",
    },
    options: {
      name: "options",
      baseName: "options",
      type: "MonitorOptions",
      required: false,
      format: "",
    },
    overallState: {
      name: "overallState",
      baseName: "overall_state",
      type: "MonitorOverallStates",
      required: false,
      format: "",
    },
    priority: {
      name: "priority",
      baseName: "priority",
      type: "number",
      required: false,
      format: "int64",
    },
    query: {
      name: "query",
      baseName: "query",
      type: "string",
      required: true,
      format: "",
    },
    restrictedRoles: {
      name: "restrictedRoles",
      baseName: "restricted_roles",
      type: "Array<string>",
      required: false,
      format: "",
    },
    state: {
      name: "state",
      baseName: "state",
      type: "MonitorState",
      required: false,
      format: "",
    },
    tags: {
      name: "tags",
      baseName: "tags",
      type: "Array<string>",
      required: false,
      format: "",
    },
    type: {
      name: "type",
      baseName: "type",
      type: "MonitorType",
      required: true,
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return Monitor.attributeTypeMap;
  }

  public constructor() {}
}
