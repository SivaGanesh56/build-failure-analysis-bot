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

export const INFRA_ERROR_SIGTERM = `
 ⚠ Sending SIGTERM signal to static worker due to timeout of 60 seconds. Subsequent errors may be a result of the worker exiting.
 ⨯ Static worker exited with code: null and signal: SIGTERM
 ⨯ Static worker exited with code: null and signal: SIGTERM
 ⚠ Restarted static page generation for /page/2 because it took more than 60 seconds
 ⚠ See more info here https://nextjs.org/docs/messages/static-page-generation-timeout
 ⚠ Restarted static page generation for /page/1 because it took more than 60 seconds
 ⚠ Sending SIGTERM signal to static worker due to timeout of 60 seconds. Subsequent errors may be a result of the worker exiting.
 ⨯ Static worker exited with code: null and signal: SIGTERM
 ⨯ Static worker exited with code: null and signal: SIGTERM
 ⚠ Restarted static page generation for /page/2 because it took more than 60 seconds
 ⚠ Restarted static page generation for /page/1 because it took more than 60 seconds
 ⚠ Sending SIGTERM signal to static worker due to timeout of 60 seconds. Subsequent errors may be a result of the worker exiting.
 ⨯ Static worker exited with code: null and signal: SIGTERM
 ⨯ Static worker exited with code: null and signal: SIGTERM

> Build error occurred
Error: Static page generation for /page/2 is still timing out after 3 attempts. See more info here https://nextjs.org/docs/messages/static-page-generation-timeout
    at onRestart (/Users/gaurav.dash/Desktop/dev/basic-nextjs-app/node_modules/next/dist/build/index.js:292:27)
    at /Users/gaurav.dash/Desktop/dev/basic-nextjs-app/node_modules/next/dist/lib/worker.js:99:40
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async /Users/gaurav.dash/Desktop/dev/basic-nextjs-app/node_modules/next/dist/export/index.js:450:20
    at async Span.traceAsyncFn (/Users/gaurav.dash/Desktop/dev/basic-nextjs-app/node_modules/next/dist/trace/trace.js:154:20)
    at async /Users/gaurav.dash/Desktop/dev/basic-nextjs-app/node_modules/next/dist/export/index.js:448:24
    at async Promise.all (index 5)
    at async exportAppImpl (/Users/gaurav.dash/Desktop/dev/basic-nextjs-app/node_modules/next/dist/export/index.js:440:21)
    at async /Users/gaurav.dash/Desktop/dev/basic-nextjs-app/node_modules/next/dist/export/index.js:623:16
    at async Span.traceAsyncFn (/Users/gaurav.dash/Desktop/dev/basic-nextjs-app/node_modules/next/dist/trace/trace.js:154:20)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.`;

export const CODE_ERROR_NESTED_ERROR = `✓ Collecting page data    
   Generating static pages (5/7)  [=== ]TypeError: Cannot read properties of undefined (reading 'widgets')
    at a8 (/Users/siva.manyam/frontend/projects/basic-nextjs-app/.next/server/app/[...slug]/page.js:7:12907)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  digest: '2712394995'
}
TypeError: Cannot read properties of undefined (reading 'widgets')
    at a8 (/Users/siva.manyam/frontend/projects/basic-nextjs-app/.next/server/app/[...slug]/page.js:7:12907)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  digest: '2712394995'
}
TypeError: Cannot read properties of undefined (reading 'widgets')
    at a8 (/Users/siva.manyam/frontend/projects/basic-nextjs-app/.next/server/app/[...slug]/page.js:7:12907)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  digest: '2712394995'
}

Error occurred prerendering page "/page/2". Read more: https://nextjs.org/docs/messages/prerender-error

TypeError: Cannot read properties of undefined (reading 'widgets')
    at a8 (/Users/siva.manyam/frontend/projects/basic-nextjs-app/.next/server/app/[...slug]/page.js:7:12907)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
 ✓ Generating static pages (7/7)

> Export encountered errors on following paths:
        /[...slug]/page: /page/2
error Command failed with exit code 1.`;

