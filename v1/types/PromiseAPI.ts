import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { APIErrorResponse } from '../models/APIErrorResponse';
import { AWSAccount } from '../models/AWSAccount';
import { AWSAccountAndLambdaRequest } from '../models/AWSAccountAndLambdaRequest';
import { AWSAccountCreateResponse } from '../models/AWSAccountCreateResponse';
import { AWSAccountListResponse } from '../models/AWSAccountListResponse';
import { AWSLogsAsyncResponse } from '../models/AWSLogsAsyncResponse';
import { AWSLogsAsyncResponseErrors } from '../models/AWSLogsAsyncResponseErrors';
import { AWSLogsListResponse } from '../models/AWSLogsListResponse';
import { AWSLogsListResponseLambdas } from '../models/AWSLogsListResponseLambdas';
import { AWSLogsListServicesResponse } from '../models/AWSLogsListServicesResponse';
import { AWSLogsServicesRequest } from '../models/AWSLogsServicesRequest';
import { AWSNamespace } from '../models/AWSNamespace';
import { AWSTagFilterCreateRequest } from '../models/AWSTagFilterCreateRequest';
import { AWSTagFilterDeleteRequest } from '../models/AWSTagFilterDeleteRequest';
import { AWSTagFilterListResponse } from '../models/AWSTagFilterListResponse';
import { AWSTagFilterListResponseFilters } from '../models/AWSTagFilterListResponseFilters';
import { AccessRole } from '../models/AccessRole';
import { AlertGraphWidgetDefinition } from '../models/AlertGraphWidgetDefinition';
import { AlertGraphWidgetDefinitionType } from '../models/AlertGraphWidgetDefinitionType';
import { AlertValueWidgetDefinition } from '../models/AlertValueWidgetDefinition';
import { AlertValueWidgetDefinitionType } from '../models/AlertValueWidgetDefinitionType';
import { ApiKey } from '../models/ApiKey';
import { ApiKeyListResponse } from '../models/ApiKeyListResponse';
import { ApiKeyResponse } from '../models/ApiKeyResponse';
import { ApmStatsQueryColumnType } from '../models/ApmStatsQueryColumnType';
import { ApmStatsQueryDefinition } from '../models/ApmStatsQueryDefinition';
import { ApmStatsQueryRowType } from '../models/ApmStatsQueryRowType';
import { ApplicationKey } from '../models/ApplicationKey';
import { ApplicationKeyListResponse } from '../models/ApplicationKeyListResponse';
import { ApplicationKeyResponse } from '../models/ApplicationKeyResponse';
import { AuthenticationValidationResponse } from '../models/AuthenticationValidationResponse';
import { AzureAccount } from '../models/AzureAccount';
import { CancelDowntimesByScopeRequest } from '../models/CancelDowntimesByScopeRequest';
import { CanceledDowntimesIds } from '../models/CanceledDowntimesIds';
import { ChangeWidgetDefinition } from '../models/ChangeWidgetDefinition';
import { ChangeWidgetDefinitionType } from '../models/ChangeWidgetDefinitionType';
import { ChangeWidgetRequest } from '../models/ChangeWidgetRequest';
import { CheckCanDeleteMonitorResponse } from '../models/CheckCanDeleteMonitorResponse';
import { CheckCanDeleteMonitorResponseData } from '../models/CheckCanDeleteMonitorResponseData';
import { CheckCanDeleteSLOResponse } from '../models/CheckCanDeleteSLOResponse';
import { CheckCanDeleteSLOResponseData } from '../models/CheckCanDeleteSLOResponseData';
import { CheckStatusWidgetDefinition } from '../models/CheckStatusWidgetDefinition';
import { CheckStatusWidgetDefinitionType } from '../models/CheckStatusWidgetDefinitionType';
import { Creator } from '../models/Creator';
import { Dashboard } from '../models/Dashboard';
import { DashboardDeleteResponse } from '../models/DashboardDeleteResponse';
import { DashboardLayoutType } from '../models/DashboardLayoutType';
import { DashboardList } from '../models/DashboardList';
import { DashboardListDeleteResponse } from '../models/DashboardListDeleteResponse';
import { DashboardListListResponse } from '../models/DashboardListListResponse';
import { DashboardSummary } from '../models/DashboardSummary';
import { DashboardSummaryDashboards } from '../models/DashboardSummaryDashboards';
import { DashboardTemplateVariablePreset } from '../models/DashboardTemplateVariablePreset';
import { DashboardTemplateVariablePresetValue } from '../models/DashboardTemplateVariablePresetValue';
import { DashboardTemplateVariables } from '../models/DashboardTemplateVariables';
import { DeletedMonitor } from '../models/DeletedMonitor';
import { DistributionWidgetDefinition } from '../models/DistributionWidgetDefinition';
import { DistributionWidgetDefinitionType } from '../models/DistributionWidgetDefinitionType';
import { DistributionWidgetRequest } from '../models/DistributionWidgetRequest';
import { Downtime } from '../models/Downtime';
import { DowntimeRecurrence } from '../models/DowntimeRecurrence';
import { Event } from '../models/Event';
import { EventAlertType } from '../models/EventAlertType';
import { EventListResponse } from '../models/EventListResponse';
import { EventPriority } from '../models/EventPriority';
import { EventQueryDefinition } from '../models/EventQueryDefinition';
import { EventResponse } from '../models/EventResponse';
import { EventStreamWidgetDefinition } from '../models/EventStreamWidgetDefinition';
import { EventStreamWidgetDefinitionType } from '../models/EventStreamWidgetDefinitionType';
import { EventTimelineWidgetDefinition } from '../models/EventTimelineWidgetDefinition';
import { EventTimelineWidgetDefinitionType } from '../models/EventTimelineWidgetDefinitionType';
import { FormulaAndFunctionEventAggregation } from '../models/FormulaAndFunctionEventAggregation';
import { FormulaAndFunctionEventsDataSource } from '../models/FormulaAndFunctionEventsDataSource';
import { FormulaAndFunctionEventsSortType } from '../models/FormulaAndFunctionEventsSortType';
import { FormulaAndFunctionMetricAggregation } from '../models/FormulaAndFunctionMetricAggregation';
import { FormulaAndFunctionMetricDataSource } from '../models/FormulaAndFunctionMetricDataSource';
import { FormulaAndFunctionProcessQueryDataSource } from '../models/FormulaAndFunctionProcessQueryDataSource';
import { FormulaAndFunctionQueryDefinition } from '../models/FormulaAndFunctionQueryDefinition';
import { FormulaAndFunctionResponseFormat } from '../models/FormulaAndFunctionResponseFormat';
import { FreeTextWidgetDefinition } from '../models/FreeTextWidgetDefinition';
import { FreeTextWidgetDefinitionType } from '../models/FreeTextWidgetDefinitionType';
import { GCPAccount } from '../models/GCPAccount';
import { GraphSnapshot } from '../models/GraphSnapshot';
import { GroupWidgetDefinition } from '../models/GroupWidgetDefinition';
import { GroupWidgetDefinitionType } from '../models/GroupWidgetDefinitionType';
import { HTTPMethod } from '../models/HTTPMethod';
import { HeatMapWidgetDefinition } from '../models/HeatMapWidgetDefinition';
import { HeatMapWidgetDefinitionType } from '../models/HeatMapWidgetDefinitionType';
import { HeatMapWidgetRequest } from '../models/HeatMapWidgetRequest';
import { Host } from '../models/Host';
import { HostListResponse } from '../models/HostListResponse';
import { HostMapRequest } from '../models/HostMapRequest';
import { HostMapWidgetDefinition } from '../models/HostMapWidgetDefinition';
import { HostMapWidgetDefinitionRequests } from '../models/HostMapWidgetDefinitionRequests';
import { HostMapWidgetDefinitionStyle } from '../models/HostMapWidgetDefinitionStyle';
import { HostMapWidgetDefinitionType } from '../models/HostMapWidgetDefinitionType';
import { HostMeta } from '../models/HostMeta';
import { HostMetrics } from '../models/HostMetrics';
import { HostMuteResponse } from '../models/HostMuteResponse';
import { HostMuteSettings } from '../models/HostMuteSettings';
import { HostTags } from '../models/HostTags';
import { HostTotals } from '../models/HostTotals';
import { IFrameWidgetDefinition } from '../models/IFrameWidgetDefinition';
import { IFrameWidgetDefinitionType } from '../models/IFrameWidgetDefinitionType';
import { IPPrefixesAPI } from '../models/IPPrefixesAPI';
import { IPPrefixesAPM } from '../models/IPPrefixesAPM';
import { IPPrefixesAgents } from '../models/IPPrefixesAgents';
import { IPPrefixesLogs } from '../models/IPPrefixesLogs';
import { IPPrefixesProcess } from '../models/IPPrefixesProcess';
import { IPPrefixesSynthetics } from '../models/IPPrefixesSynthetics';
import { IPPrefixesWebhooks } from '../models/IPPrefixesWebhooks';
import { IPRanges } from '../models/IPRanges';
import { IdpFormData } from '../models/IdpFormData';
import { IdpResponse } from '../models/IdpResponse';
import { ImageWidgetDefinition } from '../models/ImageWidgetDefinition';
import { ImageWidgetDefinitionType } from '../models/ImageWidgetDefinitionType';
import { Log } from '../models/Log';
import { LogContent } from '../models/LogContent';
import { LogQueryDefinition } from '../models/LogQueryDefinition';
import { LogQueryDefinitionGroupBy } from '../models/LogQueryDefinitionGroupBy';
import { LogQueryDefinitionSearch } from '../models/LogQueryDefinitionSearch';
import { LogQueryDefinitionSort } from '../models/LogQueryDefinitionSort';
import { LogStreamWidgetDefinition } from '../models/LogStreamWidgetDefinition';
import { LogStreamWidgetDefinitionType } from '../models/LogStreamWidgetDefinitionType';
import { LogsAPIError } from '../models/LogsAPIError';
import { LogsAPIErrorResponse } from '../models/LogsAPIErrorResponse';
import { LogsArithmeticProcessor } from '../models/LogsArithmeticProcessor';
import { LogsArithmeticProcessorType } from '../models/LogsArithmeticProcessorType';
import { LogsAttributeRemapper } from '../models/LogsAttributeRemapper';
import { LogsAttributeRemapperType } from '../models/LogsAttributeRemapperType';
import { LogsCategoryProcessor } from '../models/LogsCategoryProcessor';
import { LogsCategoryProcessorCategories } from '../models/LogsCategoryProcessorCategories';
import { LogsCategoryProcessorType } from '../models/LogsCategoryProcessorType';
import { LogsDateRemapper } from '../models/LogsDateRemapper';
import { LogsDateRemapperType } from '../models/LogsDateRemapperType';
import { LogsExclusion } from '../models/LogsExclusion';
import { LogsExclusionFilter } from '../models/LogsExclusionFilter';
import { LogsFilter } from '../models/LogsFilter';
import { LogsGeoIPParser } from '../models/LogsGeoIPParser';
import { LogsGeoIPParserType } from '../models/LogsGeoIPParserType';
import { LogsGrokParser } from '../models/LogsGrokParser';
import { LogsGrokParserRules } from '../models/LogsGrokParserRules';
import { LogsGrokParserType } from '../models/LogsGrokParserType';
import { LogsIndex } from '../models/LogsIndex';
import { LogsIndexListResponse } from '../models/LogsIndexListResponse';
import { LogsIndexUpdateRequest } from '../models/LogsIndexUpdateRequest';
import { LogsIndexesOrder } from '../models/LogsIndexesOrder';
import { LogsListRequest } from '../models/LogsListRequest';
import { LogsListRequestTime } from '../models/LogsListRequestTime';
import { LogsListResponse } from '../models/LogsListResponse';
import { LogsLookupProcessor } from '../models/LogsLookupProcessor';
import { LogsLookupProcessorType } from '../models/LogsLookupProcessorType';
import { LogsMessageRemapper } from '../models/LogsMessageRemapper';
import { LogsMessageRemapperType } from '../models/LogsMessageRemapperType';
import { LogsPipeline } from '../models/LogsPipeline';
import { LogsPipelineProcessor } from '../models/LogsPipelineProcessor';
import { LogsPipelineProcessorType } from '../models/LogsPipelineProcessorType';
import { LogsPipelinesOrder } from '../models/LogsPipelinesOrder';
import { LogsProcessor } from '../models/LogsProcessor';
import { LogsQueryCompute } from '../models/LogsQueryCompute';
import { LogsServiceRemapper } from '../models/LogsServiceRemapper';
import { LogsServiceRemapperType } from '../models/LogsServiceRemapperType';
import { LogsSort } from '../models/LogsSort';
import { LogsStatusRemapper } from '../models/LogsStatusRemapper';
import { LogsStatusRemapperType } from '../models/LogsStatusRemapperType';
import { LogsStringBuilderProcessor } from '../models/LogsStringBuilderProcessor';
import { LogsStringBuilderProcessorType } from '../models/LogsStringBuilderProcessorType';
import { LogsTraceRemapper } from '../models/LogsTraceRemapper';
import { LogsTraceRemapperType } from '../models/LogsTraceRemapperType';
import { LogsURLParser } from '../models/LogsURLParser';
import { LogsURLParserType } from '../models/LogsURLParserType';
import { LogsUserAgentParser } from '../models/LogsUserAgentParser';
import { LogsUserAgentParserType } from '../models/LogsUserAgentParserType';
import { MetricMetadata } from '../models/MetricMetadata';
import { MetricSearchResponse } from '../models/MetricSearchResponse';
import { MetricSearchResponseResults } from '../models/MetricSearchResponseResults';
import { MetricsListResponse } from '../models/MetricsListResponse';
import { MetricsQueryResponse } from '../models/MetricsQueryResponse';
import { MetricsQueryResponseSeries } from '../models/MetricsQueryResponseSeries';
import { MetricsQueryResponseUnit } from '../models/MetricsQueryResponseUnit';
import { Monitor } from '../models/Monitor';
import { MonitorDeviceID } from '../models/MonitorDeviceID';
import { MonitorOptions } from '../models/MonitorOptions';
import { MonitorOptionsAggregation } from '../models/MonitorOptionsAggregation';
import { MonitorOverallStates } from '../models/MonitorOverallStates';
import { MonitorState } from '../models/MonitorState';
import { MonitorStateGroup } from '../models/MonitorStateGroup';
import { MonitorSummaryWidgetDefinition } from '../models/MonitorSummaryWidgetDefinition';
import { MonitorSummaryWidgetDefinitionType } from '../models/MonitorSummaryWidgetDefinitionType';
import { MonitorThresholdWindowOptions } from '../models/MonitorThresholdWindowOptions';
import { MonitorThresholds } from '../models/MonitorThresholds';
import { MonitorType } from '../models/MonitorType';
import { MonitorUpdateRequest } from '../models/MonitorUpdateRequest';
import { NoteWidgetDefinition } from '../models/NoteWidgetDefinition';
import { NoteWidgetDefinitionType } from '../models/NoteWidgetDefinitionType';
import { Organization } from '../models/Organization';
import { OrganizationBilling } from '../models/OrganizationBilling';
import { OrganizationCreateBody } from '../models/OrganizationCreateBody';
import { OrganizationCreateResponse } from '../models/OrganizationCreateResponse';
import { OrganizationListResponse } from '../models/OrganizationListResponse';
import { OrganizationResponse } from '../models/OrganizationResponse';
import { OrganizationSettings } from '../models/OrganizationSettings';
import { OrganizationSettingsSaml } from '../models/OrganizationSettingsSaml';
import { OrganizationSettingsSamlAutocreateUsersDomains } from '../models/OrganizationSettingsSamlAutocreateUsersDomains';
import { OrganizationSettingsSamlIdpInitiatedLogin } from '../models/OrganizationSettingsSamlIdpInitiatedLogin';
import { OrganizationSettingsSamlStrictMode } from '../models/OrganizationSettingsSamlStrictMode';
import { OrganizationSubscription } from '../models/OrganizationSubscription';
import { PagerDutyService } from '../models/PagerDutyService';
import { PagerDutyServiceKey } from '../models/PagerDutyServiceKey';
import { PagerDutyServiceName } from '../models/PagerDutyServiceName';
import { ProcessQueryDefinition } from '../models/ProcessQueryDefinition';
import { QuerySortOrder } from '../models/QuerySortOrder';
import { QueryValueWidgetDefinition } from '../models/QueryValueWidgetDefinition';
import { QueryValueWidgetDefinitionType } from '../models/QueryValueWidgetDefinitionType';
import { QueryValueWidgetRequest } from '../models/QueryValueWidgetRequest';
import { SLOBulkDeleteResponse } from '../models/SLOBulkDeleteResponse';
import { SLOBulkDeleteResponseData } from '../models/SLOBulkDeleteResponseData';
import { SLOBulkDeleteResponseErrors } from '../models/SLOBulkDeleteResponseErrors';
import { SLOCorrectionCategory } from '../models/SLOCorrectionCategory';
import { SLOCorrectionCreateRequest } from '../models/SLOCorrectionCreateRequest';
import { SLOCorrectionCreateRequestAttributes } from '../models/SLOCorrectionCreateRequestAttributes';
import { SLOCorrectionCreateRequestData } from '../models/SLOCorrectionCreateRequestData';
import { SLOCorrectionListResponse } from '../models/SLOCorrectionListResponse';
import { SLOCorrectionListResponseData } from '../models/SLOCorrectionListResponseData';
import { SLOCorrectionResponse } from '../models/SLOCorrectionResponse';
import { SLOCorrectionResponseAttributes } from '../models/SLOCorrectionResponseAttributes';
import { SLOCorrectionResponseData } from '../models/SLOCorrectionResponseData';
import { SLOCorrectionUpdateRequest } from '../models/SLOCorrectionUpdateRequest';
import { SLOCorrectionUpdateRequestAttributes } from '../models/SLOCorrectionUpdateRequestAttributes';
import { SLOCorrectionUpdateRequestData } from '../models/SLOCorrectionUpdateRequestData';
import { SLODeleteResponse } from '../models/SLODeleteResponse';
import { SLOErrorTimeframe } from '../models/SLOErrorTimeframe';
import { SLOHistoryMetrics } from '../models/SLOHistoryMetrics';
import { SLOHistoryMetricsSeries } from '../models/SLOHistoryMetricsSeries';
import { SLOHistoryMetricsSeriesMetadata } from '../models/SLOHistoryMetricsSeriesMetadata';
import { SLOHistoryResponse } from '../models/SLOHistoryResponse';
import { SLOHistoryResponseData } from '../models/SLOHistoryResponseData';
import { SLOHistoryResponseError } from '../models/SLOHistoryResponseError';
import { SLOHistorySLIData } from '../models/SLOHistorySLIData';
import { SLOListResponse } from '../models/SLOListResponse';
import { SLOResponse } from '../models/SLOResponse';
import { SLOThreshold } from '../models/SLOThreshold';
import { SLOTimeframe } from '../models/SLOTimeframe';
import { SLOType } from '../models/SLOType';
import { SLOTypeNumeric } from '../models/SLOTypeNumeric';
import { SLOWidgetDefinition } from '../models/SLOWidgetDefinition';
import { SLOWidgetDefinitionType } from '../models/SLOWidgetDefinitionType';
import { ScatterPlotRequest } from '../models/ScatterPlotRequest';
import { ScatterPlotWidgetDefinition } from '../models/ScatterPlotWidgetDefinition';
import { ScatterPlotWidgetDefinitionRequests } from '../models/ScatterPlotWidgetDefinitionRequests';
import { ScatterPlotWidgetDefinitionType } from '../models/ScatterPlotWidgetDefinitionType';
import { ServiceLevelObjective } from '../models/ServiceLevelObjective';
import { ServiceLevelObjectiveQuery } from '../models/ServiceLevelObjectiveQuery';
import { ServiceLevelObjectiveRequest } from '../models/ServiceLevelObjectiveRequest';
import { ServiceMapWidgetDefinition } from '../models/ServiceMapWidgetDefinition';
import { ServiceMapWidgetDefinitionType } from '../models/ServiceMapWidgetDefinitionType';
import { ServiceSummaryWidgetDefinition } from '../models/ServiceSummaryWidgetDefinition';
import { ServiceSummaryWidgetDefinitionType } from '../models/ServiceSummaryWidgetDefinitionType';
import { SyntheticsAPITestResultData } from '../models/SyntheticsAPITestResultData';
import { SyntheticsAPITestResultFull } from '../models/SyntheticsAPITestResultFull';
import { SyntheticsAPITestResultFullCheck } from '../models/SyntheticsAPITestResultFullCheck';
import { SyntheticsAPITestResultShort } from '../models/SyntheticsAPITestResultShort';
import { SyntheticsAPITestResultShortResult } from '../models/SyntheticsAPITestResultShortResult';
import { SyntheticsAssertion } from '../models/SyntheticsAssertion';
import { SyntheticsAssertionJSONPathOperator } from '../models/SyntheticsAssertionJSONPathOperator';
import { SyntheticsAssertionJSONPathTarget } from '../models/SyntheticsAssertionJSONPathTarget';
import { SyntheticsAssertionJSONPathTargetTarget } from '../models/SyntheticsAssertionJSONPathTargetTarget';
import { SyntheticsAssertionOperator } from '../models/SyntheticsAssertionOperator';
import { SyntheticsAssertionTarget } from '../models/SyntheticsAssertionTarget';
import { SyntheticsAssertionType } from '../models/SyntheticsAssertionType';
import { SyntheticsBasicAuth } from '../models/SyntheticsBasicAuth';
import { SyntheticsBrowserError } from '../models/SyntheticsBrowserError';
import { SyntheticsBrowserErrorType } from '../models/SyntheticsBrowserErrorType';
import { SyntheticsBrowserTestResultData } from '../models/SyntheticsBrowserTestResultData';
import { SyntheticsBrowserTestResultFull } from '../models/SyntheticsBrowserTestResultFull';
import { SyntheticsBrowserTestResultFullCheck } from '../models/SyntheticsBrowserTestResultFullCheck';
import { SyntheticsBrowserTestResultShort } from '../models/SyntheticsBrowserTestResultShort';
import { SyntheticsBrowserTestResultShortResult } from '../models/SyntheticsBrowserTestResultShortResult';
import { SyntheticsBrowserVariable } from '../models/SyntheticsBrowserVariable';
import { SyntheticsBrowserVariableType } from '../models/SyntheticsBrowserVariableType';
import { SyntheticsCITest } from '../models/SyntheticsCITest';
import { SyntheticsCITestBody } from '../models/SyntheticsCITestBody';
import { SyntheticsCITestMetadata } from '../models/SyntheticsCITestMetadata';
import { SyntheticsCITestMetadataCi } from '../models/SyntheticsCITestMetadataCi';
import { SyntheticsCITestMetadataGit } from '../models/SyntheticsCITestMetadataGit';
import { SyntheticsCheckType } from '../models/SyntheticsCheckType';
import { SyntheticsConfigVariable } from '../models/SyntheticsConfigVariable';
import { SyntheticsConfigVariableType } from '../models/SyntheticsConfigVariableType';
import { SyntheticsDeleteTestsPayload } from '../models/SyntheticsDeleteTestsPayload';
import { SyntheticsDeleteTestsResponse } from '../models/SyntheticsDeleteTestsResponse';
import { SyntheticsDeleteTestsResponseDeletedTests } from '../models/SyntheticsDeleteTestsResponseDeletedTests';
import { SyntheticsDevice } from '../models/SyntheticsDevice';
import { SyntheticsDeviceID } from '../models/SyntheticsDeviceID';
import { SyntheticsErrorCode } from '../models/SyntheticsErrorCode';
import { SyntheticsGetAPITestLatestResultsResponse } from '../models/SyntheticsGetAPITestLatestResultsResponse';
import { SyntheticsGetBrowserTestLatestResultsResponse } from '../models/SyntheticsGetBrowserTestLatestResultsResponse';
import { SyntheticsGlobalVariable } from '../models/SyntheticsGlobalVariable';
import { SyntheticsGlobalVariableParseTestOptions } from '../models/SyntheticsGlobalVariableParseTestOptions';
import { SyntheticsGlobalVariableParseTestOptionsParser } from '../models/SyntheticsGlobalVariableParseTestOptionsParser';
import { SyntheticsGlobalVariableParseTestOptionsType } from '../models/SyntheticsGlobalVariableParseTestOptionsType';
import { SyntheticsGlobalVariableParserType } from '../models/SyntheticsGlobalVariableParserType';
import { SyntheticsGlobalVariableValue } from '../models/SyntheticsGlobalVariableValue';
import { SyntheticsListTestsResponse } from '../models/SyntheticsListTestsResponse';
import { SyntheticsLocation } from '../models/SyntheticsLocation';
import { SyntheticsLocations } from '../models/SyntheticsLocations';
import { SyntheticsPlayingTab } from '../models/SyntheticsPlayingTab';
import { SyntheticsPrivateLocation } from '../models/SyntheticsPrivateLocation';
import { SyntheticsPrivateLocationCreationResponse } from '../models/SyntheticsPrivateLocationCreationResponse';
import { SyntheticsPrivateLocationCreationResponseResultEncryption } from '../models/SyntheticsPrivateLocationCreationResponseResultEncryption';
import { SyntheticsPrivateLocationSecrets } from '../models/SyntheticsPrivateLocationSecrets';
import { SyntheticsPrivateLocationSecretsAuthentication } from '../models/SyntheticsPrivateLocationSecretsAuthentication';
import { SyntheticsPrivateLocationSecretsConfigDecryption } from '../models/SyntheticsPrivateLocationSecretsConfigDecryption';
import { SyntheticsSSLCertificate } from '../models/SyntheticsSSLCertificate';
import { SyntheticsSSLCertificateIssuer } from '../models/SyntheticsSSLCertificateIssuer';
import { SyntheticsSSLCertificateSubject } from '../models/SyntheticsSSLCertificateSubject';
import { SyntheticsStep } from '../models/SyntheticsStep';
import { SyntheticsStepDetail } from '../models/SyntheticsStepDetail';
import { SyntheticsStepDetailWarnings } from '../models/SyntheticsStepDetailWarnings';
import { SyntheticsStepType } from '../models/SyntheticsStepType';
import { SyntheticsTestConfig } from '../models/SyntheticsTestConfig';
import { SyntheticsTestDetails } from '../models/SyntheticsTestDetails';
import { SyntheticsTestDetailsSubType } from '../models/SyntheticsTestDetailsSubType';
import { SyntheticsTestDetailsType } from '../models/SyntheticsTestDetailsType';
import { SyntheticsTestMonitorStatus } from '../models/SyntheticsTestMonitorStatus';
import { SyntheticsTestOptions } from '../models/SyntheticsTestOptions';
import { SyntheticsTestOptionsMonitorOptions } from '../models/SyntheticsTestOptionsMonitorOptions';
import { SyntheticsTestOptionsRetry } from '../models/SyntheticsTestOptionsRetry';
import { SyntheticsTestPauseStatus } from '../models/SyntheticsTestPauseStatus';
import { SyntheticsTestProcessStatus } from '../models/SyntheticsTestProcessStatus';
import { SyntheticsTestRequest } from '../models/SyntheticsTestRequest';
import { SyntheticsTestRequestCertificate } from '../models/SyntheticsTestRequestCertificate';
import { SyntheticsTestRequestCertificateItem } from '../models/SyntheticsTestRequestCertificateItem';
import { SyntheticsTickInterval } from '../models/SyntheticsTickInterval';
import { SyntheticsTiming } from '../models/SyntheticsTiming';
import { SyntheticsTriggerCITestsResponse } from '../models/SyntheticsTriggerCITestsResponse';
import { SyntheticsTriggerCITestsResponseLocations } from '../models/SyntheticsTriggerCITestsResponseLocations';
import { SyntheticsTriggerCITestsResponseResults } from '../models/SyntheticsTriggerCITestsResponseResults';
import { SyntheticsUpdateTestPauseStatusPayload } from '../models/SyntheticsUpdateTestPauseStatusPayload';
import { SyntheticsWarningType } from '../models/SyntheticsWarningType';
import { TableWidgetCellDisplayMode } from '../models/TableWidgetCellDisplayMode';
import { TableWidgetDefinition } from '../models/TableWidgetDefinition';
import { TableWidgetDefinitionType } from '../models/TableWidgetDefinitionType';
import { TableWidgetHasSearchBar } from '../models/TableWidgetHasSearchBar';
import { TableWidgetRequest } from '../models/TableWidgetRequest';
import { TagToHosts } from '../models/TagToHosts';
import { TargetFormatType } from '../models/TargetFormatType';
import { TimeSeriesFormulaAndFunctionEventQueryDefinition } from '../models/TimeSeriesFormulaAndFunctionEventQueryDefinition';
import { TimeSeriesFormulaAndFunctionEventQueryDefinitionCompute } from '../models/TimeSeriesFormulaAndFunctionEventQueryDefinitionCompute';
import { TimeSeriesFormulaAndFunctionEventQueryDefinitionGroupBy } from '../models/TimeSeriesFormulaAndFunctionEventQueryDefinitionGroupBy';
import { TimeSeriesFormulaAndFunctionEventQueryDefinitionGroupBySort } from '../models/TimeSeriesFormulaAndFunctionEventQueryDefinitionGroupBySort';
import { TimeSeriesFormulaAndFunctionEventQueryDefinitionSearch } from '../models/TimeSeriesFormulaAndFunctionEventQueryDefinitionSearch';
import { TimeSeriesFormulaAndFunctionMetricQueryDefinition } from '../models/TimeSeriesFormulaAndFunctionMetricQueryDefinition';
import { TimeSeriesFormulaAndFunctionProcessQueryDefinition } from '../models/TimeSeriesFormulaAndFunctionProcessQueryDefinition';
import { TimeseriesWidgetDefinition } from '../models/TimeseriesWidgetDefinition';
import { TimeseriesWidgetDefinitionType } from '../models/TimeseriesWidgetDefinitionType';
import { TimeseriesWidgetRequest } from '../models/TimeseriesWidgetRequest';
import { TimeseriesWidgetRequestMetadata } from '../models/TimeseriesWidgetRequestMetadata';
import { ToplistWidgetDefinition } from '../models/ToplistWidgetDefinition';
import { ToplistWidgetDefinitionType } from '../models/ToplistWidgetDefinitionType';
import { ToplistWidgetRequest } from '../models/ToplistWidgetRequest';
import { UsageAnalyzedLogsHour } from '../models/UsageAnalyzedLogsHour';
import { UsageAnalyzedLogsResponse } from '../models/UsageAnalyzedLogsResponse';
import { UsageAttributionAggregatesBody } from '../models/UsageAttributionAggregatesBody';
import { UsageAttributionBody } from '../models/UsageAttributionBody';
import { UsageAttributionMetadata } from '../models/UsageAttributionMetadata';
import { UsageAttributionPagination } from '../models/UsageAttributionPagination';
import { UsageAttributionResponse } from '../models/UsageAttributionResponse';
import { UsageAttributionSort } from '../models/UsageAttributionSort';
import { UsageAttributionValues } from '../models/UsageAttributionValues';
import { UsageBillableSummaryBody } from '../models/UsageBillableSummaryBody';
import { UsageBillableSummaryHour } from '../models/UsageBillableSummaryHour';
import { UsageBillableSummaryKeys } from '../models/UsageBillableSummaryKeys';
import { UsageBillableSummaryResponse } from '../models/UsageBillableSummaryResponse';
import { UsageCustomReportsAttributes } from '../models/UsageCustomReportsAttributes';
import { UsageCustomReportsData } from '../models/UsageCustomReportsData';
import { UsageCustomReportsMeta } from '../models/UsageCustomReportsMeta';
import { UsageCustomReportsPage } from '../models/UsageCustomReportsPage';
import { UsageCustomReportsResponse } from '../models/UsageCustomReportsResponse';
import { UsageFargateHour } from '../models/UsageFargateHour';
import { UsageFargateResponse } from '../models/UsageFargateResponse';
import { UsageHostHour } from '../models/UsageHostHour';
import { UsageHostsResponse } from '../models/UsageHostsResponse';
import { UsageIncidentManagementHour } from '../models/UsageIncidentManagementHour';
import { UsageIncidentManagementResponse } from '../models/UsageIncidentManagementResponse';
import { UsageIndexedSpansHour } from '../models/UsageIndexedSpansHour';
import { UsageIndexedSpansResponse } from '../models/UsageIndexedSpansResponse';
import { UsageIngestedSpansHour } from '../models/UsageIngestedSpansHour';
import { UsageIngestedSpansResponse } from '../models/UsageIngestedSpansResponse';
import { UsageIoTHour } from '../models/UsageIoTHour';
import { UsageIoTResponse } from '../models/UsageIoTResponse';
import { UsageLambdaHour } from '../models/UsageLambdaHour';
import { UsageLambdaResponse } from '../models/UsageLambdaResponse';
import { UsageLogsByIndexHour } from '../models/UsageLogsByIndexHour';
import { UsageLogsByIndexResponse } from '../models/UsageLogsByIndexResponse';
import { UsageLogsHour } from '../models/UsageLogsHour';
import { UsageLogsResponse } from '../models/UsageLogsResponse';
import { UsageMetricCategory } from '../models/UsageMetricCategory';
import { UsageNetworkFlowsHour } from '../models/UsageNetworkFlowsHour';
import { UsageNetworkFlowsResponse } from '../models/UsageNetworkFlowsResponse';
import { UsageNetworkHostsHour } from '../models/UsageNetworkHostsHour';
import { UsageNetworkHostsResponse } from '../models/UsageNetworkHostsResponse';
import { UsageProfilingHour } from '../models/UsageProfilingHour';
import { UsageProfilingResponse } from '../models/UsageProfilingResponse';
import { UsageReportsType } from '../models/UsageReportsType';
import { UsageRumSessionsHour } from '../models/UsageRumSessionsHour';
import { UsageRumSessionsResponse } from '../models/UsageRumSessionsResponse';
import { UsageSNMPHour } from '../models/UsageSNMPHour';
import { UsageSNMPResponse } from '../models/UsageSNMPResponse';
import { UsageSort } from '../models/UsageSort';
import { UsageSortDirection } from '../models/UsageSortDirection';
import { UsageSpecifiedCustomReportsAttributes } from '../models/UsageSpecifiedCustomReportsAttributes';
import { UsageSpecifiedCustomReportsData } from '../models/UsageSpecifiedCustomReportsData';
import { UsageSpecifiedCustomReportsMeta } from '../models/UsageSpecifiedCustomReportsMeta';
import { UsageSpecifiedCustomReportsPage } from '../models/UsageSpecifiedCustomReportsPage';
import { UsageSpecifiedCustomReportsResponse } from '../models/UsageSpecifiedCustomReportsResponse';
import { UsageSummaryDate } from '../models/UsageSummaryDate';
import { UsageSummaryDateOrg } from '../models/UsageSummaryDateOrg';
import { UsageSummaryResponse } from '../models/UsageSummaryResponse';
import { UsageSyntheticsAPIHour } from '../models/UsageSyntheticsAPIHour';
import { UsageSyntheticsAPIResponse } from '../models/UsageSyntheticsAPIResponse';
import { UsageSyntheticsBrowserHour } from '../models/UsageSyntheticsBrowserHour';
import { UsageSyntheticsBrowserResponse } from '../models/UsageSyntheticsBrowserResponse';
import { UsageSyntheticsHour } from '../models/UsageSyntheticsHour';
import { UsageSyntheticsResponse } from '../models/UsageSyntheticsResponse';
import { UsageTimeseriesHour } from '../models/UsageTimeseriesHour';
import { UsageTimeseriesResponse } from '../models/UsageTimeseriesResponse';
import { UsageTopAvgMetricsHour } from '../models/UsageTopAvgMetricsHour';
import { UsageTopAvgMetricsResponse } from '../models/UsageTopAvgMetricsResponse';
import { UsageTraceHour } from '../models/UsageTraceHour';
import { UsageTraceResponse } from '../models/UsageTraceResponse';
import { UsageTracingWithoutLimitsHour } from '../models/UsageTracingWithoutLimitsHour';
import { UsageTracingWithoutLimitsResponse } from '../models/UsageTracingWithoutLimitsResponse';
import { User } from '../models/User';
import { UserDisableResponse } from '../models/UserDisableResponse';
import { UserListResponse } from '../models/UserListResponse';
import { UserResponse } from '../models/UserResponse';
import { Widget } from '../models/Widget';
import { WidgetAggregator } from '../models/WidgetAggregator';
import { WidgetAxis } from '../models/WidgetAxis';
import { WidgetChangeType } from '../models/WidgetChangeType';
import { WidgetColorPreference } from '../models/WidgetColorPreference';
import { WidgetComparator } from '../models/WidgetComparator';
import { WidgetCompareTo } from '../models/WidgetCompareTo';
import { WidgetConditionalFormat } from '../models/WidgetConditionalFormat';
import { WidgetCustomLink } from '../models/WidgetCustomLink';
import { WidgetDefinition } from '../models/WidgetDefinition';
import { WidgetDisplayType } from '../models/WidgetDisplayType';
import { WidgetEvent } from '../models/WidgetEvent';
import { WidgetEventSize } from '../models/WidgetEventSize';
import { WidgetFieldSort } from '../models/WidgetFieldSort';
import { WidgetFormula } from '../models/WidgetFormula';
import { WidgetFormulaLimit } from '../models/WidgetFormulaLimit';
import { WidgetGrouping } from '../models/WidgetGrouping';
import { WidgetImageSizing } from '../models/WidgetImageSizing';
import { WidgetLayout } from '../models/WidgetLayout';
import { WidgetLayoutType } from '../models/WidgetLayoutType';
import { WidgetLineType } from '../models/WidgetLineType';
import { WidgetLineWidth } from '../models/WidgetLineWidth';
import { WidgetLiveSpan } from '../models/WidgetLiveSpan';
import { WidgetMargin } from '../models/WidgetMargin';
import { WidgetMarker } from '../models/WidgetMarker';
import { WidgetMessageDisplay } from '../models/WidgetMessageDisplay';
import { WidgetMonitorSummaryDisplayFormat } from '../models/WidgetMonitorSummaryDisplayFormat';
import { WidgetMonitorSummarySort } from '../models/WidgetMonitorSummarySort';
import { WidgetNodeType } from '../models/WidgetNodeType';
import { WidgetOrderBy } from '../models/WidgetOrderBy';
import { WidgetPalette } from '../models/WidgetPalette';
import { WidgetRequestStyle } from '../models/WidgetRequestStyle';
import { WidgetServiceSummaryDisplayFormat } from '../models/WidgetServiceSummaryDisplayFormat';
import { WidgetSizeFormat } from '../models/WidgetSizeFormat';
import { WidgetSort } from '../models/WidgetSort';
import { WidgetStyle } from '../models/WidgetStyle';
import { WidgetSummaryType } from '../models/WidgetSummaryType';
import { WidgetTextAlign } from '../models/WidgetTextAlign';
import { WidgetTickEdge } from '../models/WidgetTickEdge';
import { WidgetTime } from '../models/WidgetTime';
import { WidgetTimeWindows } from '../models/WidgetTimeWindows';
import { WidgetViewMode } from '../models/WidgetViewMode';
import { WidgetVizType } from '../models/WidgetVizType';
import { ObservableAWSIntegrationApi } from './ObservableAPI';


