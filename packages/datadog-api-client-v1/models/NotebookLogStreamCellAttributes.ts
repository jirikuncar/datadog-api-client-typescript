/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogStreamWidgetDefinition } from "./LogStreamWidgetDefinition";
import { NotebookCellTime } from "./NotebookCellTime";
import { NotebookGraphSize } from "./NotebookGraphSize";

export class NotebookLogStreamCellAttributes {
  "definition": LogStreamWidgetDefinition;
  "graphSize"?: NotebookGraphSize;
  "time"?: NotebookCellTime;

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
    definition: {
      name: "definition",
      baseName: "definition",
      type: "LogStreamWidgetDefinition",
      required: true,
      format: "",
    },
    graphSize: {
      name: "graphSize",
      baseName: "graph_size",
      type: "NotebookGraphSize",
      required: false,
      format: "",
    },
    time: {
      name: "time",
      baseName: "time",
      type: "NotebookCellTime",
      required: false,
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return NotebookLogStreamCellAttributes.attributeTypeMap;
  }

  public constructor() {}
}
