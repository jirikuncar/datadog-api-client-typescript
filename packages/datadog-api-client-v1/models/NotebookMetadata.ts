/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { NotebookMetadataType } from "./NotebookMetadataType";

export class NotebookMetadata {
  /**
   * Whether or not the notebook is a template.
   */
  "isTemplate"?: boolean;
  /**
   * Whether or not the notebook takes snapshot image backups of the notebook's fixed-time graphs.
   */
  "takeSnapshots"?: boolean;
  "type"?: NotebookMetadataType;

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
    isTemplate: {
      name: "isTemplate",
      baseName: "is_template",
      type: "boolean",
      required: false,
      format: "",
    },
    takeSnapshots: {
      name: "takeSnapshots",
      baseName: "take_snapshots",
      type: "boolean",
      required: false,
      format: "",
    },
    type: {
      name: "type",
      baseName: "type",
      type: "NotebookMetadataType",
      required: false,
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return NotebookMetadata.attributeTypeMap;
  }

  public constructor() {}
}