import { AWSIntegrationApiRequestFactory, AWSIntegrationApiResponseProcessor} from "../apis/AWSIntegrationApi";
export class PromiseAWSIntegrationApi {
    private api: ObservableAWSIntegrationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AWSIntegrationApiRequestFactory,
        responseProcessor?: AWSIntegrationApiResponseProcessor
    ) {
        this.api = new ObservableAWSIntegrationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a Datadog-Amazon Web Services integration. Using the `POST` method updates your integration configuration by adding your new configuration to the existing one in your Datadog organization. A unique AWS Account ID for role based authentication.
     * Create an AWS integration
     * @param body AWS Request Object
     */
    public createAWSAccount(body: AWSAccount, options?: Configuration): Promise<AWSAccountCreateResponse> {
    	const result = this.api.createAWSAccount(body, options);
        return result.toPromise();
    }
	
    /**
     * Set an AWS tag filter.
     * Set an AWS tag filter
     * @param body Set an AWS tag filter using an &#x60;aws_account_identifier&#x60;, &#x60;namespace&#x60;, and filtering string. Namespace options are &#x60;application_elb&#x60;, &#x60;elb&#x60;, &#x60;lambda&#x60;, &#x60;network_elb&#x60;, &#x60;rds&#x60;, &#x60;sqs&#x60;, and &#x60;custom&#x60;.
     */
    public createAWSTagFilter(body: AWSTagFilterCreateRequest, options?: Configuration): Promise<any> {
    	const result = this.api.createAWSTagFilter(body, options);
        return result.toPromise();
    }
	
    /**
     * Generate a new AWS external ID for a given AWS account ID and role name pair.
     * Generate a new external ID
     * @param body Your Datadog role delegation name. For more information about your AWS account Role name, see the [Datadog AWS integration configuration info](https://github.com/DataDog/documentation/blob/master/integrations/amazon_web_services/#installation).
     */
    public createNewAWSExternalID(body: AWSAccount, options?: Configuration): Promise<AWSAccountCreateResponse> {
    	const result = this.api.createNewAWSExternalID(body, options);
        return result.toPromise();
    }
	
    /**
     * Delete a Datadog-AWS integration matching the specified `account_id` and `role_name parameters`.
     * Delete an AWS integration
     * @param body AWS request object
     */
    public deleteAWSAccount(body: AWSAccount, options?: Configuration): Promise<any> {
    	const result = this.api.deleteAWSAccount(body, options);
        return result.toPromise();
    }
	
    /**
     * Delete a tag filtering entry.
     * Delete a tag filtering entry
     * @param body Delete a tag filtering entry for a given AWS account and &#x60;dd-aws&#x60; namespace.
     */
    public deleteAWSTagFilter(body: AWSTagFilterDeleteRequest, options?: Configuration): Promise<any> {
    	const result = this.api.deleteAWSTagFilter(body, options);
        return result.toPromise();
    }
	
    /**
     * List all Datadog-AWS integrations available in your Datadog organization.
     * List all AWS integrations
     * @param accountId Only return AWS accounts that matches this &#x60;account_id&#x60;.
     * @param roleName Only return AWS accounts that matches this role_name.
     * @param accessKeyId Only return AWS accounts that matches this &#x60;access_key_id&#x60;.
     */
    public listAWSAccounts(accountId?: string, roleName?: string, accessKeyId?: string, options?: Configuration): Promise<AWSAccountListResponse> {
    	const result = this.api.listAWSAccounts(accountId, roleName, accessKeyId, options);
        return result.toPromise();
    }
	
    /**
     * Get all AWS tag filters.
     * Get all AWS tag filters
     * @param accountId Only return AWS filters that matches this &#x60;account_id&#x60;.
     */
    public listAWSTagFilters(accountId: string, options?: Configuration): Promise<AWSTagFilterListResponse> {
    	const result = this.api.listAWSTagFilters(accountId, options);
        return result.toPromise();
    }
	
    /**
     * List all namespace rules for a given Datadog-AWS integration. This endpoint takes no arguments.
     * List namespace rules
     */
    public listAvailableAWSNamespaces(options?: Configuration): Promise<Array<string>> {
    	const result = this.api.listAvailableAWSNamespaces(options);
        return result.toPromise();
    }
	
    /**
     * Update a Datadog-Amazon Web Services integration.
     * Update an AWS integration
     * @param body AWS request object
     * @param accountId Only return AWS accounts that matches this &#x60;account_id&#x60;.
     * @param roleName Only return AWS accounts that match this &#x60;role_name&#x60;. Required if &#x60;account_id&#x60; is specified.
     * @param accessKeyId Only return AWS accounts that matches this &#x60;access_key_id&#x60;. Required if none of the other two options are specified.
     */
    public updateAWSAccount(body: AWSAccount, accountId?: string, roleName?: string, accessKeyId?: string, options?: Configuration): Promise<any> {
    	const result = this.api.updateAWSAccount(body, accountId, roleName, accessKeyId, options);
        return result.toPromise();
    }
	

}



