/**
 * Datadog API V2 Collection
 * Collection of all Datadog Public endpoints.
 *
 * OpenAPI spec version: 1.0
 * Contact: support@datadoghq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UserInvitationResponseData } from "./UserInvitationResponseData";
import { HttpFile } from "../http/http";

/**
 * User invitations as returned by the API.
 */
export class UserInvitationsResponse {
  /**
   * Array of user invitations.
   */
  "data"?: Array<UserInvitationResponseData>;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "data",
      baseName: "data",
      type: "Array<UserInvitationResponseData>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return UserInvitationsResponse.attributeTypeMap;
  }

  public constructor() {}
}
