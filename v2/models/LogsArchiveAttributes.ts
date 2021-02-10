/**
 * Datadog API V2 Collection
 * Collection of all Datadog Public endpoints.
 *
 * OpenAPI spec version: 1.0
 * Contact: support@datadoghq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsArchiveDestination } from "./LogsArchiveDestination";
import { LogsArchiveState } from "./LogsArchiveState";
import { HttpFile } from "../http/http";

/**
 * The attributes associated with the archive.
 */
export class LogsArchiveAttributes {
  "destination": LogsArchiveDestination;
  /**
   * To store the tags in the archive, set the value \"true\". If it is set to \"false\", the tags will be deleted when the logs are sent to the archive.
   */
  "includeTags"?: boolean;
  /**
   * The archive name.
   */
  "name": string;
  /**
   * The archive query/filter. Logs matching this query are included in the archive.
   */
  "query": string;
  /**
   * An array of tags to add to rehydrated logs from an archive.
   */
  "rehydrationTags"?: Array<string>;
  "state"?: LogsArchiveState;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "destination",
      baseName: "destination",
      type: "LogsArchiveDestination",
      format: "",
    },
    {
      name: "includeTags",
      baseName: "include_tags",
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
      name: "query",
      baseName: "query",
      type: "string",
      format: "",
    },
    {
      name: "rehydrationTags",
      baseName: "rehydration_tags",
      type: "Array<string>",
      format: "",
    },
    {
      name: "state",
      baseName: "state",
      type: "LogsArchiveState",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return LogsArchiveAttributes.attributeTypeMap;
  }

  public constructor() {}
}
