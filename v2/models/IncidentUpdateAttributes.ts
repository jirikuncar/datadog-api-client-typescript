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

import { IncidentFieldAttributes } from "./IncidentFieldAttributes";
import { HttpFile } from "../http/http";

/**
 * The incident's attributes for an update request.
 */
export class IncidentUpdateAttributes {
  /**
   * Timestamp when customers were no longer impacted by the incident.
   */
  "customerImpactEnd"?: Date;
  /**
   * A summary of the impact customers experienced during the incident.
   */
  "customerImpactScope"?: string;
  /**
   * Timestamp when customers began being impacted by the incident.
   */
  "customerImpactStart"?: Date;
  /**
   * A flag indicating whether the incident caused customer impact.
   */
  "customerImpacted"?: boolean;
  /**
   * Timestamp when the incident was detected.
   */
  "detected"?: Date;
  /**
   * A condensed view of the user-defined fields for which to update selections.
   */
  "fields"?: { [key: string]: IncidentFieldAttributes };
  /**
   * Notification handles that will be notified of the incident during update.
   */
  "notificationHandles"?: Array<string>;
  /**
   * Timestamp when the incident's state was set to resolved.
   */
  "resolved"?: Date;
  /**
   * The title of the incident, which summarizes what happened.
   */
  "title"?: string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "customerImpactEnd",
      baseName: "customer_impact_end",
      type: "Date",
      format: "date-time",
    },
    {
      name: "customerImpactScope",
      baseName: "customer_impact_scope",
      type: "string",
      format: "",
    },
    {
      name: "customerImpactStart",
      baseName: "customer_impact_start",
      type: "Date",
      format: "date-time",
    },
    {
      name: "customerImpacted",
      baseName: "customer_impacted",
      type: "boolean",
      format: "",
    },
    {
      name: "detected",
      baseName: "detected",
      type: "Date",
      format: "date-time",
    },
    {
      name: "fields",
      baseName: "fields",
      type: "{ [key: string]: IncidentFieldAttributes; }",
      format: "",
    },
    {
      name: "notificationHandles",
      baseName: "notification_handles",
      type: "Array<string>",
      format: "",
    },
    {
      name: "resolved",
      baseName: "resolved",
      type: "Date",
      format: "date-time",
    },
    {
      name: "title",
      baseName: "title",
      type: "string",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return IncidentUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
