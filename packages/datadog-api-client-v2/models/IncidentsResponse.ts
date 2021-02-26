/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IncidentResponseData } from './IncidentResponseData';
import { IncidentResponseIncludedItem } from './IncidentResponseIncludedItem';
import { IncidentServicesResponseMeta } from './IncidentServicesResponseMeta';
import { HttpFile } from '../http/http';

/**
* Response with a list of incidents.
*/
export class IncidentsResponse {
    /**
    * An array of incidents.
    */
    'data': Array<IncidentResponseData>;
    /**
    * Included related resources that the user requested.
    */
    'included'?: Array<IncidentResponseIncludedItem>;
    'meta'?: IncidentServicesResponseMeta;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<IncidentResponseData>",
            "format": ""
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<IncidentResponseIncludedItem>",
            "format": ""
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "IncidentServicesResponseMeta",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IncidentsResponse.attributeTypeMap;
    }
    
    public constructor() {
    }
}
