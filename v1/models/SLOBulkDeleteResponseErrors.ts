/**
 * Datadog API V1 Collection
 * Collection of all Datadog Public endpoints.
 *
 * OpenAPI spec version: 1.0
 * Contact: support@datadoghq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SLOErrorTimeframe } from './SLOErrorTimeframe';
import { HttpFile } from '../http/http';

/**
* Object describing the error.
*/
export class SLOBulkDeleteResponseErrors {
    /**
    * The ID of the service level objective object associated with this error.
    */
    'id': string;
    /**
    * The error message.
    */
    'message': string;
    'timeframe': SLOErrorTimeframe;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "timeframe",
            "baseName": "timeframe",
            "type": "SLOErrorTimeframe",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SLOBulkDeleteResponseErrors.attributeTypeMap;
    }
    
    public constructor() {
    }
}
