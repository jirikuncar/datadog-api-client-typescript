import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsArchivesApi(configuration);

apiInstance
  .listLogsArchives()
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
