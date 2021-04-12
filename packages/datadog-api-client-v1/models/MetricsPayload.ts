/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Series } from './Series';
import { HttpFile } from '../http/http';

/**
* The metrics' payload.
*/
export class MetricsPayload {
    /**
    * A list of time series to submit to Datadog.
    */
    'series': Array<Series>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "series",
            "baseName": "series",
            "type": "Array<Series>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MetricsPayload.attributeTypeMap;
    }
    
    public constructor() {
    }
}
