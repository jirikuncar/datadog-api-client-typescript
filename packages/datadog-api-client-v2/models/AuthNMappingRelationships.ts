/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RelationshipToRole } from "./RelationshipToRole";
import { RelationshipToSAMLAssertionAttribute } from "./RelationshipToSAMLAssertionAttribute";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * All relationships associated with AuthN Mapping.
 */

export class AuthNMappingRelationships {
  "role"?: RelationshipToRole;
  "samlAssertionAttribute"?: RelationshipToSAMLAssertionAttribute;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    role: {
      baseName: "role",
      type: "RelationshipToRole",
    },
    samlAssertionAttribute: {
      baseName: "saml_assertion_attribute",
      type: "RelationshipToSAMLAssertionAttribute",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AuthNMappingRelationships.attributeTypeMap;
  }

  public constructor() {}
}
