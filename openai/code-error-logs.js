export const TYPE_ERROR = `
 Creating an optimized production build ...
 ✓ Compiled successfully
   Linting and checking validity of types  ..Failed to compile.

./src/app/[...slug]/page.tsx:6:23
Type error: Property 'map' does not exist on type 'Promise<{ slug: string[]; }[]>'.

  4 |
  5 | export async function generateStaticParams() {
> 6 |   return fetchPages().map((page) => ({
    |                       ^
  7 |     slug: page.slug.split("/"),
  8 |   }));
  9 | }


  -------------------------------------------------------------------------------------------------------------
  `;

export const RECURSIVE_CODE_ERROR = `
  Creating an optimized production build ...
  ✓ Compiled successfully
  ✓ Linting and checking validity of types    
  ✓ Collecting page data    
  Generating static pages (0/7)  
  /Users/rahul.bansal/Desktop/basic-nextjs-app/.next/server/app/[...slug]/page.js:7
  \`);return t}(null==i?void 0:i.host,o)&&(t.includeContentSourceMaps=!0,t.select)){
  let e=aA(t);
  e.add("sys"),
  t.select=Array.from(e).join(",");
  }
  return t}async function r({context:t,path:n,config:a}){
  let o=i(t);
  try{
  var r,s;
  return r=(await e.get(o+n,a)).data,
  (null===(s=null==a?void 0:a.params)||void 0===s?void 0:s.includeContentSourceMaps)?nY(r):r
  }catch(e){
  nL(e)
  }
  }
  async function s({context:t,path:n,data:a,config:o}){
  let r=i(t);
  try{
  return(await e.post(r+n,a,o)).data
  }catch(e){
  nL(e)
  }
  }
  async function c(e,t,n={withAllLocales:!1,withoutLinkResolution:!1,withoutUnresolvableLinks:!1}){
  let{withAllLocales:a}=n;
  return aL(t,a),
  aF(t),
  aN(t),
  aU(t),
  p(e,a?Object.assign(Object.assign({},t),{locale:"*"}):t,n)
  }
  async function p(e,t,n){
  if(!e)throw a(e);
  try{
  let i=await u(Object.assign({"sys.id":e},o(t)),n);
  if(i.items.length>0)return i.items[0];
  throw a(e)
  }catch(e){
  nL(e)
  }
  }
  async function l(e,t={withAllLocales:!1,withoutLinkResolution:!1,withoutUnresolvableLinks:!1}){
  let{withAllLocales:n}=t;
  return aL(e,n),
  aF(e),
  aN(e),
  aU(e),
  u(n?Object.assign(Object.assign({},e),{locale:"*"}):e,t)
  }
  async function u(e,t){
  let{withoutLinkResolution:n,withoutUnresolvableLinks:a}=t;
  try{
  let t=await r({
  context:"environment",
  path:"entries",
  config:nA({query:o(aR(aC(e)))})
  });
  return aT(t,{resolveLinks:!n,removeUnresolved:null!=a&&a})
  }catch(e){
  nL(e)
  }
  }
  async function d(e,t={withAllLocales:!1,withoutLinkResolution:!1,withoutUnresolvableLinks:!1}){
  let{withAllLocales:n}=t;
  return aL(e,n),
  aU(e),
  x(n?Object.assign(Object.assign({},e),{locale:"*"}):e)
  }
  ⨯ Static worker exited with code: 1 and signal: null
  Generating static pages (5/7)  [    ]%        
  `;

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
