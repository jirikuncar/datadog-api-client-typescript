/**
 * Edit an application key returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.KeyManagementApi(configuration);

// there is a valid "application_key" in the system
let APPLICATION_KEY_DATA_ID = process.env.APPLICATION_KEY_DATA_ID as string;

let params: v2.KeyManagementApiUpdateApplicationKeyRequest = {
  body: {
    data: {
      id: APPLICATION_KEY_DATA_ID,
      type: "application_keys",
      attributes: {
        name: "Application Key for submitting metrics-updated",
      },
    },
  },
  appKeyId: APPLICATION_KEY_DATA_ID,
};

apiInstance
  .updateApplicationKey(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));