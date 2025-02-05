/**
 * Delete an API key returns "No Content" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.KeyManagementApi(configuration);

// there is a valid "api_key" in the system
let API_KEY_DATA_ID = process.env.API_KEY_DATA_ID as string;

let params: v2.KeyManagementApiDeleteAPIKeyRequest = {
  apiKeyId: API_KEY_DATA_ID,
};

apiInstance
  .deleteAPIKey(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
