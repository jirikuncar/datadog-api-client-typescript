/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IncidentServiceRelationships } from "./IncidentServiceRelationships";
import { IncidentServiceType } from "./IncidentServiceType";
import { IncidentServiceUpdateAttributes } from "./IncidentServiceUpdateAttributes";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Incident Service payload for update requests.
 */

export class IncidentServiceUpdateData {
  "attributes"?: IncidentServiceUpdateAttributes;
  /**
   * The incident service's ID.
   */
  "id"?: string;
  "relationships"?: IncidentServiceRelationships;
  "type": IncidentServiceType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "IncidentServiceUpdateAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentServiceRelationships",
    },
    type: {
      baseName: "type",
      type: "IncidentServiceType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentServiceUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