import { ObservableAWSLogsIntegrationApi } from './ObservableAPI';


import { AWSLogsIntegrationApiRequestFactory, AWSLogsIntegrationApiResponseProcessor} from "../apis/AWSLogsIntegrationApi";
export class PromiseAWSLogsIntegrationApi {
    private api: ObservableAWSLogsIntegrationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AWSLogsIntegrationApiRequestFactory,
        responseProcessor?: AWSLogsIntegrationApiResponseProcessor
    ) {
        this.api = new ObservableAWSLogsIntegrationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Test if permissions are present to add a log-forwarding triggers for the given services and AWS account. The input is the same as for Enable an AWS service log collection. Subsequent requests will always repeat the above, so this endpoint can be polled intermittently instead of blocking.  - Returns a status of 'created' when it's checking if the Lambda exists in the account. - Returns a status of 'waiting' while checking. - Returns a status of 'checked and ok' if the Lambda exists. - Returns a status of 'error' if the Lambda does not exist.
     * Check that an AWS Lambda Function exists
     * @param body Check AWS Log Lambda Async request body.
     */
    public checkAWSLogsLambdaAsync(body: AWSAccountAndLambdaRequest, options?: Configuration): Promise<AWSLogsAsyncResponse> {
    	const result = this.api.checkAWSLogsLambdaAsync(body, options);
        return result.toPromise();
    }
	
    /**
     * Test if permissions are present to add log-forwarding triggers for the given services and AWS account. Input is the same as for `EnableAWSLogServices`. Done async, so can be repeatedly polled in a non-blocking fashion until the async request completes.  - Returns a status of `created` when it's checking if the permissions exists   in the AWS account. - Returns a status of `waiting` while checking. - Returns a status of `checked and ok` if the Lambda exists. - Returns a status of `error` if the Lambda does not exist.
     * Check permissions for log services
     * @param body Check AWS Logs Async Services request body.
     */
    public checkAWSLogsServicesAsync(body: AWSLogsServicesRequest, options?: Configuration): Promise<AWSLogsAsyncResponse> {
    	const result = this.api.checkAWSLogsServicesAsync(body, options);
        return result.toPromise();
    }
	
    /**
     * Attach the Lambda ARN of the Lambda created for the Datadog-AWS log collection to your AWS account ID to enable log collection.
     * Add AWS Log Lambda ARN
     * @param body AWS Log Lambda Async request body.
     */
    public createAWSLambdaARN(body: AWSAccountAndLambdaRequest, options?: Configuration): Promise<any> {
    	const result = this.api.createAWSLambdaARN(body, options);
        return result.toPromise();
    }
	
    /**
     * Delete a Datadog-AWS logs configuration by removing the specific Lambda ARN associated with a given AWS account.
     * Delete an AWS Logs integration
     * @param body Delete AWS Lambda ARN request body.
     */
    public deleteAWSLambdaARN(body: AWSAccountAndLambdaRequest, options?: Configuration): Promise<any> {
    	const result = this.api.deleteAWSLambdaARN(body, options);
        return result.toPromise();
    }
	
    /**
     * Enable automatic log collection for a list of services. This should be run after running `CreateAWSLambdaARN` to save the configuration.
     * Enable an AWS Logs integration
     * @param body Enable AWS Log Services request body.
     */
    public enableAWSLogServices(body: AWSLogsServicesRequest, options?: Configuration): Promise<any> {
    	const result = this.api.enableAWSLogServices(body, options);
        return result.toPromise();
    }
	
    /**
     * List all Datadog-AWS Logs integrations configured in your Datadog account.
     * List all AWS Logs integrations
     */
    public listAWSLogsIntegrations(options?: Configuration): Promise<Array<AWSLogsListResponse>> {
    	const result = this.api.listAWSLogsIntegrations(options);
        return result.toPromise();
    }
	
    /**
     * Get the list of current AWS services that Datadog offers automatic log collection. Use returned service IDs with the services parameter for the Enable an AWS service log collection API endpoint.
     * Get list of AWS log ready services
     */
    public listAWSLogsServices(options?: Configuration): Promise<Array<AWSLogsListServicesResponse>> {
    	const result = this.api.listAWSLogsServices(options);
        return result.toPromise();
    }
	

}



