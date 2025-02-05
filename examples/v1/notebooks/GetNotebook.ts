/**
 * Get a notebook returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.NotebooksApi(configuration);

// there is a valid "notebook" in the system
let NOTEBOOK_DATA_ID = parseInt(process.env.NOTEBOOK_DATA_ID as string);

let params: v1.NotebooksApiGetNotebookRequest = {
  notebookId: NOTEBOOK_DATA_ID,
};

apiInstance
  .getNotebook(params)
  .then((data: v1.NotebookResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
