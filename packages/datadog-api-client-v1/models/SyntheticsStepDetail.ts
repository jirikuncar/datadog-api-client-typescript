/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsBrowserError } from "./SyntheticsBrowserError";
import { SyntheticsCheckType } from "./SyntheticsCheckType";
import { SyntheticsCoreWebVitals } from "./SyntheticsCoreWebVitals";
import { SyntheticsPlayingTab } from "./SyntheticsPlayingTab";
import { SyntheticsStepDetailWarning } from "./SyntheticsStepDetailWarning";
import { SyntheticsStepType } from "./SyntheticsStepType";

export class SyntheticsStepDetail {
  /**
   * Array of errors collected for a browser test.
   */
  "browserErrors"?: Array<SyntheticsBrowserError>;
  "checkType"?: SyntheticsCheckType;
  /**
   * Description of the test.
   */
  "description"?: string;
  /**
   * Total duration in millisecond of the test.
   */
  "duration"?: number;
  /**
   * Error returned by the test.
   */
  "error"?: string;
  "playingTab"?: SyntheticsPlayingTab;
  /**
   * Whether or not screenshots where collected by the test.
   */
  "screenshotBucketKey"?: boolean;
  /**
   * Whether or not to skip this step.
   */
  "skipped"?: boolean;
  /**
   * Whether or not snapshots where collected by the test.
   */
  "snapshotBucketKey"?: boolean;
  /**
   * The step ID.
   */
  "stepId"?: number;
  /**
   * If this steps include a sub-test. [Subtests documentation](https://docs.datadoghq.com/synthetics/browser_tests/advanced_options/#subtests).
   */
  "subTestStepDetails"?: Array<SyntheticsStepDetail>;
  /**
   * Time before starting the step.
   */
  "timeToInteractive"?: number;
  "type"?: SyntheticsStepType;
  /**
   * URL to perform the step against.
   */
  "url"?: string;
  /**
   * Value for the step.
   */
  "value"?: any;
  /**
   * Array of Core Web Vitals metrics for the step.
   */
  "vitalsMetrics"?: Array<SyntheticsCoreWebVitals>;
  /**
   * Warning collected that didn't failed the step.
   */
  "warnings"?: Array<SyntheticsStepDetailWarning>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: {
      name: string;
      baseName: string;
      type: string;
      required: boolean;
      format?: string;
    };
  } = {
    browserErrors: {
      name: "browserErrors",
      baseName: "browserErrors",
      type: "Array<SyntheticsBrowserError>",
      required: false,
    },
    checkType: {
      name: "checkType",
      baseName: "checkType",
      type: "SyntheticsCheckType",
      required: false,
    },
    description: {
      name: "description",
      baseName: "description",
      type: "string",
      required: false,
    },
    duration: {
      name: "duration",
      baseName: "duration",
      type: "number",
      required: false,
      format: "double",
    },
    error: {
      name: "error",
      baseName: "error",
      type: "string",
      required: false,
    },
    playingTab: {
      name: "playingTab",
      baseName: "playingTab",
      type: "SyntheticsPlayingTab",
      required: false,
    },
    screenshotBucketKey: {
      name: "screenshotBucketKey",
      baseName: "screenshotBucketKey",
      type: "boolean",
      required: false,
    },
    skipped: {
      name: "skipped",
      baseName: "skipped",
      type: "boolean",
      required: false,
    },
    snapshotBucketKey: {
      name: "snapshotBucketKey",
      baseName: "snapshotBucketKey",
      type: "boolean",
      required: false,
    },
    stepId: {
      name: "stepId",
      baseName: "stepId",
      type: "number",
      required: false,
      format: "int64",
    },
    subTestStepDetails: {
      name: "subTestStepDetails",
      baseName: "subTestStepDetails",
      type: "Array<SyntheticsStepDetail>",
      required: false,
    },
    timeToInteractive: {
      name: "timeToInteractive",
      baseName: "timeToInteractive",
      type: "number",
      required: false,
      format: "double",
    },
    type: {
      name: "type",
      baseName: "type",
      type: "SyntheticsStepType",
      required: false,
    },
    url: {
      name: "url",
      baseName: "url",
      type: "string",
      required: false,
    },
    value: {
      name: "value",
      baseName: "value",
      type: "any",
      required: false,
    },
    vitalsMetrics: {
      name: "vitalsMetrics",
      baseName: "vitalsMetrics",
      type: "Array<SyntheticsCoreWebVitals>",
      required: false,
    },
    warnings: {
      name: "warnings",
      baseName: "warnings",
      type: "Array<SyntheticsStepDetailWarning>",
      required: false,
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsStepDetail.attributeTypeMap;
  }

  public constructor() {}
}
