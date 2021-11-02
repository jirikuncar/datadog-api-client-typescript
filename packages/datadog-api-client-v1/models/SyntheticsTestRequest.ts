/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HTTPMethod } from "./HTTPMethod";
import { SyntheticsBasicAuth } from "./SyntheticsBasicAuth";
import { SyntheticsTestRequestCertificate } from "./SyntheticsTestRequestCertificate";

export class SyntheticsTestRequest {
  /**
   * Allows loading insecure content for an HTTP request in a multistep test step.
   */
  "allowInsecure"?: boolean;
  "basicAuth"?: SyntheticsBasicAuth;
  /**
   * Body to include in the test.
   */
  "body"?: string;
  "certificate"?: SyntheticsTestRequestCertificate;
  /**
   * DNS server to use for DNS tests.
   */
  "dnsServer"?: string;
  /**
   * DNS server port to use for DNS tests.
   */
  "dnsServerPort"?: number;
  /**
   * Specifies whether or not the request follows redirects.
   */
  "followRedirects"?: boolean;
  /**
   * Headers to include when performing the test.
   */
  "headers"?: { [key: string]: string };
  /**
   * Host name to perform the test with.
   */
  "host"?: string;
  "method"?: HTTPMethod;
  /**
   * Determines whether or not to save the response body.
   */
  "noSavingResponseBody"?: boolean;
  /**
   * Number of pings to use per test.
   */
  "numberOfPackets"?: number;
  /**
   * Port to use when performing the test.
   */
  "port"?: number;
  /**
   * Query to use for the test.
   */
  "query"?: any;
  /**
   * For SSL tests, it specifies on which server you want to initiate the TLS handshake, allowing the server to present one of multiple possible certificates on the same IP address and TCP port number.
   */
  "servername"?: string;
  /**
   * Turns on a traceroute probe to discover all gateways along the path to the host destination.
   */
  "shouldTrackHops"?: boolean;
  /**
   * Timeout in seconds for the test.
   */
  "timeout"?: number;
  /**
   * URL to perform the test with.
   */
  "url"?: string;

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
    allowInsecure: {
      name: "allowInsecure",
      baseName: "allow_insecure",
      type: "boolean",
      required: false,
      format: "",
    },
    basicAuth: {
      name: "basicAuth",
      baseName: "basicAuth",
      type: "SyntheticsBasicAuth",
      required: false,
      format: "",
    },
    body: {
      name: "body",
      baseName: "body",
      type: "string",
      required: false,
      format: "",
    },
    certificate: {
      name: "certificate",
      baseName: "certificate",
      type: "SyntheticsTestRequestCertificate",
      required: false,
      format: "",
    },
    dnsServer: {
      name: "dnsServer",
      baseName: "dnsServer",
      type: "string",
      required: false,
      format: "",
    },
    dnsServerPort: {
      name: "dnsServerPort",
      baseName: "dnsServerPort",
      type: "number",
      required: false,
      format: "int32",
    },
    followRedirects: {
      name: "followRedirects",
      baseName: "follow_redirects",
      type: "boolean",
      required: false,
      format: "",
    },
    headers: {
      name: "headers",
      baseName: "headers",
      type: "{ [key: string]: string; }",
      required: false,
      format: "",
    },
    host: {
      name: "host",
      baseName: "host",
      type: "string",
      required: false,
      format: "",
    },
    method: {
      name: "method",
      baseName: "method",
      type: "HTTPMethod",
      required: false,
      format: "",
    },
    noSavingResponseBody: {
      name: "noSavingResponseBody",
      baseName: "noSavingResponseBody",
      type: "boolean",
      required: false,
      format: "",
    },
    numberOfPackets: {
      name: "numberOfPackets",
      baseName: "numberOfPackets",
      type: "number",
      required: false,
      format: "int32",
    },
    port: {
      name: "port",
      baseName: "port",
      type: "number",
      required: false,
      format: "int64",
    },
    query: {
      name: "query",
      baseName: "query",
      type: "any",
      required: false,
      format: "",
    },
    servername: {
      name: "servername",
      baseName: "servername",
      type: "string",
      required: false,
      format: "",
    },
    shouldTrackHops: {
      name: "shouldTrackHops",
      baseName: "shouldTrackHops",
      type: "boolean",
      required: false,
      format: "",
    },
    timeout: {
      name: "timeout",
      baseName: "timeout",
      type: "number",
      required: false,
      format: "double",
    },
    url: {
      name: "url",
      baseName: "url",
      type: "string",
      required: false,
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsTestRequest.attributeTypeMap;
  }

  public constructor() {}
}
