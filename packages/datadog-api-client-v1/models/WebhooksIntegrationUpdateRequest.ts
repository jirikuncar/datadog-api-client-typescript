/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { WebhooksIntegrationEncoding } from "./WebhooksIntegrationEncoding";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Update request of a Webhooks integration object.  *All properties are optional.*
 */

export class WebhooksIntegrationUpdateRequest {
  /**
   * If `null`, uses no header. If given a JSON payload, these will be headers attached to your webhook.
   */
  "customHeaders"?: string;
  "encodeAs"?: WebhooksIntegrationEncoding;
  /**
   * The name of the webhook. It corresponds with `<WEBHOOK_NAME>`. Learn more on how to use it in [monitor notifications](https://docs.datadoghq.com/monitors/notify).
   */
  "name"?: string;
  /**
   * If `null`, uses the default payload. If given a JSON payload, the webhook returns the payload specified by the given payload. [Webhooks variable usage](https://docs.datadoghq.com/integrations/webhooks/#usage).
   */
  "payload"?: string;
  /**
   * URL of the webhook.
   */
  "url"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    customHeaders: {
      baseName: "custom_headers",
      type: "string",
    },
    encodeAs: {
      baseName: "encode_as",
      type: "WebhooksIntegrationEncoding",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    payload: {
      baseName: "payload",
      type: "string",
    },
    url: {
      baseName: "url",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WebhooksIntegrationUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
