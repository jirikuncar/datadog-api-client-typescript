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

import { ServiceMapWidgetDefinitionType } from "./ServiceMapWidgetDefinitionType";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { HttpFile } from "../http/http";

/**
 * This widget displays a map of a service to all of the services that call it, and all of the services that it calls.
 */
export class ServiceMapWidgetDefinition {
  /**
   * List of custom links.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * Your environment and primary tag (or * if enabled for your account).
   */
  "filters": Array<string>;
  /**
   * The ID of the service you want to map.
   */
  "service": string;
  /**
   * The title of your widget.
   */
  "title"?: string;
  "titleAlign"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "titleSize"?: string;
  "type": ServiceMapWidgetDefinitionType;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "customLinks",
      baseName: "custom_links",
      type: "Array<WidgetCustomLink>",
      format: "",
    },
    {
      name: "filters",
      baseName: "filters",
      type: "Array<string>",
      format: "",
    },
    {
      name: "service",
      baseName: "service",
      type: "string",
      format: "",
    },
    {
      name: "title",
      baseName: "title",
      type: "string",
      format: "",
    },
    {
      name: "titleAlign",
      baseName: "title_align",
      type: "WidgetTextAlign",
      format: "",
    },
    {
      name: "titleSize",
      baseName: "title_size",
      type: "string",
      format: "",
    },
    {
      name: "type",
      baseName: "type",
      type: "ServiceMapWidgetDefinitionType",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return ServiceMapWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
