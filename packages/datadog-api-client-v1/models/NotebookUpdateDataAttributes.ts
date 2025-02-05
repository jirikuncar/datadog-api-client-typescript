/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { NotebookGlobalTime } from "./NotebookGlobalTime";
import { NotebookMetadata } from "./NotebookMetadata";
import { NotebookStatus } from "./NotebookStatus";
import { NotebookUpdateCell } from "./NotebookUpdateCell";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * The data attributes of a notebook.
 */

export class NotebookUpdateDataAttributes {
  /**
   * List of cells to display in the notebook.
   */
  "cells": Array<NotebookUpdateCell>;
  "metadata"?: NotebookMetadata;
  /**
   * The name of the notebook.
   */
  "name": string;
  "status"?: NotebookStatus;
  "time": NotebookGlobalTime;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    cells: {
      baseName: "cells",
      type: "Array<NotebookUpdateCell>",
      required: true,
    },
    metadata: {
      baseName: "metadata",
      type: "NotebookMetadata",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    status: {
      baseName: "status",
      type: "NotebookStatus",
    },
    time: {
      baseName: "time",
      type: "NotebookGlobalTime",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NotebookUpdateDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
