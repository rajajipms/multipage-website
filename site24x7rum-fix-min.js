if(!window.insightRUM) {var s247RUM ={"ip_enabled":false,"mask_all_input":false,"beaconType":1,"staticURL":"https:\/\/localhost:6443\/rum\/resources","collect_network_details":false,"track_console_events":true,"allowed_network_urls":[""],"excluded_ajax_calls":"","cx_ajax_enabled":false,"excluded_errors":{},"apedexThreshold":2000,"country_codes":[],"appKey":"d2b0efa149435b487ceab4b38ec2ef56","geo_enabled":true,"track_resources":true,"resources_config":[],"mask_all_text":false,"ajax_enabled":true,"version":"","excluded_useragents":[""],"session_replay_sampling_threshold":1.0,"collectorURL":"\/\/localhost:6443","excluded_domains":[""],"excluded_web_pages":"","exclude_bots":true,"track_events":true,"inject_trace_header":true,"enable_session_replay":true};
Array.isArray||(Array.isArray=function(arg){return"[object Array]"===Object.prototype.toString.call(arg)}),String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(search,rawPos){rawPos=0<rawPos?0|rawPos:0;return this.substring(rawPos,rawPos+search.length)===search}}),String.prototype.endsWith||(String.prototype.endsWith=function(search,this_len){return(void 0===this_len||this_len>this.length)&&(this_len=this.length),this.substring(this_len-search.length,this_len)===search});
var s247CommonModule=function(){var CONSTANTS={MAX_EVENTS_LENGTH:100,MAX_CLICK_INTERVAL:2e3,CLICK_THRESHOLD:3,CLICK_DISTANCE:50,MAX_SCROLL_INTERVAL:100,EXCESSIVE_SCROLL_THRESHOLD:100,OBFUSCATE_WEB_PAGES_REGEX:"//([^\\/$]*[0-9]+[^\\/$]*)/g",QUICK_BACK_TIME:5e3,DEADCLICK_WAIT_TIME:5e3,MAX_ERROR_PER_REQUEST:9,MAX_SELECTOR_LENGTH:1e4,MAX_XPATH_LENGTH:1e4,MAX_BUTTON_CLICK_TEXT_LENGTH:1e4,MAX_EVENTS_METRIC_LENGTH:1e4,MAX_EVENTS_META_INFO_LENGTH:1e4,MAX_EVENTS_CLICK_CUSTOMNAME_LENGTH:1e3,MAX_SESSION_TIME:9e5,TIMING_METRICS:["rdT","acT","dnsT","conT","beT","fbT","dlT","nwT","dpT","drT","feT","totalRT"],EVENT_LISTENERS:["onload","onpagehide","onkeypress","onscroll","onclick","visibilitychange"],INITIATOR_TYPES:["img","css","iframe","link","script","xmlhttprequest"],HOST_NAME_REGEX:/^(https|http)?:\/\/(?:www\.)?([^/:?#]+)(?:[/:?#]|$)/i,HOST_NAME_WITH_PORT_REGEX:/^(https|http)?:\/\/(?:www\.)?([^/:?#]+(:\d+)?)(?:[/:?#]|$)/i,URL_PATTERN:/^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)(?::[0-9]+)?([^?]+)?(?:\\?)?(.+)?$/i,STRING_LENGTH_RESTRICTED_RESOURCE_TYPES:["name","domain","res_type","domain_type","initiator","extension"],MAX_RESOURCES_STRING_LEN:100,MAX_RESOURCES_ALLOWED:1e3,SAMPLING_RATE:1,SESSION_REPLAY_SAMPLING_RATE:.02,RESOURCES_SAMPLING_RATE:.05,TRACK_RESOURCES_SAMPLING_RATE:.3,RECORDING_ORDER:1,CAPTURE_RESOURCES:!1,IGNORED_RESOURCES:["site24x7"],DEFAULT_APDEX_THRESHOLD:2e3,DEFAULT_CDN_DOMAINS:["cdn.",".akamai.com",".akamai.net",".akamaized.net",".akamaiedge.net",".akamaihd.net",".edgesuite.net",".edgekey.net",".srip.net",".akamaitechnologies.com",".akamaitechnologies.fr",".tl88.net",".llnwd.net","edgecastcdn.net",".systemcdn.net",".transactcdn.net",".v1cdn.net",".v2cdn.net",".v3cdn.net",".v4cdn.net",".v5cdn.net","hwcdn.net",".simplecdn.net",".instacontent.net",".footprint.net",".fpbns.net",".ay1.b.yahoo.com",".yimg.",".yahooapis.com",".google.","googlesyndication.","youtube.",".googleusercontent.com","googlehosted.com",".gstatic.com",".doubleclick.net",".insnw.net",".inscname.net",".internapcdn.net",".cloudfront.net",".netdna-cdn.com",".netdna-ssl.com",".netdna.com",".kxcdn.com",".cotcdn.net",".cachefly.net","bo.lt",".cloudflare.com",".afxcdn.net",".lxdns.com",".wscdns.com",".wscloudcdn.com",".ourwebpic.com",".att-dsa.net",".vo.msecnd.net",".azureedge.net",".azure.microsoft.com",".voxcdn.net",".bluehatnetwork.com",".swiftcdn1.com",".swiftserve.com",".cdngc.net",".gccdn.net",".panthercdn.com",".fastly.net",".fastlylb.net",".nocookie.net",".gslb.taobao.com",".gslb.tbcache.com",".mirror-image.net",".yottaa.net",".cubecdn.net",".cdn77.net",".cdn77.org",".incapdns.net",".bitgravity.com",".r.worldcdn.net",".r.worldssl.net","tbcdn.cn",".taobaocdn.com",".ngenix.net",".pagerain.net",".ccgslb.com","cdn.sfr.net",".azioncdn.net",".azioncdn.com",".azion.net",".cdncloud.net.au",".rncdn1.com",".rncdn7.com",".cdnsun.net",".mncdn.com",".mncdn.net",".mncdn.org","cdn.jsdelivr.net",".nyiftw.net",".nyiftw.com",".resrc.it",".zenedge.net",".lswcdn.net",".lswcdn.eu",".revcn.net",".revdn.net",".caspowa.com",".twimg.com",".facebook.com",".facebook.net",".fbcdn.net",".cdninstagram.com",".rlcdn.com",".wp.com",".wordpress.com",".gravatar.com",".aads1.net",".aads-cn.net",".aads-cng.net",".squixa.net",".bisongrid.net",".cdn.gocache.net",".hiberniacdn.com",".cdntel.net",".raxcdn.com",".unicorncdn.net",".optimalcdn.com",".kinxcdn.com",".kinxcdn.net",".stackpathdns.com",".hosting4cdn.com",".netlify.com",".b-cdn.net",".pix-cdn.org",".roast.io",".cdnvideo.ru",".cdnvideo.net",".trbcdn.ru",".cedexis.net",".streamprovider.net",".singularcdn.net.br"],PAYLOAD_DISPATCHER_INTERVAL:1e4,MAX_RECORDING_SIZE:Math.floor(1572864),MAX_RESPONSE_PAYLOAD_CHARACTERS:15e4,EXCLUDED_HEADERS:["authorization","x-forwarded-for","cookie","set-cookie","x-api-key","x-real-ip","remote-addr","forwarded","proxy-authorization","x-csrf-token","x-csrftoken","x-xsrf-token"],INCLUDED_HEADERS:["Content-Type","Content-Length","Accept"],INACTIVITY_LIMIT:3e5,MAX_QUEUE_SIZE:10,INTERACTION_IDLE_TIMEOUT:1e3,INTERACTION_MAX_TIMEOUT:1e4,EVENT_TIMING_MATCH_THRESHOLD:16,MAX_FINALIZED_INTERACTIONS_LOOKBACK:10,MAX_FINALIZED_INTERACTIONS:1e3};function truncateString(str,maxCharLimit,delimiter){for(var lastSlashIndex=-1,charCount=0,i=0;i<str.length&&(str[i]===delimiter&&(lastSlashIndex=i),!(maxCharLimit<++charCount));i++);return-1!==lastSlashIndex&&maxCharLimit<charCount?str.substring(0,lastSlashIndex+1):str}return{getSelector:function(node,max_length){var sel="",maxLength=null!=max_length?max_length:CONSTANTS.MAX_SELECTOR_LENGTH;try{for(;node&&9!==node.nodeType;){var part=node.id?"#"+node.id:node.nodeName.toLowerCase()+(node.className&&node.className.length?"."+Array.from(node.classList.values()).join("."):"");if(sel.length+part.length>maxLength-1)return sel&&((sel=sel.split(">")).pop(),sel=sel.join(">")),sel.substr(0,maxLength)||part.substr(0,maxLength);if(sel=sel?part+">"+sel:part,node.id)break;node=node.parentNode}}catch(err){}return sel.substr(0,maxLength)},getXPath:function(node){try{return truncateString(function getXPath(node){if(""!==node.id)return'id("'+node.id+'")';if(node===document.body)return node.tagName;for(var ix=0,siblings=node&&node.parentNode?node.parentNode.childNodes:[],i=0;i<siblings.length;i++){var sibling=siblings[i];if(sibling===node)return getXPath(node.parentNode)+"/"+node.tagName+"["+(ix+1)+"]";1===sibling.nodeType&&sibling.tagName===node.tagName&&ix++}}(node),CONSTANTS.MAX_XPATH_LENGTH,"/")}catch(e){}return"?"},truncateString:truncateString,getCurrentMillis:function(){return Date.now?Date.now():(new Date).getTime()},getAppKey:function(){return"undefined"!=typeof s247RUM&&s247RUM.appKey?s247RUM.appKey:rumMOKey},parseJsonWithLimit:function(text){try{var jsonObject=JSON.parse(text);if(JSON.stringify(jsonObject).length>CONSTANTS.MAX_RESPONSE_PAYLOAD_CHARACTERS){if(Array.isArray(jsonObject)){for(var limitedArray=[],totalChars=0,i=0;i<jsonObject.length;i++){var itemString=JSON.stringify(jsonObject[i]);if(!(totalChars+itemString.length<=CONSTANTS.MAX_RESPONSE_PAYLOAD_CHARACTERS))break;limitedArray.push(jsonObject[i]),totalChars+=itemString.length}jsonObject=limitedArray}else if("object"==typeof jsonObject){var key,limitedObject={},totalChars=0;for(key in jsonObject){var tempObj={},keyString=(tempObj[key]=jsonObject[key],JSON.stringify(tempObj));if(!(totalChars+keyString.length<=CONSTANTS.MAX_RESPONSE_PAYLOAD_CHARACTERS))break;limitedObject[key]=jsonObject[key],totalChars+=keyString.length}jsonObject=limitedObject}return jsonObject.s247_message="150k max char limit reached",JSON.stringify(jsonObject)}return text}catch(e){return text=text&&"string"==typeof text&&text.length>CONSTANTS.MAX_RESPONSE_PAYLOAD_CHARACTERS?text.substring(0,CONSTANTS.MAX_RESPONSE_PAYLOAD_CHARACTERS)+"...":text}},filterHeaders:function(headers,allowedHeaders){allowedHeaders=(allowedHeaders=allowedHeaders||[]).concat(CONSTANTS.INCLUDED_HEADERS);var key,filteredHeaders={};for(key in headers)headers.hasOwnProperty(key)&&-1!==allowedHeaders.indexOf(key)&&-1===CONSTANTS.EXCLUDED_HEADERS.indexOf(key.toLowerCase())&&(filteredHeaders[key]=headers[key]);return filteredHeaders},getClosestStartTime:function(similarEventsArray,start_time,source){if(0===similarEventsArray.length)return null;if(1===similarEventsArray.length&&similarEventsArray[0].source==source)return null;for(var nearestEvent=similarEventsArray[0],minDifference=Math.abs(similarEventsArray[0].st-start_time),nearestEventIndex=0,i=1;i<similarEventsArray.length;i++){var difference=Math.abs(similarEventsArray[i].st-start_time);difference<minDifference&&similarEventsArray[i].source!=source&&(nearestEvent=similarEventsArray[i],minDifference=difference,nearestEventIndex=i)}return minDifference<=5e3?(similarEventsArray.splice(nearestEventIndex,1),nearestEvent):null},deleteLongLastingEvents:function(eventIdObj){var key,currentTime=(new Date).getTime();for(key in eventIdObj)Array.isArray(eventIdObj[key])&&(eventIdObj[key]=eventIdObj[key].filter(function(subObj){return currentTime-subObj.ct<=12e4}),0===eventIdObj[key].length)&&delete eventIdObj[key];return eventIdObj},simpleHash:function(input){for(var hash=0,i=0;i<input.length;i++){hash=(hash<<5)-hash+input.charCodeAt(i);hash&=hash}return hash.toString(16)},SCROLL_EVENTS:{LAST_SCROLLED:0,COUNT:0,SCROLL_IDLE_TIMEOUT:2e3},CONSTANTS:CONSTANTS,eventIdObj:{}}}();"undefined"!=typeof s247RUM&&(s247RUM._recorderModule={isStub:!0,init:function(){},collect:function(){return null},collectFullSnapshots:function(){return[]},getSize:function(){return 0}});
var s247ConfigModule=function(){function configManager(config,value){setConfig(config,value)}function updateConfigRegex(value){return value&&Array.isArray(value)&&0<value.length?new RegExp(value.join("|"),"g"):value&&value instanceof RegExp?value:null}var insightRUMInstance,config={appKey:"",trackAjaxCalls:!1,trackCrossDomainAjaxCalls:!1,injectTraceHeader:!1,trackResources:!1,excludedDomains:[],excludeModules:[],excludedDomainsRegex:new RegExp,excludeUserAgents:[],excludeUserAgentsRegex:new RegExp,apdexThreshold:s247CommonModule.CONSTANTS.DEFAULT_APDEX_THRESHOLD,trackConsoleEvents:!1,excludedAjaxCalls:[],excludedAjaxCallsRegex:new RegExp,excludedWebTxns:[],excludeWebPages:[],excludedWebTxnsRegex:new RegExp,customWebPageGrouping:new RegExp,customFullWebPageGrouping:new RegExp,exemptKeywords:"",trackEvents:!1,trackAsynchronousCallbacks:!1,trackTransactionsWithQueryParams:!1,maxSessionDuration:s247CommonModule.CONSTANTS.MAX_SESSION_TIME,onBeforeSend:function(){},flushMetrics:void 0,endCurrentSession:void 0,tags:{},environment:"",endPoint:"",userType:"",release:"",userId:"",addBreadCrumbs:"",ignoreNetworkForSPA:!1,samplingRate:s247CommonModule.CONSTANTS.SAMPLING_RATE,captureAllWaterfalls:!1,waterfallsSamplingRate:s247CommonModule.CONSTANTS.RESOURCES_SAMPLING_RATE,recordingSamplingRate:s247CommonModule.CONSTANTS.SESSION_REPLAY_SAMPLING_RATE,excludeResources:[],recordSession:!1,addEvent:"",captureException:{},maskAllText:!0,maskAllInput:!0,collectNetworkDetails:!1,disableCookie:!1,allowedNetworkUrls:[],excludedNetworkUrls:[],allowedRequestHeaders:[],allowedResponseHeaders:[],disableRumRecording:!1,proxyUrl:""},objectValueAllowedKeys=["recordSession"],configSchema={excludedDomains:{type:["string","array"],dependencies:["excludedDomainsRegex"],onDependencyUpdate:updateConfigRegex},excludeUserAgents:{type:["string","array"],dependencies:["excludeUserAgentsRegex"],onDependencyUpdate:updateConfigRegex},excludedAjaxCalls:{type:["string","array"],dependencies:["excludedAjaxCallsRegex"],onDependencyUpdate:updateConfigRegex},excludeWebPages:{type:["string","array"],dependencies:["excludedWebTxns"],onDependencyUpdate:function(value){return value}},excludedWebTxns:{type:["string","array"],dependencies:["excludedWebTxnsRegex"],onDependencyUpdate:updateConfigRegex},excludeResources:{type:["string","array"],onUpdate:function(value){s247ResourcesModule.ignoreResources(value)}},userId:{onUpdate:function(value){try{value&&(insightRUMInstance.uid=String(value))}catch(e){}}},addBreadCrumbs:{onUpdate:function(value){value&&(value=100<value.length?value.substring(0,100):value,insightRUMInstance.colHelpers.addUserTrace(insightRUMInstance,"custom",value))}},trackConsoleEvents:{onUpdate:function(value){value&&insightRUMInstance.eventHandlers.console()}},trackCrossDomainAjaxCalls:{onUpdate:function(value){insightRUMInstance.includeCrossDomainAjaxCalls=value}},trackTransactionsWithQueryParams:{onUpdate:function(value){value&&(insightRUMInstance.includeQueryParams=!0)}},trackAsynchronousCallbacks:{onUpdate:function(value){value&&"undefined"!=typeof TraceKit&&TraceKit.extendToAsynchronousCallbacks()}},trackEvents:{type:["object","boolean"]},injectTraceHeader:{type:["object","boolean"]},recordingSamplingRate:{onUpdate:function(value){insightRUMInstance.sessionReplaySamplingRate=value}},recordSession:{onDependencyUpdate:function(value){return value},onUpdate:function(value){var sesInfo;config.recordSession||(sesInfo=insightRUMInstance.metricsCollector.sessionInfo(insightRUMInstance),value&&sesInfo.replay_allowed&&(config.recordSession=!0,s247RUM._recorderModule&&!s247RUM._recorderModule.isStub?s247RUM._recorderModule.init(insightRUMInstance):function(){try{return"undefined"==typeof Proxy?!1:"undefined"!=typeof Promise&&"undefined"!=typeof Symbol&&"undefined"!=typeof MutationObserver&&"undefined"!=typeof WeakMap}catch(e){return!1}}()&&!s247RUM.__recorderLoading__&&(s247RUM.__recorderLoading__=!0,value=document.createElement("script"),sesInfo="undefined"!=typeof s247RUM&&s247RUM.staticURL?s247RUM.staticURL:"https://static.site24x7rum.com",value.src=sesInfo+"/beacon/site24x7rum-record-min.js",value.onload=function(){s247RUM.__recorderLoading__=!1,s247RUM._recorderModule&&!s247RUM._recorderModule.isStub&&s247RUM._recorderModule.init(insightRUMInstance)},value.onerror=function(){s247RUM.__recorderLoading__=!1},document.head.appendChild(value))))}},captureAllWaterfalls:{type:["object","boolean"],onUpdate:function(value){value&&(s247ResourcesModule.samplingRate(1),insightRUMInstance.captureAllWaterfallsResources=!0)}},waterfallsSamplingRate:{onUpdate:function(value){s247ResourcesModule.samplingRate(value)}},environment:{onUpdate:function(value){"string"==typeof value&&value.length<=100?insightRUMInstance.environment=value:insightRUMInstance.environment=""}},proxyUrl:{onUpdate:function(value){if("string"==typeof value)try{var parsed;"undefined"!=typeof URL?"http:"===(parsed=new URL(value)).protocol||"https:"===parsed.protocol?insightRUMInstance.proxyUrl=value:insightRUMInstance.proxyUrl="":/^https?:\/\//i.test(value)?insightRUMInstance.proxyUrl=value:insightRUMInstance.proxyUrl=""}catch(e){insightRUMInstance.proxyUrl=""}else insightRUMInstance.proxyUrl=""}},release:{onUpdate:function(value){"string"==typeof value&&value.length<=100?insightRUMInstance.release=value:insightRUMInstance.release=""}},maxSessionDuration:{onUpdate:function(value){"number"==typeof value&&!isNaN(value)&&value<=36e5?insightRUMInstance.maxSessionDuration=value:insightRUMInstance.maxSessionDuration=s247CommonModule.CONSTANTS.MAX_SESSION_TIME}},flushMetrics:{onUpdate:function(){insightRUMInstance.metricsDispatcher(insightRUMInstance,insightRUMInstance.initialSent?"regular":"initial")}},captureException:{onUpdate:function(value){value instanceof Error||value instanceof Event||"undefined"==typeof TraceKit||TraceKit.report(value)}},endCurrentSession:{onUpdate:function(){sessionStorage.removeItem("s247rum_uid"),insightRUMInstance.metricsDispatcher(insightRUMInstance,insightRUMInstance.initialSent?"regular":"initial");var sesInfo=insightRUMInstance.colHelpers.getCookie(insightRUMInstance,"site24x7rumID"),ns=insightRUMInstance.isSPA?s247CommonModule.getCurrentMillis():performance.timing.navigationStart,ns=sesInfo.guid+".0."+ns+sesInfo.replay_allowed?"1":"0";insightRUMInstance.colHelpers.setCookie(insightRUMInstance,"site24x7rumID",ns,365)}},exemptKeywords:{onUpdate:function(value){insightRUMInstance.exemptedKeywords=new RegExp(value.replace(/,/g,"|"))}},addEvent:{onUpdate:function(value){insightRUMInstance.colHelpers.addEvents(insightRUMInstance,void 0,"custom",value)}}},updateDependencies=function(keyOrObject,value){if(configSchema[keyOrObject].dependencies)for(var dependencies=configSchema[keyOrObject].dependencies,i=0;i<dependencies.length;i++){var dependencyKey=dependencies[i];configSchema[keyOrObject].hasOwnProperty("onDependencyUpdate")&&setConfig(dependencyKey,configSchema[keyOrObject].onDependencyUpdate(value))}},setConfig=function(keyOrObject,value){if("object"==typeof keyOrObject)for(var key in keyOrObject)keyOrObject.hasOwnProperty(key)&&setConfig(key,keyOrObject[key]);else if("object"==typeof value&&-1!==objectValueAllowedKeys.indexOf(keyOrObject)){for(var key in value)value.hasOwnProperty(key)&&setConfig(key,value[key]);configSchema[keyOrObject]&&(configSchema[keyOrObject].onUpdate&&("recordSession"==keyOrObject?(disableRumRecording=null!=value.disableRumRecording&&value.disableRumRecording,configSchema[keyOrObject].onUpdate(!disableRumRecording)):configSchema[keyOrObject].onUpdate(value)),updateDependencies(keyOrObject,value))}else{var disableRumRecording,valueType;"string"==typeof keyOrObject&&config.hasOwnProperty(keyOrObject)&&(disableRumRecording=configSchema[keyOrObject]&&configSchema[keyOrObject].type?configSchema[keyOrObject].type:[],valueType=Array.isArray(value)?"array":typeof value,(Array.isArray(config[keyOrObject])?"array":typeof config[keyOrObject])!=valueType&&-1===disableRumRecording.indexOf(valueType)||(insightRUMInstance[keyOrObject]=value,config[keyOrObject]=value,configSchema&&configSchema[keyOrObject]&&(updateDependencies(keyOrObject,value),configSchema[keyOrObject].onUpdate)&&configSchema[keyOrObject].onUpdate(value)))}};return configManager.setConfig=setConfig,configManager.getConfig=function(key){if(config.hasOwnProperty(key))return config[key]},configManager.processQueue=function(queue,insightRum){if(insightRum&&(insightRUMInstance=insightRum),Array.isArray(queue))for(var i=0;i<queue.length;i++)setConfig(queue[i][0],queue[i][1])},configManager}();
var s247WebvitalsModule=function(){function initHiddenTime(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0}function addChangeListeners(){addEventListener("visibilitychange",onVisibilityUpdate,!0),addEventListener("prerenderingchange",onVisibilityUpdate,!0)}function removeChangeListeners(){removeEventListener("visibilitychange",onVisibilityUpdate,!0),removeEventListener("prerenderingchange",onVisibilityUpdate,!0)}function onCLS(onReport,opts){opts=opts||{},onFCP(runOnce(function(){function handleEntries(entries){entries.forEach(function(entry){var firstSessionEntry,lastSessionEntry;entry.hadRecentInput||(firstSessionEntry=sessionEntries[0],lastSessionEntry=sessionEntries[sessionEntries.length-1],sessionValue&&entry.startTime-lastSessionEntry.startTime<1e3&&entry.startTime-firstSessionEntry.startTime<5e3?(sessionValue+=entry.value,sessionEntries.push(entry)):(sessionValue=entry.value,sessionEntries=[entry]))}),sessionValue>metric.value&&(metric.value=sessionValue,metric.entries=sessionEntries,report())}var report,metric=initMetric("CLS",0),sessionValue=0,sessionEntries=[],po=observe("layout-shift",handleEntries);po&&(report=bindReporter(onReport,metric,CLSThresholds,opts.reportAllChanges),onHidden(function(){handleEntries(po.takeRecords()),report(!0)}),onBFCacheRestore(function(){metric=initMetric("CLS",sessionValue=0),report=bindReporter(onReport,metric,CLSThresholds,opts.reportAllChanges),doubleRAF(function(){return report()})}),setTimeout(report,0))}))}function recordFirstInputDelay(delay,event){firstInputEvent||(firstInputEvent=event,firstInputDelay=delay,firstInputTimeStamp=new Date,eachEventType(removeEventListener),reportFirstInputDelayIfRecordedAndValid())}function reportFirstInputDelayIfRecordedAndValid(){var entry;0<=firstInputDelay&&firstInputDelay<firstInputTimeStamp-startTimeStamp&&(entry={entryType:"first-input",name:firstInputEvent.type,target:firstInputEvent.target,cancelable:firstInputEvent.cancelable,startTime:firstInputEvent.timeStamp,processingStart:firstInputEvent.timeStamp+firstInputDelay},callbacks.forEach(function(callback){callback(entry)}),callbacks=[])}function eachEventType(callback){["mousedown","keydown","touchstart","pointerdown"].forEach(function(type){return callback(type,onInput,listenerOpts)})}function onFID(onReport,opts){opts=opts||{},whenActivated(function(){function handleEntries(entries){entries.forEach(handleEntry)}var visibilityWatcher=getVisibilityWatcher(),metric=initMetric("FID"),handleEntry=function(entry){entry.startTime<visibilityWatcher.firstHiddenTime&&(metric.value=entry.processingStart-entry.startTime,metric.entries.push(entry),report(!0))},po=observe("first-input",handleEntries),report=bindReporter(onReport,metric,FIDThresholds,opts.reportAllChanges);po&&onHidden(runOnce(function(){handleEntries(po.takeRecords()),po.disconnect()})),po&&onBFCacheRestore(function(){metric=initMetric("FID"),report=bindReporter(onReport,metric,FIDThresholds,opts.reportAllChanges),resetFirstInputPolyfill(),firstInputPolyfill(handleEntry)})})}function updateEstimate(entries){entries.forEach(function(e){e.interactionId&&(minKnownInteractionId=Math.min(minKnownInteractionId,e.interactionId),maxKnownInteractionId=Math.max(maxKnownInteractionId,e.interactionId),interactionCountEstimate=maxKnownInteractionId?(maxKnownInteractionId-minKnownInteractionId)/7+1:0)})}function onINP(onReport,opts){opts=opts||{},whenActivated(function(){initInteractionCountPolyfill();function handleEntries(entries){entries.forEach(function(entry){entry.interactionId&&processEntry(entry),"first-input"!==entry.entryType||longestInteractionList.some(function(interaction){return interaction.entries.some(function(prevEntry){return entry.duration===prevEntry.duration&&entry.startTime===prevEntry.startTime})})||processEntry(entry)}),(entries=estimateP98LongestInteraction())&&entries.latency!==metric.value&&(metric.value=entries.latency,metric.entries=entries.entries,report())}var metric=initMetric("INP"),po=observe("event",handleEntries,{durationThreshold:opts.durationThreshold||40}),report=bindReporter(onReport,metric,INPThresholds,opts.reportAllChanges);po&&("interactionId"in PerformanceEventTiming.prototype&&po.observe({type:"first-input",buffered:!0}),onHidden(function(){handleEntries(po.takeRecords()),metric.value<0&&0<getInteractionCountForNavigation()&&(metric.value=0,metric.entries=[]),report(!0)}),onBFCacheRestore(function(){longestInteractionList=[],prevInteractionCount=getInteractionCount(),metric=initMetric("INP"),report=bindReporter(onReport,metric,INPThresholds,opts.reportAllChanges)}))})}function onLCP(onReport,opts){opts=opts||{},whenActivated(function(){function handleEntries(entries){(entries=entries[entries.length-1])&&entries.startTime<visibilityWatcher.firstHiddenTime&&(metric.value=Math.max(entries.startTime-getActivationStart(),0),metric.entries=[entries],report())}var report,stopListening,visibilityWatcher=getVisibilityWatcher(),metric=initMetric("LCP"),po=observe("largest-contentful-paint",handleEntries);po&&(report=bindReporter(onReport,metric,LCPThresholds,opts.reportAllChanges),stopListening=runOnce(function(){reportedMetricIDs[metric.id]||(handleEntries(po.takeRecords()),po.disconnect(),reportedMetricIDs[metric.id]=!0,report(!0))}),["keydown","click"].forEach(function(type){addEventListener(type,stopListening,!0)}),onHidden(stopListening),onBFCacheRestore(function(event){metric=initMetric("LCP"),report=bindReporter(onReport,metric,LCPThresholds,opts.reportAllChanges),doubleRAF(function(){metric.value=performance.now()-event.timeStamp,reportedMetricIDs[metric.id]=!0,report(!0)})}))})}function addToWcvDataObject(metric){var largestEntry,largestSource;metric.entries.length&&(wcvDataObject[metric.name]={},wcvDataObject[metric.name].value=metric.value,"CLS"===metric.name?(largestEntry=getLargestLayoutShiftEntry(metric.entries))&&largestEntry.sources&&largestEntry.sources.length&&(largestSource=getLargestLayoutShiftSource(largestEntry.sources))&&(wcvDataObject[metric.name].element=s247CommonModule.getSelector(largestSource.node,150),wcvDataObject[metric.name].event_time=largestEntry.startTime):"LCP"===metric.name?(largestSource=getLCPDebugTarget(metric.entries),wcvDataObject[metric.name].element=150<largestSource.debug_target.length?largestSource.debug_target.substring(0,150):largestSource.debug_target,wcvDataObject[metric.name].event_time=largestSource.event_time):"FID"===metric.name?(largestEntry=metric.entries[0],wcvDataObject[metric.name].element=s247CommonModule.getSelector(largestEntry.target,150),wcvDataObject[metric.name].event=largestEntry.name,wcvDataObject[metric.name].event_time=largestEntry.startTime):"INP"===metric.name&&(largestSource=getLongestEntryINP(metric.entries),wcvDataObject[metric.name].element=s247CommonModule.getSelector(largestSource.target,150),wcvDataObject[metric.name].event_time=largestSource.startTime))}var firstInputEvent,firstInputDelay,firstInputTimeStamp,callbacks,po,wcvDataObject,bfcacheRestoreTime=-1,onBFCacheRestore=function(cb){addEventListener("pageshow",function(event){event.persisted&&(bfcacheRestoreTime=event.timeStamp,cb(event))},!0)},getNavigationEntry=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},getActivationStart=function(){var navEntry=getNavigationEntry();return navEntry&&navEntry.activationStart||0},initMetric=function(name,value){var navEntry=getNavigationEntry(),navigationType="navigate";0<=bfcacheRestoreTime?navigationType="back-forward-cache":navEntry&&(document.prerendering||0<getActivationStart()?navigationType="prerender":document.wasDiscarded?navigationType="restore":navEntry.type&&(navigationType=navEntry.type.replace(/_/g,"-")));return{name:name,value:void 0===value?-1:value,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(Math.random()*(9e12-1))+1e12),navigationType:navigationType}},observe=function(type,callback,opts){try{var po;if(-1!==PerformanceObserver.supportedEntryTypes.indexOf(type))return(po=new PerformanceObserver(function(list){Promise.resolve().then(function(){callback(list.getEntries())})})).observe(Object.assign({type:type,buffered:!0},opts||{})),po}catch(e){}},bindReporter=function(callback,metric,thresholds,reportAllChanges){var prevValue,delta;return function(forceReport){0<=metric.value&&(!forceReport&&!reportAllChanges||!(delta=metric.value-(prevValue||0))&&void 0!==prevValue||(prevValue=metric.value,metric.delta=delta,metric.rating=function(value,thresholds){return value>thresholds[1]?"poor":value>thresholds[0]?"needs-improvement":"good"}(metric.value,thresholds),callback(metric)))}},doubleRAF=function(cb){requestAnimationFrame(function(){return requestAnimationFrame(function(){return cb()})})},onHidden=function(cb){function onHiddenOrPageHide(event){"pagehide"!==event.type&&"hidden"!==document.visibilityState||cb(event)}addEventListener("visibilitychange",onHiddenOrPageHide,!0),addEventListener("pagehide",onHiddenOrPageHide,!0)},runOnce=function(cb){var called=!1;return function(arg){called||(cb(arg),called=!0)}},firstHiddenTime=-1,onVisibilityUpdate=function(event){"hidden"===document.visibilityState&&-1<firstHiddenTime&&(firstHiddenTime="visibilitychange"===event.type?event.timeStamp:0,removeChangeListeners())},getVisibilityWatcher=function(){return firstHiddenTime<0&&(firstHiddenTime=initHiddenTime(),addChangeListeners(),onBFCacheRestore(function(){setTimeout(function(){firstHiddenTime=initHiddenTime(),addChangeListeners()},0)})),{get firstHiddenTime(){return firstHiddenTime}}},whenActivated=function(callback){document.prerendering?addEventListener("prerenderingchange",function(){return callback()},!0):callback()},FCPThresholds=[1800,3e3],onFCP=function(onReport,opts){opts=opts||{},whenActivated(function(){var report,visibilityWatcher=getVisibilityWatcher(),metric=initMetric("FCP"),po=observe("paint",function(entries){entries.forEach(function(entry){"first-contentful-paint"===entry.name&&(po.disconnect(),entry.startTime<visibilityWatcher.firstHiddenTime)&&(metric.value=Math.max(entry.startTime-getActivationStart(),0),metric.entries.push(entry),report(!0))})});po&&(report=bindReporter(onReport,metric,FCPThresholds,opts.reportAllChanges),onBFCacheRestore(function(event){metric=initMetric("FCP"),report=bindReporter(onReport,metric,FCPThresholds,opts.reportAllChanges),doubleRAF(function(){metric.value=performance.now()-event.timeStamp,report(!0)})}))})},CLSThresholds=[.1,.25],listenerOpts={passive:!0,capture:!0},startTimeStamp=new Date,firstInputPolyfill=function(onFirstInput){callbacks.push(onFirstInput),reportFirstInputDelayIfRecordedAndValid()},resetFirstInputPolyfill=function(){callbacks=[],firstInputDelay=-1,firstInputEvent=null,eachEventType(addEventListener)},onInput=function(event){var delay;event.cancelable&&(delay=(1e12<event.timeStamp?new Date:performance.now())-event.timeStamp,("pointerdown"==event.type?function(delay,event){function removePointerEventListeners(){removeEventListener("pointerup",onPointerUp,listenerOpts),removeEventListener("pointercancel",onPointerCancel,listenerOpts)}var onPointerUp=function(){recordFirstInputDelay(delay,event),removePointerEventListeners()},onPointerCancel=function(){removePointerEventListeners()};addEventListener("pointerup",onPointerUp,listenerOpts),addEventListener("pointercancel",onPointerCancel,listenerOpts)}:recordFirstInputDelay)(delay,event))},FIDThresholds=[100,300],interactionCountEstimate=0,minKnownInteractionId=1/0,maxKnownInteractionId=0,getInteractionCount=function(){return po?interactionCountEstimate:performance.interactionCount||0},initInteractionCountPolyfill=function(){"interactionCount"in performance||(po=po||observe("event",updateEstimate,{type:"event",buffered:!0,durationThreshold:0}))},INPThresholds=[200,500],prevInteractionCount=0,getInteractionCountForNavigation=function(){return getInteractionCount()-prevInteractionCount},longestInteractionList=[],longestInteractionMap={},processEntry=function(entry){var minLongestInteraction=longestInteractionList[longestInteractionList.length-1],existingInteraction=longestInteractionMap[entry.interactionId];(existingInteraction||longestInteractionList.length<10||entry.duration>minLongestInteraction.latency)&&(existingInteraction?(existingInteraction.entries.push(entry),existingInteraction.latency=Math.max(existingInteraction.latency,entry.duration)):(minLongestInteraction={id:entry.interactionId,latency:entry.duration,entries:[entry]},longestInteractionMap[minLongestInteraction.id]=minLongestInteraction,longestInteractionList.push(minLongestInteraction)),longestInteractionList.sort(function(a,b){return b.latency-a.latency}),longestInteractionList.splice(10).forEach(function(i){delete longestInteractionMap[i.id]}))},estimateP98LongestInteraction=function(){var candidateInteractionIndex=Math.min(longestInteractionList.length-1,Math.floor(getInteractionCountForNavigation()/50));return longestInteractionList[candidateInteractionIndex]},LCPThresholds=[2500,4e3],reportedMetricIDs={},TTFBThresholds=[800,1800],whenReady=function whenReady(callback){document.prerendering?whenActivated(function(){return whenReady(callback)}):"complete"!==document.readyState?addEventListener("load",function(){return whenReady(callback)},!0):setTimeout(callback,0)},getLCPDebugTarget=function(entries){entries=entries[entries.length-1];return{debug_target:s247CommonModule.getSelector(entries.element),event_time:entries.startTime}},getLargestLayoutShiftEntry=function(entries){return entries.reduce(function(a,b){return a&&a.value>b.value?a:b})},getLargestLayoutShiftSource=function(sources){return sources.reduce(function(a,b){return a.node&&a.previousRect.width*a.previousRect.height>b.previousRect.width*b.previousRect.height?a:b})},getLongestEntryINP=function(entries){return entries.sort(function(a,b){return b.duration-a.duration||b.processingEnd-b.processingStart-(a.processingEnd-a.processingStart)})[0]},currentUrl=""!=window.location.hash?window.location.hash.replace("#",""):window.location.pathname;return{init:function(){var onReport,opts,metric,report;wcvDataObject={txnName:insightRUM.colHelpers.getFormatedTxnName(insightRUM,currentUrl)},onCLS(addToWcvDataObject),onFID(addToWcvDataObject),onLCP(addToWcvDataObject),onFCP(addToWcvDataObject),onReport=addToWcvDataObject,opts=opts||{},metric=initMetric("TTFB"),report=bindReporter(onReport,metric,TTFBThresholds,opts.reportAllChanges),whenReady(function(){var responseStart,navEntry=getNavigationEntry();!navEntry||(responseStart=navEntry.responseStart)<=0||responseStart>performance.now()||(metric.value=Math.max(responseStart-getActivationStart(),0),metric.entries=[navEntry],report(!0),onBFCacheRestore(function(){metric=initMetric("TTFB",0),(report=bindReporter(onReport,metric,TTFBThresholds,opts.reportAllChanges))(!0)}))}),onINP(addToWcvDataObject)},flushWcvData:function(insightRUM){try{var metrics;0<Object.keys(wcvDataObject).length&&(wcvDataObject.txnName?(wcvDataObject.txnName,delete wcvDataObject.txnName):insightRUM.colHelpers.getTxn(insightRUM,document.location.pathname),metrics={wcvList:wcvDataObject,sessionInfo:insightRUM.metricsCollector.sessionInfo(insightRUM),configInfo:insightRUM.metricsCollector.configInfo(insightRUM),fullName:insightRUM.colHelpers.getFormatedTxnName(insightRUM,insightRUM.includeQueryParams?document.location.pathname+document.location.search+document.location.hash:document.location.pathname+document.location.hash,!1),txnName:insightRUM.colHelpers.getFormatedTxnName(insightRUM,insightRUM.includeQueryParams?document.location.pathname+document.location.search+document.location.hash:document.location.pathname+document.location.hash),domain:window.location.origin||"-"},insightRUM.dispatchMetrics(insightRUM,insightRUM.collector+"/rum/wcv",JSON.stringify(metrics)))}catch(e){}finally{wcvDataObject={}}}}}();
var s247ResourcesModule=function(){var CAPTURE_RESOURCES,currentDomain,lastCapturedResourcesIndex,STRING_LENGTH_RESTRICTED_KEYS=["name","domain","res_type","domain_type","initiator","extension"],MAX_STRING_LEN=100,MAX_RESOURCES_ALLOWED=1e3,SAMPLING_RATE=.05,IGNORED_RESOURCES=["static","col"];function isCacheHit(resource){return!(0<resource.transferSize)&&(0<resource.decodedBodySize||resource.duration<30)}return{collect:function(sessionId,type){if("initial"==type&&(CAPTURE_RESOURCES=Math.random()<SAMPLING_RATE),void 0!==window.performance.setResourceTimingBufferSize&&CAPTURE_RESOURCES&&MAX_RESOURCES_ALLOWED)return window.performance.setResourceTimingBufferSize(500),function(sessionId){var processeddata=[];try{var data=window.performance.getEntriesByType("resource"),resourcesToBeTracked=data.slice(lastCapturedResourcesIndex,data.length);lastCapturedResourcesIndex=data.length,resourcesToBeTracked.forEach(function(eachRes){if(-1==eachRes.name.indexOf(insightRUM.collector)){var urlFragments,isRequest=0===eachRes.name.indexOf("http");if(resourceName=eachRes.name,!IGNORED_RESOURCES.some(function(ignoredRegex){return resourceName.match(ignoredRegex)})){var isRequest=isRequest?(isRequest=(urlFragments=eachRes.name.match(/:\/\/(.[^/]+)([^?]*)\??(.*)/))[2].split("/").pop()).substr((Math.max(0,isRequest.lastIndexOf("."))||1/0)+1):(urlFragments=["",location.host],eachRes.name.split(":")[0]),eachProcessedRes={name:function(name,domain){domain=name.substring(name.indexOf(domain)+domain.length,name.length);domain.length>MAX_STRING_LEN&&(name=(domain=domain.substring(domain.length-MAX_STRING_LEN,domain.length)).indexOf("/"),domain=domain.substring(name,domain.length));return domain}(eachRes.name,urlFragments[1]),domain:urlFragments[1],session_id:sessionId,ct:(new Date).getTime(),initiator:eachRes.initiatorType||isRequest||"SourceMap or Not Defined",extension:isRequest||"XHR or Not Defined",duration:eachRes.duration,res_type:function(fileExtension,initiatorType){if(fileExtension)switch(fileExtension){case"jpg":case"jpeg":case"png":case"gif":case"webp":case"svg":case"ico":return"image";case"mp3":case"wav":case"aac":case"flac":return"audio";case"mp4":case"avi":case"mov":case"mkv":case"flv":case"wmv":case"webm":return"video";case"js":return"js";case"css":return"css";case"html":return"html";case"woff":case"woff2":case"ttf":case"eot":case"otf":return"font";case"swf":return"flash";case"map":return"source-map"}if(initiatorType)switch(initiatorType){case"xmlhttprequest":return"ajax";case"fetch":return"fetch";case"beacon":return"beacon";case"img":case"image":return"image";case"script":return"js";case"internal":case"iframe":return"html";default:return"other"}return initiatorType}(isRequest,eachRes.initiatorType),domain_type:function(name){currentDomain||!function(){var currentUrlMatches=window.location.href.match(s247CommonModule.CONSTANTS.HOST_NAME_REGEX);currentUrlMatches&&currentUrlMatches[2]&&(currentDomain=currentUrlMatches[2])}();var name=name.match(s247CommonModule.CONSTANTS.HOST_NAME_REGEX),type="first";{var domain;name&&name[2]&&(domain=name[2],type=domain===currentDomain?"first":s247CommonModule.CONSTANTS.DEFAULT_CDN_DOMAINS.some(function(cdnDomain){return-1!==domain.indexOf(cdnDomain)})||-1!==domain.indexOf("cdn")?"cdn":"third")}return type}(eachRes.name),fullname:eachRes.name.substring(0,s247CommonModule.CONSTANTS.MAX_EVENTS_METRIC_LENGTH),start_time:eachRes.startTime,cross_domain:urlFragments[1]!==location.host,status:function(entry){if(entry&&entry.responseStatus)return entry.responseStatus;if(entry){if(function(resource){return 0<resource.transferSize&&resource.transferSize<1e3&&0===resource.decodedBodySize}(entry))return 304;if(isCacheHit(entry))return 200}return 0}(eachRes),cached:isCacheHit(eachRes),size:eachRes.encodedBodySize,ratio:eachRes.decodedBodySize/eachRes.encodedBodySize};eachRes.requestStart&&(eachProcessedRes.blocked=function(resource){var blockingTime=0;resource.connectEnd&&resource.connectEnd===resource.fetchStart?blockingTime=resource.requestStart-resource.connectEnd:resource.domainLookupStart&&(blockingTime=resource.domainLookupStart-resource.fetchStart);return blockingTime}(eachRes),eachProcessedRes.dnsT=eachRes.domainLookupEnd-eachRes.domainLookupStart,eachProcessedRes.conT=eachRes.connectEnd-eachRes.connectStart,eachProcessedRes.fbT=eachRes.responseStart-eachRes.requestStart,eachProcessedRes.dlT=eachRes.responseEnd-eachRes.responseStart,eachProcessedRes.totalRT=Math.max(0,eachRes.responseEnd-eachRes.requestStart)),eachRes.secureConnectionStart&&(eachProcessedRes.sslT=eachRes.connectEnd-eachRes.secureConnectionStart),"XHR or Not Defined"==eachProcessedRes.extension?(s247CommonModule.eventIdObj[eachProcessedRes.fullname]?null==(isRequest=s247CommonModule.getClosestStartTime(s247CommonModule.eventIdObj[eachProcessedRes.fullname],eachProcessedRes.start_time,"resource"))?(eachProcessedRes.link=s247CommonModule.simpleHash(eachProcessedRes.fullname)+"_"+Math.round(eachProcessedRes.start_time),s247CommonModule.eventIdObj[eachProcessedRes.fullname].push({txnName:eachProcessedRes.fullname,st:Math.round(eachProcessedRes.start_time),ct:(new Date).getTime(),source:"resource"})):eachProcessedRes.link=s247CommonModule.simpleHash(isRequest.txnName)+"_"+Math.round(isRequest.st):(eachProcessedRes.link=s247CommonModule.simpleHash(eachProcessedRes.fullname)+"_"+Math.round(eachProcessedRes.start_time),s247CommonModule.eventIdObj[eachProcessedRes.fullname]=[{txnName:eachProcessedRes.fullname,st:Math.round(eachProcessedRes.start_time),ct:(new Date).getTime(),source:"resource"}]),s247CommonModule.eventIdObj=s247CommonModule.deleteLongLastingEvents(s247CommonModule.eventIdObj)):eachProcessedRes.link=s247CommonModule.simpleHash(eachProcessedRes.fullname)+"_"+Math.round(eachProcessedRes.start_time);for(var i=0;i<STRING_LENGTH_RESTRICTED_KEYS.length;i++)eachProcessedRes[STRING_LENGTH_RESTRICTED_KEYS[i]]&&eachProcessedRes[STRING_LENGTH_RESTRICTED_KEYS[i]].length>MAX_STRING_LEN&&(eachProcessedRes[STRING_LENGTH_RESTRICTED_KEYS[i]]=eachProcessedRes[STRING_LENGTH_RESTRICTED_KEYS[i]].substr(0,MAX_STRING_LEN));processeddata.push(eachProcessedRes),MAX_RESOURCES_ALLOWED--}}var resourceName})}catch(e){}return processeddata}(sessionId)},samplingRate:function(samplingRate){SAMPLING_RATE=samplingRate||SAMPLING_RATE},ignoreResources:function(resources){IGNORED_RESOURCES=IGNORED_RESOURCES.concat(resources)}}}();
function site24x7RumObjectEquals(x,y){if(x!==y){if(!(x instanceof Object&&y instanceof Object))return!1;if(x.constructor!==y.constructor)return!1;for(var p in x)if(x.hasOwnProperty(p)){if(!y.hasOwnProperty(p))return!1;if(x[p]!==y[p]){if("object"!=typeof x[p])return!1;if(!site24x7RumObjectEquals(x[p],y[p]))return!1}}for(p in y)if(y.hasOwnProperty(p)&&!x.hasOwnProperty(p))return!1}return!0}function site24x7RumError(config){var lastPercentIndex;"string"==typeof(config=config||{}).name&&(this.type=config.name),"string"==typeof config.message&&(config.message=config.message.replace(/"/g,"'"),config.message=encodeURIComponent(config.message),this.msg=500<config.message.length?config.message.substring(0,500):config.message,197<(lastPercentIndex=this.msg.lastIndexOf("%")))&&(this.msg=this.msg.substring(0,lastPercentIndex)),"string"==typeof config.fname&&(this.fname=100<config.fname.length?config.fname.substring(0,100):config.fname),"number"!=typeof config.lineNumber&&"string"!=typeof config.lineNumber||(this.lno=parseInt(config.lineNumber,10)),"number"!=typeof config.columnNumber&&"string"!=typeof config.columnNumber||(this.cno=parseInt(config.columnNumber,10)),void 0!==config.stack?this.trace=19<config.stack.length?config.stack.splice(0,19):config.stack:this.trace=[],void 0!==config.usertrace?this.usertrace=config.usertrace:this.usertrace=insightRUM.userTrace,void 0!==config.page&&(this.page=config.page),void 0!==config.fullpage&&(this.fullpage=150<config.fullpage.length?config.fullpage.substring(0,150):config.fullpage),void 0!==config.colTime&&(this.ct=config.colTime),void 0!==config.url?this.url=150<config.url.length?config.url.substring(0,149):config.url:this.url=document.location.pathname}!function(window){var TraceKit,_oldTraceKit,_slice,ERROR_TYPES_RE,_oldOnerrorHandler,_onErrorHandlerInstalled,_oldOnunhandledrejectionHandler,_onUnhandledRejectionHandlerInstalled,handlers,lastException,lastExceptionStack,debug,sourceCache;function _has(object,key){return Object.prototype.hasOwnProperty.call(object,key)}function notifyHandlers(stack,isWindowError,error){var exception=null;if(!isWindowError||TraceKit.collectWindowErrors){for(var i in handlers)if(_has(handlers,i))try{handlers[i](stack,isWindowError,error)}catch(inner){exception=inner}if(exception)throw exception}}function traceKitWindowOnError(message,url,lineNo,columnNo,errorObj){var location,name,msg,groups;return lastExceptionStack?(TraceKit.computeStackTrace.augmentStackTraceWithInitialElement(lastExceptionStack,url,lineNo,message),processLastException()):errorObj?notifyHandlers(TraceKit.computeStackTrace(errorObj),!0,errorObj):(location={url:url,line:lineNo,column:columnNo},"[object String]"==={}.toString.call(msg=message)&&(groups=message.match(ERROR_TYPES_RE))&&(name=groups[1],msg=groups[2]),location.func=TraceKit.computeStackTrace.guessFunctionName(location.url,location.line),location.context=TraceKit.computeStackTrace.gatherContext(location.url,location.line),notifyHandlers({name:name,message:msg,mode:"onerror",stack:[location]},!0,null)),!!_oldOnerrorHandler&&_oldOnerrorHandler.apply(this,arguments)}function traceKitWindowOnUnhandledRejection(e){notifyHandlers(TraceKit.computeStackTrace(e.reason),!0,e.reason)}function processLastException(){var _lastExceptionStack=lastExceptionStack,_lastException=lastException;lastException=lastExceptionStack=null,notifyHandlers(_lastExceptionStack,!1,_lastException)}function report(ex){if(lastExceptionStack){if(lastException===ex)return;processLastException()}var stack=TraceKit.computeStackTrace(ex);throw lastExceptionStack=stack,lastException=ex,setTimeout(function(){lastException===ex&&processLastException()},stack.incomplete?2e3:0),ex}function getSource(url){if("string"!=typeof url)return[];if(!_has(sourceCache,url)){var source="",domain="";try{domain=window.document.domain}catch(e){}var match=/(.*):\/\/([^:/]+)([:\d]*)\/{0,1}([\s\S]*)/.exec(url);match&&match[2]===domain&&(source="string"!=typeof url?[]:""),sourceCache[url]=source?source.split("\n"):[]}return sourceCache[url]}function guessFunctionName(url,lineNo){var m,reFunctionArgNames=/function ([^(]*)\(([^)]*)\)/,reGuessFunction=/['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,line="",source=getSource(url);if(source.length)for(var i=0;i<10;++i)if(void 0!==(line=source[lineNo-i]+line)){if(m=reGuessFunction.exec(line))return m[1];if(m=reFunctionArgNames.exec(line))return m[1]}return"?"}function gatherContext(url,line){var source=getSource(url);if(!source.length)return null;var context=[],url=Math.floor(TraceKit.linesOfContext/2),linesAfter=url+TraceKit.linesOfContext%2,url=Math.max(0,line-url-1),end=Math.min(source.length,line+linesAfter-1);--line;for(var i=url;i<end;++i)void 0!==source[i]&&context.push(source[i]);return 0<context.length?context:null}function escapeRegExp(text){return text.replace(/[-[\]{}()*+?.,\\^$|#]/g,"\\$&")}function escapeCodeAsRegExpForMatchingInsideHTML(body){return escapeRegExp(body).replace("<","(?:<|&lt;)").replace(">","(?:>|&gt;)").replace("&","(?:&|&amp;)").replace('"','(?:"|&quot;)').replace(/\s+/g,"\\s+")}function findSourceInUrls(re,urls){for(var source,m,i=0,j=urls.length;i<j;++i)if((source=getSource(urls[i])).length&&(source=source.join("\n"),m=re.exec(source)))return{url:urls[i],line:source.substring(0,m.index).split("\n").length,column:m.index-source.lastIndexOf("\n",m.index)-1};return null}function findSourceInLine(fragment,url,line){var url=getSource(url),fragment=new RegExp("\\b"+escapeRegExp(fragment)+"\\b");return--line,url&&url.length>line&&(fragment=fragment.exec(url[line]))?fragment.index:null}function computeStackTraceFromStackProp(ex){if(!ex.stack)return null;for(var submatch,parts,chrome=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,gecko=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,winjs=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,geckoEval=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,chromeEval=/\((\S*)(?::(\d+))(?::(\d+))\)/,lines=ex.stack.split("\n"),stack=[],reference=/^(.*) is undefined$/.exec(ex.message),i=0,j=lines.length;i<j;++i){if(parts=chrome.exec(lines[i])){var isNative=parts[2]&&0===parts[2].indexOf("native");parts[2]&&0===parts[2].indexOf("eval")&&(submatch=chromeEval.exec(parts[2]))&&(parts[2]=submatch[1],parts[3]=submatch[2],parts[4]=submatch[3]),isNative={url:isNative?null:parts[2],func:parts[1]||"?",args:isNative?[parts[2]]:[],line:parts[3]?+parts[3]:null,column:parts[4]?+parts[4]:null}}else if(parts=winjs.exec(lines[i]))isNative={url:parts[2],func:parts[1]||"?",args:[],line:+parts[3],column:parts[4]?+parts[4]:null};else{if(!(parts=gecko.exec(lines[i])))continue;parts[3]&&-1<parts[3].indexOf(" > eval")&&(submatch=geckoEval.exec(parts[3]))?(parts[3]=submatch[1],parts[4]=submatch[2],parts[5]=null):0!==i||parts[5]||void 0===ex.columnNumber||(stack[0].column=ex.columnNumber+1),isNative={url:parts[3],func:parts[1]||"?",args:parts[2]?parts[2].split(","):[],line:parts[4]?+parts[4]:null,column:parts[5]?+parts[5]:null}}!isNative.func&&isNative.line&&(isNative.func=guessFunctionName(isNative.url,isNative.line)),isNative.context=isNative.line?gatherContext(isNative.url,isNative.line):null,stack.push(isNative)}return stack.length?(stack[0]&&stack[0].line&&!stack[0].column&&reference&&(stack[0].column=findSourceInLine(reference[1],stack[0].url,stack[0].line)),{mode:"stack",name:ex.name,message:ex.message,stack:stack}):null}function augmentStackTraceWithInitialElement(stackInfo,url,lineNo,message){url={url:url,line:lineNo};if(url.url&&url.line){stackInfo.incomplete=!1,url.func||(url.func=guessFunctionName(url.url,url.line)),url.context||(url.context=gatherContext(url.url,url.line));lineNo=/ '([^']+)' /.exec(message);if(lineNo&&(url.column=findSourceInLine(lineNo[1],url.url,url.line)),0<stackInfo.stack.length&&stackInfo.stack[0].url===url.url){if(stackInfo.stack[0].line===url.line)return!1;if(!stackInfo.stack[0].line&&stackInfo.stack[0].func===url.func)return stackInfo.stack[0].line=url.line,stackInfo.stack[0].context=url.context,!1}return stackInfo.stack.unshift(url),stackInfo.partial=!0}return!(stackInfo.incomplete=!0)}function computeStackTraceByWalkingCallerChain(ex,depth){for(var parts,item,source,reference,functionName=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,stack=[],funcs={},recursion=!1,curr=computeStackTraceByWalkingCallerChain.caller;curr&&!recursion;curr=curr.caller)if(curr!==computeStackTrace&&curr!==TraceKit.report){if(item={url:null,func:"?",args:[],line:null,column:null},curr.name?item.func=curr.name:(parts=functionName.exec(curr.toString()))&&(item.func=parts[1]),void 0===item.func)try{item.func=parts.input.substring(0,parts.input.indexOf("{"))}catch(e){}(source=function(func){if(void 0!==(window&&window.document)){for(var parts,name,body,urls=[window.location.href],scripts=window.document.getElementsByTagName("script"),func=""+func,i=0;i<scripts.length;++i){var script=scripts[i];script.src&&urls.push(script.src)}if(name=findSourceInUrls((parts=/^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/.exec(func))?(name=parts[1]?"\\s+"+parts[1]:"",args=parts[2].split(",").join("\\s*,\\s*"),body=escapeRegExp(parts[3]).replace(/;$/,";?"),new RegExp("function"+name+"\\s*\\(\\s*"+args+"\\s*\\)\\s*{\\s*"+body+"\\s*}")):new RegExp(escapeRegExp(func).replace(/\s+/g,"\\s+")),urls))return name;if(parts=/^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/.exec(func)){var args=parts[1];if(body=escapeCodeAsRegExpForMatchingInsideHTML(parts[2]),name=findSourceInUrls(new RegExp("on"+args+"=[\\'\"]\\s*"+body+"\\s*[\\'\"]","i"),urls[0]))return name;if(name=findSourceInUrls(new RegExp(body),urls))return name}return null}}(curr))&&(item.url=source.url,item.line=source.line,"?"===item.func&&(item.func=guessFunctionName(item.url,item.line)),reference=/ '([^']+)' /.exec(ex.message||ex.description))&&(item.column=findSourceInLine(reference[1],source.url,source.line)),funcs[""+curr]?recursion=!0:funcs[""+curr]=!0,stack.push(item)}depth&&stack.splice(0,depth);depth={mode:"callers",name:ex.name,message:ex.message,stack:stack};return augmentStackTraceWithInitialElement(depth,ex.sourceURL||ex.fileName,ex.line||ex.lineNumber,ex.message||ex.description),depth}function computeStackTrace(ex,depth){var stack=null;depth=null==depth?0:+depth;try{if(stack=function(ex){var stacktrace=ex.stacktrace;if(stacktrace){for(var parts,opera10Regex=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,opera11Regex=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i,lines=stacktrace.split("\n"),stack=[],line=0;line<lines.length;line+=2){var element=null;if((parts=opera10Regex.exec(lines[line]))?element={url:parts[2],line:+parts[1],column:null,func:parts[3],args:[]}:(parts=opera11Regex.exec(lines[line]))&&(element={url:parts[6],line:+parts[1],column:+parts[2],func:parts[3]||parts[4],args:parts[5]?parts[5].split(","):[]}),element){if(!element.func&&element.line&&(element.func=guessFunctionName(element.url,element.line)),element.line)try{element.context=gatherContext(element.url,element.line)}catch(exc){}element.context||(element.context=[lines[line+1]]),stack.push(element)}}return stack.length?{mode:"stacktrace",name:ex.name,message:ex.message,stack:stack}:null}}(ex))return stack}catch(e){if(debug)throw e}try{if(stack=computeStackTraceFromStackProp(ex))return stack}catch(e){if(debug)throw e}try{if(stack=function(ex){var lines=ex.message.split("\n");if(lines.length<4)return null;var s,lineRE1=/^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,lineRE2=/^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,lineRE3=/^\s*Line (\d+) of function script\s*$/i,stack=[],scripts=window&&window.document&&window.document.getElementsByTagName("script"),inlineScriptBlocks=[];for(s in scripts)_has(scripts,s)&&!scripts[s].src&&inlineScriptBlocks.push(scripts[s]);for(var line=2;line<lines.length;line+=2){var relativeLine,source,script,parts,item=null;(parts=lineRE1.exec(lines[line]))?item={url:parts[2],func:parts[3],args:[],line:+parts[1],column:null}:(parts=lineRE2.exec(lines[line]))?(item={url:parts[3],func:parts[4],args:[],line:+parts[1],column:null},relativeLine=+parts[1],(script=inlineScriptBlocks[parts[2]-1])&&(source=getSource(item.url))&&0<=(script=(source=source.join("\n")).indexOf(script.innerText))&&(item.line=relativeLine+source.substring(0,script).split("\n").length)):(parts=lineRE3.exec(lines[line]))&&(item={url:relativeLine=window.location.href.replace(/#.*$/,""),func:"",args:[],line:(source=findSourceInUrls(new RegExp(escapeCodeAsRegExpForMatchingInsideHTML(lines[line+1])),[relativeLine]))?source.line:parts[1],column:null}),item&&(item.func||(item.func=guessFunctionName(item.url,item.line)),parts=(script=gatherContext(item.url,item.line))?script[Math.floor(script.length/2)]:null,script&&parts.replace(/^\s*/,"")===lines[line+1].replace(/^\s*/,"")?item.context=script:item.context=[lines[line+1]],stack.push(item))}return stack.length?{mode:"multiline",name:ex.name,message:lines[0],stack:stack}:null}(ex))return stack}catch(e){if(debug)throw e}try{if(stack=computeStackTraceByWalkingCallerChain(ex,depth+1))return stack}catch(e){if(debug)throw e}return{name:ex.name,message:ex.message,mode:"failed"}}window&&(TraceKit={},_oldTraceKit=window.TraceKit,_slice=[].slice,ERROR_TYPES_RE=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/,TraceKit.noConflict=function(){return window.TraceKit=_oldTraceKit,TraceKit},TraceKit.wrap=function(func){return function(){try{return func.apply(this,arguments)}catch(e){throw TraceKit.report(e),e}}},TraceKit.report=(handlers=[],lastExceptionStack=lastException=null,report.subscribe=function(handler){!0!==_onErrorHandlerInstalled&&(_oldOnerrorHandler=window.onerror,window.onerror=traceKitWindowOnError,_onErrorHandlerInstalled=!0),!0!==_onUnhandledRejectionHandlerInstalled&&(_oldOnunhandledrejectionHandler=window.onunhandledrejection,window.onunhandledrejection=traceKitWindowOnUnhandledRejection,_onUnhandledRejectionHandlerInstalled=!0),handlers.push(handler)},report.unsubscribe=function(handler){for(var i=handlers.length-1;0<=i;--i)handlers[i]===handler&&handlers.splice(i,1);0===handlers.length&&(_onErrorHandlerInstalled&&(window.onerror=_oldOnerrorHandler,_onErrorHandlerInstalled=!1),_onUnhandledRejectionHandlerInstalled)&&(window.onunhandledrejection=_oldOnunhandledrejectionHandler,_onUnhandledRejectionHandlerInstalled=!1)},report),TraceKit.computeStackTrace=(debug=!1,sourceCache={},computeStackTrace.augmentStackTraceWithInitialElement=augmentStackTraceWithInitialElement,computeStackTrace.computeStackTraceFromStackProp=computeStackTraceFromStackProp,computeStackTrace.guessFunctionName=guessFunctionName,computeStackTrace.gatherContext=gatherContext,computeStackTrace.ofCaller=function(depth){depth=1+(null==depth?0:+depth);try{throw new Error}catch(ex){return computeStackTrace(ex,depth+1)}},computeStackTrace.getSource=getSource,computeStackTrace),TraceKit.extendToAsynchronousCallbacks=function(){function _helper(fnName){var originalFn=window[fnName];window[fnName]=function(){var args=_slice.call(arguments),originalCallback=args[0];return"function"==typeof originalCallback&&(args[0]=TraceKit.wrap(originalCallback)),originalFn.apply?originalFn.apply(this,args):originalFn(args[0],args[1])}}_helper("setTimeout"),_helper("setInterval")},TraceKit.remoteFetching||(TraceKit.remoteFetching=!0),TraceKit.collectWindowErrors||(TraceKit.collectWindowErrors=!0),(!TraceKit.linesOfContext||TraceKit.linesOfContext<1)&&(TraceKit.linesOfContext=11),window.TraceKit=TraceKit)}(window),site24x7RumError.prototype.equals=function(otherError){return"object"==typeof otherError&&this.msg===otherError.msg&&this.fname===otherError.fname&&this.lno===otherError.lno&&this.cno===otherError.cno&&!!site24x7RumObjectEquals(this.trace,otherError.trace)&&this.type===otherError.type},site24x7RumError.subscribeToTraceKitError=function(errorData){var errTxnName,url;errorData.name&&(Array.isArray(errorData.stack)&&0<errorData.stack.length&&(errorData.functionName=errorData.stack[0].func,(url=null==errorData.stack[0].url?"?":"object"==typeof errorData.stack[0].url?null!=errorData.stack[0].url.ajax?errorData.stack[0].url.ajax:"?":errorData.stack[0].url)&&void 0!==url&&""!=url||(url=document.location.pathname,errorData.stack[0].url=url),url&&"string"==typeof url&&(errTxnName="<anonymous>"!=url?insightRUM.colHelpers.getErrTxnName(insightRUM,url):url,errorData.url=url,errorData.fname=insightRUM.colHelpers.getFileName(insightRUM,errTxnName)),(!errorData.fname||errorData.fname.length<=0)&&(errorData.fname=insightRUM.colHelpers.getFileName(insightRUM,location.hash)),errorData.stack.forEach(function(stack){stack.url="<anonymous>"!=stack.url?stack.url:"anonymous",stack.fname=insightRUM.colHelpers.getFileName(insightRUM,stack.url),stack.line&&(stack.lineno=stack.line),delete stack.line,stack.column&&(stack.colno=stack.column),delete stack.column,delete stack.args,delete stack.context})),!errorData.fname&&(errorData.fname=insightRUM.colHelpers.getFileName(insightRUM,location.hash),!errorData.fname||errorData.fname.length<1)&&(errorData.fname="unknown file"),errorData.page=insightRUM?insightRUM.colHelpers.getTxn(insightRUM):document.location.origin,errorData.fullpage=insightRUM.includeQueryParams?window.location.href:window.location.href.split("?")[0],errorData.colTime=(new Date).getTime(),errorData=new site24x7RumError(errorData),0<(url=insightRUM.rawErrors.length)&&!errorData.equals(insightRUM.rawErrors[url-1])||0==url)&&(insightRUM.rawErrors.push(errorData),insightRUM.colHelpers.addEvents(insightRUM,void 0,"error",errorData.msg))},TraceKit.report.subscribe(site24x7RumError.subscribeToTraceKitError);
/*global s247RUM,XDomainRequest,site24x7rumProp,site24x7rum,TraceKit,rumMOKey*/
/*eslint no-unused-vars: ["error", { "vars": "local" }]*/
/* eslint no-empty: ["error", { "allowEmptyCatch": true }] */

/*site24x7rum 
beacon Ver 3.1*/

var insightRUM = {
    colHelpers: {
        getFileName: function(i, f) {
            if(f && (typeof f != "string")){
                f = f.ajax ? f.ajax : "-";
            }
            return (f && f != '') ? f.substr((f.lastIndexOf("/") + 1), f.length) : "";
        },

        addSPAEvents: function(a) {
            return a == true ? ["onpushstate", "onreplacestate", "onpopstate"] : ["onhashchange"]; //No I18N
        },
        
        getSpaRouteKey: function(i, loc) {
            var key;
            if(loc.hash.indexOf("#") > -1) {
                key = loc.hash;
                if(!i.includeQueryParams){
                    if(key.indexOf('?') > -1){
                        key = key.substr(0, key.indexOf('?'));
                    }
                }
            } else {
                key = loc.pathname;
                if(!i.includeQueryParams){
                    if(key.indexOf('?') > -1){
                        key = key.substr(0, key.indexOf('?'));
                    }
                }
            }
            return key;
        },

        pushRoutes: function(i, loc, perfTime) {
            if (typeof site24x7rum != 'undefined' && typeof site24x7rum.routeChanges != 'undefined') {
                var routechange = {};
                routechange.time = perfTime;
                routechange.url = i.colHelpers.getSpaRouteKey(i, loc);
                if (i.userTrace) {
                    i.colHelpers.addUserTrace(i, "load", routechange.url); //No I18N
                }
                i.spaLoadEvents[routechange.url] = [window.location.href,s247CommonModule.getCurrentMillis()];
                site24x7rum.routeChanges.push(routechange);
                // i.storeLastAjax('spa'); //No I18N

                // following check for sending analytics data
                if (i.isSPA && typeof window.insightPARUM != 'undefined') {
                    window.insightPARUM.run();
                }
            }
        },

        getCurrentTime: function() {

            if ("now" in window.performance == false) {
                return (s247CommonModule.getCurrentMillis() - window.performance.timing.navigationStart);
            } else {
                return Math.round(window.performance.now());
            }
        },

        getCurrentUrl: function(i){
            var currentUrl = i.colHelpers.getSimpleUrl(i);
            currentUrl = i.colHelpers.getFormatedTxnName(i,currentUrl)
            return currentUrl;
        },

        getErrTxnName: function(i, txn) {
            var tn, tsi = txn ? txn.indexOf(document.location.origin) > -1 ? document.location.origin.length : 0 : 0;
            tn = txn ? txn.substr(tsi, txn.indexOf('?') > -1 ? txn.indexOf('?') - tsi : txn.length) : document.location.pathname;
            tn = (tn.indexOf('https') > -1 || tn.indexOf('http') > -1) ? tn.replace(/(http|https):\/\//, '') : tn;
            return tn;
        },

        addUserTrace: function(i, event, msg) {
            msg = encodeURI(msg);
            msg = msg.length > 150 ? msg.substring(0, 150) : msg;
            var lastPercentIndex = msg.lastIndexOf('%');
            if (lastPercentIndex > 147) {
                msg = msg.substring(0, lastPercentIndex - 1);
            }
            i.userTrace.push({
                action: event,
                name: msg,
                timestamp: s247CommonModule.getCurrentMillis()
            });
            i.userTrace = i.userTrace.slice(Math.max(i.userTrace.length - 10, 0));
        },

        addToSession: function(i, n, t, dt, s, e) {
            var sE = {};
            sE.nm = n;
            sE[t] = dt;
            sE.st = Math.round(s);
            sE.et = Math.round((typeof e != "undefined") ? e : i.colHelpers.getCurrentTime()); //No I18N
            var ev = (n == "scroll" || n == "typing") ? n : "",prev; // No I18N
            if (!!i.userTrace && t == "event") {
                var origin = dt.or;
                prev = i.userTrace.length > 0 ? i.userTrace[i.userTrace.length - 1] : {};
                if (!(prev.action && prev.action == ev && prev.name && prev.name == origin)) {
                    i.colHelpers.addUserTrace(i, n, dt.or)
                }
            }
            if (typeof site24x7rum != "undefined" && typeof site24x7rum.sessionTrace != "undefined") {
                if (site24x7rum.sessionTrace.length > 0 && site24x7rum.sessionTrace[site24x7rum.sessionTrace.length - 1].nm == ev) {
                    prev = site24x7rum.sessionTrace.pop();
                    prev.et = sE.et;
                    site24x7rum.sessionTrace.push(prev);
                } else {
                    site24x7rum.sessionTrace.push(sE);
                }
            }
        },

        addAjaxToSession: function(i, name, type, d, st) {

            if (window.performance.getEntriesByName) {
                var e = window.performance.getEntriesByName(name);
            }
            if (e && e.length > 0) {
                var j = i.xhrCallTracker.hasOwnProperty(name) ? i.xhrCallTracker[name] : 0;
                if (j >= e.length) { j = 0; }
                if (e[j].duration) {
                    e[j].loadEventEnd = e[j].fetchStart + e[j].duration;
                    var perf = i.colHelpers.getPerfStats(i, e[j], true);
                    i.colHelpers.addToSession(i, i.colHelpers.getFormatedTxnName(i, name), type, d, st, (st + perf.totalRT));
                }
            }
        },

        getObjAsArray: function(o) {
            var arr = new Array();
            for (var key in o) {
                if (o.hasOwnProperty(key)) {
                    var obj = o[key];
                    obj.loadTime = Math.round(obj.loadTime / obj.count);
                    arr.push(obj);
                }
            }
            return arr;

        },

        getAsArray: function(o, l, p) {
            var ret = Object.keys(o).sort(function(a, b) {
                return o[b][p] - o[a][p]
            });
            var arr = new Array();
            for (var j = 0; j < ret.length; j++) {
                if (o.hasOwnProperty(ret[j])) {
                    var obj = o[ret[j]];
                    arr.push(obj);
                }
            }
            return arr.slice(0, l);
        },

        getTabId: function(){
            var tabId = sessionStorage.getItem('s247TabId'); //No I18N
            if (!tabId) {
                tabId = s247CommonModule.simpleHash(s247CommonModule.getCurrentMillis().toString());
                sessionStorage.setItem('s247TabId', tabId); //No I18N
            }
            return tabId;
        },

        getPerfStats: function(i, pe, isAjax) {
            if (typeof pe != "undefined") {
                var responseStart = !pe.responseStart || pe.responseStart <= 0 ? pe.fetchStart : pe.responseStart,
                    requestStart = pe.requestStart == 0 ? pe.fetchStart : pe.requestStart,
                    tsi = pe.name ? pe.name.indexOf(document.location.origin) > -1 ? document.location.origin.length : 0 : 0,
                    mD = {};

                mD.txnName = pe.name ? pe.name.substr(tsi, pe.name.indexOf('?') > -1 ? pe.name.indexOf('?') - tsi : pe.name.length) : document.location.pathname;
                if (isAjax) {
                    // For AJAX calls, use the AJAX URL's own query params
                    var resourceQueryParams = '';
                    if (pe.name && pe.name.indexOf('?') > -1) {
                        resourceQueryParams = pe.name.substr(pe.name.indexOf('?'));
                    }
                    mD.txnName = i.colHelpers.getFormatedTxnName(i, i.includeQueryParams ? mD.txnName + resourceQueryParams : mD.txnName);
                    mD.fullName = i.colHelpers.getFormatedTxnName(i, i.includeQueryParams ? mD.txnName + resourceQueryParams : mD.txnName, false);
                } else {
                    // mD.fullName =
                    // i.colHelpers.getFormatedTxnName(i,i.includeQueryParams?mD.txnName+document.location.search:mD.txnName,false);
                    mD.txnName = i.colHelpers.getFormatedTxnName(i, i.includeQueryParams ? mD.txnName + document.location.search+ document.location.hash: mD.txnName +document.location.hash);
                    mD.fullName = pe.name ? pe.name.substr(tsi, pe.name.indexOf('?') > -1 ? pe.name.indexOf('?') - tsi : pe.name.length) : i.isSPA ? document.location.pathname + document.location.hash : document.location.pathname;
                    mD.fullName = i.colHelpers.getFormatedTxnName(i, i.includeQueryParams ? mD.fullName + document.location.search : mD.fullName, false);
                }
                mD.rdT = Math.max(Math.round((pe.fetchStart > 0 && (pe.domainLookupStart - pe.fetchStart) > 0) ? (pe.domainLookupStart - pe.fetchStart) : (pe.redirectEnd - pe.redirectStart)), 0); // redirection
                // time
                mD.acT = Math.round( (pe.fetchStart > 0 && (pe.domainLookupStart - pe.fetchStart) > 0) ? (pe.domainLookupStart - pe.fetchStart) : 0 ); // App Cache Time
                mD.dnsT = Math.max(Math.round(pe.domainLookupEnd - pe.domainLookupStart), 0); // dns
                // time
                mD.conT = Math.max(Math.round((pe.connectStart > 0 && (requestStart - pe.connectStart) > 0) ? (requestStart - pe.connectStart) : (pe.connectEnd - pe.connectStart)), 0); // connection
                // time
                mD.beT = Math.max(Math.round(responseStart - requestStart), 0); // back
                // end
                // time
                mD.dlT = (responseStart > 0 && (pe.responseEnd - responseStart) > 0) ? Math.round(pe.responseEnd - responseStart) : 0; // download
                // time
                mD.nwT = Math.round(mD.rdT + mD.dnsT + mD.conT + mD.dlT); // NetWork
                // time
                mD.fbT = (pe.responseStart > 0 && pe.fetchStart > 0) ? Math.round(pe.responseStart - pe.fetchStart) : Math.round(mD.beT + mD.nwT - mD.dlT); // first
                mD.fbT = Math.max(mD.fbT, 0);
                // byte
                // time
                var dtion = mD.beT + mD.nwT - mD.dlT - mD.fbT;
                if (Math.abs(dtion) < 5) {
                    mD.fbT += dtion;
                }
                if (pe.domComplete && pe.domLoading) {
                    mD.dpT = Math.max(Math.round(pe.domComplete - pe.domLoading), 0); // doc
                    // processing
                    // time
                    mD.prT = Math.round(pe.loadEventEnd > 0 && pe.loadEventStart > 0 ? pe.loadEventEnd - pe.loadEventStart : 0); // page
                    // rendering
                    // time
                } else {
                    mD.dpT = mD.prT = 0;
                }
                mD.drT = Math.round(mD.dpT); // doc rendering time
                mD.feT = mD.drT + mD.prT; // front End time
                var rt = mD.nwT + mD.beT + mD.feT;
                mD.totalRT = rt < mD.fbT ? mD.fbT : rt; // due to rounding
                // error;
                return mD;
            }

        },

        addToResInfo: function(i, a) {
            var m = a.name.match(s247CommonModule.CONSTANTS.HOST_NAME_REGEX);
            var nm = (!a.initiatorType || s247CommonModule.CONSTANTS.INITIATOR_TYPES.toString().indexOf(a.initiatorType) == -1) ? 'Others' : a.initiatorType; //No I18N
            var res = i.colHelpers.getPerfStats(i, a);
            if (m && m[2]) {
                i.domainInfo[m[2]] = {
                    count: i.domainInfo[m[2]] ? i.domainInfo[m[2]].count + 1 : 1,
                    loadTime: i.domainInfo[m[2]] ? i.domainInfo[m[2]].loadTime + res.totalRT : res.totalRT,
                    name: m[2]
                }
            }
            i.resourcesTotal[nm] = {
                loadTime: (i.resourcesTotal[nm] ? i.resourcesTotal[nm].loadTime : 0) + res.totalRT,
                count: (i.resourcesTotal[nm] ? i.resourcesTotal[nm].count : 0) + 1,
                name: nm
            }
        },

        getRawTxn: function(i, url) {
            var l = window.location;
            var n = "";
            if ("undefined" != typeof url) {
                n = url.substr(0, url.indexOf('?') > -1 ? url.indexOf('?') - 0 : url.length);
            } else if (l.pathname && "undefined" != typeof l.hash) {
                n = l.pathname;
            }
            if (i.includeQueryParams) { n += document.location.search; }
            if (s247RUM.beaconType == 0 && i.includeQueryParams) { n += document.location.hash; }
            if (s247RUM.beaconType == 1) { n += document.location.hash; }
            return n;
        },

        getTxn: function(i, url) {
            var n = i.colHelpers.getRawTxn(i, url);
            n = i.colHelpers.getObfuscatedTxnName(i,n);
            return n.length > 150 ? n.substring(0, 149) : n;
        },

        getDomainFromTxn: function(i, txn) {
            if (typeof txn != "undefined") {
                var matches = txn.match(s247CommonModule.CONSTANTS.HOST_NAME_REGEX);
                if (matches && matches[2]) {
                    return matches[2];
                }
            }
            return null;
        },

        getFormatedTxnName: function(i, name, obfuscate) {
                    if (typeof name != "undefined") {
                        if(typeof s247RUM !== "undefined" && s247RUM.beaconType==1 && !i.includeQueryParams){
                                if( name.indexOf('#') > -1){
                                    name = name.substr(name.indexOf('#'),name.length);
                                    if(name.indexOf('?') > -1){
                                        name = name.substr(name.indexOf('#'),name.indexOf('?'));
                                    }
                                }
                                else{
                                    name = name.substr(0, name.indexOf('?') > -1 ? name.indexOf('?') : name.length);
                                }
                        }
                        var txn = typeof obfuscate == "undefined" ? i.colHelpers.getObfuscatedTxnName(i, name) : name; //No I18N

                        if (s247RUM.beaconType==0 &&!i.includeQueryParams) {
                            txn = txn.substr(0, txn.indexOf('?') > -1 ? txn.indexOf('?') - 0 : txn.length);
                            txn = txn.substr(0, txn.indexOf('&') > -1 ? txn.indexOf('&') - 0 : txn.length);
                            txn = typeof obfuscate == "undefined" ? txn.substr(0, txn.indexOf('#') > -1 ? txn.indexOf('#') - 0 : txn.length) : txn; //No I18N
                        }
                        if (txn.length > 1 && txn.charAt(txn.length - 1) == '/') { //No I18N
                            txn = txn.substring(0, txn.length - 1);
                        }
                        // encoding txn name
                        txn = encodeURI(txn);
                        txn = txn.length > 150 ? txn.substring(0, 150) : txn;
                        var lastPercentIndex = txn.lastIndexOf('%');
                        if (lastPercentIndex > 147) {
                            txn = txn.substring(0, lastPercentIndex - 1);
                        }
                        return txn;
                    }
                },


        getObfuscatedTxnName: function(i, name) {
            var replacement = name;
            if (typeof name != "undefined") {
                var paths = name.split('/');
                var total = paths.length;
                var isFirstWordInPath = true;
                if (name.startsWith("/")) {
                    total--;
                }
                if (name.endsWith("/")) {
                    total--;
                }
                var identifiers = function(name) {
                    var re = i.customWebPageGrouping || /\/([^\\/$]*[0-9]+[^\\/$]*)/g;
                    return ((name || '').match(re) || []).length
                }
                var words = total > identifiers(name) ? true : false;
                //check for fullWebTxnGrouping custom api
                if(i.customFullWebPageGrouping){
                    return i.colHelpers.getFullObfuscatedTxnName(i, name, paths, words);
                }
                paths.forEach(function(path) {
                    if (path.length > 0) {
                        var hasWebTxnsGroupingRegex = i.customWebPageGrouping!=undefined;
                        if (!isFirstWordInPath && ((hasWebTxnsGroupingRegex && ('/'+path).match(i.customWebPageGrouping)) || (!hasWebTxnsGroupingRegex && path.match(/.*\d/g)))) {
                            if (!words) {
                                words = true;
                            }else if (i.exemptedKeywords && path.match(i.exemptedKeywords)) {
                                return;
                            } else {
                                replacement = replacement.replace(path, "*");
                            }
                        }
                        if(isFirstWordInPath){
                            isFirstWordInPath = false;
                        }
                    }
                })
            }
            return replacement;
        },

        getFullObfuscatedTxnName: function(i, name, paths, words) {
            if (typeof name != "undefined" && paths!=undefined) {
                var replacement = "";
                var isFirstWordInPath = true;
                for(var index=0;index<paths.length;index++){
                    var path = paths[index];
                    if (path.length > 0) {
                        var hasFullWebTxnsGroupingRegex = i.customFullWebPageGrouping!=undefined;
                        if (!isFirstWordInPath && ((hasFullWebTxnsGroupingRegex && ('/'+path).match(i.customFullWebPageGrouping)) || (!hasFullWebTxnsGroupingRegex && path.match(/.*\d/g)))) {
                            if (!words) {
                                words = true;
                            }else if (!i.exemptedKeywords || !path.match(i.exemptedKeywords)) {
                                replacement += "/*";
                                break;
                            }
                        }
                        replacement += ("/"+path);
                        if(isFirstWordInPath){
                            isFirstWordInPath = false;
                        }
                    }
                }
            }
            return replacement!=""?replacement:name;
        },

        addPerfStats: function(i, pe1, pe2, params) {
            var metricData = {};
            for (var j = 0; j < params.length; j++) {
                metricData[params[j]] = pe1[params[j]] + pe2[params[j]];
            }
            if (!!pe1.totalCT && !!pe2.totalCT) {
                metricData.totalCT = pe1.totalCT + pe2.totalCT;
            }
            if (!!pe1.status && !!pe2.status) {
                metricData.status = i.colHelpers.addStatusCode(pe1.status, pe2.status);
            }
            return metricData;
        },

        getAverageStats: function(metricData, len, params) {
            for (var i = 0; i < params.length; i++) {
                metricData[params[i]] = Math.round(metricData[params[i]] / len);
            }
            return metricData;
        },

        getPerfObject: function() {
            var p = {};
            p.rdT = p.acT = p.dnsT = p.conT = p.nwT = p.sendT = p.fbT = p.beT = p.dlT = p.dpT = p.drT = p.prT = p.feT = p.totalRT = 0;
            return p;

        },

        getSimpleUrl: function(i) {
            if(!i.isSPA){
                return window.location.pathname+window.location.search+window.location.hash;

            }
            else{
                return window.location.hash!=""?window.location.search+window.location.hash:window.location.pathname + window.location.search;
            }
        },

        isDomainAllowed: function(i, pDomain) {
            for (var d = 0; d < i.excludedDomains.length; d++) {
                if (i.excludedDomains[d] != "" && pDomain.indexOf(i.excludedDomains[d]) >= 0) {
                    return false;
                }
            }
            return true;
        },

        startInteraction: function(i, event, type) {
            if(!i.trackEvents && !i.injectTraceHeader) {
                return
            };
            try {
                var target = event.target || event.srcElement;
                if(!target) {
                    return
                };
                // For typing, debounce: if active interaction is typing on the same element, just extend max timer
                if(type === 'typing' && i.activeInteraction && i.activeInteraction.type === 'typing' && i.activeInteraction.target === s247CommonModule.getSelector(target)){
                    return;
                }
                // Finalize any existing interaction
                if(i.activeInteraction){
                    i.colHelpers.finalizeInteraction(i);
                }
                var sid = i.getRandomId(8);
                var selector = s247CommonModule.getSelector(target);
                var customName = target.getAttribute ? target.getAttribute('s247-custom-name') : null;
                var buttonText = target.innerText || target.textContent || '';
                var name = customName || (buttonText.length > 0 ? buttonText.substring(0, 50) : null);
                var now = s247CommonModule.getCurrentMillis();
                i.activeInteraction = {
                    sid: sid,
                    type: type,
                    target: selector,
                    name: name,
                    s_time: now,
                    e_time: now,
                    network_count: 0,
                    vid: i.currentViewId,
                    psid: i.currentSpanId,
                    // event.timeStamp is the high-resolution time (DOMHighResTimeStamp) of the original DOM event.
                    // Stored here so the Event Timing PerformanceObserver can correlate its entries back to this
                    // interaction by comparing entry.startTime ? eventTimeStamp (within EVENT_TIMING_MATCH_THRESHOLD).
                    eventTimeStamp: event.timeStamp || 0,
                    // Will be populated by the Event Timing PerformanceObserver with the browser-measured duration
                    // (input delay + event handler processing + presentation/rendering to next paint).
                    // Remains 0 in browsers that don't support the Event Timing API (e.g. IE11, older Safari).
                    eventTimingDuration: 0
                };
                i.interactionMaxTimer = setTimeout(function(){ i.colHelpers.finalizeInteraction(i); }, s247CommonModule.CONSTANTS.INTERACTION_MAX_TIMEOUT);
            } catch(e) {}
        },

        extendInteraction: function(i, endTimeEpoch) {
            if(!i.trackEvents || !i.activeInteraction){
                return;
            }
            i.activeInteraction.network_count++;
            i.activeInteraction.e_time = Math.max(i.activeInteraction.e_time, endTimeEpoch);
        },

        finalizeInteraction: function(i) {
            if(!i.activeInteraction){
                return;
            }
            clearTimeout(i.interactionMaxTimer);
            i.interactionMaxTimer = null;
            if(i.finalizedInteractions.length >= s247CommonModule.CONSTANTS.MAX_FINALIZED_INTERACTIONS){
                i.finalizedInteractions = i.finalizedInteractions.slice(-Math.floor(s247CommonModule.CONSTANTS.MAX_FINALIZED_INTERACTIONS / 2));
            }
            i.finalizedInteractions.push(i.activeInteraction);
            i.activeInteraction = null;
        },

        isHeaderInjectionAllowed: function(i, url){
            if(i.injectTraceHeader && url.indexOf(insightRUM.collector) == -1){
                var matches = document.location.host.match(/^(?:www\.)?([^/:?#]+)(?:[/:?#]|$)/i);
                var parentDomain = (matches && matches[1]) ? matches[1] : document.location.host;
                if( i.colHelpers.isAjaxCallAllowed(i, url) && ((url.indexOf(parentDomain) > -1 && i.sendAjaxCalls) || (url.indexOf(parentDomain) < 0 && i.includeCrossDomainAjaxCalls))){
                    return true;
                }
                return false;
            }
            return false
        },

        matchPattern: function(url, pattern) {
            if (!pattern || pattern === "") {
                return false;
            }
            // Handle actual RegExp objects directly
            if (pattern instanceof RegExp) {
                return pattern.test(url);
            }
            // Handle string patterns with /pattern/flags delimiter
            if (typeof pattern === 'string' && pattern.charAt(0) === '/' && pattern.lastIndexOf('/') > 0) {
                try {
                    var lastSlash = pattern.lastIndexOf('/');
                    return new RegExp(pattern.substring(1, lastSlash), pattern.substring(lastSlash + 1)).test(url);
                } catch(e) {}
            }
            return url.indexOf(pattern) !== -1;
        },

        isNetworkDetailsAllowed: function(i, url) {
            if(i.collectNetworkDetails && s247ConfigModule.getConfig("recordSession")){
                //Checking for excluded network urls which takes precedence over allowed network urls
                for (var k = 0; k < i.excludedNetworkUrls.length; k++) {
                    if (i.colHelpers.matchPattern(url, i.excludedNetworkUrls[k])) {
                        return false;
                    }
                }
                for (var m = 0; m < i.allowedNetworkUrls.length; m++) {
                    if (i.colHelpers.matchPattern(url, i.allowedNetworkUrls[m])) {
                        return true;
                    }
                }
                return false;
            }
        },
        startMutationObserver: function(i) {
            i.collectMutations = false;
            if (typeof i.observerV == "undefined") {
                i.observerV = new MutationObserver(function(e) {
                    i.lastMutation = s247CommonModule.getCurrentMillis();
                    // Skip SPA-specific logic for traditional apps
                    if (!i.isSPA) {
                        return;
                    }
                    e.forEach(function() {
                        var t = i.colHelpers.getCurrentTime();
                        var loc = i.colHelpers.getSimpleUrl(i);
                        var obj = {};
                        if (i.urls.mut != loc) {
                            i.collectMutations = true;
                            obj.url = loc;
                            obj.start = t;
                            i.colHelpers.spaController(i, obj, "dom", "start"); //No I18N
                            i.urls.mut = loc;
                            i.mutArray = [];
                        }
                        if (i.collectMutations || (!!i.nwkTracker[loc] && Math.abs(t - i.nwkTracker[loc].end) < 100)) {
                            if (i.mutArray) {
                                if (i.mutArray.length > 0 && t - i.mutArray[i.mutArray.length - 1] > 100 && i.urls.mut == loc) {
                                    loc = window.location;
                                    obj.url = loc.hash.indexOf("#") > -1 ? loc.hash.replace("#", "") : loc.pathname+loc.search;
                                    obj.end = i.mutArray[i.mutArray.length - 1];
                                    if ((!!i.nwkTracker[loc] && Math.abs(t - i.nwkTracker[loc].end) < 100)) {
                                        obj.end = t;
                                    }
                                    i.colHelpers.spaController(i, obj, "dom", "end"); //No I18N
                                    i.collectMutations = false;
                                } else if (i.urls.mut == loc) {
                                    i.spa.end = t;
                                    i.mutArray.push(t);
                                    if (i.mutArray.length > 5) {
                                        i.mutArray = i.mutArray.slice(-5);
                                    }
                                }
                            }
                        }

                    })
                });
                i.observerV.observe(document, {
                    childList: !0,
                    subtree: !0,
                    characterData: !0,
                    characterDataOldValue: !0
                })
            }
        },

        spaController: function(i, obs, type, prompt) {

            if (prompt == "start") {
                if (type == "dom") {
                    if (i.spa.state == "" || i.spa.state == obs.url) {
                        i.spa.state = obs.url;
                        i.spa.start = i.spa.start != 0 && obs.start > i.spa.start ? i.spa.start : obs.start;
                        i.spa.end = !!obs.end && obs.end > i.spa.start ? obs.end : i.spa.end;
                    } else {
                        if (i.spa.sent != i.spa.state) {
                            i.spa.sent = i.spa.state;
                            if (i.spa.state != "" && i.spa.start != 0 && i.spa.end != 0 && i.spa.end >= i.spa.start && i.spa.end < i.colHelpers.getCurrentTime()) {
                                var obj = {
                                    url: i.spa.state,
                                    start: i.spa.start,
                                    end: i.spa.end,
                                    href: window.location.href
                                };
                                i.spaTracker.push(obj);
                                i.storeLastAjax("spa"); // No I18N
                            }
                            i.spa.state = obs.url;
                            i.spa.start = obs.start;
                        }
                    }
                }
            } else if (prompt == "end") { // No I18N
                if (type == "dom" && i.spa.state != "" && i.spa.start > 0) {
                    i.spa.end = obs.end > i.spa.end ? obs.end : i.spa.end;
                }
            }
        },

        observeNetwork: function(i, o) {
            if (i.isSPA && !i.ignoreNetworkForSPA) {
                var loc = i.colHelpers.getSimpleUrl(i);
                if (i.urls.nwk != loc) {
                    i.urls.nwk = loc;
                    i.nwkTracker[loc] = {
                        start: o.st,
                        end: o.end
                    };
                    i.xhrt = i.nwkTracker[loc].end;
                } else if (!!i.xhrt && i.xhrt + 100 > o.st) {
                    var nst = i.nwkTracker[loc];
                    if (!!nst && !!nst.start && (nst.start < o.st || Math.abs(nst.start - o.st) < 100)) {
                        i.nwkTracker[loc].start = nst.start < o.st ? nst.start : o.st;
                        i.nwkTracker[loc].end = nst.end < o.end ? o.end : nst.end;
                    }
                }
            }
        },

        getSPTPerformance: function(i) {
            try {
                if (window.performance.getEntries) {
                    var m = Number(i.spa.resourceStart),
                        n = Number(i.colHelpers.getPerformanceEntriesLen());
                    var l = 0;
                    var aggregatedStats = i.colHelpers.getPerfObject();
                    for (; m < n; m++) {
                        var res = window.performance.getEntries()[m];
                        var resType = (!res.initiatorType || s247CommonModule.CONSTANTS.INITIATOR_TYPES.toString().indexOf(res.initiatorType) == -1) ? 'Others' : res.initiatorType; //No I18N
                        if (resType != "xmlhttprequest" && !!res.startTime && res.startTime > i.spa.start && res.startTime < i.spa.end) {
                            var rPerf = i.colHelpers.getPerfStats(i, res);
                            aggregatedStats = i.colHelpers.addPerfStats(i, rPerf, aggregatedStats, s247CommonModule.CONSTANTS.TIMING_METRICS);
                            l++;
                        }
                        if (res.startTime > i.spa.end) {
                            i.spa.resourceStart = m;
                            break;
                        }
                    }
                    return {
                        perfStats: aggregatedStats,
                        len: l
                    };
                }
                return null;

            } catch (e) {
                return null;
            }
        },

        resetSPA: function(i) {
            i.spa = {
                state: "",
                start: 0,
                end: 0,
                resourceStart: i.spa.resourceStart,
                nwkEnd: 0
            };
        },

        bootRUMSPA: function(i) {
            if (window.MutationObserver) {
                i.colHelpers.startMutationObserver(i);
            }
        },

        initialiseSPA: function(i, type) {
           if (window.MutationObserver && !i.isSPA) {
               i.colHelpers.startMutationObserver(i);
           }
            if (i.isSPA) {
                i.colHelpers.bootRUMSPA(i);
            }
            if (typeof window.site24x7rum == 'undefined') {
                window.site24x7rum = {};
            }
            site24x7rum.routeChanges = new Array();
            i.storeLastAjax(type);
            setInterval(function() {
                //Make sure to dispatch interactions and resources data before any other data so that they are collected in metricsDispatcher as part of trace data.
                if(!document.hidden){
                    i.dispatchWaterfall(i, "regular");// No I18N
                    i.colHelpers.finalizeInteraction(i);
                    i.dispatchInteractionsAsTrace(i);
                }
                i.metricsDispatcher(i, "regular"); // No I18N
                if(!document.hidden){
                    if(s247ConfigModule.getConfig("recordSession")){
                        i.dispatchRecordings(i,"regular");
                    }
                }
            }, s247CommonModule.CONSTANTS.PAYLOAD_DISPATCHER_INTERVAL);
        },

        getStatusCode: function(s) {
            var st = 'Others'; // No I18N
            if (s != null && s != '') {
                st = s.substring(0, 1);
                st = st != '0' ? st + 'xx' : '0';
            }
            return st;
        },

        addStatusCode: function(a, b) {
            var sa = Object.keys(a);
            var sb = Object.keys(b);
            var sObj = a,
                sts;
            while (sa[0]) {
                sts = sa.pop();
                var ind = sb.indexOf(sts);
                if (ind > -1) {
                    sObj[sts] += b[sts];
                    sb.splice(ind, 1);
                }
            }
            while (sb[0]) {
                sts = sb.pop();
                sObj[sts] = b[sts];
            }
            return sObj;
        },

        getUniqueID: function() {
            var nav = window.navigator;
            var screen = window.screen;
            var g = nav.mimeTypes.length;
            var n = nav.userAgent.replace(/\D+/g, '');
            g += n.length > 30 ? n.substring(0, 30) : n;
            g += nav.plugins.length;
            g += screen.height || '';
            g += screen.width || '';
            g += screen.pixelDepth || '';
            return g;
        },

        getClientID: function() {
            function chr() {
                return (Math.floor(Math.random() * 10000)).toString();
            }
            return chr() + chr() + chr() + chr();
        },

        getHost: function(location) {
            var matches = location.match(/^(https|http)?:\/\/(?:www\.)?([^/:?#]+)(?:[/:?#]|$)/i);
            return (typeof matches != "undefined" && matches[2]) ? matches[2] : null;
        },

        getPerformanceEntriesLen: function() {
            if (window.performance.getEntries) {
                return window.performance.getEntries().length;
            }
            return 0;
        },

        getDataMetrics: function(i, type) {
            try {
                var metrics = {};
                for (var key in i.metricsCollector) {
                    if (i.metricsCollector.hasOwnProperty(key) && key!="sessionInfo") {
                        var m = i.metricsCollector[key](i, type);
                        if (m != null) {
                            metrics[key] = m;
                        }
                    }
                }
                if(i.excludeModules && i.excludeModules.length > 0){
                    if(i.excludeModules.indexOf("events") > -1) {
                        metrics.eventsList = undefined;
                    }
                    if(i.excludeModules.indexOf("errors") > -1) {
                        metrics.errorList = undefined;
                    }
                }
                if (metrics.dataList != undefined || metrics.errorList != undefined || metrics.eventsList != undefined) {
                    metrics.sessionInfo = i.metricsCollector.sessionInfo(i, type);
                    return metrics;
                } else {
                    return null;
                }
            } catch (e) {
                return null;
            }
        },

        //Deprecated needs to be removed|refactored once the events changes are live.
        processEventDetails: function(i, event, type) {
            var target = "";
            if (event) {
                var e = event.target || event.srcElement;
                if (e) {
                    target = (e.tagName && e.tagName != "" ? e.tagName : "-") + "|" + (e.className && e.className != "" ? e.className : "-") + "|" + (e.id && e.id != "" ? e.id : "-");
                }
            }
            target = typeof target != "undefined" && target != "" && target != "-|-|-" ? target : "body"; //No I18N
            var data = {
                or: target
            };
            i.colHelpers.addToSession(i, type, "event", data, i.colHelpers.getCurrentTime());
        },
        addDeadClicks : function(i,eventMetrics){
            if(i.lastMutation < (s247CommonModule.getCurrentMillis() - s247CommonModule.CONSTANTS.DEADCLICK_WAIT_TIME)){
                eventMetrics.meta_info = eventMetrics.meta_info ? eventMetrics.meta_info+"-dead" : "dead";
            }
            i.events.push(eventMetrics);
        },
        addEvents: function(i,event,type,data,metaInfo,loadObj){
            try {
                if(i.trackEvents){
                    var now = s247CommonModule.getCurrentMillis();
                    var eventMetrics = {
                        ct: now,
                        type: type,
                        metric: data ? data.substring(0,s247CommonModule.CONSTANTS.MAX_EVENTS_METRIC_LENGTH) : '-'
                    };

                    if(type == 'XHR' || type == 'fetch'){
                        var closestEventObj;
                        if(s247CommonModule.eventIdObj[data]){
                            closestEventObj = s247CommonModule.getClosestStartTime(s247CommonModule.eventIdObj[data], metaInfo.st, 'event');
                            if(closestEventObj == null){
                                eventMetrics.event_metric_id = s247CommonModule.simpleHash(data)+'_'+Math.round(metaInfo.st);
                                s247CommonModule.eventIdObj[data].push({txnName : data, st : Math.round(metaInfo.st), ct: eventMetrics.ct, source: 'event'});
                            }else{
                                eventMetrics.event_metric_id = s247CommonModule.simpleHash(closestEventObj.txnName)+'_'+Math.round(closestEventObj.st);
                            }
                        }else{
                            eventMetrics.event_metric_id = s247CommonModule.simpleHash(data)+'_'+Math.round(metaInfo.st);
                            s247CommonModule.eventIdObj[data] = [{txnName : data, st : Math.round(metaInfo.st), ct: eventMetrics.ct, source: 'event'}];
                        }
                        s247CommonModule.eventIdObj = s247CommonModule.deleteLongLastingEvents(s247CommonModule.eventIdObj);
                    }

                    //Identifying rage clicks and dead clicks
                    if(type == "click"){
                        i.lastActivityTime=s247CommonModule.getCurrentMillis();
                        var target = event.target || event.srcElement;
                        var customName = target.getAttribute('s247-custom-name');
                        if(customName){
                            eventMetrics.name = customName.substring(0,s247CommonModule.CONSTANTS.MAX_EVENTS_CLICK_CUSTOMNAME_LENGTH);
                            eventMetrics.type = "custom";
                        };
                        eventMetrics.metric =  s247CommonModule.getSelector(target);
                        eventMetrics.xpath =  s247CommonModule.getXPath(target);
                        //Identifying rage clicks
                        eventMetrics.x = event.clientX;
                        eventMetrics.y = event.clientY;
                        var clickEvents = i.events.filter(function(event){
                            return event.type == "click";
                        });
                        var rageClicks = 0;
                        clickEvents.filter(function(currentEvent){
                            //Eucledian distance between 2 points
                            var eucledianDistance = Math.hypot(eventMetrics.x - currentEvent.x, eventMetrics.y - currentEvent.y);
                            var isRageClickInterval = now - currentEvent.ct < s247CommonModule.CONSTANTS.MAX_CLICK_INTERVAL;
                            if(isRageClickInterval && eucledianDistance < s247CommonModule.CONSTANTS.CLICK_DISTANCE){
                                rageClicks ++;
                            }else{
                                rageClicks = 0;
                            }
                            if(rageClicks > s247CommonModule.CONSTANTS.CLICK_THRESHOLD){
                                currentEvent.meta_info = "rage";
                            }
                        });

                        //Identifying dead clicks
                        if(event.target.tagName === 'A' || event.target.tagName === 'BUTTON' || event.target.closest('button')){
                            if(!eventMetrics.name){
                                var buttonText = event.target.innerText || event.target.textContent;
                                eventMetrics.name = buttonText.substring(0, s247CommonModule.CONSTANTS.MAX_BUTTON_CLICK_TEXT_LENGTH);
                            }
                            if ((event.target.tagName === 'A' && !event.target.href) && (event.target.tagName === 'BUTTON' && !event.target.onclick)) {
                                eventMetrics.meta_info = eventMetrics.meta_info ? eventMetrics.meta_info+"-dead" : "dead";
                            }else{
                                setTimeout(function() {
                                    i.colHelpers.addDeadClicks(i, eventMetrics);
                                }, s247CommonModule.CONSTANTS.DEADCLICK_WAIT_TIME);
                            }
                            return;
                        }
                    }

                    //Identifying Excessive Scrolling
                    else if(type == "scroll"){
                        i.lastActivityTime=s247CommonModule.getCurrentMillis();
                        if(now - s247CommonModule.SCROLL_EVENTS.LAST_SCROLLED){
                            s247CommonModule.SCROLL_EVENTS.COUNT ++;
                        }else{
                            s247CommonModule.SCROLL_EVENTS.COUNT=0;
                        }
                        //Setting scroll timeout to 0 when there is no scrolls for 2 seconds.
                        setTimeout(function() {
                            s247CommonModule.SCROLL_EVENTS.COUNT = 0;
                        }, s247CommonModule.SCROLL_EVENTS.SCROLL_IDLE_TIMEOUT);
                        s247CommonModule.SCROLL_EVENTS.LAST_SCROLLED = now;
                        if(s247CommonModule.SCROLL_EVENTS.COUNT >= s247CommonModule.CONSTANTS.EXCESSIVE_SCROLL_THRESHOLD && i.events[i.events.length-1].meta_info != "excessive_scroll"){
                            if(i.events[i.events.length-1].type == "scroll"){
                                i.events[i.events.length-1].meta_info = "excessive_scroll";
                            }else{
                                eventMetrics.meta_info = "excessive_scroll";
                            }
                        }else if(i.events[i.events.length-1].type == "scroll"){
                            return;
                        }
                    }

                    //Identifying Typing Metrics
                    else if(type == "typing"){
                        i.lastActivityTime=s247CommonModule.getCurrentMillis();
                        var target = event.target || event.srcElement;
                        eventMetrics.metric = s247CommonModule.getSelector(target);
                        try{
                             // Check if last event was typing on the SAME element - skip if so
                            if(i.events.length > 0 && i.events[i.events.length-1].type == "typing" && i.events[i.events.length-1].metric == eventMetrics.metric){
                                return; // Skip duplicate typing on same element
                            }
                            eventMetrics.xpath = s247CommonModule.getXPath(target);
                        }catch(e){

                        }
                    }
                    //Identifying Quick Backs
                    else if(type == "unload"){
                        var navigationEntries = window.performance.getEntriesByType('navigation');
                        if(navigationEntries.length > 0){
                            var navigationInfo = navigationEntries[0];
                            if (navigationInfo.type === 'back_forward') {
                                var timeSpentOnPage = s247CommonModule.getCurrentMillis() - i.pageLoadTimeStamp;
                                if (timeSpentOnPage < s247CommonModule.CONSTANTS.QUICK_BACK_TIME) {
                                    eventMetrics.meta_info = "quick_back";
                                }
                            }
                        }else if (window.performance.navigation) { // Fallback for older browsers
                            var navigationInfo = window.performance.navigation;
                            if (navigationInfo.type === 2) {
                            var timeSpentOnPage = s247CommonModule.getCurrentMillis() - i.pageLoadTimeStamp;
                            if (timeSpentOnPage < s247CommonModule.CONSTANTS.QUICK_BACK_TIME) {
                                eventMetrics.meta_info = "quick_back";
                            }
                            }
                        }
                    }

                    else if(type == "load" && loadObj != undefined){
                        if(loadObj.type == 'spa'){
                            if(i.spaLoadEvents[data]){
                               eventMetrics.ct = i.spaLoadEvents[data][1] < s247CommonModule.getCurrentMillis() ? i.spaLoadEvents[data][1] : s247CommonModule.getCurrentMillis();
                               metaInfo = i.spaLoadEvents[data][0];
                            }
                        }
                        if(loadObj.respTime!=undefined){
                            eventMetrics.response_time = loadObj.respTime;
                        }
                    }

                    else if(type == "custom"){
                        if(s247ConfigModule.getConfig("recordSession")){
                            s247RUM._recorderModule.addCustomRecordEvent('custom', eventMetrics);//No I18N
                          }
                    }

                    if(metaInfo){
                        metaInfo = typeof metaInfo == "string" ? metaInfo : JSON.stringify(metaInfo);
                        eventMetrics.meta_info = metaInfo.substring(0,s247CommonModule.CONSTANTS.MAX_EVENTS_META_INFO_LENGTH);
                    }
                    if((i.events.length < s247CommonModule.CONSTANTS.MAX_EVENTS_LENGTH)){
                        i.events.push(eventMetrics);
                    }
                }
            }catch(e){
                //Do Nothing
            }
        },

        isUserAgentBlocked: function(i) {
            if (!!window.navigator && !!window.navigator.userAgent) {
                var ua = window.navigator.userAgent;
                for (var u in i) {
                    if (i[u] != "" && ua.indexOf(i[u]) > -1) {
                        return true;
                    }
                }
                return false;
            }
            return true;
        },

        isAjaxCallAllowed: function(i, aC) {
            var txi = aC ? aC.indexOf(document.location.origin) > -1 ? document.location.origin.length : 0 : 0,
                txnName = aC ? aC.substr(txi, aC.indexOf('?') > -1 ? aC.indexOf('?') - txi : aC.length) : document.location.pathname;
                var txnBeforeFormatting=txnName;
            txnName = i.colHelpers.getFormatedTxnName(i, txnName);
            if (i.excludedAjaxCallsRegex != null && (txnName.match(i.excludedAjaxCallsRegex) != null || txnBeforeFormatting.match(i.excludedAjaxCallsRegex) != null)) {
                return false;
            } else {
                return true;
            }
        },

        isTxnAllowed: function(i, tN,txnBeforeFormatting) {
                    if (tN != null && i.excludedWebTxnsRegex != null) {
                        if (tN.match(i.excludedWebTxnsRegex) != null) {return false;}
                        if (txnBeforeFormatting != null && txnBeforeFormatting.match(i.excludedWebTxnsRegex) != null){ return false;}
                    }
                    return true;
                },

        setCookie: function(i, name, value, days) {
                    try{
                        var expirationDate = null;
                        if (typeof days !== "undefined" && days >= 0) {
                            var date = new Date();
                            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                            expirationDate = date.getTime();
                        }

                        if (i.disableCookie) {
                            var item = {
                                value: value,
                                expiration: expirationDate
                            };
                            localStorage.setItem(name, JSON.stringify(item));
                        } else {
                            var date = new Date();
                            days = ("undefined" == typeof days || days < 0) ? parseInt(new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()) - parseInt(date.getDate()) : days; //No I18N
                            date.setTime(date.getTime() + ((365 + Number(days)) * 24 * 60 * 60 * 1000));
                            var expires = "; expires=" + date.toGMTString(); // No I18N
                            document.cookie = name + "=" + value + expires + ";Secure;SameSite=Strict; path=/";
                        }
                    }catch(e){}
                    return true;
                },

        getCookie: function(i, cookieName) {
            var value = "",
                isSet = false,
                timeOut = i.maxSessionDuration ? i.maxSessionDuration : s247CommonModule.CONSTANTS.MAX_SESSION_TIME,
                isReplayAllowed = i.recordingSamplingRate ? (Math.random() < i.recordingSamplingRate) : (Math.random() < s247CommonModule.CONSTANTS.SESSION_REPLAY_SAMPLING_RATE),
                curT = s247CommonModule.getCurrentMillis();

            // Get value from either localStorage or cookie based on disableCookie flag
            if (i.disableCookie) {
                var storedItem = localStorage.getItem(cookieName);
                if (storedItem) {
                    var parsedItem = JSON.parse(storedItem);
                    if (parsedItem.expiration === null || parsedItem.expiration > new Date().getTime()) {
                        value = parsedItem.value;
                    }
                }
            } else {
                var sMatch = (' ' + document.cookie).match(new RegExp('[; ]' + cookieName + '=([^\\s;]*)'));
                if (sMatch) {
                    value = unescape(sMatch[1]);
                }
            }


            if (cookieName == "site24x7rumID" && value) {
                var nss = false,
                    sST = curT;
                if (value !== "" && value.split(".").length == 4) {
                    value = value.split(".");
                    var ref = document.referrer != "" ? i.colHelpers.getHost(document.referrer) : "";
                    if (i.colHelpers.getDomainFromTxn(window.location.href) !== ref) {
                        nss = (Number(value[1]) + timeOut < curT) ? true : false;
                    }
                    if (!nss) {
                        sST = value[1];
                    }else{
                        isReplayAllowed = i.recordingSamplingRate ? (Math.random() < i.recordingSamplingRate) : (Math.random() < s247CommonModule.CONSTANTS.SESSION_REPLAY_SAMPLING_RATE);
                    }
                    if (typeof value[0] == "undefined") {
                        value[0] = i.colHelpers.getClientID();
                    }
                    if(typeof value[3] == "undefined" || value[3] == "" || nss){
                        value[3] = isReplayAllowed ? 1 : 0;
                    }
                    value = value[0] + "." + sST + "." + curT+"."+ value[3];
                    isSet = i.colHelpers.setCookie(i, cookieName, value, 365) && false;
                    value = value.split(".");
                    return {
                        guid: value[0],
                        ss_time: value[1],
                        colT: curT,
                        new_user: isSet,
                        isReplayAllowed: value[3],
                        new_ss: nss
                    };
                } else {
                    var nValue = i.colHelpers.getClientID() + "." + curT + "." + curT+"."+(isReplayAllowed ? 1 : 0);
                    isSet = i.colHelpers.setCookie(i, cookieName, nValue, 365);
                    nValue = nValue.split(".");
                    return {
                        guid: nValue[0],
                        ss_time: nValue[1],
                        colT: curT,
                        isReplayAllowed: nValue[3],
                        new_user: value.length == 2 ? false : isSet,
                        new_ss: true
                    };
                }
            } else {
                value = i.colHelpers.getClientID() + "." + curT + "." + curT+"."+(isReplayAllowed ? 1 : 0);
                isSet = i.colHelpers.setCookie(i, cookieName, value, 365);
                value = value.split(".");
                return {
                    guid: value[0],
                    ss_time: value[1],
                    colT: curT,
                    isReplayAllowed: value[3],
                    new_user: isSet,
                    new_ss: true
                };
            }
        },

        wrapWithHandler: function(method) {
            return function() {
              try {
                return method.apply(this, arguments);
              } catch (ex) {
              }
            };
        },

         shouldCollectMetrics: function(i){
             return Math.random() < i.samplingRate;
         }
    },

    /*-----------------------------------------*/

    initialize: function(i) {
        //Metrics Objects
        i.xhrCalls = [];
        i.xhrCallTracker = {};
        i.metrics = new Array();
        i.rawErrors = new Array();
        i.perfStats = {};

        //Miscellaneous configurations
        i.curUrl = "";
        i.initialSent = false;
        i.collectTrace = false;
        i.isCorsSupported = ('withCredentials' in new XMLHttpRequest()) || (typeof XDomainRequest != "undefined"); //No I18N
        i.nwkTracker = {};
        i.domainInfo = {};
        i.resourcesTotal = {};
        i.onPageLoadEntriesLen = 0;
        i.pvid = null;
        //configs from s247RUM Object appended from collector.
        //site24x7rumProp is the old object used for setting custom configurations and hence both variables are checked in some cases.
        i.appKey = s247CommonModule.getAppKey();
        i.collector = typeof s247RUM != 'undefined' && !!s247RUM.collectorURL ? s247RUM.collectorURL : '//col.site24x7rum.com'; //No I18N
        i.injectTraceHeader = typeof s247RUM != 'undefined' && s247RUM.inject_trace_header ? s247RUM.inject_trace_header : false; //No I18N
        i.sendAjaxCalls = (typeof site24x7rumProp != 'undefined' && typeof site24x7rumProp.sendAjaxCalls == 'boolean') ? site24x7rumProp.sendAjaxCalls : (typeof s247RUM != 'undefined' && s247RUM.ajax_enabled ? s247RUM.ajax_enabled : false); //No I18N
        i.includeCrossDomainAjaxCalls = (typeof site24x7rumProp != 'undefined' && typeof site24x7rumProp.includeCrossDomainAjaxCalls == 'boolean') ? site24x7rumProp.includeCrossDomainAjaxCalls : (typeof s247RUM != 'undefined' && s247RUM.cx_ajax_enabled ? s247RUM.cx_ajax_enabled : false); //No I18N
        i.excludedUserAgents = (typeof site24x7rumProp != 'undefined' && typeof site24x7rumProp.userAgentsToBlock != 'undefined') ? site24x7rumProp.userAgentsToBlock : (typeof s247RUM != 'undefined' && s247RUM.excluded_useragents ? s247RUM.excluded_useragents : [""]); //No I18N
        i.excludedDomains = typeof site24x7rumProp != 'undefined' && site24x7rumProp.excludedDomains ? site24x7rumProp.excludedDomains : (typeof s247RUM != 'undefined' && s247RUM.excluded_domains ? s247RUM.excluded_domains : [""]);
        i.domainsToExclude = "static.site24x7rum(.*)|col.site24x7rum(.*)"; //No I18N
        i.excludedDomainsRegex = typeof i.excludedDomains[0] == 'undefined' || i.excludedDomains[0] == "" ? new RegExp(i.domainsToExclude, 'g') : new RegExp(i.domainsToExclude + '|' + i.excludedDomains.join('|'), 'g');
        i.excludedAjaxCalls = typeof site24x7rumProp != 'undefined' && site24x7rumProp.excludedAjaxCalls ? site24x7rumProp.excludedAjaxCalls : (typeof s247RUM != 'undefined' && s247RUM.excludedAjaxCalls ? s247RUM.excludedAjaxCalls : [""]);
        i.excludedAjaxCallsRegex = typeof s247RUM != 'undefined' && s247RUM.excluded_ajax_calls ? s247RUM.excluded_ajax_calls : (i.excludedAjaxCalls && i.excludedAjaxCalls[0] != "" ? new RegExp(i.excludedAjaxCalls.join("|"), 'g') : null);
        i.excludedWebTxns = typeof site24x7rumProp != 'undefined' && site24x7rumProp.excludedWebTxns ? site24x7rumProp.excludedWebTxns : (typeof s247RUM != 'undefined' && s247RUM.excludedWebTxns ? s247RUM.excludedWebTxns : [""]);
        i.excludedWebTxnsRegex = typeof s247RUM != 'undefined' && s247RUM.excluded_web_pages ? s247RUM.excluded_web_pages : (i.excludedWebTxns && i.excludedWebTxns[0] != "" ? new RegExp(i.excludedWebTxns.join("|"), 'g') : null);
        i.includeQueryParams = typeof site24x7rumProp != 'undefined' && site24x7rumProp.includeQueryParams ? site24x7rumProp.includeQueryParams : (typeof s247RUM != 'undefined' && s247RUM.includeQueryParams ? s247RUM.includeQueryParams : false); //No I18N
        i.trackResources = (typeof site24x7rumProp != 'undefined' && typeof site24x7rumProp.track_resources == 'boolean') ? site24x7rumProp.track_resources : (typeof s247RUM != 'undefined' && typeof s247RUM.track_resources == 'boolean' ? s247RUM.track_resources : false); //No I18N
        i.rumMonType = (typeof site24x7rumProp != 'undefined' && typeof site24x7rumProp.rumMonType == "number") ? site24x7rumProp.rumMonType : (typeof s247RUM != 'undefined' && s247RUM.beaconType ? s247RUM.beaconType : 0); //No I18N
        i.isSPA = ((typeof s247RUM != 'undefined' && Number(s247RUM.beaconType) > 0) || i.rumMonType > 0) && !!window.performance.getEntries ? true : false; //No I18N
        i.considerAllResources = (typeof site24x7rumProp != 'undefined' && typeof site24x7rumProp.considerAllResources == 'boolean') ? site24x7rumProp.considerAllResources : false; //No I18N
        i.version = 3.1;
        i.samplingRate=1;

        if(typeof s247RUM != 'undefined'){
            i.trackEvents = typeof s247RUM.track_events == 'boolean' ? s247RUM.track_events : false; //No I18N
            i.recordSession = typeof s247RUM.enable_session_replay == 'boolean' ? s247RUM.enable_session_replay : false; //No I18N
            i.recordingSamplingRate = typeof s247RUM.session_replay_sampling_threshold == 'number' ? s247RUM.session_replay_sampling_threshold : s247CommonModule.CONSTANTS.SESSION_REPLAY_SAMPLING_RATE; //No I18N
            i.trackConsoleEvents = typeof s247RUM.track_console_events == 'boolean' ? s247RUM.track_console_events : false; //No I18N
            i.maskAllInput = typeof s247RUM.mask_all_input == 'boolean' ? s247RUM.mask_all_input : false; //No I18N
            i.maskAllText = typeof s247RUM.mask_all_text == 'boolean' ? s247RUM.mask_all_text : false; //No I18N
            i.collectNetworkDetails = typeof s247RUM.collect_network_details == 'boolean' ? s247RUM.collect_network_details : false; //No I18N
            i.allowedNetworkUrls = s247RUM.allowed_network_urls ? s247RUM.allowed_network_urls : [/.*/];
            i.countryCodes =  s247RUM.country_codes ? s247RUM.country_codes : [""];
        }



        i.resourceTracker = {
            s: 0,
            e: i.onPageLoadEntriesLen
        };
        i.spa = {
            state: "",
            start: 0,
            end: 0,
            resourceStart: i.onPageLoadEntriesLen,
            sent: "",
            nwkStart: 0,
            nwkEnd: 0
        };
        i.urls = {};
        i.urls.mut = i.urls.nwk = i.colHelpers.getSimpleUrl(i);
        i.userTrace = [];
        i.spaTracker = [];
        i.events = [];
        i.excludedNetworkUrls=[];
        i.lastMutation = s247CommonModule.getCurrentMillis();
        i.recordingsinfo = {
            firstRecording : s247CommonModule.getCurrentMillis(),
            currentSessionStartTime : undefined
        }
        i.pageLoadTimeStamp=s247CommonModule.getCurrentMillis();
        i.sessionInfo={};
        i.activeInteraction = null;
        i.interactionMaxTimer = null;
        i.finalizedInteractions = [];
        i.pendingTraceEntries = [];

        /**
         * Initializes a PerformanceObserver for the Event Timing API ('event' entry type).
         *
         * Purpose:
         *   Calculating interaction duration for clicks (e_time - s_time) only accounts for network call
         *   end-times via extendInteraction(). When an interaction triggers no network calls,
         *   the duration would be 0, missing the event handler processing and browser rendering time.
         *
         *   The Event Timing API (PerformanceEventTiming) provides a browser-measured 'duration'
         *   that includes:
         *     - Input delay: time the event sat in the queue before the handler ran
         *     - Processing time: execution time of the event handler(s)
         *     - Presentation delay: time for the browser to render/paint after handlers complete
         *
         *   This gives a meaningful duration even for interactions with no subsequent network calls.
         *
         * Matching strategy:
         *   Each PerformanceEventTiming entry has a 'startTime' that corresponds to the original
         *   DOM event's 'timeStamp'. We match entries to interactions by checking if
         *   |entry.startTime - interaction.eventTimeStamp| < EVENT_TIMING_MATCH_THRESHOLD (16ms).
         *   The 16ms tolerance (? one frame at 60fps) accounts for minor precision differences
         *   between the DOM event timestamp and the PerformanceObserver's high-resolution clock.
         *
         * Finalized interactions lookback:
         *   The PerformanceObserver callback may fire after finalizeInteraction() has already moved
         *   the interaction from activeInteraction to finalizedInteractions[]. So we also scan the
         *   last MAX_FINALIZED_INTERACTIONS_LOOKBACK (10) finalized entries for a match.
         *
         * Browser support:
         *   - Chrome 76+, Edge 79+, Firefox 89+, Safari 16.4+ support PerformanceEventTiming.
         *   - IE11 and older browsers: the triple guard (typeof PerformanceObserver !== 'undefined',
         *     supportedEntryTypes exists, 'event' in supportedEntryTypes) ensures this block is
         *     silently skipped. Those browsers fall back to network-only duration.
         */
        i.initEventTimingObserver = function() {
            // Skip if event tracking is not enabled ? no interactions to enrich
            if (!i.trackEvents) {
                return;
            }
            // Guard 1: PerformanceObserver must exist (not available in IE11)
            // Guard 2: supportedEntryTypes must exist (not available in older Chrome/Edge)
            // Guard 3: 'event' entry type must be supported
            if (typeof PerformanceObserver !== 'undefined' && PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.indexOf('event') !== -1) {
                try {
                    var threshold = s247CommonModule.CONSTANTS.EVENT_TIMING_MATCH_THRESHOLD;
                    var lookback = s247CommonModule.CONSTANTS.MAX_FINALIZED_INTERACTIONS_LOOKBACK;
                    var eventTimingObserver = new PerformanceObserver(function(list) {
                        try {
                            var entries = list.getEntries();
                            for (var ei = 0; ei < entries.length; ei++) {
                                var etEntry = entries[ei];
                                // Try matching to the currently active (not yet finalized) interaction
                                if (i.activeInteraction && i.activeInteraction.eventTimeStamp > 0 && Math.abs(etEntry.startTime - i.activeInteraction.eventTimeStamp) < threshold) {
                                    // Take the max in case multiple PerformanceEventTiming entries fire for
                                    // the same logical interaction (e.g. pointerdown + click for a single tap)
                                    i.activeInteraction.eventTimingDuration = Math.max(i.activeInteraction.eventTimingDuration || 0, etEntry.duration);
                                }
                                // Also scan recently finalized interactions ? the observer callback
                                // may arrive after finalizeInteraction() has already run
                                if (i.finalizedInteractions.length > 0) {
                                    var startIdx = Math.max(0, i.finalizedInteractions.length - lookback);
                                    for (var fi = startIdx; fi < i.finalizedInteractions.length; fi++) {
                                        var fInt = i.finalizedInteractions[fi];
                                        if (fInt.eventTimeStamp > 0 && Math.abs(etEntry.startTime - fInt.eventTimeStamp) < threshold) {
                                            fInt.eventTimingDuration = Math.max(fInt.eventTimingDuration || 0, etEntry.duration);
                                        }
                                    }
                                }
                            }
                        } catch (ex) {}
                    });
                    // durationThreshold: 50 ? ignore trivial sub-50ms events to reduce GC pressure.
                    // buffered: false ? we only care about events that occur after initialization.
                    eventTimingObserver.observe({ type: 'event', buffered: false, durationThreshold: 50 });// No I18N
                } catch (ex) {
                    // Silently fail if observer setup fails for any reason
                }
            }
        };
        i.initEventTimingObserver();
        if (typeof window.site24x7rum == 'undefined') {
            window.site24x7rum = {};
        }
        i.mutArray = [], i.nwkArray = [];
        i.spaLoadEvents = {};
        site24x7rum.sessionTrace = new Array();
        site24x7rum.routeChanges = new Array();
        i.getDtResponseSplitup = function(navigationTiming) {
            var sanitizeTiming = function(timing) {
                if (timing <= navigationTiming.fetchStart) {
                  return 0;
                }
                return Math.round(timing - navigationTiming.fetchStart);
              };
            return {
                'fetchStart': sanitizeTiming(navigationTiming.fetchStart),//No I18N
                'domainLookupStart': sanitizeTiming(navigationTiming.domainLookupStart),//No I18N
                'domainLookupEnd': sanitizeTiming(navigationTiming.domainLookupEnd),//No I18N
                'connectStart': sanitizeTiming(navigationTiming.connectStart),//No I18N
                'connectEnd': sanitizeTiming(navigationTiming.connectEnd),//No I18N
                'requestStart': sanitizeTiming(navigationTiming.requestStart),//No I18N
                'responseStart': sanitizeTiming(navigationTiming.responseStart),//No I18N
                'responseEnd': sanitizeTiming(navigationTiming.responseEnd)//No I18N
            }
        }
        i.getRandomId = function(bytes){
        	var SHARED_CHAR_CODES_ARRAY = [];
        	for (var index = 0; index < bytes * 2; index++) {
        		SHARED_CHAR_CODES_ARRAY[index] = Math.floor(Math.random() * 16) + 48;
        		if (SHARED_CHAR_CODES_ARRAY[index] >= 58) {
        			SHARED_CHAR_CODES_ARRAY[index] += 39;
        		}
        	}
        	return String.fromCharCode.apply(null,SHARED_CHAR_CODES_ARRAY);
        }
        i.splitUrlAndParam = function(url) {
            var queryIndex = url.indexOf('?');
            var requestUrl = queryIndex === -1 ? url : url.slice(0, queryIndex);
            var requestParam = queryIndex === -1 ? '' : url.slice(queryIndex + 1);
            var queryParam = {};
            if (requestParam) {
                requestParam.split('&').forEach(function(pair) {
                    var eq = pair.indexOf('=');
                    if (eq > -1) { try { queryParam[decodeURIComponent(pair.slice(0, eq))] = decodeURIComponent(pair.slice(eq + 1)); } catch(e) {} }
                });
            }
            return {
                requestUrl: requestUrl.length > 200 ? requestUrl.slice(0, 200) : requestUrl,
                requestParam: requestParam.length > 200 ? requestParam.slice(0, 200) : requestParam,
                queryParam: queryParam
            };
          }
        i.storeLastAjax = function(type) {
            i.xhrCallsLast = i.xhrCalls;
            i.xhrCalls = new Array();
            if (i.initialSent || type == "initial") {
                i.metricsDispatcher(i, type);
            }
        }
        i.getResponseBody = function(xhr){
            var responseBody;
            try {
                if (xhr.responseType === '' || xhr.responseType === 'text') {
                    responseBody = s247CommonModule.parseJsonWithLimit(xhr.responseText);
                } else if (xhr.responseType === 'arraybuffer') {
                    // Convert ArrayBuffer to string
                    var arrayBuffer = xhr.response;
                    var uint8Array = new Uint8Array(arrayBuffer);
                    var str = '';
                    for (var i = 0; i < uint8Array.length; i++) {
                        str += String.fromCharCode(uint8Array[i]);
                    }
                    // Handle potential UTF-8 encoding
                    try {
                        var decoder = new TextDecoder('utf-8');//No I18N
                        str = decoder.decode(uint8Array);
                    } catch (e) {
                        // Fallback to the old method if TextDecoder isn't supported
                        try {
                            str = decodeURIComponent(escape(str));
                        } catch (e2) {
                            // If all decoding fails, use raw string
                        }
                    }
                    responseBody = s247CommonModule.parseJsonWithLimit(str);
                } else {
                    // For other response types (json, blob, etc.), use the response property
                    responseBody = s247CommonModule.parseJsonWithLimit(String(xhr.response));
                }
            } catch (e) {
                // Handle parsing errors
                responseBody = null;
            }
            return responseBody;
        }

        i.eventHandlers = {
            initializeOnloadModules: function(i){
                i.pageLoadTimeStamp = s247CommonModule.getCurrentMillis();
                if (window.performance.getEntries) {
                    i.onPageLoadEntriesLen = window.performance.getEntries().length;
                }
                setTimeout(function() {
                    i.colHelpers.initialiseSPA(i, "initial");//No I18N
                    i.dispatchWaterfall(i,"initial");//No I18N
                }, 0);
            },
            onload: function() {
                if (document.readyState && document.readyState == "complete") {
                    i.eventHandlers.initializeOnloadModules(i);
                } else {
                    if (window.addEventListener) {
                        window.addEventListener("load", function() {
                            i.eventHandlers.initializeOnloadModules(i);
                        }, !1);
                    } else if (window.attachEvent) {
                        window.attachEvent("onload", function() {
                            i.eventHandlers.initializeOnloadModules(i);
                        }, !1);
                    }
                }
            },

            onpagehide: function(e) {
                i.colHelpers.addEvents(i, undefined, "unload", i.colHelpers.getCurrentUrl(i)); //No I18N
                i.dispatchWaterfall(i,"unload"); // No I18N
                i.colHelpers.finalizeInteraction(i);
                i.dispatchInteractionsAsTrace(i);
                i.metricsDispatcher(i, "unload"); // No I18N
                 if(s247ConfigModule.getConfig("recordSession")){
                     i.dispatchRecordings(i,"unload");//No I18N
                 }
                s247WebvitalsModule.flushWcvData(i);
            },

            onkeypress: function(event) {
                i.colHelpers.startInteraction(i, event, "typing"); //No I18N
                i.colHelpers.processEventDetails(i, event, "typing"); //No I18N
                i.colHelpers.addEvents(i, event, "typing"); //No I18N
            },

            onclick: function(event) {
                i.colHelpers.startInteraction(i, event, "click"); //No I18N
                i.colHelpers.processEventDetails(i, event, "click"); //No I18N
                i.colHelpers.addEvents(i, event, "click"); //No I18N
            },

            onscroll: function(event) {
                i.colHelpers.processEventDetails(i, event, "scroll"); //No I18N
                i.colHelpers.addEvents(i, event, "scroll",i.colHelpers.getCurrentUrl(i)); //No I18N
            },

            onhashchange: function() {
                i.colHelpers.pushRoutes(i, window.location, i.colHelpers.getCurrentTime());
            },

            onpopstate: function(event) {
                i.colHelpers.pushRoutes(i, window.location, i.colHelpers.getCurrentTime());
            },

            ajax_open: function() {
                XMLHttpRequest.prototype.open = (function(open) {
                    return function(method, url, async, user, password) {
                        var traceId = i.getRandomId(16);
                        var spanId = i.getRandomId(8);
                        var traceParent = '00-' + traceId + '-' + spanId + '-01';
                        try {
                            this._url = url.indexOf("http") > -1 ? url : (url.indexOf("/") == 0 ? document.location.origin + url : (document.location.origin + /(.*)\//.exec(document.location.pathname)[0] + url));
                            var captureNetworkDetails = i.colHelpers.isNetworkDetailsAllowed(i, this._url);
                            var xhrCall = {
                                name : this._url,
                                st : i.colHelpers.getCurrentTime(),
                                method: method,
                                requestHeaders: {},
                                requestPayload: null,
                                interaction_sid: (i.trackEvents && i.activeInteraction && (s247CommonModule.getCurrentMillis() - i.activeInteraction.s_time) < s247CommonModule.CONSTANTS.INTERACTION_IDLE_TIMEOUT) ? i.activeInteraction.sid : null
                            };
                            // Defer interaction_sid capture so startInteraction
                            // (which runs later in the click event's bubbling phase) has time to create activeInteraction
                            setTimeout(function() {
                                if (!xhrCall.interaction_sid) {
                                    xhrCall.interaction_sid = (i.trackEvents && i.activeInteraction && (s247CommonModule.getCurrentMillis() - i.activeInteraction.s_time) < s247CommonModule.CONSTANTS.INTERACTION_IDLE_TIMEOUT) ? i.activeInteraction.sid : null;
                                }
                            }, 0);
                            //Getting request headers and payload details & appending to events
                            if(captureNetworkDetails){
                                // Capture request headers
                                var originalSetRequestHeader = this.setRequestHeader;
                                this.setRequestHeader = function(header, value) {
                                    xhrCall.requestHeaders[header] = value;
                                    return originalSetRequestHeader.apply(this, arguments);
                                };
                                // Capture request payload
                                var originalSend = this.send;
                                this.send = function(data) {
                                    xhrCall.requestPayload = data;
                                    return originalSend.apply(this, arguments);
                                };
                            }
                            if (this._url.indexOf(insightRUM.collector) == -1) {
                                if (window.addEventListener) {
                                    this.addEventListener("loadstart", function() {
                                        xhrCall.name = this._url;
                                        xhrCall.st = i.colHelpers.getCurrentTime();
                                        xhrCall.dt_ct = s247CommonModule.getCurrentMillis();
                                    }, !1);
                                    this.addEventListener("loadend", function() {
                                        var endTime = i.colHelpers.getCurrentTime();
                                        var obj = {
                                            name: xhrCall.name,
                                            st: xhrCall.st,
                                            end: endTime,
                                            status: this.status,
                                            event_metric_id: xhrCall.event_metric_id,
                                            trace_id: traceId,
                                            span_id: spanId,
                                            method: xhrCall.method,
                                            dt_ct: xhrCall.dt_ct,
                                            parent_txn: i.colHelpers.getTxn(i,undefined,true),
                                            type: "XHR",//No I18N
                                            interaction_sid: xhrCall.interaction_sid
                                        };
                                        if(xhrCall.interaction_sid){
                                            i.colHelpers.extendInteraction(i, s247CommonModule.getCurrentMillis());
                                        }
                                        if(captureNetworkDetails){
                                            //Getting response headers and payload details & appending to events
                                            var responseHeaders = {};
                                            var headerString = this.getAllResponseHeaders();
                                            var headerPairs = headerString.split('\u000d\u000a');
                                            for (var j = 0; j < headerPairs.length; j++) {
                                                var headerPair = headerPairs[j];
                                                var index = headerPair.indexOf('\u003a\u0020');
                                                if (index > 0) {
                                                    var key = headerPair.substring(0, index);
                                                    var val = headerPair.substring(index + 2);
                                                    responseHeaders[key] = val;
                                                }
                                            }
                                            var meta_info_obj = {
                                                name: xhrCall.name,
                                                st: xhrCall.st,
                                                end: endTime,
                                                duration: endTime - xhrCall.st,
                                                status: this.status,
                                                method: xhrCall.method,
                                                size: parseInt(this.getResponseHeader('Content-Length') || '0'),// No I18N
                                                responseType: this.responseType,
                                                responseHeaders: s247CommonModule.filterHeaders(responseHeaders,i.allowedResponseHeaders),
                                                responseBody: i.getResponseBody(this),
                                                requestHeaders: s247CommonModule.filterHeaders(xhrCall.requestHeaders,i.allowedRequestHeaders),
                                                requestPayload: s247CommonModule.parseJsonWithLimit(xhrCall.requestPayload)
                                            }
                                            i.colHelpers.addEvents(i, undefined, "XHR", this._url,meta_info_obj); //No I18N
                                        }else{
                                            i.colHelpers.addEvents(i, undefined, "XHR", this._url,obj); //No I18N
                                        }
                                        if (i.isSPA) {
                                            setTimeout(function() {
                                                i.colHelpers.observeNetwork(i, obj);
                                            }, 100);
                                        }
                                        i.xhrCalls.push(obj);
                                        var d = {
                                            or: i.colHelpers.getFormatedTxnName(i, document.location.origin)
                                        };
                                        if (i.collectTrace) {
                                            i.colHelpers.addAjaxToSession(i, xhrCall.name, "ajax", d, xhrCall.st);
                                        }
                                    }, !1);
                                }
                                if (i.userTrace && typeof this._url != "undefined") {
                                    i.colHelpers.addUserTrace(i, "xhr", this._url); //No I18N
                                }
                            }
                        } catch (e) {}
                        this.send = (function(send){
                            return function(){
                                if(i.colHelpers.isHeaderInjectionAllowed(i, this._url)){
                                    this.setRequestHeader('traceparent', traceParent);
                                }
                                return send.apply(this, arguments);
                            }
                        })(this.send)
                        return open.apply(this, arguments);
                    };
                })(XMLHttpRequest.prototype.open);

                var originalFetch = window.fetch;
                try{
                    if (typeof originalFetch === 'function' && typeof originalFetch.polyfill === 'undefined' ){
                        window.fetch = function() {
                            var fetchInput = arguments[0];
                            var options = arguments[1] || {};
                            var traceId = i.getRandomId(16);
                            var spanId = i.getRandomId(8);
                            var traceParent = `00-${traceId}-${spanId}-01`
                            var method, headers, body, startTime=i.colHelpers.getCurrentTime();
                            var dt_ct = s247CommonModule.getCurrentMillis();
                            var interactionSid = (i.trackEvents && i.activeInteraction && (s247CommonModule.getCurrentMillis() - i.activeInteraction.s_time) < s247CommonModule.CONSTANTS.INTERACTION_IDLE_TIMEOUT) ? i.activeInteraction.sid : null;
                            // Defer interaction_sid capture so startInteraction
                            // (which runs later in the click event's bubbling phase) has time to create activeInteraction
                            var interactionSidRef = { value: interactionSid };
                            setTimeout(function() {
                                if (!interactionSidRef.value) {
                                    interactionSidRef.value = (i.trackEvents && i.activeInteraction && (s247CommonModule.getCurrentMillis() - i.activeInteraction.s_time) < s247CommonModule.CONSTANTS.INTERACTION_IDLE_TIMEOUT) ? i.activeInteraction.sid : null;
                                }
                            }, 0);
                            var _url;
                            if (typeof fetchInput === 'string') {
                                _url = fetchInput.indexOf("http") > -1 ? fetchInput : document.location.origin + fetchInput; //No I18N
                            }else if (typeof window.Request !== 'undefined' && fetchInput instanceof window.Request) { //No I18N
                                _url = fetchInput.url;
                                method = fetchInput.method;
                                headers = fetchInput.headers;
                                body = fetchInput.body;
                            }else {
                                _url = String(fetchInput);
                            }
                            var captureNetworkDetails = i.colHelpers.isNetworkDetailsAllowed(i, _url);
                            var promise;
                            if(i.colHelpers.isHeaderInjectionAllowed(i, _url)){
                                if (fetchInput instanceof window.Request) {
                                    var originalRequest = fetchInput;
                                    var originalHeaders = {};
                                    originalRequest.headers.forEach(function(value, key) {
                                        originalHeaders[key] = value;
                                    });
                                    var newHeaders = Object.assign({}, originalHeaders, {'traceparent': traceParent});//No I18N
                                    fetchInput = new Request(originalRequest, {
                                        headers: newHeaders
                                    });
                                } else{
                                    if (options.headers instanceof Headers) {
                                        var newHeaders = new Headers(options.headers);
                                        newHeaders.set('traceparent', traceParent);//No I18N
                                        options.headers = newHeaders;
                                    } else {
                                        options.headers = Object.assign({}, options.headers, {'traceparent': traceParent});//No I18N
                                    }
                                }
                                promise = originalFetch.call(this, fetchInput, options);
                            }else{
                                promise = originalFetch.apply(this, arguments);
                            }
                            //Collect request headers only if collectNetworkDetails is enabled
                            var requestHeaders = {};
                            if(captureNetworkDetails){
                                    method = method || (options && options.method) || 'GET';// No I18N
                                    headers = headers || options.headers || {};
                                    body = body || options.body;
                                    if (_url.indexOf(i.collector) == -1) {
                                    if (headers instanceof Headers) {
                                        headers.forEach(function(value, key) {
                                            requestHeaders[key] = value;
                                        });
                                    } else {
                                        Object.assign(requestHeaders, headers);
                                    }
                                }
                            }
                            promise.then(
                            	i.colHelpers.wrapWithHandler(function(response){
                                try{
                                    var meta_info_obj;
                                    var responseHeaders = {};
                                    var endTime = i.colHelpers.getCurrentTime();
                                    // Resolve interaction_sid now: interactionSidRef.value may still be null for
                                    // cache-hit fetches whose .then() microtask runs before the deferred setTimeout(0)
                                    var resolvedSid = interactionSidRef.value || ((i.trackEvents && i.activeInteraction && (s247CommonModule.getCurrentMillis() - i.activeInteraction.s_time) < s247CommonModule.CONSTANTS.INTERACTION_IDLE_TIMEOUT) ? i.activeInteraction.sid : null);
                                    var obj = {
                                        name: _url ,
                                        st : startTime,
                                        end : i.colHelpers.getCurrentTime(),
                                        status : response.status,
                                        trace_id: traceId,
                                        span_id: spanId,
                                        method: (options && options.method) || 'GET',// No I18N
                                        dt_ct: dt_ct,
                                        parent_txn: i.colHelpers.getTxn(i,undefined,true),
                                        type: "Fetch",//No I18N
                                        interaction_sid: resolvedSid
                                    };
                                    if(resolvedSid){
                                        i.colHelpers.extendInteraction(i, s247CommonModule.getCurrentMillis());
                                    }
                                    if(captureNetworkDetails){
                                        response.headers.forEach(function(value, key) {
                                            responseHeaders[key] = value;
                                        });
                                        meta_info_obj = {
                                            name: _url,
                                            st: startTime,
                                            end: endTime,
                                            duration: endTime - startTime,
                                            status: response.status,
                                            method: method,
                                            size: parseInt(response.headers.get('Content-Length') || '0'),// No I18N
                                            responseType: response.type,
                                            requestHeaders: s247CommonModule.filterHeaders(requestHeaders,i.allowedRequestHeaders),
                                            requestPayload: s247CommonModule.parseJsonWithLimit(body),
                                            responseHeaders: s247CommonModule.filterHeaders(responseHeaders,i.allowedResponseHeaders)
                                        }
                                    }
                                    //Push to xhrCalls synchronously so entries are available when dataList processes
                                    if (i.isSPA) {
                                        setTimeout(function() { i.colHelpers.observeNetwork(i, obj); }, 100);
                                    }
                                    i.xhrCalls.push(obj);

                                    var d = {
                                        or: i.colHelpers.getFormatedTxnName(i, document.location.origin)
                                    };
                                    if (i.collectTrace) {
                                        i.colHelpers.addAjaxToSession(i, _url, "fetch", d, startTime);
                                    }
                                    //Async body capture only when network details are needed
                                    if(captureNetworkDetails){
                                        response.clone().text().then(function(text) {
                                            meta_info_obj.responseBody = s247CommonModule.parseJsonWithLimit(text);
                                            if(_url){
                                                i.colHelpers.addEvents(i, undefined, "fetch", _url, meta_info_obj);// No I18N
                                            }
                                        }).catch(function(){});
                                    } else {
                                        if(_url){
                                            i.colHelpers.addEvents(i, undefined, "fetch", _url, obj);// No I18N
                                        }
                                    }
                                }
                                catch(e){}
                                return response;
                            }),function(err){
                                throw err;
                            })
                            return promise;
                        }
                    }
                }
                catch(e){}
            },

            onpushstate: function() {
                (function(history) {
                    var pushState = history.pushState;
                    history.pushState = function(state) {
                        var t = i.colHelpers.getCurrentTime();
                        var res = pushState.apply(history, arguments);
                        i.colHelpers.pushRoutes(i, window.location, t);
                        return res;
                    }
                }(window.history))
            },


            onreplacestate: function() {
                (function(history) {
                    var replaceState = history.replaceState;
                    history.replaceState = function(state) {
                        var t = i.colHelpers.getCurrentTime();
                        var res = replaceState.apply(history, arguments);
                        i.colHelpers.pushRoutes(i, window.location, t);
                        return res;
                    }
                })(window.history)
            },

            console: function() {
                // capturing console log, warning, error ,info messages for
                // error user trace.
                if (typeof window.console != "undefined" && "undefined" != typeof console) {
                    (function() {
                        ["log", "debug", "warn", "info", "error"].forEach(function(level) { //No I18N
                            if (typeof console[level] != "undefined") {
                                var oldLog = console[level];
                                console[level] = function(message) {
                                    try {
                                        var args = Array.prototype.slice.call(arguments);
                                        var message = args.map(function(arg) {
                                            if (arg instanceof Error) {
                                                return arg.stack || arg.toString();
                                            }
                                            return String(arg);
                                        }).join(' ');
                                        // Limit message size to 500 characters
                                        if (message.length > 500) {
                                            message = message.substring(0, 500);
                                        }
                                        i.colHelpers.addUserTrace(i, "console-" + level, message); //No I18N
                                        i.colHelpers.addEvents(i, undefined, "console", message, level); //No I18N
                                        if(s247ConfigModule.getConfig("recordSession")){
                                            s247RUM._recorderModule.addCustomRecordEvent('console', {'message':message,'level':level});//No I18N
                                        }
                                    } catch (e) {}
                                    oldLog.apply(this, arguments);
                                };
                            }
                        });
                    })();
                }
            },

            visibilitychange: function() {
                // tracking visibility change of the document and flushing data
                // to servers when document goes to hidden state
                if (document.addEventListener && document.visibilityState) {
                    document.addEventListener('visibilitychange', function() {
                        if (document.visibilityState === 'hidden') {
                            i.dispatchWaterfall(i, "unload"); // No I18N
                            i.colHelpers.finalizeInteraction(i);
                            i.dispatchInteractionsAsTrace(i);
                            i.metricsDispatcher(i, "regular"); // No I18N
                            if(s247ConfigModule.getConfig("recordSession")){
                                i.dispatchRecordings(i,"unload");//No I18N
                            }
                            s247WebvitalsModule.flushWcvData(i);
                        }
                    });
                }
            }
        }
    },


    /*-----------------------------------------*/
    metricsCollector: {

        configInfo: function(i, type) {
            return {
                appKey: i.appKey,
                version: i.version
            }
        },


        sessionInfo: function(i) {
            var sInfo = (!!window._s247rumc && !i.initialSent) ?
                                    window._s247rumc :
                                    (i.excludeModules && i.excludeModules.length > 0 && i.excludeModules.indexOf("sessions") !== -1) ?
                                    {} :
                                    i.colHelpers.getCookie(i, "site24x7rumID"); //No I18N
            var ua = navigator.userAgent.length > 200 ? navigator.userAgent.substring(0, 200) : navigator.userAgent;
            var guid =  sInfo.guid? sInfo.guid : 0;
            var sstime = sInfo.ss_time ? Number(sInfo.ss_time) : 0;
            var o = {
                useragent: ua,
                scH: window.screen.height,
                scW: window.screen.width,
                sstime: sstime,
                colT: sInfo.colT ? sInfo.colT : s247CommonModule.getCurrentMillis(),
                session_time: sstime > 0 ? s247CommonModule.getCurrentMillis() - sstime : 0,
                replay_allowed: sInfo.isReplayAllowed == 1,
                replay_available:s247ConfigModule.getConfig("recordSession")?1:0,//No I18N
                usrInfo: {
                    uniqVisitor: typeof sInfo.new_user == "boolean" ? sInfo.new_user : false,//No I18N
                    guid: guid,
                    nSes: sInfo.new_ss
                }
            };
            var currentUidInSS = sessionStorage.getItem('s247rum_uid');//No I18N
            if(typeof i.uid != "undefined"){
                o.usrInfo.uid = i.uid;
                if(currentUidInSS !== i.uid){
                    sessionStorage.setItem('s247rum_uid',i.uid);//No I18N
                }
            }else if(currentUidInSS != null){
                o.usrInfo.uid = currentUidInSS;
            }
            if(i.tags && Object.keys(i.tags).length > 0){
                o.tags = i.tags;
            }
            if (!!navigator.connection && navigator.connection.effectiveType) {
                o.conTy = navigator.connection.effectiveType;
            }
            if (navigator.deviceMemory) {
                o.dM = navigator.deviceMemory < 1 ? 1 : navigator.deviceMemory;
            }
            if (i.environment) {
                o.environment = i.environment;
            }
            if(i.release){
                o.release = i.release;
            }
            if (performance.memory){
                o.usedHeapSize = performance.memory.usedJSHeapSize;
                var freeHeap = performance.memory.totalJSHeapSize - performance.memory.usedJSHeapSize;
                o.freeHeapSize =  freeHeap > 0 ? freeHeap : 0;
            }
            i.sessionInfo=o;
            return o;
        },


        dataList: function(i, type) {
            if ((type == "regular" || type == "unload") && !i.isSPA) {
                var dataList = [],
                    uAjax = {};
                if (i.sendAjaxCalls || i.includeCrossDomainAjaxCalls) {
                    var matches = document.location.host.match(/^(?:www\.)?([^/:?#]+)(?:[/:?#]|$)/i);
                    var parentDomain = (matches && matches[1]) ? matches[1] : document.location.host;
                    while (i.xhrCalls.length > 0) {
                        var xhr = i.xhrCalls.pop();
                        var xhrDomain = i.colHelpers.getDomainFromTxn(i, xhr.name);
                        if (xhr && xhr.name && (xhrDomain != null && i.colHelpers.isDomainAllowed(i, xhrDomain)) && i.colHelpers.isAjaxCallAllowed(i, xhr.name) && ((xhr.name.indexOf(parentDomain) > -1 && i.sendAjaxCalls) || (xhr.name.indexOf(parentDomain) < 0 && i.includeCrossDomainAjaxCalls))) {
                            if (window.performance.getEntriesByName) {
                                var e = window.performance.getEntriesByName(xhr.name);
                            }
                            if (e && e.length > 0) {
                                var j = i.xhrCallTracker.hasOwnProperty(xhr.name) ? i.xhrCallTracker[xhr.name] : 0;
                                for (; j < e.length; j++) {
                                    if (e[j].duration) {
                                        e[j].loadEventEnd = e[j].fetchStart + e[j].duration;
                                        var rSize = e[j].transferSize ? e[j].transferSize : 0;
                                        var perfStats = i.colHelpers.getPerfStats(i, e[j], true);
                                        if (perfStats.totalRT > 0 && perfStats.totalRT <= 300000 && perfStats.totalRT >= perfStats.fbT && perfStats.fbT >= 0) {
                                            var status = {};
                                            status[i.colHelpers.getStatusCode(xhr.status + '')] = 1;
                                            perfStats.type = 'ajax';
                                            perfStats.status = status;
                                            perfStats.http_status = xhr.status ? xhr.status : 0;
                                            perfStats.totalCT = 1;
                                            if (uAjax[perfStats.txnName]) {
                                                var totalSZ = uAjax[perfStats.txnName].totalSZ;
                                                var totalSCT = uAjax[perfStats.txnName].totalSCT;
                                                uAjax[perfStats.txnName] = i.colHelpers.addPerfStats(i, uAjax[perfStats.txnName], perfStats, s247CommonModule.CONSTANTS.TIMING_METRICS);
                                                uAjax[perfStats.txnName].txnName = perfStats.txnName;
                                                uAjax[perfStats.txnName].totalSZ = totalSZ + rSize;
                                                uAjax[perfStats.txnName].totalSCT = totalSCT + (Number(rSize) > 0 ? 1 : 0);
                                                uAjax[perfStats.txnName].type = 'ajax';
                                            } else {
                                                uAjax[perfStats.txnName] = perfStats;
                                                uAjax[perfStats.txnName].totalSZ = rSize;
                                                uAjax[perfStats.txnName].totalSCT = Number(rSize) > 0 ? 1 : 0;
                                            }
                                            if(xhr.trace_id && i.colHelpers.isHeaderInjectionAllowed(i,xhr.name)){
                                                var responseSplitUp = i.getDtResponseSplitup(e[j]);
                                                var urlObj = i.splitUrlAndParam(xhr.name);
                                                uAjax[perfStats.txnName].traceSpan = {
                                                    "ct": xhr.dt_ct,//No I18N
                                                    "s_time": xhr.dt_ct,//No I18N
                                                    "e_time": xhr.dt_ct + responseSplitUp.responseEnd,//No I18N
                                                    "tr_id": xhr.trace_id,//No I18N
                                                    "sid": xhr.span_id,//No I18N
                                                    "name": xhr.type,//No I18N
                                                    "dur": responseSplitUp.responseEnd,//No I18N
                                                    "url": urlObj.requestUrl,//No I18N
                                                    "status": xhr.status,//No I18N
                                                    "http_m": xhr.method,//No I18N
                                                    "parent_txn": xhr.parent_txn,//No I18N
                                                    "vid": i.currentViewId,//No I18N
                                                    "psid": xhr.interaction_sid || i.currentSpanId,//No I18N
                                                    "rt_splitup": responseSplitUp//No I18N
                                                }
                                                if(i.pvid){
                                                    uAjax[perfStats.txnName].traceSpan.pvid = i.pvid;
                                                }
                                                if(urlObj.requestParam.length>0){
                                                    uAjax[perfStats.txnName].traceSpan.r_param = urlObj.requestParam
                                                }
                                            }
                                        }
                                    }
                                }
                                i.xhrCallTracker[xhr.name] = j;
                            }
                        }
                    }
                    dataList = dataList.concat(i.colHelpers.getAsArray(uAjax, 25, "totalRT"))
                }
                return (dataList.length > 0) ? dataList : null;
            }
            var ajaxCalls = {};
            var ajaxCallsMap = {};
            var dataList = [];
            if (site24x7rum.routeChanges.length > 1 || type == 'initial' || (type == 'spa' && i.spaTracker.length > 0)) {

                // Generate unique view ID (16 bytes) and span ID (8 bytes) for SPA route change
                if (type == 'spa') {
                    i.currentViewId = i.getRandomId(16);
                    i.currentSpanId = i.getRandomId(8);
                }

                var spaObj = type == 'spa' && i.spaTracker.length > 0 ? i.spaTracker.shift() : {// No I18N
                    url: "",
                    start: 0,
                    end: 0
                };
                var spaurl = spaObj.url;
                var nwkObj = spaurl != "" && !!i.nwkTracker[spaurl] ? {
                    start: i.nwkTracker[spaurl].start,
                    end: i.nwkTracker[spaurl].end
                } : {
                    start: 0,
                    end: 0
                };
                delete i.nwkTracker[spaurl];
                spaObj.start = nwkObj.start < spaObj.start ? nwkObj.start : spaObj.start;
                spaObj.end = nwkObj.end < spaObj.end && nwkObj.start < spaObj.end ? spaObj.end : nwkObj.end;
                var end = 0.0,
                    diff = 0.0;
                var ajax_call = type == 'initial' ? {// No I18N
                    time: 0
                } : (site24x7rum.routeChanges.length > 0 ? site24x7rum.routeChanges.shift() : {
                    time: 0
                });
                spaObj.start = ajax_call.time != 0 && ajax_call.time < spaObj.start ? ajax_call.time : spaObj.start;
                var perfStats = {};
                if (type == 'initial') {
                    // Generate unique view ID (16 bytes) and span ID (8 bytes) for initial page load
                    i.currentViewId = i.getRandomId(16);
                    i.currentSpanId = i.getRandomId(8);

                    i.perfStats = perfStats = i.colHelpers.getPerfStats(i, window.performance.timing);
                    i.curUrl = perfStats.txnName;
                    i.colHelpers.addUserTrace(i, "load", i.curUrl); // No I18N
                    var loadObj = {type:"initial", respTime:perfStats.totalRT};//No I18N
                    i.colHelpers.addEvents(i, undefined, "load", i.curUrl, window.location.href, loadObj); //No I18N

                    // Add traceSpan for initial page load
                    if(i.injectTraceHeader && i.colHelpers.isTxnAllowed(i, perfStats.txnName, window.location.href)){
                        var navigationTiming = window.performance.timing;
                        var responseSplitUp = i.getDtResponseSplitup(navigationTiming);
                        var urlObj = i.splitUrlAndParam(window.location.href);

                        perfStats.traceSpan = {
                            "ct": navigationTiming.navigationStart,//No I18N
                            "s_time": navigationTiming.navigationStart,//No I18N
                            "e_time": navigationTiming.loadEventEnd || navigationTiming.loadEventStart,//No I18N
                            "name": "initial",//No I18N
                            "dur": perfStats.totalRT,//No I18N
                            "url": urlObj.requestUrl,//No I18N
                            "status": 200,//No I18N
                            "http_m": "GET",//No I18N
                            "vid": i.currentViewId,//No I18N
                            "sid": i.currentSpanId,//No I18N
                            "rt_splitup": responseSplitUp//No I18N
                        };
                        if(urlObj.queryParam.s247_pvid){
                            i.pvid = urlObj.queryParam.s247_pvid;
                            perfStats.traceSpan.pvid = urlObj.queryParam.s247_pvid;
                        }
                        if(urlObj.queryParam.s247_psid){
                            perfStats.traceSpan.psid = urlObj.queryParam.s247_psid;
                        }
                        if(urlObj.requestParam.length>0){
                            perfStats.traceSpan.r_param = urlObj.requestParam;
                        }
                    }
                } else {
                    perfStats = i.colHelpers.getPerfObject();
                }
                var xhrLen = 0;
                var matches = document.location.host.match(/^(?:www\.)?([^/:?#]+)(?:[/:?#]|$)/i);
                var parentDomain = (matches && matches[1]) ? matches[1] : document.location.host;
                while (i.xhrCallsLast.length > 0 && (!!ajax_call.url || spaObj.url != "" || i.sendAjaxCalls)) {
                    var xhr = i.xhrCallsLast.shift();
                    var considerForPerf = type == 'spa' && xhr.st >= spaObj.start - 100 && xhr.end <= spaObj.end + 100; //No I18N
                    if (spaObj.end != 0 && xhr.st >= spaObj.end) {
                        // Track non route ajax calls in SPA applications.
                        // These are added to dataList but excluded from route page load perf metrics.
                        var xhrDomainNR = i.colHelpers.getDomainFromTxn(i, xhr.name);
                        if (xhr && xhr.name && (xhrDomainNR != null && i.colHelpers.isDomainAllowed(i, xhrDomainNR)) && i.colHelpers.isAjaxCallAllowed(i, xhr.name) && ((xhr.name.indexOf(parentDomain) > -1 && i.sendAjaxCalls) || (xhr.name.indexOf(parentDomain) < 0 && i.includeCrossDomainAjaxCalls))) {
                            if (window.performance.getEntriesByName) {
                                var e = window.performance.getEntriesByName(xhr.name);
                            }
                            if (e && e.length > 0) {
                                var j = i.xhrCallTracker.hasOwnProperty(xhr.name) ? i.xhrCallTracker[xhr.name] : 0;
                                for (; j < e.length; j++) {
                                    if (e[j].duration) {
                                        e[j].loadEventEnd = e[j].fetchStart + e[j].duration;
                                        var rSize = e[j].transferSize ? e[j].transferSize : 0;
                                        var ajPerfStats = i.colHelpers.getPerfStats(i, e[j], true);
                                        if (ajPerfStats.totalRT > 0 && ajPerfStats.totalRT <= 300000 && ajPerfStats.totalRT >= ajPerfStats.fbT && ajPerfStats.fbT >= 0) {
                                            var status = {};
                                            status[i.colHelpers.getStatusCode(xhr.status + '')] = 1;
                                            ajPerfStats.type = 'ajax';
                                            ajPerfStats.status = status;
                                            ajPerfStats.http_status = xhr.status ? xhr.status : 0;
                                            ajPerfStats.totalCT = 1;
                                            if (ajaxCalls[ajPerfStats.txnName]) {
                                                var totalSZ = ajaxCalls[ajPerfStats.txnName].totalSZ;
                                                var totalSCT = ajaxCalls[ajPerfStats.txnName].totalSCT;
                                                ajaxCalls[ajPerfStats.txnName] = i.colHelpers.addPerfStats(i, ajaxCalls[ajPerfStats.txnName], ajPerfStats, s247CommonModule.CONSTANTS.TIMING_METRICS);
                                                ajaxCalls[ajPerfStats.txnName].txnName = ajPerfStats.txnName;
                                                ajaxCalls[ajPerfStats.txnName].totalSZ = totalSZ + rSize;
                                                ajaxCalls[ajPerfStats.txnName].totalSCT = totalSCT + (Number(rSize) > 0 ? 1 : 0);
                                                ajaxCalls[ajPerfStats.txnName].type = 'ajax';
                                            } else {
                                                ajaxCalls[ajPerfStats.txnName] = ajPerfStats;
                                                ajaxCalls[ajPerfStats.txnName].totalSZ = rSize;
                                                ajaxCalls[ajPerfStats.txnName].totalSCT = Number(rSize) > 0 ? 1 : 0;
                                            }
                                            if(xhr.trace_id && i.colHelpers.isHeaderInjectionAllowed(i,xhr.name)){
                                                var responseSplitUp = i.getDtResponseSplitup(e[j]);
                                                var urlObj = i.splitUrlAndParam(xhr.name);
                                                ajaxCalls[ajPerfStats.txnName].traceSpan = {
                                                    "ct": xhr.dt_ct,//No I18N
                                                    "s_time": xhr.dt_ct,//No I18N
                                                    "e_time": xhr.dt_ct + responseSplitUp.responseEnd,//No I18N
                                                    "tr_id": xhr.trace_id,//No I18N
                                                    "sid": xhr.span_id,//No I18N
                                                    "name": xhr.type,//No I18N
                                                    "dur": responseSplitUp.responseEnd,//No I18N
                                                    "url": urlObj.requestUrl,//No I18N
                                                    "status": xhr.status,//No I18N
                                                    "http_m": xhr.method,//No I18N
                                                    "parent_txn": xhr.parent_txn,//No I18N
                                                    "vid": i.currentViewId,//No I18N
                                                    "psid": xhr.interaction_sid || i.currentSpanId,//No I18N
                                                    "rt_splitup": responseSplitUp//No I18N
                                                }
                                                if(urlObj.queryParam.s247_pvid){
                                                    ajaxCalls[ajPerfStats.txnName].traceSpan.pvid = urlObj.queryParam.s247_pvid;
                                                }
                                                if(urlObj.requestParam.length>0){
                                                    ajaxCalls[ajPerfStats.txnName].traceSpan.r_param = urlObj.requestParam
                                                }
                                            }

                                        }
                                    }
                                }
                                i.xhrCallTracker[xhr.name] = j;
                            }
                        }
                        i.xhrCalls.push(xhr);
                        continue;
                    }
                    var xhrDomain = i.colHelpers.getDomainFromTxn(i, xhr.name);
                    if (xhr && ((ajax_call.time != 0 && xhr.st >= ajax_call.time) || xhr.st >= spaObj.start - 100) && xhr.name && (xhrDomain != null && i.colHelpers.isDomainAllowed(i, xhrDomain)) && i.colHelpers.isAjaxCallAllowed(i, xhr.name) && (xhr.name.indexOf(parentDomain) > -1 || i.includeCrossDomainAjaxCalls)) {
                        if (window.performance.getEntriesByName) {
                            var e = window.performance.getEntriesByName(xhr.name);
                        }
                        if (e && e.length > 0) {
                            var j = i.xhrCallTracker.hasOwnProperty(xhr.name) ? i.xhrCallTracker[xhr.name] : 0;
                            if (j >= e.length) { j = 0; console.log("issue fixed");}
                            if (e[j].duration) {
                                e[j].loadEventEnd = e[j].fetchStart + e[j].duration;
                                var rSize = e[j].transferSize ? e[j].transferSize : 0;
                                i.colHelpers.addToResInfo(i, e[j]);
                                var ajax_perfStats = i.colHelpers.getPerfStats(i, e[j], true);
                                if (ajax_perfStats.totalRT <= 150000 && ajax_perfStats.totalRT >= ajax_perfStats.fbT && ajax_perfStats.fbT >= 0) {
                                    var status = {};
                                    status[i.colHelpers.getStatusCode(xhr.status + '')] = 1;
                                    ajax_perfStats.status = status;
                                    ajax_perfStats.http_status = xhr.status ? xhr.status : 0;
                                    if (type == 'spa' && considerForPerf) {
                                        if (xhr.end > end) {
                                            end = xhr.end;
                                        }
                                        perfStats = i.colHelpers.addPerfStats(i, perfStats, ajax_perfStats, s247CommonModule.CONSTANTS.TIMING_METRICS);
                                        xhrLen++;
                                    }
                                    ajax_perfStats.totalCT = 1;
                                    var txname = ajax_perfStats.txnName;
                                    if (ajaxCalls[txname]) {
                                        var totalSZ = ajaxCalls[txname].totalSZ;
                                        var totalSCT = ajaxCalls[txname].totalSCT;
                                        ajaxCalls[txname] = i.colHelpers.addPerfStats(i, ajaxCalls[txname], ajax_perfStats, s247CommonModule.CONSTANTS.TIMING_METRICS);
                                        ajaxCalls[txname].txnName = txname;
                                        ajaxCalls[txname].totalSZ = totalSZ + rSize;
                                        ajaxCalls[txname].totalSCT = totalSCT + (Number(rSize) > 0 ? 1 : 0);
                                        if (considerForPerf && ajaxCallsMap[txname]) {
                                            var pAjax = ajaxCallsMap[txname];
                                            ajaxCallsMap[txname] = {
                                                totalRT: (pAjax.totalRT + ajax_perfStats.totalRT),
                                                totalCT: (pAjax.totalCT + 1),
                                                status: i.colHelpers.addStatusCode(pAjax.status, status)
                                            };
                                        }
                                    } else {
                                        ajaxCalls[txname] = ajax_perfStats;
                                        ajaxCalls[txname].totalSZ = rSize;
                                        ajaxCalls[txname].totalSCT = Number(rSize) > 0 ? 1 : 0;
                                        if (considerForPerf) {
                                            var sts = {};
                                            sts[i.colHelpers.getStatusCode(xhr.status + '')] = 1;
                                            ajaxCallsMap[txname] = {
                                                totalRT: ajax_perfStats.totalRT,
                                                totalCT: 1,
                                                status: sts
                                            };
                                        }
                                    }
                                    if(xhr.trace_id && i.colHelpers.isHeaderInjectionAllowed(i,xhr.name)){
                                        var responseSplitUp = i.getDtResponseSplitup(e[j]);
                                        var urlObj = i.splitUrlAndParam(xhr.name);
                                        ajaxCalls[txname].traceSpan = {
                                            "ct": xhr.dt_ct,//No I18N
                                            "s_time": xhr.dt_ct,//No I18N
                                            "e_time": xhr.dt_ct + responseSplitUp.responseEnd,//No I18N
                                            "tr_id": xhr.trace_id,//No I18N
                                            "sid": xhr.span_id,//No I18N
                                            "name": xhr.type,//No I18N
                                            "dur": responseSplitUp.responseEnd,//No I18N
                                            "url": urlObj.requestUrl,//No I18N
                                            "status": xhr.status,//No I18N
                                            "http_m": xhr.method,//No I18N
                                            "parent_txn": xhr.parent_txn,//No I18N
                                            "vid": i.currentViewId,//No I18N
                                            "psid": xhr.interaction_sid || i.currentSpanId,//No I18N
                                            "rt_splitup": responseSplitUp//No I18N
                                        }
                                        if(i.pvid){
                                            perfStats.traceSpan.pvid = i.pvid;
                                        }
                                        if(urlObj.requestParam.length>0){
                                            ajaxCalls[txname].traceSpan.r_param = urlObj.requestParam
                                        }
                                    }

                                }
                            }

                            i.xhrCallTracker[xhr.name] = j;
                        }
                    }
                }
                if (type == 'spa' && (!!ajax_call.url || spaObj.url != "")) {
                    if (i.considerAllResources) {
                        var resPerf = i.colHelpers.getSPTPerformance(i);
                        if (resPerf != null) {
                            perfStats = i.colHelpers.addPerfStats(i, perfStats, resPerf.perfStats, s247CommonModule.CONSTANTS.TIMING_METRICS);
                            xhrLen += resPerf.len;
                        }
                    }
                    perfStats.ajaxCallsMap = ajaxCallsMap;
                    var st = (!ajax_call.time || (spaObj.start < ajax_call.time && spaObj.start != 0)) ? spaObj.start : (ajax_call.time != 0 ? ajax_call.time : spaObj.start);
                    var end = spaObj.end > end ? spaObj.end : end;
                    var totalTime = end - st;
                    if (perfStats.totalRT > 0 && xhrLen > 0) {
                        perfStats = i.colHelpers.getAverageStats(perfStats, xhrLen, s247CommonModule.CONSTANTS.TIMING_METRICS);
                    }
                    diff = totalTime - perfStats.totalRT;
                    if (diff > 0) {
                        perfStats.drT = perfStats.dpT = perfStats.dpT + diff;
                        perfStats.feT += diff;
                        perfStats.totalRT += diff;
                    }
                    var state = spaObj.url != "" ? spaObj.url : ajax_call.url;
                    var currentTxnFullName = i.colHelpers.getFormatedTxnName(i, state, false);
                    perfStats.fullName = currentTxnFullName;
                    perfStats.txnName = i.colHelpers.getFormatedTxnName(i, state);
                    i.curUrl = perfStats.txnName;

                    // Add traceSpan for SPA navigation
                    if(i.injectTraceHeader && i.colHelpers.isTxnAllowed(i, perfStats.txnName, state)){
                        var urlObj = i.splitUrlAndParam(state);
                        var navStart = window.performance.timing.navigationStart;
                        perfStats.traceSpan = {
                            "ct": navStart + st,//No I18N
                            "s_time": navStart + st,//No I18N
                            "e_time": navStart + end,//No I18N
                            "name": "spa",//No I18N
                            "dur": totalTime,//No I18N
                            "url": urlObj.requestUrl=="" ? currentTxnFullName : urlObj.requestUrl,//No I18N
                            "status": 200,//No I18N
                            "http_m": "GET",//No I18N
                            "vid": i.currentViewId,//No I18N
                            "sid": i.currentSpanId,//No I18N
                            "rt_splitup": {//No I18N
                                "fetchStart": 0,//No I18N
                                "domainLookupStart": 0,//No I18N
                                "domainLookupEnd": 0,//No I18N
                                "connectStart": 0,//No I18N
                                "connectEnd": 0,//No I18N
                                "requestStart": 0,//No I18N
                                "responseStart": Math.round(perfStats.fbT || 0),//No I18N
                                "responseEnd": Math.round(totalTime)//No I18N
                            }
                        };
                        if(urlObj.queryParam.s247_pvid){
                            perfStats.traceSpan.pvid = urlObj.queryParam.s247_pvid;
                        }
                        if(urlObj.queryParam.s247_psid){
                            perfStats.traceSpan.psid = urlObj.queryParam.s247_psid;
                        }
                        if(urlObj.requestParam.length>0){
                            perfStats.traceSpan.r_param = urlObj.requestParam;
                        }
                    }
                }
                perfStats.type = type;
                if (perfStats.totalRT > 0 && perfStats.totalRT < 150000) {
                    i.perfStats = perfStats;
                    if (type == "initial") {
                        perfStats.totalSZ = document.documentElement.innerHTML.length;
                    }
                    if(type == "spa"){
                        var loadObj = {type:"spa", respTime:perfStats.totalRT};//No I18N
                        // Derive key to match pushRoutes spaLoadEvents key format
                        var spaLoadKey = spaObj.url;
                        try {
                            var tempLoc = new URL(spaObj.href);
                            spaLoadKey = i.colHelpers.getSpaRouteKey(i, tempLoc);
                        } catch(e) {}
                        i.colHelpers.addEvents(i, undefined, "load", spaLoadKey, spaObj.href, loadObj); //No I18N
                    }
                    dataList.push(perfStats);
                    dataList = dataList.concat(i.colHelpers.getAsArray(ajaxCalls, 25, "totalRT"));
                }
            }
            return (dataList.length > 0) ? dataList : null;

        },

        errorList: function(i, type) {
            if (type != "initial") {
                var errorsPerSend = 0,
                    errorList = [];
                while (i.rawErrors.length > 0 && errorsPerSend < s247CommonModule.CONSTANTS.MAX_ERROR_PER_REQUEST) {
                    var err = i.rawErrors.pop();
                    if (err) {
                        errorList.push(err);
                        errorsPerSend++;
                    }
                }
                return (errorList.length > 0) ? errorList : null;
            }
            return null;
        },

        eventsList: function(i){
            if(i.events.length > 0){
                var events =  i.events;
                i.events = [];
                return events;
            }else{
                return null;
            }
        }
    },

    //Collecting waterfalls data and dispatching them.
	/**
    * @param {Object} i global insightRUM instance
	* @param {Object} type initial | regular | unload
	**/
    dispatchWaterfall: function(i,type){
        try{
            if(type == "initial" || i.captureAllWaterfallsResources){
                var sessionInfo = i.sessionInfo ? i.sessionInfo : i.metricsCollector.sessionInfo(i);
                var sessionId = sessionInfo.sstime + '.' + sessionInfo.usrInfo.guid;
                var resources = s247ResourcesModule.collect(sessionId,type);
                if(resources && resources.length > 0){
                    var resourcedata = {};
                    resourcedata.resource_list = resources;
                    resourcedata.configInfo = i.metricsCollector.configInfo(i);
                    resourcedata.txn = i.colHelpers.getFormatedTxnName(i, i.includeQueryParams ?window.location.pathname+document.location.search+window.location.hash: window.location.pathname+document.location.hash);
                    resourcedata.full_txn = i.colHelpers.getFormatedTxnName(i,document.location.href,false),
                    i.dispatchMetrics(i, i.collector+"/rum/resource", JSON.stringify(resourcedata),true);//No I18N
                    i.dispatchResourcesAsTrace(i, resources);
                }
            }
        }
        catch(e){}
    },

    /**
     * Transforms waterfall resource entries into the trace payload format and dispatches
     * them to the /rum/trace endpoint. Each resource is represented as an ajax-type entry.
     * The pageload view ID and span ID are propagated to maintain correlation.
     * @param {Object} i global insightRUM instance
     * @param {Array} resources resource list from s247ResourcesModule.collect
     * @param {Object} sessionInfo current session info object
     **/
    dispatchResourcesAsTrace: function(i, resources) {
        try {
            if (!i.injectTraceHeader) {
                return;
            }
            var dataList = [];
            var pageViewId = i.currentViewId;
            var pageSpanId = i.currentSpanId;

            for (var j = 0; j < resources.length; j++) {
                var res = resources[j];
                // Skip ajax/fetch resources as they are already tracked in dataList via XHR instrumentation
                if (res.res_type === 'ajax' || res.res_type === 'fetch') {
                    continue;
                }
                // Skip resources whose URL is not eligible for distributed tracing
                if (!i.colHelpers.isHeaderInjectionAllowed(i, res.fullname || res.name || '')) {
                    continue;
                }
                var spanId = i.getRandomId(8);

                var statusCode = res.status ? res.status + '' : '';
                var statusKey = (statusCode >= '200' && statusCode < '300') ? '2xx' : //No I18N
                                (statusCode >= '300' && statusCode < '400') ? '3xx' : //No I18N
                                (statusCode >= '400' && statusCode < '500') ? '4xx' : //No I18N
                                (statusCode >= '500') ? '5xx' : 'Others'; //No I18N
                var statusObj = {};
                statusObj[statusKey] = 1;

                var blocked = Math.round(res.blocked || 0);
                var dnsT   = Math.round(res.dnsT   || 0);
                var conT   = Math.round(res.conT   || 0);
                var fbT    = Math.round(res.fbT    || 0);
                var dlT    = Math.round(res.dlT    || 0);
                var totalRT = Math.round(res.totalRT) || 0;

                var rt_splitup = {
                    fetchStart:          0,
                    domainLookupStart:   blocked,
                    domainLookupEnd:     blocked + dnsT,
                    connectStart:        blocked + dnsT,
                    connectEnd:          blocked + dnsT + conT,
                    requestStart:        blocked + dnsT + conT,
                    responseStart:       fbT,
                    responseEnd:         totalRT
                };

                var urlObj = i.splitUrlAndParam(res.fullname || res.name || ''); //No I18N
                var entry = {
                    txnName:   res.name,
                    fullName:  res.fullname || res.name,
                    rdT:  0,
                    acT:  0,
                    dnsT: dnsT,
                    conT: conT,
                    beT:  fbT,
                    dlT:  dlT,
                    nwT:  dnsT + conT,
                    fbT:  fbT,
                    dpT:  0,
                    prT:  0,
                    drT:  0,
                    feT:  0,
                    totalRT: totalRT,
                    type: 'resource', //No I18N
                    status: statusObj,
                    http_status: res.status || 0,
                    totalCT: 1,
                    totalSZ: res.size || 0,
                    totalSCT: (res.size > 0) ? 1 : 0,
                    traceSpan: {
                        ct:       res.ct,
                        s_time:   res.ct,
                        e_time:   res.ct + totalRT,
                        sid:      spanId,
                        name:     'resource', //No I18N
                        dur:      totalRT,
                        url:      urlObj.requestUrl,
                        status:   res.status || 0,
                        http_m:   'GET', //No I18N
                        vid:      pageViewId,
                        psid:     pageSpanId,
                        rt_splitup: rt_splitup
                    }
                };
                // if (urlObj.requestParam.length > 0) {
                //     entry.traceSpan.r_param = urlObj.requestParam;
                // }
                if(i.pvid){
                    entry.traceSpan.pvid = i.pvid;
                }
                dataList.push(entry);
            }

            if (dataList.length > 0) {
                i.pendingTraceEntries = i.pendingTraceEntries.concat(dataList);
            }
        }
        catch(e) {}
    },
    dispatchInteractionsAsTrace: function(i) {
        try {
            if(!i.trackEvents || i.finalizedInteractions.length === 0) {
                return;
            }
            var interactions = i.finalizedInteractions;
            i.finalizedInteractions = [];
            // Drop trace dispatch when distributed tracing is disabled (interactions are still
            // drained above to avoid unbounded growth when trackEvents is on but injectTraceHeader is off)
            if(!i.injectTraceHeader) {
                return;
            }
            var dataList = [];

            for (var j = 0; j < interactions.length; j++) {
                var interaction = interactions[j];
                // networkDur: duration based on the latest network call end-time (set by extendInteraction).
                //   This is 0 when no XHR/Fetch calls occurred during the interaction.
                var networkDur = interaction.e_time - interaction.s_time;
                // eventTimingDur: browser-measured duration from the Event Timing API (PerformanceEventTiming).
                //   Includes input delay + event handler processing + presentation delay (time to next paint).
                //   This is 0 in browsers that don't support the Event Timing API (IE11, older Safari).
                var eventTimingDur = interaction.eventTimingDuration || 0;
                // Use the larger of the two: they overlap in time (not additive), so max() gives the
                // true perceived duration. When network calls extend beyond the rendering time, networkDur
                // wins; when no network calls happen, eventTimingDur provides a non-zero meaningful value.
                var dur = Math.max(eventTimingDur, networkDur);
                var eTime = interaction.s_time + dur;
                var entry = {
                    txnName:   interaction.target,
                    fullName:  interaction.name || interaction.target,
                    rdT: 0, acT: 0, dnsT: 0, conT: 0, beT: 0, dlT: 0,
                    nwT: 0, fbT: 0, dpT: 0, prT: 0, drT: 0, feT: 0,
                    totalRT: dur,
                    type: 'event',//No I18N
                    status: { '2xx': 1 },// No I18N
                    http_status: 200,
                    totalCT: 1,
                    totalSZ: 0,
                    totalSCT: 0,
                    traceSpan: {
                        ct:       interaction.s_time,
                        s_time:   interaction.s_time,
                        e_time:   eTime,
                        sid:      interaction.sid,
                        name:     interaction.type,
                        dur:      dur,
                        url:      interaction.target,
                        status:   200,
                        http_m:   interaction.type,
                        vid:      interaction.vid,
                        psid:     interaction.psid,
                        rt_splitup: {
                            fetchStart: 0,
                            domainLookupStart: 0,
                            domainLookupEnd: 0,
                            connectStart: 0,
                            connectEnd: 0,
                            requestStart: 0,
                            responseStart: 0,
                            responseEnd: dur
                        }
                    }
                };
                // if (interaction.name) {
                //     entry.traceSpan.interaction_name = interaction.name;
                // }
                // if (interaction.network_count) {
                //     entry.traceSpan.network_count = interaction.network_count;
                // }
                if(i.pvid){
                    entry.traceSpan.pvid = i.pvid;
                }
                dataList.push(entry);
            }

            if (dataList.length > 0) {
                i.pendingTraceEntries = i.pendingTraceEntries.concat(dataList);
            }
        }
        catch(e) {}
    },
    dispatchRecordingsRaw: function(i,events){
        var eventsList=[];
        for(var j = 0; j<events.length; j++){
            var event = events[j];
            var eventDataString = JSON.stringify(event.metric);
            var currentEventDataSize = eventDataString.length;
            var timeStampIncrementer=0; //For incrementing timestamp of each chunk. Used while fetching the recording segments.
            if(currentEventDataSize >= s247CommonModule.CONSTANTS.MAX_RECORDING_SIZE){// Approximate Size greater than 1.5Mb.
              for (var k = 0; k < eventDataString.length; k += s247CommonModule.CONSTANTS.MAX_RECORDING_SIZE) {
                var eventCopy = Object.assign({}, event)
                var chunk = eventDataString.slice(k, k + s247CommonModule.CONSTANTS.MAX_RECORDING_SIZE);
                eventCopy.metric = chunk;
                eventCopy.meta_info="chunk";// No I18N
                eventCopy._zl_timestamp = Number(eventCopy._zl_timestamp)+(++timeStampIncrementer);
                eventsList.push(eventCopy);
              }
            }else{
              // push event into the events array
              event.metric = eventDataString;
              eventsList.push(event);
            }
        }
        i.dispatchMetrics(i, i.collector+"/rum/record?appKey="+s247CommonModule.getAppKey()+"&gzip=false", JSON.stringify(eventsList),true);//No I18N
    },
    //Collecting session recordings data and dispatching them.
	/**
    * @param {Object} i global insightRUM instance
	**/
    dispatchRecordings: function(i,type){
        try{
            var sessionInfo = i.sessionInfo ? i.sessionInfo : i.metricsCollector.sessionInfo(i);
            var currentTime = s247CommonModule.getCurrentMillis();
            var currentPageTime = currentTime  - i.recordingsinfo.firstRecording;
            var sessionTime = currentTime - sessionInfo.sstime;
            if(!i.recordingsinfo.currentSessionStartTime){
                i.recordingsinfo.currentSessionStartTime = sessionInfo.sstime;
            }
            /**
             * To check session time and current pages time.
             * 1) In current page if the total time spent is greater than 15 minutes, stop collecting recordings.
             *    This Check is added in addition to session check as the new session id might get sent as the
             *    first payload of the recording during unload and hence the recording's snapshot will get
             *    affected.
             * 2) If the current session is greater than 15 minutes, stop collecting recordings.
             */
            if((currentPageTime > s247CommonModule.CONSTANTS.MAX_SESSION_TIME) || (sessionTime > s247CommonModule.CONSTANTS.MAX_SESSION_TIME) || !sessionInfo.replay_allowed){
                return;
            }
            var events = s247RUM._recorderModule.collect();
            if(events!=null && events.length > 0){
                for(var eventIndex=0;eventIndex<events.length;eventIndex++){
                    events[eventIndex].session_id = sessionInfo.sstime + '.' + sessionInfo.usrInfo.guid;
                    events[eventIndex].tab_id = sessionInfo.tab_id;
                    events[eventIndex].uid = sessionInfo.usrInfo.uid;
                }
                //In case of unload events like page hide or browser tab close, we send the data immediately and asynchronously via XHR call instead of worker thread approach.
                if(type == "regular"){
                    //Gzipping the data is offloaded to worker thread and sent to collectors as it can be cpu intensive and affect other processes running in browser main thread.
                    try{
                        s247worker.postMessage({
                            "payload": events,// No I18N
                            "type": "events"// No I18N
                        });
                        s247worker.onmessage = function(e) {
                            if(e.data.type == "events"){
                                var gzippedData = e.data.data;
                                if(gzippedData.length > 0){
                                    i.dispatchMetrics(i, i.collector+"/rum/record?appKey="+s247CommonModule.getAppKey()+"&gzip=true", gzippedData,true);//No I18N
                                }
                            }
                        };
                    }catch(e){
                        i.dispatchRecordingsRaw(i,events);
                    }
                }else{
                    i.dispatchRecordingsRaw(i,events);
                }
            }

            var full_snapshots = s247RUM._recorderModule.collectFullSnapshots();
            if(full_snapshots.length > 0){
                var dispatchSnapshot = function(snapshotData) {
                    var currentPid = snapshotData.pid;
                    var collectionTime = snapshotData.ct;
                    try{
                        s247worker.postMessage({
                            "payload": snapshotData.payload,// No I18N
                            "type": "full_ss"// No I18N
                        });

                        var messageHandler = function(e) {
                            if(e.data.type == "full_ss"){
                                var gzippedData = e.data.data;
                                if(gzippedData.length > 0){
                                    i.dispatchMetrics(i, i.collector+"/rum/record_ss?appKey="+s247CommonModule.getAppKey()+"&gzip=true&pid="+currentPid+"&ct="+collectionTime+"&sid="+sessionInfo.sstime + '.' + sessionInfo.usrInfo.guid, gzippedData, true);//No I18N
                                }
                                s247worker.removeEventListener('message', messageHandler);
                            }
                        };

                        // Add a unique event listener for this snapshot's response
                        s247worker.addEventListener('message', messageHandler);
                    }catch(e){
                        // Fallback to direct dispatch with the correct pid
                        i.dispatchMetrics(i, i.collector+"/rum/record_ss?appKey="+s247CommonModule.getAppKey()+"&gzip=false&pid="+currentPid+"&ct="+collectionTime+"&sid="+sessionInfo.sstime + '.' + sessionInfo.usrInfo.guid, JSON.stringify(snapshotData.payload), true);//No I18N
                    }
                }
                for(var index=0; index<full_snapshots.length; index++){
                    dispatchSnapshot(full_snapshots[index]);
                }
            }
        }
        catch(e){}
    },

    /*-----------------------------------------*/
    metricsDispatcher: function(i, type) {
        try {
            var url = i.collector + (type == "initial" ? "/rum/data" : "/rum/trace"); //No I18N
            var metrics = i.colHelpers.getDataMetrics(i, type);

            // Merge staged resource & interaction trace entries into the payload
            if (type != "initial" && i.pendingTraceEntries.length > 0) {
                var pending = i.pendingTraceEntries;
                i.pendingTraceEntries = [];
                if (metrics == null) {
                    metrics = {
                        configInfo: i.metricsCollector.configInfo(i, type),
                        sessionInfo: i.metricsCollector.sessionInfo(i, type),
                        dataList: pending
                    };
                } else {
                    metrics.dataList = metrics.dataList ? metrics.dataList.concat(pending) : pending;
                }
            }

            if (metrics != null && Object.keys(metrics).length > 0) {
                var txnBeforeFormatting = i.colHelpers.getRawTxn(i);
                var txn = i.colHelpers.getFormatedTxnName(i, i.colHelpers.getTxn(i), false);
                if (txn != "") {
                    metrics.txnName = type == "spa" && i.spa.state != "" ? i.colHelpers.getFormatedTxnName(i, i.spa.state) : txn; //No I18N
                    if(type == "spa" && i.spa.state != ""){txnBeforeFormatting=i.spa.state;}

                }
                if (typeof window.location.origin != "undefined") {
                    metrics.domain = window.location.origin;
                }
                if (i.colHelpers.isTxnAllowed(i, metrics.txnName,txnBeforeFormatting)) {
                    metrics = JSON.stringify(metrics);
                    i.dispatchMetrics(i, url, metrics);
                    if (type == "initial") {
                        i.initialSent = true;
                    }
                }
            }
        } catch (e) {}
    },

    dispatchMetrics: function(i, url, metrics, useXhr) {
        try {
            var moduleType = i.getModuleType(url);
            if(i.excludeModules && i.excludeModules.length > 0){
                if(i.excludeModules.indexOf(moduleType) > -1 ){
                    return;
                }
            }
            var targetUrl = null;
            if(i.proxyUrl && i.proxyUrl.length > 0){
                targetUrl = url;
                url = i.proxyUrl;
            }
            if(i.onBeforeSend && typeof i.onBeforeSend=="function"){
                metrics = i.onBeforeSend(metrics);
                if(!metrics){
                    return;
                }
            }
            if(i.checkInactivity(i)){
                return;
            }
            if(navigator.sendBeacon && !useXhr && !targetUrl){
                navigator.sendBeacon(url, metrics);
            }else{
                var xhr = ("withCredentials" in new XMLHttpRequest()) ? new XMLHttpRequest() : (typeof XDomainRequest != "undefined") ? new XDomainRequest() : null; //No I18N
                if (!xhr) {
                    return false;
                }
                xhr.open('POST', url,true);
                if(targetUrl){
                    xhr.setRequestHeader('X-Target', targetUrl.indexOf('//') === 0 ? window.location.protocol + targetUrl : targetUrl);
                }
                xhr.send(metrics);
            }
        }catch (e) {}
    },

    getModuleType: function(url){
        var moduleType = "";//No I18N
        if(url.indexOf("rum/data") > -1){
            moduleType = "performance";//No I18N
        }else if(url.indexOf("rum/trace") > -1){
            moduleType = "performance";//No I18N
        }else if(url.indexOf("rum/resource") > -1){
            moduleType = "resource";//No I18N
        }else if(url.indexOf("rum/record") > -1){
            moduleType = "sessions";//No I18N
        }else if(url.indexOf("rum/wcv") > -1){
            moduleType = "wcv";//No I18N
        }
        return moduleType;
    },

    checkInactivity: function(i){
        var currentTime = s247CommonModule.getCurrentMillis();
        var inactivityDuration = currentTime - i.lastActivityTime;

        if (inactivityDuration > s247CommonModule.CONSTANTS.INACTIVITY_LIMIT) {
            return true;
        }
        return false;
    }

};

Object.keys = Object.keys || function(o, k, r) {
    r = [];
    for (k in o) r.hasOwnProperty.call(o, k) && r.push(k);
    return r;
};

var S247RUMConfigManager = function(i){
    if (typeof window.s247r != "undefined") {
        // Overwrite the window.s247r object with the configManager
        s247ConfigModule.processQueue(window.s247r.q,i);
        window.s247r = s247ConfigModule;
        if(i.recordSession && (s247ConfigModule && !s247ConfigModule.getConfig("recordSession"))){
            s247ConfigModule.setConfig("recordSession",{"recordingSamplingRate": i.recordingSamplingRate,//No I18N
                "trackEvents":i.trackEvents,//No I18N
                "trackConsoleEvents":i.trackConsoleEvents,//No I18N
                "maskAllInput":i.maskAllInput,//No I18N
                "maskAllText":i.maskAllText,//No I18N
                "collectNetworkDetails":i.collectNetworkDetails,//No I18N
                "allowedNetworkUrls": i.allowedNetworkUrls,//No I18N
                "captureAllWaterfalls": true //No I18N
            });
        }
        else if(i.trackResources){
            s247ConfigModule.setConfig("waterfallsSamplingRate", s247CommonModule.CONSTANTS.TRACK_RESOURCES_SAMPLING_RATE);//No I18N
        }
    }
}
/*----------execution starts from here------------*/

var initInsightEvent = function(i, w, a) {
    var p = w[a];
    if (a == "onload" || a == "console" || a == "visibilitychange" || a=="onpagehide" || a=="unload") {
        i.eventHandlers[a]();
    } else {
        w[a] = function(arg) {
            try {
                arg = arg || window.event;
                i.eventHandlers["on" + arg.type](arg);
            } catch (e) {}
            if ("function" == typeof p) { // No I18N
                return p.apply(this, arguments);
            }
        }
    }

    if (typeof window.insightMeRUM != "undefined") {
        window.insightMeRUM.initMetricsFunction();
    }
};
(function(i, a) {
    //S247RumQueueImpl(i);
    S247RUMConfigManager(i);
    var isAllowed = true,
        pDomain;
    var m = window.location.href.match(s247CommonModule.CONSTANTS.HOST_NAME_WITH_PORT_REGEX);
    if (m && m[2]) {
        pDomain = m[2];
    }
    for (var d = 0; d < i.excludedDomains.length; d++) {
        if (i.excludedDomains[d] != "" && pDomain.indexOf(i.excludedDomains[d]) >= 0) {
            isAllowed = false;
        }
    }
    if (i.isCorsSupported && isAllowed && !i.colHelpers.isUserAgentBlocked(i.excludedUserAgents) && i.colHelpers.shouldCollectMetrics(i)) {
        for (var j = 0; j < a.length; j++) {
            if (typeof window[a[j]] != "undefined") {
                initInsightEvent(i, window, a[j]);
            } else if (typeof document[a[j]] != "undefined") {
                initInsightEvent(i, document, a[j]);
            } else {
                i.eventHandlers[a[j]](arguments);
            }
        }
        s247WebvitalsModule.init();
    }

})(insightRUM, function() {

        insightRUM.initialize(insightRUM);
        var arr = s247CommonModule.CONSTANTS.EVENT_LISTENERS;
        if (window.performance && !!window.performance.getEntries && (insightRUM.sendAjaxCalls || insightRUM.isSPA || insightRUM.includeCrossDomainAjaxCalls)) {
            arr.push("ajax_open");
        }
        if (insightRUM.isSPA) {
            var usePushState = !!window.history && !!window.history.pushState;
            arr = arr.concat(insightRUM.colHelpers.addSPAEvents(usePushState));
        }
        return arr;



}());

if (!JSON) {
    var JSON;
    JSON = {};
    (function() {
        "use strict"; // No I18N
        var escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                '\b': '\\b',// No I18N
                '\t': '\\t',// No I18N
                '\n': '\\n',// No I18N
                '\f': '\\f',// No I18N
                '\r': '\\r',// No I18N
                '"': '\\"',
                '\\': '\\\\'
            },
            rep;
        function quote(string) {
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
                var c = meta[a];
                return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);//No I18N
            }) + '"' : '"' + string + '"';
        }

        function str(key, holder) {
            var i, k, v, length, mind = gap,
                partial, value = holder[key];
            if (value && typeof value === 'object' && typeof value.toJSON === 'function') { //No I18N
                value = value.toJSON(key);
            }
            if (typeof rep === 'function') { // No I18N
                value = rep.call(holder, key, value);
            }
            switch (typeof value) {
                case 'string':
                    return quote(value);
                case 'number':
                    return isFinite(value) ? String(value) : 'null'; // No I18N
                case 'boolean':
                case 'null':
                    return String(value);
                case 'object':
                    if (!value) {
                        return 'null';// No I18N
                    }
                    gap += indent;
                    partial = [];
                    if (Object.prototype.toString.apply(value) === '[object Array]') { //No I18N
                        length = value.length;
                        for (i = 0; i < length; i += 1) {
                            partial[i] = str(i, value) || 'null'; // No I18N
                        }
                        v = partial.length === 0 ? '[]' : gap ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' : '[' + partial.join(',') + ']'; //No I18N
                        gap = mind;
                        return v;
                    }
                    if (rep && typeof rep === 'object') { // No I18N
                        length = rep.length;
                        for (i = 0; i < length; i += 1) {
                            if (typeof rep[i] === 'string') { // No I18N
                                k = rep[i];
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ': ' : ':') + v);
                                }
                            }
                        }
                    } else {
                        for (k in value) {
                            if (Object.prototype.hasOwnProperty.call(value, k)) {
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ': ' : ':') + v);
                                }
                            }
                        }
                    }
                    v = partial.length === 0 ? '{}' : gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' : '{' + partial.join(',') + '}';
                    gap = mind;
                    return v;
            }
        }

        if (typeof JSON.stringify !== 'function') { // No I18N
            JSON.stringify = function(value, replacer, space) {
                var i;
                gap = '';
                indent = '';
                if (typeof space === 'number') { // No I18N
                    for (i = 0; i < space; i += 1) {
                        indent += ' ';
                    }
                } else if (typeof space === 'string') // No I18N
                {
                    indent = space;
                }
                rep = replacer;
                if (replacer && typeof replacer !== 'function' && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) { //No I18N
                    throw new Error('JSON.stringify'); // No I18N
                }
                return str('', {
                    '': value
                });
            };
        }
    }());
}
}
