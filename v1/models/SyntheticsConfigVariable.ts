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

import { SyntheticsConfigVariableType } from './SyntheticsConfigVariableType';
import { HttpFile } from '../http/http';

/**
* Object defining a variable that can be used in your test configuration.
*/
export class SyntheticsConfigVariable {
    /**
    * Example for the variable.
    */
    'example': string;
    /**
    * Name of the variable.
    */
    'name': string;
    /**
    * Pattern of the variable.
    */
    'pattern'?: string;
    'type': SyntheticsConfigVariableType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "example",
            "baseName": "example",
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
            "name": "pattern",
            "baseName": "pattern",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "SyntheticsConfigVariableType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SyntheticsConfigVariable.attributeTypeMap;
    }
    
    public constructor() {
    }
}
