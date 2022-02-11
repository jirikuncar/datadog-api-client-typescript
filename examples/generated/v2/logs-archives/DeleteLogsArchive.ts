import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsArchivesApi(configuration);

let params:v2.LogsArchivesApiDeleteLogsArchiveRequest = {
  // string | The ID of the archive.
  archiveId: "archive_id_example",
};

apiInstance.deleteLogsArchive(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));