import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.AzureIntegrationApi(configuration);

let params: v1.AzureIntegrationApiCreateAzureIntegrationRequest = {
  // AzureAccount | Create a Datadog-Azure integration for your Datadog account request body.
  body: {
    automute: true,
    clientId: "testc7f6-1234-5678-9101-3fcbf464test",
    clientSecret: "testingx./Sw*g/Y33t..R1cH+hScMDt",
    errors: ["*"],
    hostFilters: "key:value,filter:example",
    newClientId: "new1c7f6-1234-5678-9101-3fcbf464test",
    newTenantName: "new1c44-1234-5678-9101-cc00736ftest",
    tenantName: "testc44-1234-5678-9101-cc00736ftest",
  },
};

apiInstance
  .createAzureIntegration(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
