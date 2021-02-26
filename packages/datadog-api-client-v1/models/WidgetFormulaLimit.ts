/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { QuerySortOrder } from './QuerySortOrder';
import { HttpFile } from '../http/http';

/**
* Options for limiting results returned.
*/
export class WidgetFormulaLimit {
    /**
    * Number of results to return.
    */
    'count'?: number;
    'order'?: QuerySortOrder;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "QuerySortOrder",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WidgetFormulaLimit.attributeTypeMap;
    }
    
    public constructor() {
    }
}
