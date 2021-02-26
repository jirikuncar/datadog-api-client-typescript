/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MetricTagConfiguration } from './MetricTagConfiguration';
import { HttpFile } from '../http/http';

/**
* Response object which includes a single metric's tag configuration.
*/
export class MetricTagConfigurationResponse {
    'data'?: MetricTagConfiguration;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "MetricTagConfiguration",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MetricTagConfigurationResponse.attributeTypeMap;
    }
    
    public constructor() {
    }
}
