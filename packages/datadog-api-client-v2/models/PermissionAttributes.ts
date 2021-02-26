/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Attributes of a permission.
*/
export class PermissionAttributes {
    /**
    * Creation time of the permission.
    */
    'created'?: Date;
    /**
    * Description of the permission.
    */
    'description'?: string;
    /**
    * Displayed name for the permission.
    */
    'displayName'?: string;
    /**
    * Display type.
    */
    'displayType'?: string;
    /**
    * Name of the permission group.
    */
    'groupName'?: string;
    /**
    * Name of the permission.
    */
    'name'?: string;
    /**
    * Whether or not the permission is restricted.
    */
    'restricted'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "created",
            "baseName": "created",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "displayName",
            "baseName": "display_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "displayType",
            "baseName": "display_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "groupName",
            "baseName": "group_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "restricted",
            "baseName": "restricted",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PermissionAttributes.attributeTypeMap;
    }
    
    public constructor() {
    }
}
