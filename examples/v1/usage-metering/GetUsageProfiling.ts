/**
 * Get hourly usage for profiled hosts returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params: v1.UsageMeteringApiGetUsageProfilingRequest = {
  startHr: new Date(new Date().getTime() / 1000 + -5 * 86400),
  endHr: new Date(new Date().getTime() / 1000 + -3 * 86400),
};

apiInstance
  .getUsageProfiling(params)
  .then((data: v1.UsageProfilingResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
