/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class SyntheticsTiming {
  /**
   * The duration in millisecond of the DNS lookup.
   */
  "dns"?: number;
  /**
   * The time in millisecond to download the response.
   */
  "download"?: number;
  /**
   * The time in millisecond to first byte.
   */
  "firstByte"?: number;
  /**
   * The duration in millisecond of the TLS handshake.
   */
  "handshake"?: number;
  /**
   * The time in millisecond spent during redirections.
   */
  "redirect"?: number;
  /**
   * The duration in millisecond of the TLS handshake.
   */
  "ssl"?: number;
  /**
   * Time in millisecond to establish the TCP connection.
   */
  "tcp"?: number;
  /**
   * The overall time in millisecond the request took to be processed.
   */
  "total"?: number;
  /**
   * Time spent in millisecond waiting for a response.
   */
  "wait"?: number;

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
    dns: {
      name: "dns",
      baseName: "dns",
      type: "number",
      required: false,
      format: "double",
    },
    download: {
      name: "download",
      baseName: "download",
      type: "number",
      required: false,
      format: "double",
    },
    firstByte: {
      name: "firstByte",
      baseName: "firstByte",
      type: "number",
      required: false,
      format: "double",
    },
    handshake: {
      name: "handshake",
      baseName: "handshake",
      type: "number",
      required: false,
      format: "double",
    },
    redirect: {
      name: "redirect",
      baseName: "redirect",
      type: "number",
      required: false,
      format: "double",
    },
    ssl: {
      name: "ssl",
      baseName: "ssl",
      type: "number",
      required: false,
      format: "double",
    },
    tcp: {
      name: "tcp",
      baseName: "tcp",
      type: "number",
      required: false,
      format: "double",
    },
    total: {
      name: "total",
      baseName: "total",
      type: "number",
      required: false,
      format: "double",
    },
    wait: {
      name: "wait",
      baseName: "wait",
      type: "number",
      required: false,
      format: "double",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsTiming.attributeTypeMap;
  }

  public constructor() {}
}
