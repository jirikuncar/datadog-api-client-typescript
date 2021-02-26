/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IFrameWidgetDefinitionType } from './IFrameWidgetDefinitionType';
import { HttpFile } from '../http/http';

/**
* The iframe widget allows you to embed a portion of any other web page on your dashboard. Only available on FREE layout dashboards.
*/
export class IFrameWidgetDefinition {
    'type': IFrameWidgetDefinitionType;
    /**
    * URL of the iframe.
    */
    'url': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "IFrameWidgetDefinitionType",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IFrameWidgetDefinition.attributeTypeMap;
    }
    
    public constructor() {
    }
}
