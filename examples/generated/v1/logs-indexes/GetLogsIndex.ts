import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.LogsIndexesApi(configuration);

let params: v1.LogsIndexesApiGetLogsIndexRequest = {
  // string | Name of the log index.
  name: "name_example",
};

apiInstance
  .getLogsIndex(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