import { ObservableAuthenticationApi } from './ObservableAPI';


import { AuthenticationApiRequestFactory, AuthenticationApiResponseProcessor} from "../apis/AuthenticationApi";
export class PromiseAuthenticationApi {
    private api: ObservableAuthenticationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthenticationApiRequestFactory,
        responseProcessor?: AuthenticationApiResponseProcessor
    ) {
        this.api = new ObservableAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Check if the API key (not the APP key) is valid. If invalid, a 403 is returned.
     * Validate API key
     */
    public validate(options?: Configuration): Promise<AuthenticationValidationResponse> {
    	const result = this.api.validate(options);
        return result.toPromise();
    }
	

}



import { ObservableAzureIntegrationApi } from './ObservableAPI';


import { AzureIntegrationApiRequestFactory, AzureIntegrationApiResponseProcessor} from "../apis/AzureIntegrationApi";
export class PromiseAzureIntegrationApi {
    private api: ObservableAzureIntegrationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AzureIntegrationApiRequestFactory,
        responseProcessor?: AzureIntegrationApiResponseProcessor
    ) {
        this.api = new ObservableAzureIntegrationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a Datadog-Azure integration.  Using the `POST` method updates your integration configuration by adding your new configuration to the existing one in your Datadog organization.  Using the `PUT` method updates your integration configuration by replacing your current configuration with the new one sent to your Datadog organization.
     * Create an Azure integration
     * @param body Create a Datadog-Azure integration for your Datadog account request body.
     */
    public createAzureIntegration(body: AzureAccount, options?: Configuration): Promise<any> {
    	const result = this.api.createAzureIntegration(body, options);
        return result.toPromise();
    }
	
    /**
     * Delete a given Datadog-Azure integration from your Datadog account.
     * Delete an Azure integration
     * @param body Delete a given Datadog-Azure integration request body.
     */
    public deleteAzureIntegration(body: AzureAccount, options?: Configuration): Promise<any> {
    	const result = this.api.deleteAzureIntegration(body, options);
        return result.toPromise();
    }
	
    /**
     * List all Datadog-Azure integrations configured in your Datadog account.
     * List all Azure integrations
     */
    public listAzureIntegration(options?: Configuration): Promise<Array<AzureAccount>> {
    	const result = this.api.listAzureIntegration(options);
        return result.toPromise();
    }
	
    /**
     * Update the defined list of host filters for a given Datadog-Azure integration.
     * Update Azure integration host filters
     * @param body Update a Datadog-Azure integration&#39;s host filters request body.
     */
    public updateAzureHostFilters(body: AzureAccount, options?: Configuration): Promise<any> {
    	const result = this.api.updateAzureHostFilters(body, options);
        return result.toPromise();
    }
	
    /**
     * Update a Datadog-Azure integration. Requires an existing `tenant_name` and `client_id`. Any other fields supplied will overwrite existing values. To overwrite `tenant_name` or `client_id`, use `new_tenant_name` and `new_client_id`. To leave a field unchanged, do not supply that field in the payload.
     * Update an Azure integration
     * @param body Update a Datadog-Azure integration request body.
     */
    public updateAzureIntegration(body: AzureAccount, options?: Configuration): Promise<any> {
    	const result = this.api.updateAzureIntegration(body, options);
        return result.toPromise();
    }
	

}



import { ObservableDashboardListsApi } from './ObservableAPI';


import { DashboardListsApiRequestFactory, DashboardListsApiResponseProcessor} from "../apis/DashboardListsApi";
export class PromiseDashboardListsApi {
    private api: ObservableDashboardListsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DashboardListsApiRequestFactory,
        responseProcessor?: DashboardListsApiResponseProcessor
    ) {
        this.api = new ObservableDashboardListsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an empty dashboard list.
     * Create a dashboard list
     * @param body Create a dashboard list request body.
     */
    public createDashboardList(body: DashboardList, options?: Configuration): Promise<DashboardList> {
    	const result = this.api.createDashboardList(body, options);
        return result.toPromise();
    }
	
    /**
     * Delete a dashboard list.
     * Delete a dashboard list
     * @param listId ID of the dashboard list to delete.
     */
    public deleteDashboardList(listId: number, options?: Configuration): Promise<DashboardListDeleteResponse> {
    	const result = this.api.deleteDashboardList(listId, options);
        return result.toPromise();
    }
	
    /**
     * Fetch an existing dashboard list's definition.
     * Get a dashboard list
     * @param listId ID of the dashboard list to fetch.
     */
    public getDashboardList(listId: number, options?: Configuration): Promise<DashboardList> {
    	const result = this.api.getDashboardList(listId, options);
        return result.toPromise();
    }
	
    /**
     * Fetch all of your existing dashboard list definitions.
     * Get all dashboard lists
     */
    public listDashboardLists(options?: Configuration): Promise<DashboardListListResponse> {
    	const result = this.api.listDashboardLists(options);
        return result.toPromise();
    }
	
    /**
     * Update the name of a dashboard list.
     * Update a dashboard list
     * @param listId ID of the dashboard list to update.
     * @param body Update a dashboard list request body.
     */
    public updateDashboardList(listId: number, body: DashboardList, options?: Configuration): Promise<DashboardList> {
    	const result = this.api.updateDashboardList(listId, body, options);
        return result.toPromise();
    }
	

}



import { ObservableDashboardsApi } from './ObservableAPI';


