/**
 * Get a dashboard returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

// there is a valid "dashboard" in the system
let DASHBOARD_ID = process.env.DASHBOARD_ID as string;

let params: v1.DashboardsApiGetDashboardRequest = {
  dashboardId: DASHBOARD_ID,
};

apiInstance
  .getDashboard(params)
  .then((data: v1.Dashboard) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
