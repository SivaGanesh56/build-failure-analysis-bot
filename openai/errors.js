// export const CODE_ERROR_INCORRECT_PARAMS = `> Build error occurred
// Error: Page "/[...slug]" is missing "generateStaticParams()" so it cannot be used with "output: export" config.
//     at /Users/siva.manyam/frontend/projects/basic-nextjs-app/node_modules/next/dist/build/index.js:1297:59
//     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
//     at async Span.traceAsyncFn (/Users/siva.manyam/frontend/projects/basic-nextjs-app/node_modules/next/dist/trace/trace.js:154:20)
//     at async Promise.all (index 4)
//     at async /Users/siva.manyam/frontend/projects/basic-nextjs-app/node_modules/next/dist/build/index.js:1175:17
//     at async Span.traceAsyncFn (/Users/siva.manyam/frontend/projects/basic-nextjs-app/node_modules/next/dist/trace/trace.js:154:20)
//     at async /Users/siva.manyam/frontend/projects/basic-nextjs-app/node_modules/next/dist/build/index.js:1098:124
//     at async Span.traceAsyncFn (/Users/siva.manyam/frontend/projects/basic-nextjs-app/node_modules/next/dist/trace/trace.js:154:20)
//     at async build (/Users/siva.manyam/frontend/projects/basic-nextjs-app/node_modules/next/dist/build/index.js:368:9)
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.`;

import {
  CMS_ERROR_MISSING_DATA,
  CMS_ERROR_NESTED_DATA,
} from "./cms-error-logs.js";

import { TYPE_ERROR, RECURSIVE_CODE_ERROR } from "./code-error-logs.js";

import {
  INCORRECT_PARAMTER_ERROR,
  INFRA_ERROR_SIGTERM,
  BUILD_TIMEOUT_ERROR,
  MEMORY_EXCEED_ERROR,
} from "./infra-error-logs.js";

export {
  CMS_ERROR_MISSING_DATA,
  CMS_ERROR_NESTED_DATA,
  TYPE_ERROR,
  RECURSIVE_CODE_ERROR,
  INCORRECT_PARAMTER_ERROR,
  INFRA_ERROR_SIGTERM,
  BUILD_TIMEOUT_ERROR,
  MEMORY_EXCEED_ERROR,
};