import { DashboardsApiRequestFactory, DashboardsApiResponseProcessor} from "../apis/DashboardsApi";
export class PromiseDashboardsApi {
    private api: ObservableDashboardsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DashboardsApiRequestFactory,
        responseProcessor?: DashboardsApiResponseProcessor
    ) {
        this.api = new ObservableDashboardsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a dashboard using the specified options. When defining queries in your widgets, take note of which queries should have the `as_count()` or `as_rate()` modifiers appended. Refer to the following [documentation](https://docs.datadoghq.com/developers/metrics/type_modifiers/?tab=count#in-application-modifiers) for more information on these modifiers.
     * Create a new dashboard
     * @param body Create a dashboard request body.
     */
    public createDashboard(body: Dashboard, options?: Configuration): Promise<Dashboard> {
    	const result = this.api.createDashboard(body, options);
        return result.toPromise();
    }
	
    /**
     * Delete a dashboard using the specified ID.
     * Delete a dashboard
     * @param dashboardId The ID of the dashboard.
     */
    public deleteDashboard(dashboardId: string, options?: Configuration): Promise<DashboardDeleteResponse> {
    	const result = this.api.deleteDashboard(dashboardId, options);
        return result.toPromise();
    }
	
    /**
     * Get a dashboard using the specified ID.
     * Get a dashboard
     * @param dashboardId The ID of the dashboard.
     */
    public getDashboard(dashboardId: string, options?: Configuration): Promise<Dashboard> {
    	const result = this.api.getDashboard(dashboardId, options);
        return result.toPromise();
    }
	
    /**
     * Get all dashboards.  **Note**: This query will only return custom created or cloned dashboards. This query will not return preset dashboards.
     * Get all dashboards
     */
    public listDashboards(options?: Configuration): Promise<DashboardSummary> {
    	const result = this.api.listDashboards(options);
        return result.toPromise();
    }
	
    /**
     * Update a dashboard using the specified ID.
     * Update a dashboard
     * @param dashboardId The ID of the dashboard.
     * @param body Update Dashboard request body.
     */
    public updateDashboard(dashboardId: string, body: Dashboard, options?: Configuration): Promise<Dashboard> {
    	const result = this.api.updateDashboard(dashboardId, body, options);
        return result.toPromise();
    }
	

}



import { ObservableDowntimesApi } from './ObservableAPI';


import { DowntimesApiRequestFactory, DowntimesApiResponseProcessor} from "../apis/DowntimesApi";
export class PromiseDowntimesApi {
    private api: ObservableDowntimesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DowntimesApiRequestFactory,
        responseProcessor?: DowntimesApiResponseProcessor
    ) {
        this.api = new ObservableDowntimesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Cancel a downtime.
     * Cancel a downtime
     * @param downtimeId ID of the downtime to cancel.
     */
    public cancelDowntime(downtimeId: number, options?: Configuration): Promise<void> {
    	const result = this.api.cancelDowntime(downtimeId, options);
        return result.toPromise();
    }
	
    /**
     * Delete all downtimes that match the scope of `X`.
     * Cancel downtimes by scope
     * @param body Scope to cancel downtimes for.
     */
    public cancelDowntimesByScope(body: CancelDowntimesByScopeRequest, options?: Configuration): Promise<CanceledDowntimesIds> {
    	const result = this.api.cancelDowntimesByScope(body, options);
        return result.toPromise();
    }
	
    /**
     * Schedule a downtime.
     * Schedule a downtime
     * @param body Schedule a downtime request body.
     */
    public createDowntime(body: Downtime, options?: Configuration): Promise<Downtime> {
    	const result = this.api.createDowntime(body, options);
        return result.toPromise();
    }
	
    /**
     * Get downtime detail by `downtime_id`.
     * Get a downtime
     * @param downtimeId ID of the downtime to fetch.
     */
    public getDowntime(downtimeId: number, options?: Configuration): Promise<Downtime> {
    	const result = this.api.getDowntime(downtimeId, options);
        return result.toPromise();
    }
	
    /**
     * Get all scheduled downtimes.
     * Get all downtimes
     * @param currentOnly Only return downtimes that are active when the request is made.
     */
    public listDowntimes(currentOnly?: boolean, options?: Configuration): Promise<Array<Downtime>> {
    	const result = this.api.listDowntimes(currentOnly, options);
        return result.toPromise();
    }
	
    /**
     * Update a single downtime by `downtime_id`.
     * Update a downtime
     * @param downtimeId ID of the downtime to update.
     * @param body Update a downtime request body.
     */
    public updateDowntime(downtimeId: number, body: Downtime, options?: Configuration): Promise<Downtime> {
    	const result = this.api.updateDowntime(downtimeId, body, options);
        return result.toPromise();
    }
	

}



import { ObservableEventsApi } from './ObservableAPI';


import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";
export class PromiseEventsApi {
    private api: ObservableEventsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EventsApiRequestFactory,
        responseProcessor?: EventsApiResponseProcessor
    ) {
        this.api = new ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint allows you to query for event details.  **Note**: If the event you’re querying contains markdown formatting of any kind, you may see characters such as `%`,`\\`,`n` in your output.
     * Get an event
     * @param eventId The ID of the event.
     */
    public getEvent(eventId: number, options?: Configuration): Promise<EventResponse> {
    	const result = this.api.getEvent(eventId, options);
        return result.toPromise();
    }
	
    /**
     * The event stream can be queried and filtered by time, priority, sources and tags.  **Notes**: - If the event you’re querying contains markdown formatting of any kind, you may see characters such as `%`,`\\`,`n` in your output.  - This endpoint returns a maximum of `1000` most recent results. To return additional results, identify the last timestamp of the last result and set that as the `end` query time to paginate the results.
     * Query the event stream
     * @param start POSIX timestamp.
     * @param end POSIX timestamp.
     * @param priority Priority of your events, either &#x60;low&#x60; or &#x60;normal&#x60;.
     * @param sources A comma separated string of sources.
     * @param tags A comma separated list indicating what tags, if any, should be used to filter the list of monitors by scope.
     * @param unaggregated Set unaggregated to &#x60;true&#x60; to return all events within the specified [&#x60;start&#x60;,&#x60;end&#x60;] timeframe. Otherwise if an event is aggregated to a parent event with a timestamp outside of the timeframe, it won&#39;t be available in the output.
     */
    public listEvents(start: number, end: number, priority?: EventPriority, sources?: string, tags?: string, unaggregated?: boolean, options?: Configuration): Promise<EventListResponse> {
    	const result = this.api.listEvents(start, end, priority, sources, tags, unaggregated, options);
        return result.toPromise();
    }
	

}



import { ObservableGCPIntegrationApi } from './ObservableAPI';


import { GCPIntegrationApiRequestFactory, GCPIntegrationApiResponseProcessor} from "../apis/GCPIntegrationApi";
export class PromiseGCPIntegrationApi {
    private api: ObservableGCPIntegrationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GCPIntegrationApiRequestFactory,
        responseProcessor?: GCPIntegrationApiResponseProcessor
    ) {
        this.api = new ObservableGCPIntegrationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a Datadog-GCP integration.
     * Create a GCP integration
     * @param body Create a Datadog-GCP integration.
     */
    public createGCPIntegration(body: GCPAccount, options?: Configuration): Promise<any> {
    	const result = this.api.createGCPIntegration(body, options);
        return result.toPromise();
    }
	
    /**
     * Delete a given Datadog-GCP integration.
     * Delete a GCP integration
     * @param body Delete a given Datadog-GCP integration.
     */
    public deleteGCPIntegration(body: GCPAccount, options?: Configuration): Promise<any> {
    	const result = this.api.deleteGCPIntegration(body, options);
        return result.toPromise();
    }
	
    /**
     * List all Datadog-GCP integrations configured in your Datadog account.
     * List all GCP integrations
     */
    public listGCPIntegration(options?: Configuration): Promise<Array<GCPAccount>> {
    	const result = this.api.listGCPIntegration(options);
        return result.toPromise();
    }
	
    /**
     * Update a Datadog-GCP integrations host_filters and/or auto-mute. Requires a `project_id` and `client_email`, however these fields cannot be updated. If you need to update these fields, delete and use the create (`POST`) endpoint. The unspecified fields will keep their original values.
     * Update a GCP integration
     * @param body Update a Datadog-GCP integration.
     */
    public updateGCPIntegration(body: GCPAccount, options?: Configuration): Promise<any> {
    	const result = this.api.updateGCPIntegration(body, options);
        return result.toPromise();
    }
	

}



import { ObservableHostsApi } from './ObservableAPI';


import { HostsApiRequestFactory, HostsApiResponseProcessor} from "../apis/HostsApi";
export class PromiseHostsApi {
    private api: ObservableHostsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: HostsApiRequestFactory,
        responseProcessor?: HostsApiResponseProcessor
    ) {
        this.api = new ObservableHostsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint returns the total number of active and up hosts in your Datadog account. Active means the host has reported in the past hour, and up means it has reported in the past two hours.
     * Get the total number of active hosts
     * @param from Number of seconds from which you want to get total number of active hosts.
     */
    public getHostTotals(from?: number, options?: Configuration): Promise<HostTotals> {
    	const result = this.api.getHostTotals(from, options);
        return result.toPromise();
    }
	
    /**
     * This endpoint allows searching for hosts by name, alias, or tag. Hosts live within the past 3 hours are included by default. Retention is 7 days. Results are paginated with a max of 1000 results at a time.
     * Get all hosts for your organization
     * @param filter String to filter search results.
     * @param sortField Sort hosts by this field.
     * @param sortDir Direction of sort. Options include &#x60;asc&#x60; and &#x60;desc&#x60;.
     * @param start Host result to start search from.
     * @param count Number of hosts to return. Max 1000.
     * @param from Number of seconds since UNIX epoch from which you want to search your hosts.
     * @param includeMutedHostsData Include information on the muted status of hosts and when the mute expires.
     * @param includeHostsMetadata Include additional metadata about the hosts (agent_version, machine, platform, processor, etc.).
     */
    public listHosts(filter?: string, sortField?: string, sortDir?: string, start?: number, count?: number, from?: number, includeMutedHostsData?: boolean, includeHostsMetadata?: boolean, options?: Configuration): Promise<HostListResponse> {
    	const result = this.api.listHosts(filter, sortField, sortDir, start, count, from, includeMutedHostsData, includeHostsMetadata, options);
        return result.toPromise();
    }
	
    /**
     * Mute a host.
     * Mute a host
     * @param hostName Name of the host to mute.
     * @param body Mute a host request body.
     */
    public muteHost(hostName: string, body: HostMuteSettings, options?: Configuration): Promise<HostMuteResponse> {
    	const result = this.api.muteHost(hostName, body, options);
        return result.toPromise();
    }
	
    /**
     * Unmutes a host. This endpoint takes no JSON arguments.
     * Unmute a host
     * @param hostName Name of the host to unmute.
     */
    public unmuteHost(hostName: string, options?: Configuration): Promise<HostMuteResponse> {
    	const result = this.api.unmuteHost(hostName, options);
        return result.toPromise();
    }
	

}



import { ObservableIPRangesApi } from './ObservableAPI';


import { IPRangesApiRequestFactory, IPRangesApiResponseProcessor} from "../apis/IPRangesApi";
export class PromiseIPRangesApi {
    private api: ObservableIPRangesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: IPRangesApiRequestFactory,
        responseProcessor?: IPRangesApiResponseProcessor
    ) {
        this.api = new ObservableIPRangesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get information about Datadog IP ranges.
     * List IP Ranges
     */
    public getIPRanges(options?: Configuration): Promise<IPRanges> {
    	const result = this.api.getIPRanges(options);
        return result.toPromise();
    }
	

}



import { ObservableKeyManagementApi } from './ObservableAPI';


import { KeyManagementApiRequestFactory, KeyManagementApiResponseProcessor} from "../apis/KeyManagementApi";
export class PromiseKeyManagementApi {
    private api: ObservableKeyManagementApi

    public constructor(
        configuration: Configuration,
        requestFactory?: KeyManagementApiRequestFactory,
        responseProcessor?: KeyManagementApiResponseProcessor
    ) {
        this.api = new ObservableKeyManagementApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates an API key with a given name.
     * Create an API key
     * @param body 
     */
    public createAPIKey(body: ApiKey, options?: Configuration): Promise<ApiKeyResponse> {
    	const result = this.api.createAPIKey(body, options);
        return result.toPromise();
    }
	
    /**
     * Create an application key with a given name.
     * Create an application key
     * @param body 
     */
    public createApplicationKey(body: ApplicationKey, options?: Configuration): Promise<ApplicationKeyResponse> {
    	const result = this.api.createApplicationKey(body, options);
        return result.toPromise();
    }
	
    /**
     * Delete a given API key.
     * Delete an API key
     * @param key The specific API key you are working with.
     */
    public deleteAPIKey(key: string, options?: Configuration): Promise<ApiKeyResponse> {
    	const result = this.api.deleteAPIKey(key, options);
        return result.toPromise();
    }
	
    /**
     * Delete a given application key.
     * Delete an application key
     * @param key The specific APP key you are working with.
     */
    public deleteApplicationKey(key: string, options?: Configuration): Promise<ApplicationKeyResponse> {
    	const result = this.api.deleteApplicationKey(key, options);
        return result.toPromise();
    }
	
    /**
     * Get a given API key.
     * Get API key
     * @param key The specific API key you are working with.
     */
    public getAPIKey(key: string, options?: Configuration): Promise<ApiKeyResponse> {
    	const result = this.api.getAPIKey(key, options);
        return result.toPromise();
    }
	
    /**
     * Get a given application key.
     * Get an application key
     * @param key The specific APP key you are working with.
     */
    public getApplicationKey(key: string, options?: Configuration): Promise<ApplicationKeyResponse> {
    	const result = this.api.getApplicationKey(key, options);
        return result.toPromise();
    }
	
    /**
     * Get all API keys available for your account.
     * Get all API keys
     */
    public listAPIKeys(options?: Configuration): Promise<ApiKeyListResponse> {
    	const result = this.api.listAPIKeys(options);
        return result.toPromise();
    }
	
    /**
     * Get all application keys available for your Datadog account.
     * Get all application keys
     */
    public listApplicationKeys(options?: Configuration): Promise<ApplicationKeyListResponse> {
    	const result = this.api.listApplicationKeys(options);
        return result.toPromise();
    }
	
    /**
     * Edit an API key name.
     * Edit an API key
     * @param key The specific API key you are working with.
     * @param body 
     */
    public updateAPIKey(key: string, body: ApiKey, options?: Configuration): Promise<ApiKeyResponse> {
    	const result = this.api.updateAPIKey(key, body, options);
        return result.toPromise();
    }
	
    /**
     * Edit an application key name.
     * Edit an application key
     * @param key The specific APP key you are working with.
     * @param body 
     */
    public updateApplicationKey(key: string, body: ApplicationKey, options?: Configuration): Promise<ApplicationKeyResponse> {
    	const result = this.api.updateApplicationKey(key, body, options);
        return result.toPromise();
    }
	

}



import { ObservableLogsApi } from './ObservableAPI';


import { LogsApiRequestFactory, LogsApiResponseProcessor} from "../apis/LogsApi";
export class PromiseLogsApi {
    private api: ObservableLogsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LogsApiRequestFactory,
        responseProcessor?: LogsApiResponseProcessor
    ) {
        this.api = new ObservableLogsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List endpoint returns logs that match a log search query. [Results are paginated][1].  **If you are considering archiving logs for your organization, consider use of the Datadog archive capabilities instead of the log list API. See [Datadog Logs Archive documentation][2].**  [1]: /logs/guide/collect-multiple-logs-with-pagination [2]: https://docs.datadoghq.com/logs/archives
     * Search logs
     * @param body Logs filter
     */
    public listLogs(body: LogsListRequest, options?: Configuration): Promise<LogsListResponse> {
    	const result = this.api.listLogs(body, options);
        return result.toPromise();
    }
	

}



import { ObservableLogsIndexesApi } from './ObservableAPI';


import { LogsIndexesApiRequestFactory, LogsIndexesApiResponseProcessor} from "../apis/LogsIndexesApi";
export class PromiseLogsIndexesApi {
    private api: ObservableLogsIndexesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LogsIndexesApiRequestFactory,
        responseProcessor?: LogsIndexesApiResponseProcessor
    ) {
        this.api = new ObservableLogsIndexesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new index. Returns the Index object passed in the request body when the request is successful.
     * Create an index
     * @param body Object containing the new index.
     */
    public createLogsIndex(body: LogsIndex, options?: Configuration): Promise<LogsIndex> {
    	const result = this.api.createLogsIndex(body, options);
        return result.toPromise();
    }
	
    /**
     * Get one log index from your organization. This endpoint takes no JSON arguments.
     * Get an index
     * @param name Name of the log index.
     */
    public getLogsIndex(name: string, options?: Configuration): Promise<LogsIndex> {
    	const result = this.api.getLogsIndex(name, options);
        return result.toPromise();
    }
	
    /**
     * Get the current order of your log indexes. This endpoint takes no JSON arguments.
     * Get indexes order
     */
    public getLogsIndexOrder(options?: Configuration): Promise<LogsIndexesOrder> {
    	const result = this.api.getLogsIndexOrder(options);
        return result.toPromise();
    }
	
    /**
     * The Index object describes the configuration of a log index. This endpoint returns an array of the `LogIndex` objects of your organization.
     * Get all indexes
     */
    public listLogIndexes(options?: Configuration): Promise<LogsIndexListResponse> {
    	const result = this.api.listLogIndexes(options);
        return result.toPromise();
    }
	
    /**
     * Update an index as identified by its name. Returns the Index object passed in the request body when the request is successful.  Using the `PUT` method updates your index’s configuration by **replacing** your current configuration with the new one sent to your Datadog organization.
     * Update an index
     * @param name Name of the log index.
     * @param body Object containing the new &#x60;LogsIndexUpdateRequest&#x60;.
     */
    public updateLogsIndex(name: string, body: LogsIndexUpdateRequest, options?: Configuration): Promise<LogsIndex> {
    	const result = this.api.updateLogsIndex(name, body, options);
        return result.toPromise();
    }
	
    /**
     * This endpoint updates the index order of your organization. It returns the index order object passed in the request body when the request is successful.
     * Update indexes order
     * @param body Object containing the new ordered list of index names
     */
    public updateLogsIndexOrder(body: LogsIndexesOrder, options?: Configuration): Promise<LogsIndexesOrder> {
    	const result = this.api.updateLogsIndexOrder(body, options);
        return result.toPromise();
    }
	

}



import { ObservableLogsPipelinesApi } from './ObservableAPI';


import { LogsPipelinesApiRequestFactory, LogsPipelinesApiResponseProcessor} from "../apis/LogsPipelinesApi";
export class PromiseLogsPipelinesApi {
    private api: ObservableLogsPipelinesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LogsPipelinesApiRequestFactory,
        responseProcessor?: LogsPipelinesApiResponseProcessor
    ) {
        this.api = new ObservableLogsPipelinesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a pipeline in your organization.
     * Create a pipeline
     * @param body Definition of the new pipeline.
     */
    public createLogsPipeline(body: LogsPipeline, options?: Configuration): Promise<LogsPipeline> {
    	const result = this.api.createLogsPipeline(body, options);
        return result.toPromise();
    }
	
    /**
     * Delete a given pipeline from your organization. This endpoint takes no JSON arguments.
     * Delete a pipeline
     * @param pipelineId ID of the pipeline to delete.
     */
    public deleteLogsPipeline(pipelineId: string, options?: Configuration): Promise<void> {
    	const result = this.api.deleteLogsPipeline(pipelineId, options);
        return result.toPromise();
    }
	
    /**
     * Get a specific pipeline from your organization. This endpoint takes no JSON arguments.
     * Get a pipeline
     * @param pipelineId ID of the pipeline to get.
     */
    public getLogsPipeline(pipelineId: string, options?: Configuration): Promise<LogsPipeline> {
    	const result = this.api.getLogsPipeline(pipelineId, options);
        return result.toPromise();
    }
	
    /**
     * Get the current order of your pipelines. This endpoint takes no JSON arguments.
     * Get pipeline order
     */
    public getLogsPipelineOrder(options?: Configuration): Promise<LogsPipelinesOrder> {
    	const result = this.api.getLogsPipelineOrder(options);
        return result.toPromise();
    }
	
    /**
     * Get all pipelines from your organization. This endpoint takes no JSON arguments.
     * Get all pipelines
     */
    public listLogsPipelines(options?: Configuration): Promise<Array<LogsPipeline>> {
    	const result = this.api.listLogsPipelines(options);
        return result.toPromise();
    }
	
    /**
     * Update a given pipeline configuration to change it’s processors or their order.  **Note**: Using this method updates your pipeline configuration by **replacing** your current configuration with the new one sent to your Datadog organization.
     * Update a pipeline
     * @param pipelineId ID of the pipeline to delete.
     * @param body New definition of the pipeline.
     */
    public updateLogsPipeline(pipelineId: string, body: LogsPipeline, options?: Configuration): Promise<LogsPipeline> {
    	const result = this.api.updateLogsPipeline(pipelineId, body, options);
        return result.toPromise();
    }
	
    /**
     * Update the order of your pipelines. Since logs are processed sequentially, reordering a pipeline may change the structure and content of the data processed by other pipelines and their processors.  **Note**: Using the `PUT` method updates your pipeline order by replacing your current order with the new one sent to your Datadog organization.
     * Update pipeline order
     * @param body Object containing the new ordered list of pipeline IDs.
     */
    public updateLogsPipelineOrder(body: LogsPipelinesOrder, options?: Configuration): Promise<LogsPipelinesOrder> {
    	const result = this.api.updateLogsPipelineOrder(body, options);
        return result.toPromise();
    }
	

}



import { ObservableMetricsApi } from './ObservableAPI';


import { MetricsApiRequestFactory, MetricsApiResponseProcessor} from "../apis/MetricsApi";
export class PromiseMetricsApi {
    private api: ObservableMetricsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MetricsApiRequestFactory,
        responseProcessor?: MetricsApiResponseProcessor
    ) {
        this.api = new ObservableMetricsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get metadata about a specific metric.
     * Get metric metadata
     * @param metricName Name of the metric for which to get metadata.
     */
    public getMetricMetadata(metricName: string, options?: Configuration): Promise<MetricMetadata> {
    	const result = this.api.getMetricMetadata(metricName, options);
        return result.toPromise();
    }
	
    /**
     * Get the list of actively reporting metrics from a given time until now.
     * Get active metrics list
     * @param from Seconds since the Unix epoch.
     * @param host Hostname for filtering the list of metrics returned. If set, metrics retrieved are those with the corresponding hostname tag.
     */
    public listActiveMetrics(from: number, host?: string, options?: Configuration): Promise<MetricsListResponse> {
    	const result = this.api.listActiveMetrics(from, host, options);
        return result.toPromise();
    }
	
    /**
     * Search for metrics from the last 24 hours in Datadog.
     * Search metrics
     * @param q Query string to search metrics upon. Must be prefixed with &#x60;metrics:&#x60;.
     */
    public listMetrics(q: string, options?: Configuration): Promise<MetricSearchResponse> {
    	const result = this.api.listMetrics(q, options);
        return result.toPromise();
    }
	
    /**
     * Query timeseries points.
     * Query timeseries points
     * @param from Start of the queried time period, seconds since the Unix epoch.
     * @param to End of the queried time period, seconds since the Unix epoch.
     * @param query Query string.
     */
    public queryMetrics(from: number, to: number, query: string, options?: Configuration): Promise<MetricsQueryResponse> {
    	const result = this.api.queryMetrics(from, to, query, options);
        return result.toPromise();
    }
	
    /**
     * Edit metadata of a specific metric. Find out more about [supported types](https://docs.datadoghq.com/developers/metrics).
     * Edit metric metadata
     * @param metricName Name of the metric for which to edit metadata.
     * @param body New metadata.
     */
    public updateMetricMetadata(metricName: string, body: MetricMetadata, options?: Configuration): Promise<MetricMetadata> {
    	const result = this.api.updateMetricMetadata(metricName, body, options);
        return result.toPromise();
    }
	

}



import { ObservableMonitorsApi } from './ObservableAPI';


import { MonitorsApiRequestFactory, MonitorsApiResponseProcessor} from "../apis/MonitorsApi";
export class PromiseMonitorsApi {
    private api: ObservableMonitorsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MonitorsApiRequestFactory,
        responseProcessor?: MonitorsApiResponseProcessor
    ) {
        this.api = new ObservableMonitorsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Check if the given monitors can be deleted.
     * Check if a monitor can be deleted
     * @param monitorIds The IDs of the monitor to check.
     */
    public checkCanDeleteMonitor(monitorIds: Array<number>, options?: Configuration): Promise<CheckCanDeleteMonitorResponse> {
    	const result = this.api.checkCanDeleteMonitor(monitorIds, options);
        return result.toPromise();
    }
	
    /**
     * Create a monitor using the specified options.  #### Monitor Types  The type of monitor chosen from:  - anomaly: `query alert` - APM: `query alert` or `trace-analytics alert` - composite: `composite` - custom: `service check` - event: `event alert` - forecast: `query alert` - host: `service check` - integration: `query alert` or `service check` - live process: `process alert` - logs: `log alert` - metric: `metric alert` - network: `service check` - outlier: `query alert` - process: `service check` - rum: `rum alert` - watchdog: `event alert`  #### Query Types  **Metric Alert Query**  Example: `time_aggr(time_window):space_aggr:metric{tags} [by {key}] operator #`  - `time_aggr`: avg, sum, max, min, change, or pct_change - `time_window`: `last_#m` (with `#` between 1 and 2880 depending on the monitor type) or `last_#h`(with `#` between 1 and 48 depending on the monitor type), or `last_1d` - `space_aggr`: avg, sum, min, or max - `tags`: one or more tags (comma-separated), or * - `key`: a 'key' in key:value tag syntax; defines a separate alert for each tag in the group (multi-alert) - `operator`: <, <=, >, >=, ==, or != - `#`: an integer or decimal number used to set the threshold  If you are using the `_change_` or `_pct_change_` time aggregator, instead use `change_aggr(time_aggr(time_window), timeshift):space_aggr:metric{tags} [by {key}] operator #` with:  - `change_aggr` change, pct_change - `time_aggr` avg, sum, max, min [Learn more](https://docs.datadoghq.com/monitors/monitor_types/#define-the-conditions) - `time_window` last\\_#m (between 1 and 2880 depending on the monitor type), last\\_#h (between 1 and 48 depending on the monitor type), or last_#d (1 or 2) - `timeshift` #m_ago (5, 10, 15, or 30), #h_ago (1, 2, or 4), or 1d_ago  Use this to create an outlier monitor using the following query: `avg(last_30m):outliers(avg:system.cpu.user{role:es-events-data} by {host}, 'dbscan', 7) > 0`  **Service Check Query**  Example: `\"check\".over(tags).last(count).count_by_status()`  - **`check`** name of the check, e.g. `datadog.agent.up` - **`tags`** one or more quoted tags (comma-separated), or \"*\". e.g.: `.over(\"env:prod\", \"role:db\")` - **`count`** must be at >= your max threshold (defined in the `options`). e.g. if you want to notify on 1 critical, 3 ok and 2 warn statuses count should be 3. It is limited to 100.  **Event Alert Query**  Example: `events('sources:nagios status:error,warning priority:normal tags: \"string query\"').rollup(\"count\").last(\"1h\")\"`  - **`event`**, the event query string: - **`string_query`** free text query to match against event title and text. - **`sources`** event sources (comma-separated). - **`status`** event statuses (comma-separated). Valid options: error, warn, and info. - **`priority`** event priorities (comma-separated). Valid options: low, normal, all. - **`host`** event reporting host (comma-separated). - **`tags`** event tags (comma-separated). - **`excluded_tags`** excluded event tags (comma-separated). - **`rollup`** the stats roll-up method. `count` is the only supported method now. - **`last`** the timeframe to roll up the counts. Examples: 45m, 4h. Supported timeframes: m, h and d. This value should not exceed 48 hours.  **Process Alert Query**  Example: `processes(search).over(tags).rollup('count').last(timeframe) operator #`  - **`search`** free text search string for querying processes. Matching processes match results on the [Live Processes](https://docs.datadoghq.com/infrastructure/process/?tab=linuxwindows) page. - **`tags`** one or more tags (comma-separated) - **`timeframe`** the timeframe to roll up the counts. Examples: 10m, 4h. Supported timeframes: s, m, h and d - **`operator`** <, <=, >, >=, ==, or != - **`#`** an integer or decimal number used to set the threshold  **Logs Alert Query**  Example: `logs(query).index(index_name).rollup(rollup_method[, measure]).last(time_window) operator #`  - **`query`** The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/). - **`index_name`** For multi-index organizations, the log index in which the request is performed. - **`rollup_method`** The stats roll-up method - supports `count`, `avg` and `cardinality`. - **`measure`** For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use. - **`time_window`** #m (between 1 and 1440), #h (between 1 and 24) - **`operator`** `<`, `<=`, `>`, `>=`, `==`, or `!=`. - **`#`** an integer or decimal number used to set the threshold.  **Composite Query**  Example: `12345 && 67890`, where `12345` and `67890` are the IDs of non-composite monitors  * **`name`** [*required*, *default* = **dynamic, based on query**]: The name of the alert. * **`message`** [*required*, *default* = **dynamic, based on query**]: A message to include with notifications for this monitor. Email notifications can be sent to specific users by using the same '@username' notation as events. * **`tags`** [*optional*, *default* = **empty list**]: A list of tags to associate with your monitor. When getting all monitor details via the API, use the `monitor_tags` argument to filter results by these tags. It is only available via the API and isn't visible or editable in the Datadog UI.
     * Create a monitor
     * @param body Create a monitor request body.
     */
    public createMonitor(body: Monitor, options?: Configuration): Promise<Monitor> {
    	const result = this.api.createMonitor(body, options);
        return result.toPromise();
    }
	
    /**
     * Delete the specified monitor
     * Delete a monitor
     * @param monitorId The ID of the monitor.
     * @param force Delete the monitor even if it&#39;s referenced by other resources (e.g. SLO, composite monitor).
     */
    public deleteMonitor(monitorId: number, force?: string, options?: Configuration): Promise<DeletedMonitor> {
    	const result = this.api.deleteMonitor(monitorId, force, options);
        return result.toPromise();
    }
	
    /**
     * Get details about the specified monitor from your organization.
     * Get a monitor's details
     * @param monitorId The ID of the monitor
     * @param groupStates When specified, shows additional information about the group states. Choose one or more from &#x60;all&#x60;, &#x60;alert&#x60;, &#x60;warn&#x60;, and &#x60;no data&#x60;.
     */
    public getMonitor(monitorId: number, groupStates?: string, options?: Configuration): Promise<Monitor> {
    	const result = this.api.getMonitor(monitorId, groupStates, options);
        return result.toPromise();
    }
	
    /**
     * Get details about the specified monitor from your organization.
     * Get all monitor details
     * @param groupStates When specified, shows additional information about the group states. Choose one or more from &#x60;all&#x60;, &#x60;alert&#x60;, &#x60;warn&#x60;, and &#x60;no data&#x60;.
     * @param name A string to filter monitors by name.
     * @param tags A comma separated list indicating what tags, if any, should be used to filter the list of monitors by scope. For example, &#x60;host:host0&#x60;.
     * @param monitorTags A comma separated list indicating what service and/or custom tags, if any, should be used to filter the list of monitors. Tags created in the Datadog UI automatically have the service key prepended. For example, &#x60;service:my-app&#x60;.
     * @param withDowntimes If this argument is set to true, then the returned data includes all current downtimes for each monitor.
     * @param idOffset Monitor ID offset.
     * @param page The page to start paginating from. If this argument is not specified, the request returns all monitors without pagination.
     * @param pageSize The number of monitors to return per page. If the page argument is not specified, the default behavior returns all monitors without a &#x60;page_size&#x60; limit. However, if page is specified and &#x60;page_size&#x60; is not, the argument defaults to 100.
     */
    public listMonitors(groupStates?: string, name?: string, tags?: string, monitorTags?: string, withDowntimes?: boolean, idOffset?: number, page?: number, pageSize?: number, options?: Configuration): Promise<Array<Monitor>> {
    	const result = this.api.listMonitors(groupStates, name, tags, monitorTags, withDowntimes, idOffset, page, pageSize, options);
        return result.toPromise();
    }
	
    /**
     * Edit the specified monitor.
     * Edit a monitor
     * @param monitorId The ID of the monitor.
     * @param body Edit a monitor request body.
     */
    public updateMonitor(monitorId: number, body: MonitorUpdateRequest, options?: Configuration): Promise<Monitor> {
    	const result = this.api.updateMonitor(monitorId, body, options);
        return result.toPromise();
    }
	
    /**
     * Validate the monitor provided in the request.
     * Validate a monitor
     * @param body Monitor request object
     */
    public validateMonitor(body: Monitor, options?: Configuration): Promise<Monitor> {
    	const result = this.api.validateMonitor(body, options);
        return result.toPromise();
    }
	

}



import { ObservableOrganizationsApi } from './ObservableAPI';


import { OrganizationsApiRequestFactory, OrganizationsApiResponseProcessor} from "../apis/OrganizationsApi";
export class PromiseOrganizationsApi {
    private api: ObservableOrganizationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationsApiRequestFactory,
        responseProcessor?: OrganizationsApiResponseProcessor
    ) {
        this.api = new ObservableOrganizationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a child organization.  This endpoint requires the [multi-organization account](https://docs.datadoghq.com/account_management/multi_organization/) feature and must be enabled by [contacting support](https://docs.datadoghq.com/help/).  Once a new child organization is created, you can interact with it by using the `org.public_id`, `pi_key.key`, and `application_key.hash` provided in the response.
     * Create a child organization
     * @param body Organization object that needs to be created
     */
    public createChildOrg(body: OrganizationCreateBody, options?: Configuration): Promise<OrganizationCreateResponse> {
    	const result = this.api.createChildOrg(body, options);
        return result.toPromise();
    }
	
    /**
     * Get organization information.
     * Get organization information
     * @param publicId The &#x60;public_id&#x60; of the organization you are operating within.
     */
    public getOrg(publicId: string, options?: Configuration): Promise<OrganizationResponse> {
    	const result = this.api.getOrg(publicId, options);
        return result.toPromise();
    }
	
    /**
     * List your managed organizations.
     * List your managed organizations
     */
    public listOrgs(options?: Configuration): Promise<OrganizationListResponse> {
    	const result = this.api.listOrgs(options);
        return result.toPromise();
    }
	
    /**
     * Update your organization.
     * Update your organization
     * @param publicId The &#x60;public_id&#x60; of the organization you are operating within.
     * @param body 
     */
    public updateOrg(publicId: string, body: Organization, options?: Configuration): Promise<OrganizationResponse> {
    	const result = this.api.updateOrg(publicId, body, options);
        return result.toPromise();
    }
	
    /**
     * There are a couple of options for updating the Identity Provider (IdP) metadata from your SAML IdP.  * **Multipart Form-Data**: Post the IdP metadata file using a form post.  * **XML Body:** Post the IdP metadata file as the body of the request.
     * Upload IdP metadata
     * @param publicId The &#x60;public_id&#x60; of the organization you are operating with
     * @param idpFile The path to the XML metadata file you wish to upload.
     */
    public uploadIdPForOrg(publicId: string, idpFile: HttpFile, options?: Configuration): Promise<IdpResponse> {
    	const result = this.api.uploadIdPForOrg(publicId, idpFile, options);
        return result.toPromise();
    }
	

}



import { ObservablePagerDutyIntegrationApi } from './ObservableAPI';


import { PagerDutyIntegrationApiRequestFactory, PagerDutyIntegrationApiResponseProcessor} from "../apis/PagerDutyIntegrationApi";
export class PromisePagerDutyIntegrationApi {
    private api: ObservablePagerDutyIntegrationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PagerDutyIntegrationApiRequestFactory,
        responseProcessor?: PagerDutyIntegrationApiResponseProcessor
    ) {
        this.api = new ObservablePagerDutyIntegrationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new service object in the PagerDuty integration.
     * Create a new service object
     * @param body Create a new service object request body.
     */
    public createPagerDutyIntegrationService(body: PagerDutyService, options?: Configuration): Promise<PagerDutyServiceName> {
    	const result = this.api.createPagerDutyIntegrationService(body, options);
        return result.toPromise();
    }
	
    /**
     * Delete a single service object in the Datadog-PagerDuty integration.
     * Delete a single service object
     * @param serviceName The service name
     */
    public deletePagerDutyIntegrationService(serviceName: string, options?: Configuration): Promise<void> {
    	const result = this.api.deletePagerDutyIntegrationService(serviceName, options);
        return result.toPromise();
    }
	
    /**
     * Get service name in the Datadog-PagerDuty integration.
     * Get a single service object
     * @param serviceName The service name.
     */
    public getPagerDutyIntegrationService(serviceName: string, options?: Configuration): Promise<PagerDutyServiceName> {
    	const result = this.api.getPagerDutyIntegrationService(serviceName, options);
        return result.toPromise();
    }
	
    /**
     * Update a single service object in the Datadog-PagerDuty integration.
     * Update a single service object
     * @param serviceName The service name
     * @param body Update an existing service object request body.
     */
    public updatePagerDutyIntegrationService(serviceName: string, body: PagerDutyServiceKey, options?: Configuration): Promise<void> {
    	const result = this.api.updatePagerDutyIntegrationService(serviceName, body, options);
        return result.toPromise();
    }
	

}



import { ObservableServiceLevelObjectiveCorrectionsApi } from './ObservableAPI';


import { ServiceLevelObjectiveCorrectionsApiRequestFactory, ServiceLevelObjectiveCorrectionsApiResponseProcessor} from "../apis/ServiceLevelObjectiveCorrectionsApi";
export class PromiseServiceLevelObjectiveCorrectionsApi {
    private api: ObservableServiceLevelObjectiveCorrectionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ServiceLevelObjectiveCorrectionsApiRequestFactory,
        responseProcessor?: ServiceLevelObjectiveCorrectionsApiResponseProcessor
    ) {
        this.api = new ObservableServiceLevelObjectiveCorrectionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an SLO Correction
     * Create an SLO correction
     * @param body Create an SLO Correction
     */
    public createSLOCorrection(body: SLOCorrectionCreateRequest, options?: Configuration): Promise<SLOCorrectionResponse> {
    	const result = this.api.createSLOCorrection(body, options);
        return result.toPromise();
    }
	
    /**
     * Permanently delete the specified SLO Correction object
     * Delete an SLO Correction
     * @param sloCorrectionId The ID of the SLO correction object
     */
    public deleteSLOCorrection(sloCorrectionId: string, options?: Configuration): Promise<void> {
    	const result = this.api.deleteSLOCorrection(sloCorrectionId, options);
        return result.toPromise();
    }
	
    /**
     * Get an SLO Correction
     * Get an SLO correction for an SLO
     * @param sloCorrectionId The ID of the SLO correction object
     */
    public getSLOCorrection(sloCorrectionId: string, options?: Configuration): Promise<SLOCorrectionResponse> {
    	const result = this.api.getSLOCorrection(sloCorrectionId, options);
        return result.toPromise();
    }
	
    /**
     * Get all Service Level Objective Corrections
     * Get all SLO corrections
     */
    public listSLOCorrection(options?: Configuration): Promise<SLOCorrectionListResponse> {
    	const result = this.api.listSLOCorrection(options);
        return result.toPromise();
    }
	
    /**
     * Update the specified SLO correction object object
     * Update an SLO Correction
     * @param sloCorrectionId The ID of the SLO correction object
     * @param body The edited SLO correction object.
     */
    public updateSLOCorrection(sloCorrectionId: string, body: SLOCorrectionUpdateRequest, options?: Configuration): Promise<SLOCorrectionResponse> {
    	const result = this.api.updateSLOCorrection(sloCorrectionId, body, options);
        return result.toPromise();
    }
	

}



import { ObservableServiceLevelObjectivesApi } from './ObservableAPI';


import { ServiceLevelObjectivesApiRequestFactory, ServiceLevelObjectivesApiResponseProcessor} from "../apis/ServiceLevelObjectivesApi";
export class PromiseServiceLevelObjectivesApi {
    private api: ObservableServiceLevelObjectivesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ServiceLevelObjectivesApiRequestFactory,
        responseProcessor?: ServiceLevelObjectivesApiResponseProcessor
    ) {
        this.api = new ObservableServiceLevelObjectivesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Check if a SLO can be safely deleted. For example, assure an SLO can be deleted without disrupting a dashboard.
     * Check if SLOs can be safely deleted
     * @param ids A comma separated list of the IDs of the service level objectives objects.
     */
    public checkCanDeleteSLO(ids: string, options?: Configuration): Promise<CheckCanDeleteSLOResponse> {
    	const result = this.api.checkCanDeleteSLO(ids, options);
        return result.toPromise();
    }
	
    /**
     * Create a service level objective object.
     * Create a SLO object
     * @param body Service level objective request object.
     */
    public createSLO(body: ServiceLevelObjectiveRequest, options?: Configuration): Promise<SLOListResponse> {
    	const result = this.api.createSLO(body, options);
        return result.toPromise();
    }
	
    /**
     * Permanently delete the specified service level objective object.  If an SLO is used in a dashboard, the `DELETE /v1/slo/` endpoint returns a 409 conflict error because the SLO is referenced in a dashboard.
     * Delete a SLO
     * @param sloId The ID of the service level objective.
     * @param force Delete the monitor even if it&#39;s referenced by other resources (e.g. SLO, composite monitor).
     */
    public deleteSLO(sloId: string, force?: string, options?: Configuration): Promise<SLODeleteResponse> {
    	const result = this.api.deleteSLO(sloId, force, options);
        return result.toPromise();
    }
	
    /**
     * Delete (or partially delete) multiple service level objective objects.  This endpoint facilitates deletion of one or more thresholds for one or more service level objective objects. If all thresholds are deleted, the service level objective object is deleted as well.
     * Bulk Delete SLO Timeframes
     * @param body Delete multiple service level objective objects request body.
     */
    public deleteSLOTimeframeInBulk(body: { [key: string]: Array<SLOTimeframe>; }, options?: Configuration): Promise<SLOBulkDeleteResponse> {
    	const result = this.api.deleteSLOTimeframeInBulk(body, options);
        return result.toPromise();
    }
	
    /**
     * Get a service level objective object.
     * Get a SLO's details
     * @param sloId The ID of the service level objective object.
     */
    public getSLO(sloId: string, options?: Configuration): Promise<SLOResponse> {
    	const result = this.api.getSLO(sloId, options);
        return result.toPromise();
    }
	
    /**
     * Get a specific SLO’s history, regardless of its SLO type.  The detailed history data is structured according to the source data type. For example, metric data is included for event SLOs that use the metric source, and monitor SLO types include the monitor transition history.  **Note:** There are different response formats for event based and time based SLOs. Examples of both are shown.
     * Get an SLO's history
     * @param sloId The ID of the service level objective object.
     * @param fromTs The &#x60;from&#x60; timestamp for the query window in epoch seconds.
     * @param toTs The &#x60;to&#x60; timestamp for the query window in epoch seconds.
     */
    public getSLOHistory(sloId: string, fromTs: number, toTs: number, options?: Configuration): Promise<SLOHistoryResponse> {
    	const result = this.api.getSLOHistory(sloId, fromTs, toTs, options);
        return result.toPromise();
    }
	
    /**
     * Get a list of service level objective objects for your organization.
     * Get all SLOs
     * @param ids A comma separated list of the IDs of the service level objectives objects.
     * @param query The query string to filter results based on SLO names.
     * @param tagsQuery The query string to filter results based on SLO tags.
     * @param metricsQuery The query string to filter results based on SLO numerator and denominator.
     */
    public listSLOs(ids?: string, query?: string, tagsQuery?: string, metricsQuery?: string, options?: Configuration): Promise<SLOListResponse> {
    	const result = this.api.listSLOs(ids, query, tagsQuery, metricsQuery, options);
        return result.toPromise();
    }
	
    /**
     * Update the specified service level objective object.
     * Update a SLO
     * @param sloId The ID of the service level objective object.
     * @param body The edited service level objective request object.
     */
    public updateSLO(sloId: string, body: ServiceLevelObjective, options?: Configuration): Promise<SLOListResponse> {
    	const result = this.api.updateSLO(sloId, body, options);
        return result.toPromise();
    }
	

}



import { ObservableSnapshotsApi } from './ObservableAPI';


import { SnapshotsApiRequestFactory, SnapshotsApiResponseProcessor} from "../apis/SnapshotsApi";
export class PromiseSnapshotsApi {
    private api: ObservableSnapshotsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SnapshotsApiRequestFactory,
        responseProcessor?: SnapshotsApiResponseProcessor
    ) {
        this.api = new ObservableSnapshotsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Take graph snapshots. **Note**: When a snapshot is created, there is some delay before it is available.
     * Take graph snapshots
     * @param start The POSIX timestamp of the start of the query.
     * @param end The POSIX timestamp of the end of the query.
     * @param metricQuery The metric query.
     * @param eventQuery A query that adds event bands to the graph.
     * @param graphDef A JSON document defining the graph. &#x60;graph_def&#x60; can be used instead of &#x60;metric_query&#x60;. The JSON document uses the [grammar defined here](https://docs.datadoghq.com/graphing/graphing_json/#grammar) and should be formatted to a single line then URL encoded.
     * @param title A title for the graph. If no title is specified, the graph does not have a title.
     */
    public getGraphSnapshot(start: number, end: number, metricQuery?: string, eventQuery?: string, graphDef?: string, title?: string, options?: Configuration): Promise<GraphSnapshot> {
    	const result = this.api.getGraphSnapshot(start, end, metricQuery, eventQuery, graphDef, title, options);
        return result.toPromise();
    }
	

}



import { ObservableSyntheticsApi } from './ObservableAPI';


import { SyntheticsApiRequestFactory, SyntheticsApiResponseProcessor} from "../apis/SyntheticsApi";
export class PromiseSyntheticsApi {
    private api: ObservableSyntheticsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SyntheticsApiRequestFactory,
        responseProcessor?: SyntheticsApiResponseProcessor
    ) {
        this.api = new ObservableSyntheticsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a Synthetics global variable.
     * Create a global variable
     * @param body Details of the global variable to create.
     */
    public createGlobalVariable(body: SyntheticsGlobalVariable, options?: Configuration): Promise<SyntheticsGlobalVariable> {
    	const result = this.api.createGlobalVariable(body, options);
        return result.toPromise();
    }
	
    /**
     * Create a new Synthetics private location.
     * Create a private location
     * @param body Details of the private location to create.
     */
    public createPrivateLocation(body: SyntheticsPrivateLocation, options?: Configuration): Promise<SyntheticsPrivateLocationCreationResponse> {
    	const result = this.api.createPrivateLocation(body, options);
        return result.toPromise();
    }
	
    /**
     * Create a Synthetic test.
     * Create a test
     * @param body Details of the test to create.
     */
    public createTest(body: SyntheticsTestDetails, options?: Configuration): Promise<SyntheticsTestDetails> {
    	const result = this.api.createTest(body, options);
        return result.toPromise();
    }
	
    /**
     * Delete a Synthetics global variable.
     * Delete a global variable
     * @param variableId The ID of the global variable.
     */
    public deleteGlobalVariable(variableId: string, options?: Configuration): Promise<void> {
    	const result = this.api.deleteGlobalVariable(variableId, options);
        return result.toPromise();
    }
	
    /**
     * Delete a Synthetics private location.
     * Delete a private location
     * @param locationId The ID of the private location.
     */
    public deletePrivateLocation(locationId: string, options?: Configuration): Promise<void> {
    	const result = this.api.deletePrivateLocation(locationId, options);
        return result.toPromise();
    }
	
    /**
     * Delete multiple Synthetic tests by ID.
     * Delete tests
     * @param body Public ID list of the Synthetic tests to be deleted.
     */
    public deleteTests(body: SyntheticsDeleteTestsPayload, options?: Configuration): Promise<SyntheticsDeleteTestsResponse> {
    	const result = this.api.deleteTests(body, options);
        return result.toPromise();
    }
	
    /**
     * Edit a Synthetics global variable.
     * Edit a global variable
     * @param variableId The ID of the global variable.
     * @param body Details of the global variable to update.
     */
    public editGlobalVariable(variableId: string, body: SyntheticsGlobalVariable, options?: Configuration): Promise<SyntheticsGlobalVariable> {
    	const result = this.api.editGlobalVariable(variableId, body, options);
        return result.toPromise();
    }
	
    /**
     * Get the last 50 test results summaries for a given Synthetics API test.
     * Get the test's latest results summaries (API)
     * @param publicId The public ID of the test for which to search results for.
     * @param fromTs Timestamp from which to start querying results.
     * @param toTs Timestamp up to which to query results.
     * @param probeDc Locations for which to query results.
     */
    public getAPITestLatestResults(publicId: string, fromTs?: number, toTs?: number, probeDc?: Array<string>, options?: Configuration): Promise<SyntheticsGetAPITestLatestResultsResponse> {
    	const result = this.api.getAPITestLatestResults(publicId, fromTs, toTs, probeDc, options);
        return result.toPromise();
    }
	
    /**
     * Get a specific full result from a given (API) Synthetic test.
     * Get a test result (API)
     * @param publicId The public ID of the API test to which the target result belongs.
     * @param resultId The ID of the result to get.
     */
    public getAPITestResult(publicId: string, resultId: string, options?: Configuration): Promise<SyntheticsAPITestResultFull> {
    	const result = this.api.getAPITestResult(publicId, resultId, options);
        return result.toPromise();
    }
	
    /**
     * Get the detailed configuration (including steps) associated with a Synthetic browser test.
     * Get a test configuration (browser)
     * @param publicId The public ID of the test to get details from.
     */
    public getBrowserTest(publicId: string, options?: Configuration): Promise<SyntheticsTestDetails> {
    	const result = this.api.getBrowserTest(publicId, options);
        return result.toPromise();
    }
	
    /**
     * Get the last 50 test results summaries for a given Synthetics Browser test.
     * Get the test's latest results summaries (browser)
     * @param publicId The public ID of the browser test for which to search results for.
     * @param fromTs Timestamp from which to start querying results.
     * @param toTs Timestamp up to which to query results.
     * @param probeDc Locations for which to query results.
     */
    public getBrowserTestLatestResults(publicId: string, fromTs?: number, toTs?: number, probeDc?: Array<string>, options?: Configuration): Promise<SyntheticsGetBrowserTestLatestResultsResponse> {
    	const result = this.api.getBrowserTestLatestResults(publicId, fromTs, toTs, probeDc, options);
        return result.toPromise();
    }
	
    /**
     * Get a specific full result from a given (browser) Synthetic test.
     * Get a test result (browser)
     * @param publicId The public ID of the browser test to which the target result belongs.
     * @param resultId The ID of the result to get.
     */
    public getBrowserTestResult(publicId: string, resultId: string, options?: Configuration): Promise<SyntheticsBrowserTestResultFull> {
    	const result = this.api.getBrowserTestResult(publicId, resultId, options);
        return result.toPromise();
    }
	
    /**
     * Get the detailed configuration of a global variable.
     * Get a global variable
     * @param variableId The ID of the global variable.
     */
    public getGlobalVariable(variableId: string, options?: Configuration): Promise<SyntheticsGlobalVariable> {
    	const result = this.api.getGlobalVariable(variableId, options);
        return result.toPromise();
    }
	
    /**
     * Get a Synthetics private location.
     * Get a private location
     * @param locationId The ID of the private location.
     */
    public getPrivateLocation(locationId: string, options?: Configuration): Promise<SyntheticsPrivateLocation> {
    	const result = this.api.getPrivateLocation(locationId, options);
        return result.toPromise();
    }
	
    /**
     * Get the detailed configuration associated with a Synthetics test.
     * Get a test configuration (API)
     * @param publicId The public ID of the test to get details from.
     */
    public getTest(publicId: string, options?: Configuration): Promise<SyntheticsTestDetails> {
    	const result = this.api.getTest(publicId, options);
        return result.toPromise();
    }
	
    /**
     * Get the list of public and private locations available for Synthetic tests. No arguments required.
     * Get all locations (public and private)
     */
    public listLocations(options?: Configuration): Promise<SyntheticsLocations> {
    	const result = this.api.listLocations(options);
        return result.toPromise();
    }
	
    /**
     * Get the list of all Synthetic tests.
     * Get the list of all tests
     */
    public listTests(options?: Configuration): Promise<SyntheticsListTestsResponse> {
    	const result = this.api.listTests(options);
        return result.toPromise();
    }
	
    /**
     * Trigger a set of Synthetics tests for continuous integration.
     * Trigger some Synthetics tests for CI
     * @param body Details of the test to trigger.
     */
    public triggerCITests(body: SyntheticsCITestBody, options?: Configuration): Promise<SyntheticsTriggerCITestsResponse> {
    	const result = this.api.triggerCITests(body, options);
        return result.toPromise();
    }
	
    /**
     * Edit a Synthetics private location.
     * Edit a private location
     * @param locationId The ID of the private location.
     * @param body Details of the private location to be updated.
     */
    public updatePrivateLocation(locationId: string, body: SyntheticsPrivateLocation, options?: Configuration): Promise<SyntheticsPrivateLocation> {
    	const result = this.api.updatePrivateLocation(locationId, body, options);
        return result.toPromise();
    }
	
    /**
     * Edit the configuration of a Synthetic test.
     * Edit a test
     * @param publicId The public ID of the test to get details from.
     * @param body New test details to be saved.
     */
    public updateTest(publicId: string, body: SyntheticsTestDetails, options?: Configuration): Promise<SyntheticsTestDetails> {
    	const result = this.api.updateTest(publicId, body, options);
        return result.toPromise();
    }
	
    /**
     * Pause or start a Synthetics test by changing the status.
     * Pause or start a test
     * @param publicId The public ID of the Synthetic test to update.
     * @param body Status to set the given Synthetic test to.
     */
    public updateTestPauseStatus(publicId: string, body: SyntheticsUpdateTestPauseStatusPayload, options?: Configuration): Promise<boolean> {
    	const result = this.api.updateTestPauseStatus(publicId, body, options);
        return result.toPromise();
    }
	

}



import { ObservableTagsApi } from './ObservableAPI';


import { TagsApiRequestFactory, TagsApiResponseProcessor} from "../apis/TagsApi";
export class PromiseTagsApi {
    private api: ObservableTagsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TagsApiRequestFactory,
        responseProcessor?: TagsApiResponseProcessor
    ) {
        this.api = new ObservableTagsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint allows you to add new tags to a host, optionally specifying where these tags come from.
     * Add tags to a host
     * @param hostName This endpoint allows you to add new tags to a host, optionally specifying where the tags came from.
     * @param body Update host tags request body.
     * @param source The source of the tags. [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value).
     */
    public createHostTags(hostName: string, body: HostTags, source?: string, options?: Configuration): Promise<HostTags> {
    	const result = this.api.createHostTags(hostName, body, source, options);
        return result.toPromise();
    }
	
    /**
     * This endpoint allows you to remove all user-assigned tags for a single host.
     * Remove host tags
     * @param hostName This endpoint allows you to remove all user-assigned tags for a single host.
     * @param source The source of the tags (e.g. chef, puppet). [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value).
     */
    public deleteHostTags(hostName: string, source?: string, options?: Configuration): Promise<void> {
    	const result = this.api.deleteHostTags(hostName, source, options);
        return result.toPromise();
    }
	
    /**
     * Return the list of tags that apply to a given host.
     * Get host tags
     * @param hostName When specified, filters list of tags to those tags with the specified source.
     * @param source Source to filter.
     */
    public getHostTags(hostName: string, source?: string, options?: Configuration): Promise<HostTags> {
    	const result = this.api.getHostTags(hostName, source, options);
        return result.toPromise();
    }
	
    /**
     * Return a mapping of tags to hosts for your whole infrastructure.
     * Get Tags
     * @param source When specified, filters host list to those tags with the specified source.
     */
    public listHostTags(source?: string, options?: Configuration): Promise<TagToHosts> {
    	const result = this.api.listHostTags(source, options);
        return result.toPromise();
    }
	
    /**
     * This endpoint allows you to update/replace all tags in an integration source with those supplied in the request.
     * Update host tags
     * @param hostName This endpoint allows you to update/replace all in an integration source with those supplied in the request.
     * @param body Add tags to host
     * @param source The source of the tags (e.g. chef, puppet). [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value)
     */
    public updateHostTags(hostName: string, body: HostTags, source?: string, options?: Configuration): Promise<HostTags> {
    	const result = this.api.updateHostTags(hostName, body, source, options);
        return result.toPromise();
    }
	

}



import { ObservableUsageMeteringApi } from './ObservableAPI';


import { UsageMeteringApiRequestFactory, UsageMeteringApiResponseProcessor} from "../apis/UsageMeteringApi";
export class PromiseUsageMeteringApi {
    private api: ObservableUsageMeteringApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UsageMeteringApiRequestFactory,
        responseProcessor?: UsageMeteringApiResponseProcessor
    ) {
        this.api = new ObservableUsageMeteringApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get daily custom reports.
     * Get the list of available daily custom reports
     * @param pageSize The number of files to return in the response. &#x60;[default&#x3D;60]&#x60;.
     * @param pageNumber The identifier of the first page to return. This parameter is used for the pagination feature &#x60;[default&#x3D;0]&#x60;.
     * @param sortDir The direction to sort by: &#x60;[desc, asc]&#x60;.
     * @param sort The field to sort by: &#x60;[computed_on, size, start_date, end_date]&#x60;.
     */
    public getDailyCustomReports(pageSize?: number, pageNumber?: number, sortDir?: UsageSortDirection, sort?: UsageSort, options?: Configuration): Promise<UsageCustomReportsResponse> {
    	const result = this.api.getDailyCustomReports(pageSize, pageNumber, sortDir, sort, options);
        return result.toPromise();
    }
	
    /**
     * Get hourly usage for incident management.
     * Get hourly usage for incident management
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    public getIncidentManagement(startHr: Date, endHr?: Date, options?: Configuration): Promise<UsageIncidentManagementResponse> {
    	const result = this.api.getIncidentManagement(startHr, endHr, options);
        return result.toPromise();
    }
	
    /**
     * Get hourly usage for ingested spans.
     * Get hourly usage for ingested spans
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    public getIngestedSpans(startHr: Date, endHr?: Date, options?: Configuration): Promise<UsageIngestedSpansResponse> {
    	const result = this.api.getIngestedSpans(startHr, endHr, options);
        return result.toPromise();
    }
	
    /**
     * Get monthly custom reports.
     * Get the list of available monthly custom reports
     * @param pageSize The number of files to return in the response &#x60;[default&#x3D;60].&#x60;
     * @param pageNumber The identifier of the first page to return. This parameter is used for the pagination feature &#x60;[default&#x3D;0]&#x60;.
     * @param sortDir The direction to sort by: &#x60;[desc, asc]&#x60;.
     * @param sort The field to sort by: &#x60;[computed_on, size, start_date, end_date]&#x60;.
     */
    public getMonthlyCustomReports(pageSize?: number, pageNumber?: number, sortDir?: UsageSortDirection, sort?: UsageSort, options?: Configuration): Promise<UsageCustomReportsResponse> {
    	const result = this.api.getMonthlyCustomReports(pageSize, pageNumber, sortDir, sort, options);
        return result.toPromise();
    }
	
    /**
     * Get specified daily custom reports.
     * Get specified daily custom reports
     * @param reportId The specified ID to search results for.
     */
    public getSpecifiedDailyCustomReports(reportId: string, options?: Configuration): Promise<UsageSpecifiedCustomReportsResponse> {
    	const result = this.api.getSpecifiedDailyCustomReports(reportId, options);
        return result.toPromise();
    }
	
    /**
     * Get specified monthly custom reports.
     * Get specified monthly custom reports
     * @param reportId The specified ID to search results for.
     */
    public getSpecifiedMonthlyCustomReports(reportId: string, options?: Configuration): Promise<UsageSpecifiedCustomReportsResponse> {
    	const result = this.api.getSpecifiedMonthlyCustomReports(reportId, options);
        return result.toPromise();
    }
	
    /**
     * Get hourly usage for tracing without limits.  **Note** This endpoint has been renamed to `/api/v1/usage/ingested-spans`.
     * Get hourly usage for tracing without limits
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    public getTracingWithoutLimits(startHr: Date, endHr?: Date, options?: Configuration): Promise<UsageTracingWithoutLimitsResponse> {
    	const result = this.api.getTracingWithoutLimits(startHr, endHr, options);
        return result.toPromise();
    }
	
    /**
     * Get hourly usage for analyzed logs (Security Monitoring).
     * Get hourly usage for analyzed logs
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    public getUsageAnalyzedLogs(startHr: Date, endHr?: Date, options?: Configuration): Promise<UsageAnalyzedLogsResponse> {
    	const result = this.api.getUsageAnalyzedLogs(startHr, endHr, options);
        return result.toPromise();
    }
	
    /**
     * Get Usage Attribution.
     * Get Usage Attribution
     * @param startMonth Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage beginning in this month. Maximum of 15 months ago.
     * @param fields The specified field to search results for.
     * @param endMonth Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage ending this month.
     * @param sortDirection The direction to sort by: &#x60;[desc, asc]&#x60;.
     * @param sortName The field to sort by.
     */
    public getUsageAttribution(startMonth: Date, fields: string, endMonth?: Date, sortDirection?: UsageSortDirection, sortName?: UsageAttributionSort, options?: Configuration): Promise<UsageAttributionResponse> {
    	const result = this.api.getUsageAttribution(startMonth, fields, endMonth, sortDirection, sortName, options);
        return result.toPromise();
    }
	
    /**
     * Get billable usage across your account.
     * Get billable usage across your account
     * @param month Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage starting this month.
     */
    public getUsageBillableSummary(month?: Date, options?: Configuration): Promise<UsageBillableSummaryResponse> {
    	const result = this.api.getUsageBillableSummary(month, options);
        return result.toPromise();
    }
	
    /**
     * Get hourly usage for [Fargate](https://docs.datadoghq.com/integrations/ecs_fargate/).
     * Get hourly usage for Fargate
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    public getUsageFargate(startHr: Date, endHr?: Date, options?: Configuration): Promise<UsageFargateResponse> {
    	const result = this.api.getUsageFargate(startHr, endHr, options);
        return result.toPromise();
    }
	
    /**
     * Get hourly usage for hosts and containers.
     * Get hourly usage for hosts and containers
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    public getUsageHosts(startHr: Date, endHr?: Date, options?: Configuration): Promise<UsageHostsResponse> {
    	const result = this.api.getUsageHosts(startHr, endHr, options);
        return result.toPromise();
    }
	
    /**
     * Get hourly usage for indexed spans.
     * Get hourly usage for indexed spans
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    public getUsageIndexedSpans(startHr: Date, endHr?: Date, options?: Configuration): Promise<UsageIndexedSpansResponse> {
    	const result = this.api.getUsageIndexedSpans(startHr, endHr, options);
        return result.toPromise();
    }
	
    /**
     * Get hourly usage for IoT.
     * Get hourly usage for IoT
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    public getUsageInternetOfThings(startHr: Date, endHr?: Date, options?: Configuration): Promise<UsageIoTResponse> {
    	const result = this.api.getUsageInternetOfThings(startHr, endHr, options);
        return result.toPromise();
    }
	
    /**
     * Get hourly usage for lambda.
     * Get hourly usage for Lambda
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    public getUsageLambda(startHr: Date, endHr?: Date, options?: Configuration): Promise<UsageLambdaResponse> {
    	const result = this.api.getUsageLambda(startHr, endHr, options);
        return result.toPromise();
    }
	
    /**
     * Get hourly usage for logs.
     * Get hourly usage for Logs
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    public getUsageLogs(startHr: Date, endHr?: Date, options?: Configuration): Promise<UsageLogsResponse> {
    	const result = this.api.getUsageLogs(startHr, endHr, options);
        return result.toPromise();
    }
	
    /**
     * Get hourly usage for logs by index.
     * Get hourly usage for Logs by Index
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @param indexName Comma-separated list of log index names.
     */
    public getUsageLogsByIndex(startHr: Date, endHr?: Date, indexName?: Array<string>, options?: Configuration): Promise<UsageLogsByIndexResponse> {
    	const result = this.api.getUsageLogsByIndex(startHr, endHr, indexName, options);
        return result.toPromise();
    }
	
    /**
     * Get hourly usage for network flows.
     * Get hourly usage for Network Flows
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    public getUsageNetworkFlows(startHr: Date, endHr?: Date, options?: Configuration): Promise<UsageNetworkFlowsResponse> {
    	const result = this.api.getUsageNetworkFlows(startHr, endHr, options);
        return result.toPromise();
    }
	
    /**
     * Get hourly usage for network hosts.
     * Get hourly usage for Network Hosts
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    public getUsageNetworkHosts(startHr: Date, endHr?: Date, options?: Configuration): Promise<UsageNetworkHostsResponse> {
    	const result = this.api.getUsageNetworkHosts(startHr, endHr, options);
        return result.toPromise();
    }
	
    /**
     * Get hourly usage for profiled hosts.
     * Get hourly usage for profiled hosts
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    public getUsageProfiling(startHr: Date, endHr?: Date, options?: Configuration): Promise<UsageProfilingResponse> {
    	const result = this.api.getUsageProfiling(startHr, endHr, options);
        return result.toPromise();
    }
	
    /**
     * Get hourly usage for [RUM](https://docs.datadoghq.com/real_user_monitoring/) Sessions.
     * Get hourly usage for RUM Sessions
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @param type RUM type: &#x60;[browser, mobile]&#x60;. Defaults to &#x60;browser&#x60;.
     */
    public getUsageRumSessions(startHr: Date, endHr?: Date, type?: string, options?: Configuration): Promise<UsageRumSessionsResponse> {
    	const result = this.api.getUsageRumSessions(startHr, endHr, type, options);
        return result.toPromise();
    }
	
    /**
     * Get hourly usage for SNMP devices.
     * Get hourly usage for SNMP devices
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    public getUsageSNMP(startHr: Date, endHr?: Date, options?: Configuration): Promise<UsageSNMPResponse> {
    	const result = this.api.getUsageSNMP(startHr, endHr, options);
        return result.toPromise();
    }
	
    /**
     * Get usage across your multi-org account. You must have the multi-org feature enabled.
     * Get usage across your multi-org account
     * @param startMonth Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage beginning in this month. Maximum of 15 months ago.
     * @param endMonth Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage ending this month.
     * @param includeOrgDetails Include usage summaries for each sub-org.
     */
    public getUsageSummary(startMonth: Date, endMonth?: Date, includeOrgDetails?: boolean, options?: Configuration): Promise<UsageSummaryResponse> {
    	const result = this.api.getUsageSummary(startMonth, endMonth, includeOrgDetails, options);
        return result.toPromise();
    }
	
    /**
     * Get hourly usage for [Synthetics checks](https://docs.datadoghq.com/synthetics/).
     * Get hourly usage for Synthetics Checks
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    public getUsageSynthetics(startHr: Date, endHr?: Date, options?: Configuration): Promise<UsageSyntheticsResponse> {
    	const result = this.api.getUsageSynthetics(startHr, endHr, options);
        return result.toPromise();
    }
	
    /**
     * Get hourly usage for [synthetics API checks](https://docs.datadoghq.com/synthetics/).
     * Get hourly usage for Synthetics API Checks
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    public getUsageSyntheticsAPI(startHr: Date, endHr?: Date, options?: Configuration): Promise<UsageSyntheticsAPIResponse> {
    	const result = this.api.getUsageSyntheticsAPI(startHr, endHr, options);
        return result.toPromise();
    }
	
    /**
     * Get hourly usage for synthetics browser checks.
     * Get hourly usage for Synthetics Browser Checks
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    public getUsageSyntheticsBrowser(startHr: Date, endHr?: Date, options?: Configuration): Promise<UsageSyntheticsBrowserResponse> {
    	const result = this.api.getUsageSyntheticsBrowser(startHr, endHr, options);
        return result.toPromise();
    }
	
    /**
     * Get hourly usage for [custom metrics](https://docs.datadoghq.com/developers/metrics/custom_metrics/).
     * Get hourly usage for custom metrics
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    public getUsageTimeseries(startHr: Date, endHr?: Date, options?: Configuration): Promise<UsageTimeseriesResponse> {
    	const result = this.api.getUsageTimeseries(startHr, endHr, options);
        return result.toPromise();
    }
	
    /**
     * Get top [custom metrics](https://docs.datadoghq.com/developers/metrics/custom_metrics/) by hourly average.
     * Get top custom metrics by hourly average
     * @param month Datetime in ISO-8601 format, UTC, precise to month: [YYYY-MM] for usage beginning at this hour.
     * @param names Comma-separated list of metric names.
     * @param limit Maximum number of results to return (between 1 and 5000) - defaults to 500 results if limit not specified.
     */
    public getUsageTopAvgMetrics(month: Date, names?: Array<string>, limit?: number, options?: Configuration): Promise<UsageTopAvgMetricsResponse> {
    	const result = this.api.getUsageTopAvgMetrics(month, names, limit, options);
        return result.toPromise();
    }
	
    /**
     * Get hourly usage for trace search.  **Note** This endpoint has been renamed to `/api/v1/usage/indexed-spans`.
     * Get hourly usage for Trace Search
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    public getUsageTrace(startHr: Date, endHr?: Date, options?: Configuration): Promise<UsageTraceResponse> {
    	const result = this.api.getUsageTrace(startHr, endHr, options);
        return result.toPromise();
    }
	

}



import { ObservableUsersApi } from './ObservableAPI';


import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class PromiseUsersApi {
    private api: ObservableUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a user for your organization.  **Note**: Users can only be created with the admin access role if application keys belong to administrators.
     * Create a user
     * @param body User object that needs to be created.
     */
    public createUser(body: User, options?: Configuration): Promise<UserResponse> {
    	const result = this.api.createUser(body, options);
        return result.toPromise();
    }
	
    /**
     * Delete a user from an organization.  **Note**: This endpoint can only be used with application keys belonging to administrators.
     * Disable a user
     * @param userHandle The handle of the user.
     */
    public disableUser(userHandle: string, options?: Configuration): Promise<UserDisableResponse> {
    	const result = this.api.disableUser(userHandle, options);
        return result.toPromise();
    }
	
    /**
     * Get a user's details.
     * Get user details
     * @param userHandle The ID of the user.
     */
    public getUser(userHandle: string, options?: Configuration): Promise<UserResponse> {
    	const result = this.api.getUser(userHandle, options);
        return result.toPromise();
    }
	
    /**
     * List all users for your organization.
     * List all users
     */
    public listUsers(options?: Configuration): Promise<UserListResponse> {
    	const result = this.api.listUsers(options);
        return result.toPromise();
    }
	
    /**
     * Update a user information.  **Note**: It can only be used with application keys belonging to administrators.
     * Update a user
     * @param userHandle The ID of the user.
     * @param body Description of the update.
     */
    public updateUser(userHandle: string, body: User, options?: Configuration): Promise<UserResponse> {
    	const result = this.api.updateUser(userHandle, body, options);
        return result.toPromise();
    }
	

}


