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
 * The timeframe of the threshold associated with this error or \"all\" if all thresholds are affected.
 */
export type SLOErrorTimeframe = "7d" | "30d" | "90d" | "all";
