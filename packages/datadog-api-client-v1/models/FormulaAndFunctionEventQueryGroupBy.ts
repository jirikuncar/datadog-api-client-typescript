/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FormulaAndFunctionEventQueryGroupBySort } from './FormulaAndFunctionEventQueryGroupBySort';
import { HttpFile } from '../http/http';

/**
* List of objects used to group by.
*/
export class FormulaAndFunctionEventQueryGroupBy {
    /**
    * Event facet.
    */
    'facet': string;
    /**
    * Number of groups to return.
    */
    'limit'?: number;
    'sort'?: FormulaAndFunctionEventQueryGroupBySort;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "facet",
            "baseName": "facet",
            "type": "string",
            "format": ""
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "sort",
            "baseName": "sort",
            "type": "FormulaAndFunctionEventQueryGroupBySort",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FormulaAndFunctionEventQueryGroupBy.attributeTypeMap;
    }
    
    public constructor() {
    }
}
