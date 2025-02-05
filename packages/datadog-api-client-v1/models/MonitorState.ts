/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MonitorStateGroup } from "./MonitorStateGroup";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Wrapper object with the different monitor states.
 */

export class MonitorState {
  /**
   * Dictionary where the keys are groups (comma separated lists of tags) and the values are the list of groups your monitor is broken down on.
   */
  "groups"?: { [key: string]: MonitorStateGroup };

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    groups: {
      baseName: "groups",
      type: "{ [key: string]: MonitorStateGroup; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorState.attributeTypeMap;
  }

  public constructor() {}
}
