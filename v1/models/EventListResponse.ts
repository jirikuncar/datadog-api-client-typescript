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

import { Event } from "./Event";
import { HttpFile } from "../http/http";

/**
 * An event list response.
 */
export class EventListResponse {
  /**
   * An array of events.
   */
  "events"?: Array<Event>;
  /**
   * A status.
   */
  "status"?: string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "events",
      baseName: "events",
      type: "Array<Event>",
      format: "",
    },
    {
      name: "status",
      baseName: "status",
      type: "string",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return EventListResponse.attributeTypeMap;
  }

  public constructor() {}
}