export const INFRA_ERROR_OUT_OF_MEMORY = `
Generating static pages (0/7) [= ]
/Users/siva.manyam/frontend/projects/basic-nextjs-app/.next/server/app/[...slug]/page.js:7
);return t}(null==i?void 0:i.host,o)&&(t.includeContentSourceMaps=!0,t.select))
\`
{let e=aA(t);e.add("sys"),t.select=Array.from(e).join(",")}return t}async function r({context:t,path:n,config:a}){let o=i(t);try{var r,s;return r=(await e.get(o+n,a)).data,(null===(s=null==a?void 0:a.params)||void 0===s?void 0:s.includeContentSourceMaps)?nY(r):r}catch(e){nL(e)}}async function s({context:t,path:n,data:a,config:o}){let r=i(t);try{return(await e.post(r+n,a,o)).data}catch(e){nL(e)}}async function c(e,t,n={withAllLocales:!1,withoutLinkResolution:!1,withoutUnresolvableLinks:!1}){let{withAllLocales:a}=n;return aL(t,a),aF(t),aN(t),aU(t),p(e,a?Object.assign(Object.assign({},t),{locale:"*"}):t,n)}async function p(e,t,n){if(!e)throw a(e);try{let i=await u(Object.assign({"sys.id":e},o(t)),n);if(i.items.length>0)return i.items[0];throw a(e)}catch(e){nL(e)}}async function l(e,t={withAllLocales:!1,withoutLinkResolution:!1,withoutUnresolvableLinks:!1}){let{withAllLocales:n}=t;return aL(e,n),aF(e),aN(e),aU(e),u(n?Object.assign(Object.assign({},e),{locale:"*"}):e,t)}async function u(e,t){let{withoutLinkResolution:n,withoutUnresolvableLinks:a}=t;try{let t=await r({context:"environment",path:"entries",config:nA({query:o(aR(aC(e)))})});return aT(t,{resolveLinks:!n,removeUnresolved:null!=a&&a})}catch(e){nL(e)}}async function d(e,t={withAllLocales:!1,withoutLinkResolution:!1,withoutUnresolvableLinks:!1}){let{withAllLocales:n}=t;return aL(e,n),aU(e),x(n?Object.assign(Object.assign({},e),{locale:"*"}):e)}async function m(e,t){try{return r({context:"environment",path:\`assets/\${e}\`,config:nA({query:o(aC(t))})})}catch(e){nL(e)}}async function f(e,t,n={withAllLocales:!1,withoutLinkResolution:!1,withoutUnresolvableLinks:!1}){let{withAllLocales:a}=n;return aL(t,a),aU(t),m(e,a?Object.assign(Object.assign({},t),{locale:"*"}):t)}async function x(e){try{return r({context:"environment",path:"assets",config:nA({query:o(aR(aC(e)))})})}catch(e){nL(e)}}async function h(n,a,i={withAllLocales:!1,withoutLinkResolution:!1,withoutUnresolvableLinks:!1}){aF(n),aN(n);let o=Object.assign(Object.assign({},a),i);return e.defaults.baseURL=t().environmentBaseUrl,aO(e,n,o)}async function v(e,t={}){try{return r({context:"environment",path:\`taxonomy/concept-schemes/\${e}\`,config:nA({query:aR(aC(t))})})}catch(e){nL(e)}}async function b(e={}){try{return r({context:"environment",path:"taxonomy/concept-schemes",config:nA({query:aR(aC(e))})})}catch(e){nL(e)}}async function g(e,t={}){try{return r({context:"environment",path:\`taxonomy/concepts/\${e}\`,config:nA({query:aR(aC(t))})})}catch(e){nL(e)}}async function y(e={}){try{return r({context:"environment",path:"taxonomy/concepts",config:nA({query:aR(aC(e))})})}catch(e){nL(e)}}return{version:"11.3.0",getSpace:async function(){return r({context:"space",path:""})},getContentType:async function(e){return r({context:"environment",path:\`content_types/\${e}\`})},getContentTypes:async function(e={}){return r({context:"environment",path:"content_types",config:nA({query:e})})},getAsset:async function(e,t={}){return f(e,t,n)},getAssets:async function(e={}){return d(e,n)},getTag:async function(e){return r({context:"environment",path:\`tags/\${e}\`})},getTags:async function(e={}){return aU(e),r({context:"environment",path:"tags",config:nA({query:aR(aC(e))})})},getLocales:async function(e={}){return aU(e),r({context:"environment",path:"locales",config:nA({query:aC(e)})})},parseEntries:function(e){return function(e,t={withAllLocales:!1,withoutLinkResolution:!1,withoutUnresolvableLinks:!1}){return function(e,t){let{withoutLinkResolution:n,withoutUnresolvableLinks:a}=t;return aT(e,{resolveLinks:!n,removeUnresolved:null!=a&&a})}(e,t)}(e,n)},sync:async function(e,t={paginate:!0}){return h(e,t,n)},getEntry:async function(e,t={}){return c(e,t,n)},getEntries:async function(e={}){return l(e,n)},getConceptScheme:function(e,t={}){return v(e,t)},getConceptSchemes:function(e={}){return b(e)},getConcept:function(e,t={}){return g(e,t)},getConcepts:function(e={}){return y(e)},createAssetKey:async function(e){try{let t=Math.floor(Date.now()/1e3);!function(e,t,n){if(n=n||{},"number"!=typeof t)throw new aP(e,\`only numeric values are allowed for timestamps, provided type was "\${typeof t}"\`);if(n.maximum&&t>n.maximum)throw new aP(e,\`value (\${t}) cannot be further in the future than expected maximum (\${n.maximum})\`);if(n.now&&t<n.now)throw new aP(e,\`value (\${t}) cannot be in the past, current time was \${n.now}\`)}("expiresAt",e,{maximum:t+172800,now:t})}catch(e){nL(e)}return s({context:"environment",path:"asset_keys",data:{expiresAt:e}})}}};
`;
