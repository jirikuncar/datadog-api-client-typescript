/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsArchiveDestinationAzure } from './LogsArchiveDestinationAzure';
import { LogsArchiveDestinationGCS } from './LogsArchiveDestinationGCS';
import { LogsArchiveDestinationS3 } from './LogsArchiveDestinationS3';
import { LogsArchiveDestinationS3Type } from './LogsArchiveDestinationS3Type';
import { LogsArchiveIntegrationS3 } from './LogsArchiveIntegrationS3';
import { HttpFile } from '../http/http';

/**
* An archive's destination.
*/
export class LogsArchiveCreateRequestDestination {
    /**
    * The container where the archive will be stored.
    */
    'container': string;
    'integration': LogsArchiveIntegrationS3;
    /**
    * The archive path.
    */
    'path'?: string;
    /**
    * The region where the archive will be stored.
    */
    'region'?: string;
    /**
    * The associated storage account.
    */
    'storageAccount': string;
    'type': LogsArchiveDestinationS3Type;
    /**
    * The bucket where the archive will be stored.
    */
    'bucket': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "container",
            "baseName": "container",
            "type": "string",
            "format": ""
        },
        {
            "name": "integration",
            "baseName": "integration",
            "type": "LogsArchiveIntegrationS3",
            "format": ""
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string",
            "format": ""
        },
        {
            "name": "storageAccount",
            "baseName": "storage_account",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "LogsArchiveDestinationS3Type",
            "format": ""
        },
        {
            "name": "bucket",
            "baseName": "bucket",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LogsArchiveCreateRequestDestination.attributeTypeMap;
    }
    
    public constructor() {
    }
}
