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

import { SyntheticsStepType } from './SyntheticsStepType';
import { HttpFile } from '../http/http';

/**
* The steps used in a Synthetics browser test.
*/
export class SyntheticsStep {
    /**
    * A boolean set to allow this step to fail.
    */
    'allowFailure'?: boolean;
    /**
    * The name of the step.
    */
    'name'?: string;
    /**
    * The parameters of the step.
    */
    'params'?: any;
    /**
    * The time before declaring a step failed.
    */
    'timeout'?: number;
    'type'?: SyntheticsStepType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "allowFailure",
            "baseName": "allowFailure",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "params",
            "baseName": "params",
            "type": "any",
            "format": ""
        },
        {
            "name": "timeout",
            "baseName": "timeout",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "SyntheticsStepType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SyntheticsStep.attributeTypeMap;
    }
    
    public constructor() {
    }
}
