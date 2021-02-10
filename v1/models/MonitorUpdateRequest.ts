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

import { Creator } from "./Creator";
import { MonitorOptions } from "./MonitorOptions";
import { MonitorOverallStates } from "./MonitorOverallStates";
import { MonitorState } from "./MonitorState";
import { MonitorType } from "./MonitorType";
import { HttpFile } from "../http/http";

/**
 * Object describing a monitor update request.
 */
export class MonitorUpdateRequest {
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
  "query"?: string;
  /**
   * A list of role identifiers that can be pulled from the Roles API. Cannot be used with `locked` option.
   */
  "restrictedRoles"?: Array<string>;
  "state"?: MonitorState;
  /**
   * Tags associated to your monitor.
   */
  "tags"?: Array<string>;
  "type"?: MonitorType;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "created",
      baseName: "created",
      type: "Date",
      format: "date-time",
    },
    {
      name: "creator",
      baseName: "creator",
      type: "Creator",
      format: "",
    },
    {
      name: "deleted",
      baseName: "deleted",
      type: "Date",
      format: "date-time",
    },
    {
      name: "id",
      baseName: "id",
      type: "number",
      format: "int64",
    },
    {
      name: "message",
      baseName: "message",
      type: "string",
      format: "",
    },
    {
      name: "modified",
      baseName: "modified",
      type: "Date",
      format: "date-time",
    },
    {
      name: "multi",
      baseName: "multi",
      type: "boolean",
      format: "",
    },
    {
      name: "name",
      baseName: "name",
      type: "string",
      format: "",
    },
    {
      name: "options",
      baseName: "options",
      type: "MonitorOptions",
      format: "",
    },
    {
      name: "overallState",
      baseName: "overall_state",
      type: "MonitorOverallStates",
      format: "",
    },
    {
      name: "priority",
      baseName: "priority",
      type: "number",
      format: "int64",
    },
    {
      name: "query",
      baseName: "query",
      type: "string",
      format: "",
    },
    {
      name: "restrictedRoles",
      baseName: "restricted_roles",
      type: "Array<string>",
      format: "",
    },
    {
      name: "state",
      baseName: "state",
      type: "MonitorState",
      format: "",
    },
    {
      name: "tags",
      baseName: "tags",
      type: "Array<string>",
      format: "",
    },
    {
      name: "type",
      baseName: "type",
      type: "MonitorType",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return MonitorUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
