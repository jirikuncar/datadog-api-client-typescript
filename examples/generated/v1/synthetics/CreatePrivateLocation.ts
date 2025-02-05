import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params: v1.SyntheticsApiCreatePrivateLocationRequest = {
  // SyntheticsPrivateLocation | Details of the private location to create.
  body: {
    description: "Description of private location",
    name: "New private location",
    tags: ["team:front"],
  },
};

apiInstance
  .createPrivateLocation(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
