/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AWSLogsAsyncError } from "./AWSLogsAsyncError";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * A list of all Datadog-AWS logs integrations available in your Datadog organization.
 */

export class AWSLogsAsyncResponse {
  /**
   * List of errors.
   */
  "errors"?: Array<AWSLogsAsyncError>;
  /**
   * Status of the properties.
   */
  "status"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    errors: {
      baseName: "errors",
      type: "Array<AWSLogsAsyncError>",
      format: "",
    },
    status: {
      baseName: "status",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return AWSLogsAsyncResponse.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): AWSLogsAsyncResponse {
    const res = new AWSLogsAsyncResponse();

    res.errors = ObjectSerializer.deserialize(
      data.errors,
      "Array<AWSLogsAsyncError>",
      ""
    );

    res.status = ObjectSerializer.deserialize(data.status, "string", "");

    return res;
  }

  static serialize(data: AWSLogsAsyncResponse): { [key: string]: any } {
    const attributeTypes = AWSLogsAsyncResponse.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.errors = ObjectSerializer.serialize(
      data.errors,
      "Array<AWSLogsAsyncError>",
      ""
    );

    res.status = ObjectSerializer.serialize(data.status, "string", "");

    return res;
  }

  public constructor() {}
}