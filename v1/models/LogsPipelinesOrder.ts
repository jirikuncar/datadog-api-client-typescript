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

import { HttpFile } from "../http/http";

/**
 * Object containing the ordered list of pipeline IDs.
 */
export class LogsPipelinesOrder {
  /**
   * Ordered Array of `<PIPELINE_ID>` strings, the order of pipeline IDs in the array define the overall Pipelines order for Datadog.
   */
  "pipelineIds": Array<string>;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "pipelineIds",
      baseName: "pipeline_ids",
      type: "Array<string>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return LogsPipelinesOrder.attributeTypeMap;
  }

  public constructor() {}
}
