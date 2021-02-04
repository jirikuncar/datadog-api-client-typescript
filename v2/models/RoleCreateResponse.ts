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

import { RoleCreateResponseData } from './RoleCreateResponseData';
import { HttpFile } from '../http/http';

/**
* Response containing information about a created role.
*/
export class RoleCreateResponse {
    'data'?: RoleCreateResponseData;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "RoleCreateResponseData",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RoleCreateResponse.attributeTypeMap;
    }
    
    public constructor() {
    }
}
