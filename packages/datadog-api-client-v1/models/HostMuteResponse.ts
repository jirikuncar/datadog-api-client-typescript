/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Response with the list of muted host for your organization.
 */

export class HostMuteResponse {
  /**
   * Action applied to the hosts.
   */
  "action"?: string;
  /**
   * POSIX timestamp in seconds when the host is unmuted.
   */
  "end"?: number;
  /**
   * The host name.
   */
  "hostname"?: string;
  /**
   * Message associated with the mute.
   */
  "message"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    action: {
      baseName: "action",
      type: "string",
      format: "",
    },
    end: {
      baseName: "end",
      type: "number",
      format: "int64",
    },
    hostname: {
      baseName: "hostname",
      type: "string",
      format: "",
    },
    message: {
      baseName: "message",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return HostMuteResponse.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): HostMuteResponse {
    const res = new HostMuteResponse();

    res.action = ObjectSerializer.deserialize(data.action, "string", "");

    res.end = ObjectSerializer.deserialize(data.end, "number", "int64");

    res.hostname = ObjectSerializer.deserialize(data.hostname, "string", "");

    res.message = ObjectSerializer.deserialize(data.message, "string", "");

    return res;
  }

  static serialize(data: HostMuteResponse): { [key: string]: any } {
    const attributeTypes = HostMuteResponse.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.action = ObjectSerializer.serialize(data.action, "string", "");

    res.end = ObjectSerializer.serialize(data.end, "number", "int64");

    res.hostname = ObjectSerializer.serialize(data.hostname, "string", "");

    res.message = ObjectSerializer.serialize(data.message, "string", "");

    return res;
  }

  public constructor() {}
}