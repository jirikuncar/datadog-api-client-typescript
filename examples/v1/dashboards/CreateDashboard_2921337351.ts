/**
 * Create a new dashboard with trace_service widget
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

let params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title: "Example-Create_a_new_dashboard_with_trace_service_widget",
    description: "",
    widgets: [
      {
        layout: {
          x: 0,
          y: 0,
          width: 72,
          height: 72,
        },
        definition: {
          title: "Service Summary",
          time: {},
          type: "trace_service",
          env: "none",
          service: "",
          spanName: "",
          showHits: true,
          showErrors: true,
          showLatency: true,
          showBreakdown: true,
          showDistribution: true,
          showResourceList: false,
          sizeFormat: "medium",
          displayFormat: "two_column",
        },
      },
    ],
    templateVariables: [],
    layoutType: "free",
    isReadOnly: false,
    notifyList: [],
  },
};

apiInstance
  .createDashboard(params)
  .then((data: v1.Dashboard) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));