import { BaseAPIRequestFactory, RequiredError } from "./baseapi";
import {
  Configuration,
  getServer,
  applySecurityAuthentication,
} from "../configuration";
import { RequestContext, HttpMethod, ResponseContext } from "../http/http";
import { logger } from "../../../index";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "./exception";
import { isCodeInRange } from "../util";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { CheckCanDeleteSLOResponse } from "../models/CheckCanDeleteSLOResponse";
import { SLOBulkDeleteResponse } from "../models/SLOBulkDeleteResponse";
import { SLOCorrectionListResponse } from "../models/SLOCorrectionListResponse";
import { SLODeleteResponse } from "../models/SLODeleteResponse";
import { SLOHistoryResponse } from "../models/SLOHistoryResponse";
import { SLOListResponse } from "../models/SLOListResponse";
import { SLOResponse } from "../models/SLOResponse";
import { SLOTimeframe } from "../models/SLOTimeframe";
import { ServiceLevelObjective } from "../models/ServiceLevelObjective";
import { ServiceLevelObjectiveRequest } from "../models/ServiceLevelObjectiveRequest";

export class ServiceLevelObjectivesApiRequestFactory extends BaseAPIRequestFactory {
  public async checkCanDeleteSLO(
    ids: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'ids' is not null or undefined
    if (ids === null || ids === undefined) {
      throw new RequiredError(
        "Required parameter ids was null or undefined when calling checkCanDeleteSLO."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/slo/can_delete";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "ServiceLevelObjectivesApi.checkCanDeleteSLO"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (ids !== undefined) {
      requestContext.setQueryParam(
        "ids",
        ObjectSerializer.serialize(ids, "string", "")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async createSLO(
    body: ServiceLevelObjectiveRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createSLO."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/slo";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "ServiceLevelObjectivesApi.createSLO"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "ServiceLevelObjectiveRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteSLO(
    sloId: string,
    force?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'sloId' is not null or undefined
    if (sloId === null || sloId === undefined) {
      throw new RequiredError(
        "Required parameter sloId was null or undefined when calling deleteSLO."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/slo/{slo_id}".replace(
      "{" + "slo_id" + "}",
      encodeURIComponent(String(sloId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "ServiceLevelObjectivesApi.deleteSLO"
    ).makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (force !== undefined) {
      requestContext.setQueryParam(
        "force",
        ObjectSerializer.serialize(force, "string", "")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteSLOTimeframeInBulk(
    body: { [key: string]: Array<SLOTimeframe> },
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling deleteSLOTimeframeInBulk."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/slo/bulk_delete";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "ServiceLevelObjectivesApi.deleteSLOTimeframeInBulk"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "{ [key: string]: Array<SLOTimeframe>; }",
        ""
      ),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getSLO(
    sloId: string,
    withConfiguredAlertIds?: boolean,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'sloId' is not null or undefined
    if (sloId === null || sloId === undefined) {
      throw new RequiredError(
        "Required parameter sloId was null or undefined when calling getSLO."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/slo/{slo_id}".replace(
      "{" + "slo_id" + "}",
      encodeURIComponent(String(sloId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "ServiceLevelObjectivesApi.getSLO"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (withConfiguredAlertIds !== undefined) {
      requestContext.setQueryParam(
        "with_configured_alert_ids",
        ObjectSerializer.serialize(withConfiguredAlertIds, "boolean", "")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getSLOCorrections(
    sloId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getSLOCorrections'");
    if (!_config.unstableOperations["getSLOCorrections"]) {
      throw new Error("Unstable operation 'getSLOCorrections' is disabled");
    }

    // verify required parameter 'sloId' is not null or undefined
    if (sloId === null || sloId === undefined) {
      throw new RequiredError(
        "Required parameter sloId was null or undefined when calling getSLOCorrections."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/slo/{slo_id}/corrections".replace(
      "{" + "slo_id" + "}",
      encodeURIComponent(String(sloId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "ServiceLevelObjectivesApi.getSLOCorrections"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getSLOHistory(
    sloId: string,
    fromTs: number,
    toTs: number,
    target?: number,
    applyCorrection?: boolean,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getSLOHistory'");
    if (!_config.unstableOperations["getSLOHistory"]) {
      throw new Error("Unstable operation 'getSLOHistory' is disabled");
    }

    // verify required parameter 'sloId' is not null or undefined
    if (sloId === null || sloId === undefined) {
      throw new RequiredError(
        "Required parameter sloId was null or undefined when calling getSLOHistory."
      );
    }

    // verify required parameter 'fromTs' is not null or undefined
    if (fromTs === null || fromTs === undefined) {
      throw new RequiredError(
        "Required parameter fromTs was null or undefined when calling getSLOHistory."
      );
    }

    // verify required parameter 'toTs' is not null or undefined
    if (toTs === null || toTs === undefined) {
      throw new RequiredError(
        "Required parameter toTs was null or undefined when calling getSLOHistory."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/slo/{slo_id}/history".replace(
      "{" + "slo_id" + "}",
      encodeURIComponent(String(sloId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "ServiceLevelObjectivesApi.getSLOHistory"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (fromTs !== undefined) {
      requestContext.setQueryParam(
        "from_ts",
        ObjectSerializer.serialize(fromTs, "number", "int64")
      );
    }
    if (toTs !== undefined) {
      requestContext.setQueryParam(
        "to_ts",
        ObjectSerializer.serialize(toTs, "number", "int64")
      );
    }
    if (target !== undefined) {
      requestContext.setQueryParam(
        "target",
        ObjectSerializer.serialize(target, "number", "double")
      );
    }
    if (applyCorrection !== undefined) {
      requestContext.setQueryParam(
        "apply_correction",
        ObjectSerializer.serialize(applyCorrection, "boolean", "")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listSLOs(
    ids?: string,
    query?: string,
    tagsQuery?: string,
    metricsQuery?: string,
    limit?: number,
    offset?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/slo";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "ServiceLevelObjectivesApi.listSLOs"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (ids !== undefined) {
      requestContext.setQueryParam(
        "ids",
        ObjectSerializer.serialize(ids, "string", "")
      );
    }
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        ObjectSerializer.serialize(query, "string", "")
      );
    }
    if (tagsQuery !== undefined) {
      requestContext.setQueryParam(
        "tags_query",
        ObjectSerializer.serialize(tagsQuery, "string", "")
      );
    }
    if (metricsQuery !== undefined) {
      requestContext.setQueryParam(
        "metrics_query",
        ObjectSerializer.serialize(metricsQuery, "string", "")
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", "int64")
      );
    }
    if (offset !== undefined) {
      requestContext.setQueryParam(
        "offset",
        ObjectSerializer.serialize(offset, "number", "int64")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateSLO(
    sloId: string,
    body: ServiceLevelObjective,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'sloId' is not null or undefined
    if (sloId === null || sloId === undefined) {
      throw new RequiredError(
        "Required parameter sloId was null or undefined when calling updateSLO."
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling updateSLO."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/slo/{slo_id}".replace(
      "{" + "slo_id" + "}",
      encodeURIComponent(String(sloId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "ServiceLevelObjectivesApi.updateSLO"
    ).makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "ServiceLevelObjective", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class ServiceLevelObjectivesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to checkCanDeleteSLO
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async checkCanDeleteSLO(
    response: ResponseContext
  ): Promise<CheckCanDeleteSLOResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: CheckCanDeleteSLOResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CheckCanDeleteSLOResponse",
        ""
      ) as CheckCanDeleteSLOResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("409", response.httpStatusCode)) {
      const body: CheckCanDeleteSLOResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CheckCanDeleteSLOResponse",
        ""
      ) as CheckCanDeleteSLOResponse;
      throw new ApiException<CheckCanDeleteSLOResponse>(409, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CheckCanDeleteSLOResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CheckCanDeleteSLOResponse",
        ""
      ) as CheckCanDeleteSLOResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createSLO
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSLO(response: ResponseContext): Promise<SLOListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SLOListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOListResponse",
        ""
      ) as SLOListResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SLOListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOListResponse",
        ""
      ) as SLOListResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteSLO
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSLO(
    response: ResponseContext
  ): Promise<SLODeleteResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SLODeleteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLODeleteResponse",
        ""
      ) as SLODeleteResponse;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("409", response.httpStatusCode)) {
      const body: SLODeleteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLODeleteResponse",
        ""
      ) as SLODeleteResponse;
      throw new ApiException<SLODeleteResponse>(409, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SLODeleteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLODeleteResponse",
        ""
      ) as SLODeleteResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteSLOTimeframeInBulk
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSLOTimeframeInBulk(
    response: ResponseContext
  ): Promise<SLOBulkDeleteResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SLOBulkDeleteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOBulkDeleteResponse",
        ""
      ) as SLOBulkDeleteResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SLOBulkDeleteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOBulkDeleteResponse",
        ""
      ) as SLOBulkDeleteResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getSLO
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSLO(response: ResponseContext): Promise<SLOResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SLOResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOResponse",
        ""
      ) as SLOResponse;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SLOResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOResponse",
        ""
      ) as SLOResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getSLOCorrections
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSLOCorrections(
    response: ResponseContext
  ): Promise<SLOCorrectionListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SLOCorrectionListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOCorrectionListResponse",
        ""
      ) as SLOCorrectionListResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SLOCorrectionListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOCorrectionListResponse",
        ""
      ) as SLOCorrectionListResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getSLOHistory
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSLOHistory(
    response: ResponseContext
  ): Promise<SLOHistoryResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SLOHistoryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOHistoryResponse",
        ""
      ) as SLOHistoryResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SLOHistoryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOHistoryResponse",
        ""
      ) as SLOHistoryResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listSLOs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSLOs(response: ResponseContext): Promise<SLOListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SLOListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOListResponse",
        ""
      ) as SLOListResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SLOListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOListResponse",
        ""
      ) as SLOListResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateSLO
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSLO(response: ResponseContext): Promise<SLOListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SLOListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOListResponse",
        ""
      ) as SLOListResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SLOListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOListResponse",
        ""
      ) as SLOListResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface ServiceLevelObjectivesApiCheckCanDeleteSLORequest {
  /**
   * A comma separated list of the IDs of the service level objectives objects.
   * @type string
   */
  ids: string;
}

export interface ServiceLevelObjectivesApiCreateSLORequest {
  /**
   * Service level objective request object.
   * @type ServiceLevelObjectiveRequest
   */
  body: ServiceLevelObjectiveRequest;
}

export interface ServiceLevelObjectivesApiDeleteSLORequest {
  /**
   * The ID of the service level objective.
   * @type string
   */
  sloId: string;
  /**
   * Delete the monitor even if it&#39;s referenced by other resources (for example SLO, composite monitor).
   * @type string
   */
  force?: string;
}

export interface ServiceLevelObjectivesApiDeleteSLOTimeframeInBulkRequest {
  /**
   * Delete multiple service level objective objects request body.
   * @type { [key: string]: Array&lt;SLOTimeframe&gt;; }
   */
  body: { [key: string]: Array<SLOTimeframe> };
}

export interface ServiceLevelObjectivesApiGetSLORequest {
  /**
   * The ID of the service level objective object.
   * @type string
   */
  sloId: string;
  /**
   * Get the IDs of SLO monitors that reference this SLO.
   * @type boolean
   */
  withConfiguredAlertIds?: boolean;
}

export interface ServiceLevelObjectivesApiGetSLOCorrectionsRequest {
  /**
   * The ID of the service level objective object.
   * @type string
   */
  sloId: string;
}

export interface ServiceLevelObjectivesApiGetSLOHistoryRequest {
  /**
   * The ID of the service level objective object.
   * @type string
   */
  sloId: string;
  /**
   * The &#x60;from&#x60; timestamp for the query window in epoch seconds.
   * @type number
   */
  fromTs: number;
  /**
   * The &#x60;to&#x60; timestamp for the query window in epoch seconds.
   * @type number
   */
  toTs: number;
  /**
   * The SLO target. If &#x60;target&#x60; is passed in, the response will include the remaining error budget and a timeframe value of &#x60;custom&#x60;.
   * @type number
   */
  target?: number;
  /**
   * Defaults to &#x60;true&#x60;. If any SLO corrections are applied and this parameter is set to &#x60;false&#x60;, then the corrections will not be applied and the SLI values will not be affected.
   * @type boolean
   */
  applyCorrection?: boolean;
}

export interface ServiceLevelObjectivesApiListSLOsRequest {
  /**
   * A comma separated list of the IDs of the service level objectives objects.
   * @type string
   */
  ids?: string;
  /**
   * The query string to filter results based on SLO names.
   * @type string
   */
  query?: string;
  /**
   * The query string to filter results based on a single SLO tag.
   * @type string
   */
  tagsQuery?: string;
  /**
   * The query string to filter results based on SLO numerator and denominator.
   * @type string
   */
  metricsQuery?: string;
  /**
   * The number of SLOs to return in the response.
   * @type number
   */
  limit?: number;
  /**
   * The specific offset to use as the beginning of the returned response.
   * @type number
   */
  offset?: number;
}

export interface ServiceLevelObjectivesApiUpdateSLORequest {
  /**
   * The ID of the service level objective object.
   * @type string
   */
  sloId: string;
  /**
   * The edited service level objective request object.
   * @type ServiceLevelObjective
   */
  body: ServiceLevelObjective;
}

export class ServiceLevelObjectivesApi {
  private requestFactory: ServiceLevelObjectivesApiRequestFactory;
  private responseProcessor: ServiceLevelObjectivesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: ServiceLevelObjectivesApiRequestFactory,
    responseProcessor?: ServiceLevelObjectivesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new ServiceLevelObjectivesApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new ServiceLevelObjectivesApiResponseProcessor();
  }

  /**
   * Check if an SLO can be safely deleted. For example, assure an SLO can be deleted without disrupting a dashboard.
   * @param param The request object
   */
  public checkCanDeleteSLO(
    param: ServiceLevelObjectivesApiCheckCanDeleteSLORequest,
    options?: Configuration
  ): Promise<CheckCanDeleteSLOResponse> {
    const requestContextPromise = this.requestFactory.checkCanDeleteSLO(
      param.ids,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.checkCanDeleteSLO(responseContext);
        });
    });
  }

  /**
   * Create a service level objective object.
   * @param param The request object
   */
  public createSLO(
    param: ServiceLevelObjectivesApiCreateSLORequest,
    options?: Configuration
  ): Promise<SLOListResponse> {
    const requestContextPromise = this.requestFactory.createSLO(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSLO(responseContext);
        });
    });
  }

  /**
   * Permanently delete the specified service level objective object.  If an SLO is used in a dashboard, the `DELETE /v1/slo/` endpoint returns a 409 conflict error because the SLO is referenced in a dashboard.
   * @param param The request object
   */
  public deleteSLO(
    param: ServiceLevelObjectivesApiDeleteSLORequest,
    options?: Configuration
  ): Promise<SLODeleteResponse> {
    const requestContextPromise = this.requestFactory.deleteSLO(
      param.sloId,
      param.force,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSLO(responseContext);
        });
    });
  }

  /**
   * Delete (or partially delete) multiple service level objective objects.  This endpoint facilitates deletion of one or more thresholds for one or more service level objective objects. If all thresholds are deleted, the service level objective object is deleted as well.
   * @param param The request object
   */
  public deleteSLOTimeframeInBulk(
    param: ServiceLevelObjectivesApiDeleteSLOTimeframeInBulkRequest,
    options?: Configuration
  ): Promise<SLOBulkDeleteResponse> {
    const requestContextPromise = this.requestFactory.deleteSLOTimeframeInBulk(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSLOTimeframeInBulk(
            responseContext
          );
        });
    });
  }

  /**
   * Get a service level objective object.
   * @param param The request object
   */
  public getSLO(
    param: ServiceLevelObjectivesApiGetSLORequest,
    options?: Configuration
  ): Promise<SLOResponse> {
    const requestContextPromise = this.requestFactory.getSLO(
      param.sloId,
      param.withConfiguredAlertIds,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSLO(responseContext);
        });
    });
  }

  /**
   * Get corrections applied to an SLO
   * @param param The request object
   */
  public getSLOCorrections(
    param: ServiceLevelObjectivesApiGetSLOCorrectionsRequest,
    options?: Configuration
  ): Promise<SLOCorrectionListResponse> {
    const requestContextPromise = this.requestFactory.getSLOCorrections(
      param.sloId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSLOCorrections(responseContext);
        });
    });
  }

  /**
   * Get a specific SLO’s history, regardless of its SLO type.  The detailed history data is structured according to the source data type. For example, metric data is included for event SLOs that use the metric source, and monitor SLO types include the monitor transition history.  **Note:** There are different response formats for event based and time based SLOs. Examples of both are shown.
   * @param param The request object
   */
  public getSLOHistory(
    param: ServiceLevelObjectivesApiGetSLOHistoryRequest,
    options?: Configuration
  ): Promise<SLOHistoryResponse> {
    const requestContextPromise = this.requestFactory.getSLOHistory(
      param.sloId,
      param.fromTs,
      param.toTs,
      param.target,
      param.applyCorrection,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSLOHistory(responseContext);
        });
    });
  }

  /**
   * Get a list of service level objective objects for your organization.
   * @param param The request object
   */
  public listSLOs(
    param: ServiceLevelObjectivesApiListSLOsRequest = {},
    options?: Configuration
  ): Promise<SLOListResponse> {
    const requestContextPromise = this.requestFactory.listSLOs(
      param.ids,
      param.query,
      param.tagsQuery,
      param.metricsQuery,
      param.limit,
      param.offset,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSLOs(responseContext);
        });
    });
  }

  /**
   * Update the specified service level objective object.
   * @param param The request object
   */
  public updateSLO(
    param: ServiceLevelObjectivesApiUpdateSLORequest,
    options?: Configuration
  ): Promise<SLOListResponse> {
    const requestContextPromise = this.requestFactory.updateSLO(
      param.sloId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSLO(responseContext);
        });
    });
  }
}
