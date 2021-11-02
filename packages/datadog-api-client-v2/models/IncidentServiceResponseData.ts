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
import { IncidentServiceResponseAttributes } from "./IncidentServiceResponseAttributes";
import { IncidentServiceType } from "./IncidentServiceType";

export class IncidentServiceResponseData {
  "attributes"?: IncidentServiceResponseAttributes;
  /**
   * The incident service's ID.
   */
  "id": string;
  "relationships"?: IncidentServiceRelationships;
  "type": IncidentServiceType;

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
    attributes: {
      name: "attributes",
      baseName: "attributes",
      type: "IncidentServiceResponseAttributes",
      required: false,
      format: "",
    },
    id: {
      name: "id",
      baseName: "id",
      type: "string",
      required: true,
      format: "",
    },
    relationships: {
      name: "relationships",
      baseName: "relationships",
      type: "IncidentServiceRelationships",
      required: false,
      format: "",
    },
    type: {
      name: "type",
      baseName: "type",
      type: "IncidentServiceType",
      required: true,
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return IncidentServiceResponseData.attributeTypeMap;
  }

  public constructor() {}
}
