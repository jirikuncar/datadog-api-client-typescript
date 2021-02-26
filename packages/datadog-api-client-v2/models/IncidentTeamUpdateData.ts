/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IncidentTeamRelationships } from './IncidentTeamRelationships';
import { IncidentTeamType } from './IncidentTeamType';
import { IncidentTeamUpdateAttributes } from './IncidentTeamUpdateAttributes';
import { HttpFile } from '../http/http';

/**
* Incident Team data for an update request.
*/
export class IncidentTeamUpdateData {
    'attributes'?: IncidentTeamUpdateAttributes;
    /**
    * The incident team's ID.
    */
    'id': string;
    'relationships'?: IncidentTeamRelationships;
    'type': IncidentTeamType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "IncidentTeamUpdateAttributes",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "IncidentTeamRelationships",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "IncidentTeamType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IncidentTeamUpdateData.attributeTypeMap;
    }
    
    public constructor() {
    }
}
