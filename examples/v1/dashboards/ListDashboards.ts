/**
 * Get all dashboards returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

let params: v1.DashboardsApiListDashboardsRequest = {
  filterShared: false,
};

apiInstance
  .listDashboards(params)
  .then((data: v1.DashboardSummary) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
