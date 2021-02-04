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

import { UsageSyntheticsHour } from './UsageSyntheticsHour';
import { HttpFile } from '../http/http';

/**
* Response containing the number of Synthetics API tests run for each hour for a given organization.
*/
export class UsageSyntheticsResponse {
    /**
    * Array with the number of hourly Synthetics test run for a given organization.
    */
    'usage'?: Array<UsageSyntheticsHour>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "usage",
            "baseName": "usage",
            "type": "Array<UsageSyntheticsHour>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UsageSyntheticsResponse.attributeTypeMap;
    }
    
    public constructor() {
    }
}
