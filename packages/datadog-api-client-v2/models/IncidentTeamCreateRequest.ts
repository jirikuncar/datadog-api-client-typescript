/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IncidentTeamCreateData } from "./IncidentTeamCreateData";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Create request with an incident team payload.
 */

export class IncidentTeamCreateRequest {
  "data": IncidentTeamCreateData;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "IncidentTeamCreateData",
      required: true,
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentTeamCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
