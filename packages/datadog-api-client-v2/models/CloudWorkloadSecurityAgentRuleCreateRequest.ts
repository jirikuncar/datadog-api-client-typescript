/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CloudWorkloadSecurityAgentRuleCreateData } from "./CloudWorkloadSecurityAgentRuleCreateData";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Request object that includes the Agent rule to create.
 */

export class CloudWorkloadSecurityAgentRuleCreateRequest {
  "data": CloudWorkloadSecurityAgentRuleCreateData;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "CloudWorkloadSecurityAgentRuleCreateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CloudWorkloadSecurityAgentRuleCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
