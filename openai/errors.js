export const CODE_ERROR_INCORRECT_PARAMS = `> Build error occurred
Error: Page "/[...slug]" is missing "generateStaticParams()" so it cannot be used with "output: export" config.
    at /Users/siva.manyam/frontend/projects/basic-nextjs-app/node_modules/next/dist/build/index.js:1297:59
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Span.traceAsyncFn (/Users/siva.manyam/frontend/projects/basic-nextjs-app/node_modules/next/dist/trace/trace.js:154:20)
    at async Promise.all (index 4)
    at async /Users/siva.manyam/frontend/projects/basic-nextjs-app/node_modules/next/dist/build/index.js:1175:17
    at async Span.traceAsyncFn (/Users/siva.manyam/frontend/projects/basic-nextjs-app/node_modules/next/dist/trace/trace.js:154:20)
    at async /Users/siva.manyam/frontend/projects/basic-nextjs-app/node_modules/next/dist/build/index.js:1098:124
    at async Span.traceAsyncFn (/Users/siva.manyam/frontend/projects/basic-nextjs-app/node_modules/next/dist/trace/trace.js:154:20)
    at async build (/Users/siva.manyam/frontend/projects/basic-nextjs-app/node_modules/next/dist/build/index.js:368:9)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.`;

export const CMS_ERROR_INVALID_DATA = ``;

export const INFRA_ERROR_ENV_VARIABLE = `You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
https://nextjs.org/telemetry
  ▲ Next.js 14.2.20
   Creating an optimized production build ...
 ✓ Compiled successfully
   Linting and checking validity of types ...
   Collecting page data ...
TypeError: Expected parameter accessToken
    at /codebuild/output/src2629725029/src/.next/server/app/[...slug]/page.js:7:5765
    at 4762 (/codebuild/output/src2629725029/src/.next/server/app/[...slug]/page.js:7:9969)
    at t (/codebuild/output/src2629725029/src/.next/server/webpack-runtime.js:1:127)
    at 2222 (/codebuild/output/src2629725029/src/.next/server/app/[...slug]/page.js:1:1110)
    at t (/codebuild/output/src2629725029/src/.next/server/webpack-runtime.js:1:127)
    at a (/codebuild/output/src2629725029/src/.next/server/app/[...slug]/page.js:7:159009)
    at /codebuild/output/src2629725029/src/.next/server/app/[...slug]/page.js:7:159044
    at t.X (/codebuild/output/src2629725029/src/.next/server/webpack-runtime.js:1:1191)
    at /codebuild/output/src2629725029/src/.next/server/app/[...slug]/page.js:7:159022
    at Object.<anonymous> (/codebuild/output/src2629725029/src/.next/server/app/[...slug]/page.js:7:159071)
> Build error occurred
Error: Failed to collect page data for /[...slug]
    at /codebuild/output/src2629725029/src/node_modules/next/dist/build/utils.js:1268:15
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  type: 'Error'
}
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.`;
