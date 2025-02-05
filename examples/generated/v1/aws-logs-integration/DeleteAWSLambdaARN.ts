import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.AWSLogsIntegrationApi(configuration);

let params: v1.AWSLogsIntegrationApiDeleteAWSLambdaARNRequest = {
  // AWSAccountAndLambdaRequest | Delete AWS Lambda ARN request body.
  body: {
    accountId: "1234567",
    lambdaArn:
      "arn:aws:lambda:us-east-1:1234567:function:LogsCollectionAPITest",
  },
};

apiInstance
  .deleteAWSLambdaARN(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
