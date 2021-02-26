/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ResponseMetaAttributes } from './ResponseMetaAttributes';
import { User } from './User';
import { UserResponseIncludedItem } from './UserResponseIncludedItem';
import { HttpFile } from '../http/http';

/**
* Response containing information about multiple users.
*/
export class UsersResponse {
    /**
    * Array of returned users.
    */
    'data'?: Array<User>;
    /**
    * Array of objects related to the users.
    */
    'included'?: Array<UserResponseIncludedItem>;
    'meta'?: ResponseMetaAttributes;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<User>",
            "format": ""
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<UserResponseIncludedItem>",
            "format": ""
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "ResponseMetaAttributes",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UsersResponse.attributeTypeMap;
    }
    
    public constructor() {
    }
}
