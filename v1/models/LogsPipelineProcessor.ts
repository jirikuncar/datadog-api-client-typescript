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

import { LogsFilter } from './LogsFilter';
import { LogsPipelineProcessorType } from './LogsPipelineProcessorType';
import { LogsProcessor } from './LogsProcessor';
import { HttpFile } from '../http/http';

/**
* Nested Pipelines are pipelines within a pipeline. Use Nested Pipelines to split the processing into two steps. For example, first use a high-level filtering such as team and then a second level of filtering based on the integration, service, or any other tag or attribute.  A pipeline can contain Nested Pipelines and Processors whereas a Nested Pipeline can only contain Processors.
*/
export class LogsPipelineProcessor {
    'filter'?: LogsFilter;
    /**
    * Whether or not the processor is enabled.
    */
    'isEnabled'?: boolean;
    /**
    * Name of the processor.
    */
    'name'?: string;
    /**
    * Ordered list of processors in this pipeline.
    */
    'processors'?: Array<LogsProcessor>;
    'type': LogsPipelineProcessorType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "filter",
            "baseName": "filter",
            "type": "LogsFilter",
            "format": ""
        },
        {
            "name": "isEnabled",
            "baseName": "is_enabled",
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
            "name": "processors",
            "baseName": "processors",
            "type": "Array<LogsProcessor>",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "LogsPipelineProcessorType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LogsPipelineProcessor.attributeTypeMap;
    }
    
    public constructor() {
    }
}
