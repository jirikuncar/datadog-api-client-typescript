/**
 * Get hourly usage for SNMP devices returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params: v1.UsageMeteringApiGetUsageSNMPRequest = {
  startHr: new Date(new Date().getTime() / 1000 + -5 * 86400),
  endHr: new Date(new Date().getTime() / 1000 + -3 * 86400),
};

apiInstance
  .getUsageSNMP(params)
  .then((data: v1.UsageSNMPResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
