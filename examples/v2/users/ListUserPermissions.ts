/**
 * Get a user permissions returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.UsersApi(configuration);

// there is a valid "user" in the system
let USER_DATA_ID = process.env.USER_DATA_ID as string;

let params: v2.UsersApiListUserPermissionsRequest = {
  userId: USER_DATA_ID,
};

apiInstance
  .listUserPermissions(params)
  .then((data: v2.PermissionsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
