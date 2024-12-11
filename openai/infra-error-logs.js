export const INCORRECT_PARAMTER_ERROR = `
You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
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
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

-------------------------------------------------------------------------------------------------------------
`

export const INFRA_ERROR_SIGTERM =`
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
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
`

export const BUILD_TIMEOUT_ERROR = `
  - Environments: .env
 
   Creating an optimized production build ...
✓ Compiled successfully
✓ Linting and checking validity of types    
⚠ Sending SIGTERM signal to static worker due to timeout of 10 seconds. Subsequent errors may be a result of the worker exiting.
⨯ Static worker exited with code: null and signal: SIGTERM
⚠ Restarted collecting page data for /[...slug] because it took more than 10 seconds
⚠ See more info here https://nextjs.org/docs/messages/static-page-generation-timeout
⚠ Sending SIGTERM signal to static worker due to timeout of 10 seconds. Subsequent errors may be a result of the worker exiting.
⨯ Static worker exited with code: null and signal: SIGTERM
 
> Build error occurred
Error: Collecting page data for /[...slug] is still timing out after 2 attempts. See more info here https://nextjs.org/docs/messages/page-data-collection-timeout
    at onRestart (/Users/rahul.bansal/Desktop/basic-nextjs-app/node_modules/next/dist/build/index.js:299:27)
    at Worker.isPageStatic (/Users/rahul.bansal/Desktop/basic-nextjs-app/node_modules/next/dist/lib/worker.js:99:40)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Span.traceAsyncFn (/Users/rahul.bansal/Desktop/basic-nextjs-app/node_modules/next/dist/trace/trace.js:154:20)
    at async /Users/rahul.bansal/Desktop/basic-nextjs-app/node_modules/next/dist/build/index.js:1243:56
    at async Span.traceAsyncFn (/Users/rahul.bansal/Desktop/basic-nextjs-app/node_modules/next/dist/trace/trace.js:154:20)
    at async Promise.all (index 4)
    at async /Users/rahul.bansal/Desktop/basic-nextjs-app/node_modules/next/dist/build/index.js:1175:17
    at async Span.traceAsyncFn (/Users/rahul.bansal/Desktop/basic-nextjs-app/node_modules/next/dist/trace/trace.js:154:20)
    at async /Users/rahul.bansal/Desktop/basic-nextjs-app/node_modules/next/dist/build/index.js:1098:124
   Collecting page data  .%                                                          
   `


   export const MEMORY_EXCEED_ERROR = `
   Creating an optimized production build ...
✓ Compiled successfully
✓ Linting and checking validity of types    
   Collecting page data  ...
<--- Last few GCs --->
 
[23713:0x120040000]    20601 ms: Scavenge 3997.7 (4069.2) -> 3997.0 (4092.2) MB, 8.5 / 0.0 ms  (average mu = 0.205, current mu = 0.176) allocation failure; 
[23713:0x120040000]    20627 ms: Scavenge 4021.6 (4100.7) -> 4023.2 (4103.2) MB, 8.0 / 0.0 ms  (average mu = 0.205, current mu = 0.176) allocation failure; 
[23713:0x120040000]    20642 ms: Scavenge 4023.3 (4103.2) -> 4021.6 (4117.2) MB, 14.8 / 0.0 ms  (average mu = 0.205, current mu = 0.176) allocation failure;
 
 
<--- JS stacktrace --->
 
FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
1: 0x10090fc40 node::Abort() [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
2: 0x10090fe24 node::ModifyCodeGenerationFromStrings(v8::Local<v8::Context>, v8::Local<v8::Value>, bool) [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
3: 0x100a67608 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
4: 0x100c11eec v8::internal::EmbedderStackStateScope::EmbedderStackStateScope(v8::internal::Heap*, v8::internal::EmbedderStackStateScope::Origin, cppgc::EmbedderStackState) [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
5: 0x100c15ad8 v8::internal::Heap::CollectSharedGarbage(v8::internal::GarbageCollectionReason) [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
6: 0x100c12aec v8::internal::Heap::PerformGarbageCollection(v8::internal::GarbageCollector, v8::internal::GarbageCollectionReason, char const*, v8::GCCallbackFlags) [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
7: 0x100c0fdec v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
8: 0x100c0ef14 v8::internal::Heap::HandleGCRequest() [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
9: 0x100bbc4bc v8::internal::StackGuard::HandleInterrupts() [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
10: 0x100f8b11c v8::internal::Runtime_StackGuard(int, unsigned long*, v8::internal::Isolate*) [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
11: 0x1012d904c Builtins_CEntry_Return1_DontSaveFPRegs_ArgvOnStack_NoBuiltinExit [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
12: 0x1061e79a4 
13: 0x101264198 Builtins_InterpreterEntryTrampoline [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
14: 0x101264198 Builtins_InterpreterEntryTrampoline [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
15: 0x101264198 Builtins_InterpreterEntryTrampoline [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
16: 0x101264198 Builtins_InterpreterEntryTrampoline [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
17: 0x101264198 Builtins_InterpreterEntryTrampoline [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
18: 0x101264198 Builtins_InterpreterEntryTrampoline [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
19: 0x101264198 Builtins_InterpreterEntryTrampoline [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
20: 0x101264198 Builtins_InterpreterEntryTrampoline [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
21: 0x101295ef4 Builtins_AsyncFunctionAwaitResolveClosure [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
22: 0x101324738 Builtins_PromiseFulfillReactionJob [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
23: 0x101287c4c Builtins_RunMicrotasks [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
24: 0x1012623a4 Builtins_JSRunMicrotasksEntry [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
25: 0x100b93d38 v8::internal::(anonymous namespace)::Invoke(v8::internal::Isolate*, v8::internal::(anonymous namespace)::InvokeParams const&) [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
26: 0x100b94228 v8::internal::(anonymous namespace)::InvokeWithTryCatch(v8::internal::Isolate*, v8::internal::(anonymous namespace)::InvokeParams const&) [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
27: 0x100b94404 v8::internal::Execution::TryRunMicrotasks(v8::internal::Isolate*, v8::internal::MicrotaskQueue*, v8::internal::MaybeHandle<v8::internal::Object>*) [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
28: 0x100bbab6c v8::internal::MicrotaskQueue::RunMicrotasks(v8::internal::Isolate*) [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
29: 0x100bbb308 v8::internal::MicrotaskQueue::PerformCheckpoint(v8::Isolate*) [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
30: 0x100ad7a0c v8::internal::FunctionCallbackArguments::Call(v8::internal::CallHandlerInfo) [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
31: 0x100ad74fc v8::internal::MaybeHandle<v8::internal::Object> v8::internal::(anonymous namespace)::HandleApiCallHelper<false>(v8::internal::Isolate*, v8::internal::Handle<v8::internal::HeapObject>, v8::internal::Handle<v8::internal::HeapObject>, v8::internal::Handle<v8::internal::FunctionTemplateInfo>, v8::internal::Handle<v8::internal::Object>, v8::internal::BuiltinArguments) [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
32: 0x100ad6d54 v8::internal::Builtin_HandleApiCall(int, unsigned long*, v8::internal::Isolate*) [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
33: 0x1012d918c Builtins_CEntry_Return1_DontSaveFPRegs_ArgvOnStack_BuiltinExit [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
34: 0x101264198 Builtins_InterpreterEntryTrampoline [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
35: 0x1012624d0 Builtins_JSEntryTrampoline [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
36: 0x101262164 Builtins_JSEntry [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
37: 0x100b93d68 v8::internal::(anonymous namespace)::Invoke(v8::internal::Isolate*, v8::internal::(anonymous namespace)::InvokeParams const&) [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
38: 0x100b932a8 v8::internal::Execution::Call(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, int, v8::internal::Handle<v8::internal::Object>*) [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
39: 0x100a834a8 v8::Function::Call(v8::Local<v8::Context>, v8::Local<v8::Value>, int, v8::Local<v8::Value>*) [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
40: 0x100854d08 node::InternalCallbackScope::Close() [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
41: 0x100854fd0 node::InternalMakeCallback(node::Environment*, v8::Local<v8::Object>, v8::Local<v8::Object>, v8::Local<v8::Function>, int, v8::Local<v8::Value>*, node::async_context) [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
42: 0x10086a36c node::AsyncWrap::MakeCallback(v8::Local<v8::Function>, int, v8::Local<v8::Value>*) [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
43: 0x1009c40b0 node::StreamBase::CallJSOnreadMethod(long, v8::Local<v8::ArrayBuffer>, unsigned long, node::StreamBase::StreamBaseJSChecks) [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
44: 0x1009c55b0 node::EmitToJSStreamListener::OnStreamRead(long, uv_buf_t const&) [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
45: 0x1009c9694 node::LibuvStreamWrap::OnUvRead(long, uv_buf_t const*) [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
46: 0x1009c9e00 node::LibuvStreamWrap::ReadStart()::$_1::__invoke(uv_stream_s*, long, uv_buf_t const*) [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
47: 0x10124df24 uv__stream_io [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
48: 0x101256058 uv__io_poll [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
49: 0x101243f74 uv_run [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
50: 0x1008556e0 node::SpinEventLoop(node::Environment*) [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
51: 0x10094c850 node::NodeMainInstance::Run() [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
52: 0x1008dc6a4 node::LoadSnapshotDataAndRun(node::SnapshotData const**, node::InitializationResult const*) [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
53: 0x1008dc95c node::Start(int, char**) [/Users/rahul.bansal/.nvm/versions/node/v18.18.2/bin/node]
54: 0x18fb37154 start [/usr/lib/dyld]
⨯ Static worker exited with code: null and signal: SIGABRT
   Collecting page data  .%   `