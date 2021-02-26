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
* PagerDuty service object key.
*/
export class PagerDutyServiceKey {
    /**
    * Your service key in PagerDuty.
    */
    'serviceKey': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "serviceKey",
            "baseName": "service_key",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PagerDutyServiceKey.attributeTypeMap;
    }
    
    public constructor() {
    }
}
