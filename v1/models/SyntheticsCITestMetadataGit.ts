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

import { HttpFile } from '../http/http';

/**
* Git information.
*/
export class SyntheticsCITestMetadataGit {
    /**
    * Branch name.
    */
    'branch'?: string;
    /**
    * Commit SHA.
    */
    'commitSha'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "branch",
            "baseName": "branch",
            "type": "string",
            "format": ""
        },
        {
            "name": "commitSha",
            "baseName": "commit_sha",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SyntheticsCITestMetadataGit.attributeTypeMap;
    }
    
    public constructor() {
    }
}
