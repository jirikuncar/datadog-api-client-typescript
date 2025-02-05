/**
 * Get a list of incidents returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
configuration.unstableOperations["listIncidents"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

apiInstance
  .listIncidents()
  .then((data: v2.IncidentsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
