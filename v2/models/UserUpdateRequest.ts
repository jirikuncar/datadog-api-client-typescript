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

import { UserUpdateData } from './UserUpdateData';
import { HttpFile } from '../http/http';

/**
* Update a user.
*/
export class UserUpdateRequest {
    'data': UserUpdateData;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "UserUpdateData",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserUpdateRequest.attributeTypeMap;
    }
    
    public constructor() {
    }
}
