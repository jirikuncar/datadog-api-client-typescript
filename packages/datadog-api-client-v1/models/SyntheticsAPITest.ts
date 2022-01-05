/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsAPITestConfig } from "./SyntheticsAPITestConfig";
import { SyntheticsAPITestType } from "./SyntheticsAPITestType";
import { SyntheticsTestDetailsSubType } from "./SyntheticsTestDetailsSubType";
import { SyntheticsTestOptions } from "./SyntheticsTestOptions";
import { SyntheticsTestPauseStatus } from "./SyntheticsTestPauseStatus";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Object containing details about a Synthetic API test.
 */

export class SyntheticsAPITest {
  "config"?: SyntheticsAPITestConfig;
  /**
   * Array of locations used to run the test.
   */
  "locations"?: Array<string>;
  /**
   * Notification message associated with the test.
   */
  "message"?: string;
  /**
   * The associated monitor ID.
   */
  "monitorId"?: number;
  /**
   * Name of the test.
   */
  "name"?: string;
  "options"?: SyntheticsTestOptions;
  /**
   * The public ID for the test.
   */
  "publicId"?: string;
  "status"?: SyntheticsTestPauseStatus;
  "subtype"?: SyntheticsTestDetailsSubType;
  /**
   * Array of tags attached to the test.
   */
  "tags"?: Array<string>;
  "type"?: SyntheticsAPITestType;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    config: {
      baseName: "config",
      type: "SyntheticsAPITestConfig",
    },
    locations: {
      baseName: "locations",
      type: "Array<string>",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    monitorId: {
      baseName: "monitor_id",
      type: "number",

      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    options: {
      baseName: "options",
      type: "SyntheticsTestOptions",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "SyntheticsTestPauseStatus",
    },
    subtype: {
      baseName: "subtype",
      type: "SyntheticsTestDetailsSubType",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    type: {
      baseName: "type",
      type: "SyntheticsAPITestType",
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsAPITest.attributeTypeMap;
  }

  public constructor() {}
}
