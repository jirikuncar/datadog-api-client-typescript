/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Creator } from "./Creator";
import { SyntheticsStep } from "./SyntheticsStep";
import { SyntheticsTestConfig } from "./SyntheticsTestConfig";
import { SyntheticsTestDetailsSubType } from "./SyntheticsTestDetailsSubType";
import { SyntheticsTestDetailsType } from "./SyntheticsTestDetailsType";
import { SyntheticsTestOptions } from "./SyntheticsTestOptions";
import { SyntheticsTestPauseStatus } from "./SyntheticsTestPauseStatus";

export class SyntheticsTestDetails {
  "config"?: SyntheticsTestConfig;
  "creator"?: Creator;
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
   * The test public ID.
   */
  "publicId"?: string;
  "status"?: SyntheticsTestPauseStatus;
  /**
   * For browser test, the steps of the test.
   */
  "steps"?: Array<SyntheticsStep>;
  "subtype"?: SyntheticsTestDetailsSubType;
  /**
   * Array of tags attached to the test.
   */
  "tags"?: Array<string>;
  "type"?: SyntheticsTestDetailsType;

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
    config: {
      name: "config",
      baseName: "config",
      type: "SyntheticsTestConfig",
      required: false,
      format: "",
    },
    creator: {
      name: "creator",
      baseName: "creator",
      type: "Creator",
      required: false,
      format: "",
    },
    locations: {
      name: "locations",
      baseName: "locations",
      type: "Array<string>",
      required: false,
      format: "",
    },
    message: {
      name: "message",
      baseName: "message",
      type: "string",
      required: false,
      format: "",
    },
    monitorId: {
      name: "monitorId",
      baseName: "monitor_id",
      type: "number",
      required: false,
      format: "int64",
    },
    name: {
      name: "name",
      baseName: "name",
      type: "string",
      required: false,
      format: "",
    },
    options: {
      name: "options",
      baseName: "options",
      type: "SyntheticsTestOptions",
      required: false,
      format: "",
    },
    publicId: {
      name: "publicId",
      baseName: "public_id",
      type: "string",
      required: false,
      format: "",
    },
    status: {
      name: "status",
      baseName: "status",
      type: "SyntheticsTestPauseStatus",
      required: false,
      format: "",
    },
    steps: {
      name: "steps",
      baseName: "steps",
      type: "Array<SyntheticsStep>",
      required: false,
      format: "",
    },
    subtype: {
      name: "subtype",
      baseName: "subtype",
      type: "SyntheticsTestDetailsSubType",
      required: false,
      format: "",
    },
    tags: {
      name: "tags",
      baseName: "tags",
      type: "Array<string>",
      required: false,
      format: "",
    },
    type: {
      name: "type",
      baseName: "type",
      type: "SyntheticsTestDetailsType",
      required: false,
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsTestDetails.attributeTypeMap;
  }

  public constructor() {}
}
