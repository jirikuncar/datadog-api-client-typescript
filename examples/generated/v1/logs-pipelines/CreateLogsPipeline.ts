import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.LogsPipelinesApi(configuration);

let params:v1.LogsPipelinesApiCreateLogsPipelineRequest = {
  // LogsPipeline | Definition of the new pipeline.
  body: {
    filter: {
      query: "source:python",
    },
    isEnabled: true,
    name: "",
    processors: [
      {
    grok: {
      matchRules: `rule_name_1 foo
rule_name_2 bar
`,
      supportRules: `rule_name_1 foo
rule_name_2 bar
`,
    },
    isEnabled: false,
    name: "name_example",
    samples: [
      "samples_example",
    ],
    source: "message",
    type: "grok-parser",
  },
    ],
  },
};

apiInstance.createLogsPipeline(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));