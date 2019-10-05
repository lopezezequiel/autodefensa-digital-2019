
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"316",
  
  "macros":[{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",0],8,16],"?\"#\"+",["escape",["macro",0],8,16],":\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.getElementsByClassName(\"gtm_signup_register_form\").length})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/(.*)\\.heroku\\.com\/.exec(",["escape",["macro",3],8,16],")[1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=\"vimeo.com\/video\",b=document.getElementsByTagName(\"iframe\"),a;for(a=0;a\u003Cb.length;a++)if(-1\u003Cb[a].getAttribute(\"src\").indexOf(c))return!0;return!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=\"play.vidyard.com\",b=document.getElementsByTagName(\"iframe\"),a;for(a=0;a\u003Cb.length;a++)if(-1\u003Cb[a].getAttribute(\"src\").indexOf(c))return!0;return!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.pathname+window.location.search+window.location.hash})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",8],8,16],"===",["escape",["macro",9],8,16],"?!1:!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(d,e,f,b,c){if(d\u0026\u0026e){b=b?\"; path\\x3d\"+b:\"\";c=c?\"; domain\\x3d\"+c:\"\";var a=\"\";f\u0026\u0026(a=new Date,a.setTime(a.getTime()+f),a=\"; expires\\x3d\"+a.toUTCString());document.cookie=d+\"\\x3d\"+e+a+b+c}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.getElementById(\"list_93478\").checked?\"checked\":\"unchecked\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003CjQuery(\".gs-no-results-result\").length|\"block\"==jQuery(\".js-search-no-results\").css(\"display\"))var a=\"No Result\";else 0\u003CjQuery(\".gsc-result-info\").length?(a=jQuery(\".gsc-result-info\").text(),a=a.match(\/\\s(.+ results)\/g)[0].trim()):a=0\u003CjQuery(\".js-search-results \\x3e li\").length?jQuery(\".js-search-results \\x3e li\").length+\" results\":0\u003CjQuery(\".addon.search-total-count \\x3e a \\x3e span \\x3e span\").length?\"[Elements] Add-on results: \"+jQuery(\".addon.search-total-count \\x3e a \\x3e span \\x3e span\")[0].innerText+\n\", Button results: \"+jQuery(\".button.search-total-count \\x3e a \\x3e span \\x3e span\")[0].innerText+\", Buildpack results: \"+jQuery(\".buildpack.search-total-count \\x3e a \\x3e span \\x3e span\")[0].innerText:void 0;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(f){var g=[{name:\"EMAILPATH\",regex:\/(^.*?(?=\\\/[a-z0-9._-]+@)\\\/)(?:[a-z0-9._-]+?@[a-z0-9._-]+\\.[a-z0-9._-]{2,4})(.*?$)\/ig},{name:\"EMAILSEARCH\",regex:\/q=([a-z0-9._-]+?@[a-z0-9._-]+\\.[a-z0-9._-]{2,4})\u0026?\/ig},{name:\"EMAILADDRESS\",regex:\/email([\\-_])?Address=(.*@([^\u0026\\s]*))\u0026?\/ig},{name:\"EMAIL\",regex:\/email=(.*@([^\u0026\\s]+))\u0026?\/ig},{name:\"FIRSTNAME\",regex:\/first([\\-_])?Name=([^\u0026\\s]*)\u0026?\/ig},{name:\"LASTNAME\",regex:\/last([\\-_])?Name=([^\u0026\\s]*)\u0026?\/ig},{name:\"NAME\",regex:\/name=([^\u0026\\s]*)\u0026?\/ig},\n{name:\"ADDRESS\",regex:\/address([1-2])?=([^\u0026\\s]*)\u0026?\/ig},{name:\"PHONENUMBER\",regex:\/phone([\\-_])?number=([^\u0026\\s]*)\u0026?\/ig},{name:\"PHONE\",regex:\/phone=([^\u0026\\s]*)\u0026?\/ig},{name:\"CONFIRM([-_])?PASSWORD\",regex:\/confirmPassword=([^\u0026\\s]*)\u0026?\/ig},{name:\"PASSWORD\",regex:\/password=([^\u0026\\s]*)\u0026?\/ig}],h=f.get(\"sendHitTask\"),a,c,d,b;f.set(\"sendHitTask\",function(e){c=e.get(\"hitPayload\").split(\"\\x26\");for(a=0;a\u003Cc.length;a++){d=c[a].split(\"\\x3d\");try{b=decodeURIComponent(decodeURIComponent(d[1]))}catch(k){b=decodeURIComponent(d[1])}g.forEach(function(a){b=\n\"EMAILPATH\"==a.name?b.replace(a.regex,\"$1[PII REMOVED]$2\"):b.replace(a.regex,\"\")});d[1]=encodeURIComponent(b);c[a]=d.join(\"\\x3d\")}e.set(\"hitPayload\",c.join(\"\\x26\"),!0);h(e)})}})();"]
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__c",
      "vtp_value":"auto"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var e=[\"email\",\"ehash\",\"email_id\",\"authuser\"],a=",["escape",["macro",7],8,16],",b=document.createElement(\"a\");b.href=a;if(b.search){a=b.search.replace(\"?\",\"\\x26\");var c;for(c=0;c\u003Ce.length;c++){var d=e[c];d=new RegExp(\"\\x26\"+d+\"[^\\x26#]*\",\"g\");a=a.replace(d,\"\\x26\")}a=\"\\x26\"===a[0]?a.slice(1):\"piiremoved\";b.search=a}return b.pathname+b.search+b.hash})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"heroku_session"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",20],
      "vtp_defaultValue":"NotLoggedIn",
      "vtp_map":["list",["map","key","1","value","LoggedIn"]]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"c",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"blogChannel"
    },{
      "function":"__c",
      "vtp_value":"UA-39697570-1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventInteraction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCat"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"button-impressions"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"button-clicks"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",4],
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key","devcenter","value","UA-39697570-3"],["map","key","www","value","UA-39697570-4"],["map","key","dashboard","value","UA-39697570-5"],["map","key","id","value","UA-39697570-6"],["map","key","addons","value","UA-39697570-7"],["map","key","beta","value","UA-39697570-11"],["map","key","blog","value","UA-39697570-12"],["map","key","dataclips","value","UA-39697570-13"],["map","key","discussion","value","UA-39697570-14"],["map","key","events","value","UA-39697570-15"],["map","key","help","value","UA-39697570-16"],["map","key","toolbelt","value","UA-39697570-17"],["map","key","jobs","value","UA-39697570-18"],["map","key","lp","value","UA-39697570-19"],["map","key","waza","value","UA-39697570-20"],["map","key","partners","value","UA-39697570-21"],["map","key","postgres","value","UA-39697570-22"],["map","key","redeem","value","UA-39697570-23"],["map","key","status","value","UA-39697570-25"],["map","key","success","value","UA-39697570-26"],["map","key","signup","value","UA-39697570-31"],["map","key","elements","value","UA-39697570-32"],["map","key","engineering","value","UA-39697570-33"],["map","key","connect","value","UA-39697570-34"],["map","key","redis","value","UA-39697570-36"],["map","key","sso","value","UA-39697570-38"],["map","key","kb","value","UA-39697570-40"],["map","key","data","value","UA-39697570-41"],["map","key","jp","value","UA-39697570-44"],["map","key","brand","value","UA-39697570-46"]]
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__r"
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialTarget"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialNetwork"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.value"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",15],
      "vtp_defaultValue":["macro",15],
      "vtp_map":["list",["map","key","\/home","value","\/"],["map","key","\/index.html","value","\/"]]
    },{
      "function":"__c",
      "vtp_value":"UA-39697570-25"
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__t"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",4],
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key","dashboard","value","UA-2989055-26"],["map","key","devcenter","value","UA-2989055-24"],["map","key","toolbelt","value","UA-2989055-19"],["map","key","signup","value","UA-2989055-36"],["map","key","elements","value","UA-2989055-38"],["map","key","connect","value","UA-2989055-37"],["map","key","status","value","UA-2989055-22"],["map","key","jp","value","UA-39697570-44"]]
    },{
      "function":"__c",
      "vtp_value":"UA-2989055-1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"virtualPath"
    },{
      "function":"__c",
      "vtp_value":"51b6483a434bba0f0c000016"
    },{
      "function":"__e"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__cid"
    },{
      "function":"__hid"
    }],
  "tags":[{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"herokustatus.com",
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",18]],["map","fieldName","page","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]],["map","index","3","dimension",["macro",22]],["map","index","5","dimension",["macro",13]],["map","index","8","dimension",["macro",23]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",24],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":5
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",25],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",26],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",27],
      "vtp_eventLabel":["macro",28],
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_doubleClick":false,
      "vtp_eventValue":["macro",29],
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",18]],["map","fieldName","page","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_metric":["list",["map","index","2","metric",["macro",30]],["map","index","3","metric",["macro",31]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",24],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":6
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",18]],["map","fieldName","page","value",["macro",15]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]],["map","index","3","dimension",["macro",22]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",24],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":7
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",18]],["map","fieldName","page","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]],["map","index","2","dimension",["macro",22]],["map","index","4","dimension",["macro",13]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":30
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",18]],["map","fieldName","page","value","\/virtual\/registration\/registered"],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]],["map","index","3","dimension",["macro",22]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",24],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":34
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionValue":"1.00",
      "vtp_currencyCode":"USD",
      "vtp_conversionId":"992316833",
      "vtp_conversionLabel":"Y-wFCP-02wUQoZuW2QM",
      "vtp_url":["macro",33],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":45
    },{
      "function":"__cegg",
      "once_per_event":true,
      "vtp_usersNumericId":"00338119",
      "tag_id":57
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/pixel.mathtag.com\/event\/img?mt_id=814352\u0026mt_adid=131453\u0026v1=\u0026v2=\u0026v3=\u0026s1=\u0026s2=\u0026s3=",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",34],
      "tag_id":68
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/pixel.mathtag.com\/event\/img?mt_id=848607\u0026mt_adid=131453\u0026v1=\u0026v2=\u0026v3=\u0026s1=\u0026s2=\u0026s3=",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",34],
      "tag_id":75
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/pixel.mathtag.com\/event\/img?mt_id=849890\u0026mt_adid=131453\u0026v1=\u0026v2=\u0026v3=\u0026s1=\u0026s2=\u0026s3=",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",34],
      "tag_id":77
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"ErrorPage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",17],
      "vtp_eventLabel":["macro",36],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",18]],["map","fieldName","page","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",24],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":80
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"ErrorPage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",17],
      "vtp_eventLabel":["macro",36],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",18]],["map","fieldName","page","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":84
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",25],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",26],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",27],
      "vtp_eventLabel":["macro",28],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_eventValue":["macro",29],
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",18]],["map","fieldName","page","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":86
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",18]],["map","fieldName","page","value",["macro",15]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]],["map","index","2","dimension",["macro",22]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":88
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",18]],["map","fieldName","page","value","\/virtual\/registration\/registered"],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]],["map","index","2","dimension",["macro",22]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":90
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialActionTarget":["macro",37],
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",18]],["map","fieldName","page","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_socialAction":["macro",38],
      "vtp_enableLinkId":true,
      "vtp_socialNetwork":["macro",39],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]]],
      "vtp_trackingId":["macro",24],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "tag_id":95
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",18]],["map","fieldName","page","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialAction":["macro",38],
      "vtp_enableLinkId":true,
      "vtp_socialActionTarget":["macro",37],
      "vtp_socialNetwork":["macro",39],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]]],
      "vtp_trackingId":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "tag_id":96
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"992316833",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",33],
      "tag_id":98
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Form",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Submit",
      "vtp_eventLabel":["template","Keep me up to Date: Newsletter - ",["macro",12]],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",18]],["map","fieldName","page","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",24],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":103
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Form",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["macro",42],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",18]],["map","fieldName","page","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",24],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":104
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Form",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Re-subscribe",
      "vtp_eventLabel":"Newsletter Re-subscribe",
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",18]],["map","fieldName","page","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-39697570-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":105
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",43]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",24],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":108
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"heroku.com",
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",18]],["map","fieldName","page","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]],["map","index","3","dimension",["macro",22]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",24],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":109
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"ErrorPage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",17],
      "vtp_eventLabel":["macro",36],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",18]],["map","fieldName","page","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",44],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":110
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",25],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",26],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",27],
      "vtp_eventLabel":["macro",28],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_eventValue":["macro",29],
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",18]],["map","fieldName","page","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",44],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":111
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",18]],["map","fieldName","page","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]],["map","index","2","dimension",["macro",22]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",44],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":112
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",18]],["map","fieldName","page","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialAction":["macro",38],
      "vtp_enableLinkId":true,
      "vtp_socialActionTarget":["macro",37],
      "vtp_socialNetwork":["macro",39],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]]],
      "vtp_trackingId":["macro",44],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "tag_id":113
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",18]],["map","fieldName","page","value",["macro",15]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]],["map","index","2","dimension",["macro",22]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",44],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":114
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",18]],["map","fieldName","page","value","\/virtual\/registration\/registered"],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]],["map","index","2","dimension",["macro",22]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",44],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":115
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"herokustatus.com",
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",18]],["map","fieldName","page","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_metric":["list",["map","index","1","metric","1"]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]],["map","index","3","dimension",["macro",22]],["map","index","5","dimension",["macro",13]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",24],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":116
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",18]],["map","fieldName","page","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_metric":["list",["map","index","1","metric","1"]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]],["map","index","2","dimension",["macro",22]],["map","index","4","dimension",["macro",13]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":117
    },{
      "function":"__hl",
      "tag_id":134
    },{
      "function":"__hl",
      "tag_id":135
    },{
      "function":"__cl",
      "tag_id":136
    },{
      "function":"__cl",
      "tag_id":137
    },{
      "function":"__cl",
      "tag_id":138
    },{
      "function":"__hl",
      "tag_id":139
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"l4ajt\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=l4ajt\u0026amp;p_id=Twitter\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":35
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003EpiAId=\"37622\";piCId=\"30300\";(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.src=(\"https:\"==document.location.protocol?\"https:\/\/pi\":\"http:\/\/cdn\")+\".pardot.com\/pd.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":37
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/pixel.mathtag.com\/event\/js?mt_id=622301\u0026amp;mt_adid=131453\u0026amp;v1=\u0026amp;v2=\u0026amp;v3=\u0026amp;s1=\u0026amp;s2=\u0026amp;s3=\u0026amp;skipsync=13\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":40
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/pixel.mathtag.com\/event\/js?mt_id=622287\u0026amp;mt_adid=131453\u0026amp;v1=\u0026amp;v2=\u0026amp;v3=\u0026amp;s1=\u0026amp;s2=\u0026amp;s3=\u0026amp;\u0026amp;mt_nsync=1\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":41
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/pixel.mathtag.com\/event\/js?mt_id=622288\u0026amp;mt_adid=131453\u0026amp;v1=\u0026amp;v2=\u0026amp;v3=\u0026amp;s1=\u0026amp;s2=\u0026amp;s3=\u0026amp;skipsync=13\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":42
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/pixel.mathtag.com\/event\/js?mt_id=622290\u0026amp;mt_adid=131453\u0026amp;v1=\u0026amp;v2=\u0026amp;v3=\u0026amp;s1=\u0026amp;s2=\u0026amp;s3=\u0026amp;skipsync=13\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/pixel.mathtag.com\/event\/js?mt_id=622289\u0026amp;mt_adid=131453\u0026amp;v1=\u0026amp;v2=\u0026amp;v3=\u0026amp;s1=\u0026amp;s2=\u0026amp;s3=\u0026amp;skipsync=13\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":44
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"l4sun\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=l4sun\u0026amp;p_id=Twitter\"\u003E\n  \u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=l4sun\u0026amp;p_id=Twitter\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":46
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"l5cdw\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=l5cdw\u0026amp;p_id=Twitter\"\u003E\n  \u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=l5cdw\u0026amp;p_id=Twitter\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"l4iup\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=l4iup\u0026amp;p_id=Twitter\"\u003E\n  \u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=l4iup\u0026amp;p_id=Twitter\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":49
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript data-gtmsrc=\"\/\/pixel.mathtag.com\/event\/js?mt_id=687393\u0026amp;mt_adid=131453\u0026amp;v1=\u0026amp;v2=\u0026amp;v3=\u0026amp;s1=\u0026amp;s2=\u0026amp;s3=\u0026amp;skipsync=13\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":53
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){function f(a){var b=\/[?\u0026]?([^=]c)=([^\u0026]*)\/;a=b.exec(a)||[];return a=decodeURIComponent(a[2])}function g(a){var b=\"; \"+document.cookie;a=b.split(\"; \"+a+\"\\x3d\");return 2==a.length?a.pop().split(\";\").shift():void 0}function h(a,b){var c=new Date;c.setTime(c.getTime()+12096E5);c=\"; expires\\x3d\"+c.toGMTString();document.cookie=a+\"\\x3d\"+b+c+\";domain\\x3d.heroku.com;path\\x3d\/\"}var e=\"campaign\",d=g(e);\"undefined\"==typeof d\u0026\u0026(d=f(document.location.search),\"undefined\"!==d\u0026\u0026h(e,d))}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":60
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/pixel.mathtag.com\/event\/js?mt_id=805084\u0026amp;mt_adid=131453\u0026amp;v1=\u0026amp;v2=\u0026amp;v3=\u0026amp;s1=\u0026amp;s2=\u0026amp;s3=\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":65
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/pixel.mathtag.com\/event\/js?mt_id=805085\u0026amp;mt_adid=131453\u0026amp;v1=\u0026amp;v2=\u0026amp;v3=\u0026amp;s1=\u0026amp;s2=\u0026amp;s3=\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":66
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var d=function(a){a=new RegExp(\"[; ]\"+a+\"\\x3d([^\\\\s;]*)\");if(a=(\" \"+document.cookie).match(a))return unescape(a[1])};if(!d(\"jbfp\")){var c=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15);document.cookie=\"jbfp\\x3d\"+(new Date).getTime()+\"-\"+c+\";domain\\x3dheroku.com;path\\x3d\/;max-age\\x3d31536000\"}var f=function(){var a=-9,b=\"undefined\"!==typeof window.performance?window.performance:!1,c=(b=b?\"undefined\"!==typeof b.timing?b.timing:!1:!1)?\"undefined\"!==\ntypeof b.loadEventEnd\u0026\u0026\"undefined\"!==b.navigationStart?!0:!1:!1;c\u0026\u0026(a=Math.ceil(b.loadEventEnd-b.navigationStart),0\u003Ea\u0026\u0026(a=-1));return a},g=function(){var a=!1,b=navigator.userAgent||navigator.vendor||window.opera;if(\/(android|bb\\d+|meego).+mobile|avantgo|bada\\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino\/i.test(b)||\n\/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-\/i.test(b.substr(0,\n4)))a=!0;return a};c=function(){var a=!1,b=document.querySelectorAll(\"[data-uuid]\");0\u003Cb.length\u0026\u0026(a=b[0].getAttribute(\"data-uuid\"));return a};c=c();var h=document.referrer,e=d(\"jbfp\");d=d(\"heroku_session\");f=f();var k=g();g=document.createElement(\"img\");e=\"https:\/\/jambox.heroku.com\/e?url\\x3d\"+escape(document.location.href)+\"\\x26fp\\x3d\"+e+\"\\x26li\\x3d\"+d+\"\\x26dtls[page_load_timing]\\x3d\"+f+\"\\x26dtls[mobile_flag]\\x3d\"+k;h\u0026\u0026(e+=\"\\x26ref\\x3d\"+escape(h));c\u0026\u0026(e+=\"\\x26dtls[core_user_uuid]\\x3d\"+c);g.src=e})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":78
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"load\",function(h){(function(c,e,g){e=c(e);var f={iframes:[],eventMarker:{},getIframeSrc:function(a){return c(a).attr(\"src\").split(\"?\")[0]},getIframeId:function(a){return c(a).attr(\"id\")},removeUndefinedIframes:function(a){var b=c(a).attr(\"id\");a=c(a).attr(\"src\");if(-1===a.indexOf(\"player_id\"))return!1;if(this.eventMarker[b])return!0;this.eventMarker[b]={progress25:!1,progress50:!1,progress75:!1,videoPlayed:!1,videoPaused:!1,videoResumed:!1,videoSeeking:!1,videoCompleted:!1,\ntimePercentComplete:0};return!0},init:function(){var a=c('iframe[src*\\x3d\"player.vimeo.com\/video\"]');this.iframes=c.grep(a,c.proxy(this.removeUndefinedIframes,this));c.each(this.iframes,c.proxy(this.handleOnReady,this))},onMessageReceived:function(a){if(\/^https?:\\\/\\\/player\\.vimeo\\.com\/.test(a.originalEvent.origin)){a=JSON.parse(a.originalEvent.data);var b=c(\"#\"+a.player_id)[0];switch(a.event){case \"playProgress\":this.onPlayProgress(a.data,b);break;case \"seek\":this.onSeek(b);break;case \"play\":this.onPlay(b);\nbreak;case \"pause\":this.onPause(b);break;case \"finish\":this.onFinish(b)}}},post:function(a,b,d){a=JSON.stringify({method:a,value:b});b=c(d).attr(\"src\").split(\"?\")[0];d.contentWindow.postMessage(a,b)},handleOnReady:function(a,b){this.post(\"addEventListener\",\"play\",b);this.post(\"addEventListener\",\"seek\",b);this.post(\"addEventListener\",\"pause\",b);this.post(\"addEventListener\",\"finish\",b);this.post(\"addEventListener\",\"playProgress\",b)},onFinish:function(a){var b=this.getIframeId(a);this.eventMarker[b].videoCompleted||\n(this.sendEvent(a,\"Completed video\"),this.eventMarker[b].videoCompleted=!0)},onSeek:function(a){var b=this.getIframeId(a);this.eventMarker[b].videoSeeking||(this.sendEvent(a,\"Skipped video forward or backward\"),this.eventMarker[b].videoSeeking=!0)},onPlay:function(a){var b=this.getIframeId(a);this.eventMarker[b].videoPlayed||(this.sendEvent(a,\"Started video\"),this.eventMarker[b].videoPlayed=!0);!this.eventMarker[b].videoResumed\u0026\u0026this.eventMarker[b].videoPaused\u0026\u0026(this.sendEvent(a,\"Resumed video\"),\nthis.eventMarker[b].videoResumed=!0)},onPause:function(a){var b=this.getIframeId(a);99\u003Ethis.eventMarker[b].timePercentComplete\u0026\u0026!this.eventMarker[b].videoPaused\u0026\u0026(this.sendEvent(a,\"Paused video\"),this.eventMarker[b].videoPaused=!0)},onPlayProgress:function(a,b){var d=this.getIframeId(b);this.eventMarker[d].timePercentComplete=Math.round(100*a.percent);if(24\u003Cthis.eventMarker[d].timePercentComplete\u0026\u0026!this.eventMarker[d].progress25){var c=\"Played video: 25%\";this.eventMarker[d].progress25=!0}49\u003Cthis.eventMarker[d].timePercentComplete\u0026\u0026\n!this.eventMarker[d].progress50\u0026\u0026(c=\"Played video: 50%\",this.eventMarker[d].progress50=!0);74\u003Cthis.eventMarker[d].timePercentComplete\u0026\u0026!this.eventMarker[d].progress75\u0026\u0026(c=\"Played video: 75%\",this.eventMarker[d].progress75=!0);c\u0026\u0026this.sendEvent(b,c)},sendEvent:function(a,b){var c=this.getIframeSrc(a);g.push({event:\"trackEvent\",eventCat:\"Vimeo\",eventAction:b,eventLabel:c,eventValue:void 0,eventInteraction:!1})}};f.init();e.on(\"message\",c.proxy(f.onMessageReceived,f))})(jQuery,window,window.dataLayer)});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":93
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(t){function u(a){var b=[0,25,50,75,90],m=b.slice(0),e=[0,0],g=0,h=!1,l=c.create();a.on(\"timeupdate\",function(b){var c=0;var f=Math.floor(b);if(!(h||\"object\"!=typeof a.metadata||f\u003C=e[1])){e[1]=b;b=l.insertOne(e);f=l;var d,k=null,n=[];for(d=0;d\u003Cf.length;++d)!k||k[1]\u003Cf[d][0]?(k\u0026\u0026n.push(k),k=[f[d][0],f[d][1]]):f[d][1]\u003Ek[1]\u0026\u0026(k[1]=f[d][1]);f=(k\u0026\u0026n.push(k),n);for(d=0;d\u003Cf.length;++d)c+=f[d][1]-f[d][0];(l.remove(b),c=c\/a.metadata.chapters_attributes[g].video_attributes.length_in_seconds*100,c\u003E=\nm[0])\u0026\u0026\"undefined\"!==typeof dataLayer\u0026\u0026\"function\"===typeof dataLayer.push\u0026\u0026dataLayer.push({event:\"trackEvent\",eventCat:\"Vidyard\",eventAction:\"Played video: \"+m.shift()+\"%\",eventLabel:a.metadata.chapters_attributes[g].video_attributes.name,eventValue:void 0,eventInteraction:!0})}});a.on(\"beforeSeek\",function(a){!1===h\u0026\u0026(e[1]=a.start);h=!0});a.on(\"play\",function(a){l.insertOne(e.slice(0));e[0]=a;e[1]=a;h=!1});a.on(\"chapterComplete\",function(){m=b.slice(0);g=a.getCurrentChapter();e=[0,0];l=c.create();\nh=!1})}var c=function(){this._compare=function(a,b){return a[0]\u003Cb[0]?-1:a[0]\u003Eb[0]?1:a[1]\u003Cb[1]?-1:a[1]\u003Eb[1]?1:0}};c.create=function(){return new c};c.prototype=[];c.prototype.constructor=Array.prototype.constructor;c.prototype.insertOne=function(a){var b=this.bsearch(a);return this.splice(b+1,0,a),b+1};c.prototype.remove=function(a){return this.splice(a,1),this};c.prototype.bsearch=function(a){if(!this.length)return-1;for(var b,c,e,g=0,h=this.length;1\u003Ch-g;){if(b=Math.floor((g+h)\/2),c=this[b],e=this._compare(a,\nc),0===e)return b;0\u003Ce?g=b:h=b}return 0===g\u0026\u00260\u003Cthis._compare(this[0],a)?-1:g};var q=!0;try{var p=new t.players}catch(a){throw Error(\"The Vidyard API must be loaded before this script can execute\");}for(var r in p)p.hasOwnProperty(r)\u0026\u0026(u(p[r]),q=!1);q\u0026\u0026console.warn(\"No Vidyard Players found. (include this script below player embed codes)\")}(Vidyard);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":94
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg src=\"\/\/bat.bing.com\/action\/0?ti=5116236\u0026amp;Ver=2\" height=\"0\" width=\"0\" style=\"display:none; visibility: hidden;\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":97
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuf3v\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=nuf3v\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":102
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=998836190199866\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":106
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg src=\"https:\/\/traffic.outbrain.com\/network\/trackpxl?advid= 54996\u0026amp;action=view \" height=\"1\" width=\"1\" border=\"0\" alt=\"\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":107
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$(\".heroku-footer-social a\").each(function(b,c){if(-1!=this.href.toLowerCase().indexOf(\"heroku.com\/home\")){var a=this.textContent.toLowerCase().indexOf(\"english\")?\"Japanese Site\":\"English Site\";this.setAttribute(\"onclick\",\"dataLayer.push({'event': 'trackEvent', 'eventCat': 'Internal Links', 'eventAction': 'Change Language', 'eventLabel': 'Switch to \"+a+\"', 'eventValue': 0, 'eventInteraction': 0})\")}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":121
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar capterra_vkey=\"cff5d90a9d238c2860fb1e3bc012347e\",capterra_vid=\"2110853\",capterra_prefix=\"https:\"==document.location.protocol?\"https:\/\/ct.capterra.com\":\"http:\/\/ct.capterra.com\";(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=capterra_prefix+\"\/capterra_tracker.js?vid\\x3d\"+capterra_vid+\"\\x26vkey\\x3d\"+capterra_vkey;var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":124
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Evar axel=Math.random()+\"\",a=1E13*axel;document.write('\\x3cimg src\\x3d\"https:\/\/pubads.g.doubleclick.net\/activity;xsp\\x3d4387278;ord\\x3d'+a+'?\" width\\x3d1 height\\x3d1 border\\x3d0\/\\x3e');\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"https:\/\/pubads.g.doubleclick.net\/activity;xsp=4387278;ord=1?\" width=\"1\" height=\"1\" border=\"0\/\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":125
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"1ccc6f7511df4a33997bb1cdc82b573b\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/1ccc6f7511df4a33997bb1cdc82b573b\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":126
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"1ccc6f7511df4a33997bb1cdc82b573b\");qp(\"track\",\"ViewContent\");qp(\"track\",\"Generic\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":127
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar structDataTest=document.createElement(\"script\");structDataTest.type=\"application\/ld+json\";\nstructDataTest.text=JSON.stringify({\"@context\":\"http:\/\/schema.org\",\"@type\":\"Event\",name:\"Kafka Summit NYC\",description:\"The Heroku-sponsored Kafka Summit is the premier event for data architects, engineers, devops professionals, and developers who want to learn about streaming data. It brings the Apache Kafka community together to share best practices, write code and discuss the future of streaming technologies.\",startDate:\"2018-04-02\",location:{\"@type\":\"Place\",name:\"Kafka Summit NYC\",address:{\"@type\":\"PostalAddress\",\nstreetAddress:\"Pier 60 - Chelsea Piers\",addressLocality:\"New York\",postalCode:\"10011\",addressRegion:\"NY\",addressCountry:\"US\"}}});document.querySelector(\"head\").appendChild(structDataTest);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":129
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a=a||window.jQuery;if(\"undefined\"!==typeof window.jQuery.fn){window.dataLayer=window.dataLayer||[];window.Heroku=window.Heroku||{};window.Heroku.Trackable=window.Heroku.Trackable||function(){};var l=function(b,c){var d=JSON.stringify({category:c.category,action:c.action,label:c.label});a(b).attr(\"data-trackable\",d);a(b).attr(\"data-trackable-nav\",!0)},h;\"www.heroku.com\"===document.location.hostname\u0026\u0026(h=a(\"#navigation a\"));\"devcenter.heroku.com\"===document.location.hostname\u0026\u0026(h=a(\"#primary-header .main-nav a\"));\nfor(var k=0;k\u003Ch.length;k+=1){var f=[],g=h[k],b=a(g).parents(\".has-dropdown\"),d=g.innerHTML,e=a(g).hasClass(\"glostick__menu__item\")?!0:!1;-1===d.indexOf(\"\\x3c\")\u0026\u0026-1===d.indexOf(\"\\x3e\")\u0026\u0026f.push(d);for(d=0;d\u003Cb.length;d+=1){var c=a(b[d])[0];c=a(c).find(\"a\")[0].innerHTML;if(\"More\"===c){if(c=a(g).parents(\"ul\")[0],c=a(c).siblings(\".more-title\")[0],\"undefined\"!==typeof c){var n=a(\".nav-more\").is(\":visible\")||!a(\".nav-more\").is(\":hidden\");f.push(c.innerHTML);n\u0026\u0026f.push(\"More\")}}else-1===f.indexOf(c)\u0026\u0026-1===\nc.indexOf(\"\\x3c\")\u0026\u0026-1===c.indexOf(\"\\x3e\")\u0026\u0026f.push(c)}f.reverse();if(0\u003Cf.length){var m=0;d=function(){for(var a=\"\",b=0;b\u003Cf.length;b+=1)0\u003Cb\u0026\u0026(m+=1,a+=\" \\x3e \"),a+=f[b];return a}();b=e?\"Glostick Menu\":\"Top Navigation Menu\";e=e?\"Glostick Click\":\"Level \"+m;b={category:b,action:e,label:d};l(g,b)}}h=a(\"#heroku-footer a\");for(k=0;k\u003Ch.length;k+=1)g=h[k],b=a(g).parents(\".col\")[0],e=!1,\"undefined\"!==typeof a(b).find(\"h4\")[0]\u0026\u0026(e=a(b).find(\"h4\")[0].innerHTML,d=(e?e+\" \\x3e \":\"\")+g.innerHTML,b=\"Footer Navigation Menu\",\ne=\"Click\",b={category:b,action:e,label:d},l(g,b));a(\"[data-trackable-nav]\").each(function(b,c){return new Heroku.Trackable(a(c))})}})(window.jQuery);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":133
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"\/articles\/getting-started-.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"gtm.historyChange"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"herokustatus\\.com|status\\.heroku\\.com"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"https:\/\/signup.heroku.com\/account\/accept\/ok"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"^\/search\\?"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"trackEvent"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"trackPageview"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"https:\/\/signup.heroku.com\/account"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"blog.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"www.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"elements.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"https:\/\/signup.heroku.com\/java"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"devcenter.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"signup.heroku.com"
    },{
      "function":"_re",
      "arg0":["macro",17],
      "arg1":"signup.heroku.com\/account\/accept\/|signup.heroku.com\/confirm"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"https:\/\/signup.heroku.com\/account\/accept"
    },{
      "function":"_re",
      "arg0":["macro",35],
      "arg1":"(\\d+\\sError|^Page not found)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"trackSocial"
    },{
      "function":"_eq",
      "arg0":["macro",21],
      "arg1":"NotLoggedIn"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"Keep Me Up to Date"
    },{
      "function":"_re",
      "arg0":["macro",17],
      "arg1":"hello\\.heroku\\.com\\\/keepmeuptodate",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",41],
      "arg1":"hello.heroku.com\/unsubscribe"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"Re-subscribe"
    },{
      "function":"_re",
      "arg0":["macro",17],
      "arg1":"hello\\.heroku\\.com\\\/unsubscribe",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",17],
      "arg1":"www\\.heroku\\.com(\\\/$|\\\/home)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"herokustatus.com"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"popstate"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"dashboard.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"redis.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"postgres.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"dataclips.heroku.com"
    },{
      "function":"_sw",
      "arg0":["macro",17],
      "arg1":"https:\/\/www.heroku.com\/pricing"
    },{
      "function":"_sw",
      "arg0":["macro",17],
      "arg1":"https:\/\/signup.heroku.com"
    },{
      "function":"_gt",
      "arg0":["macro",2],
      "arg1":"0"
    },{
      "function":"_sw",
      "arg0":["macro",17],
      "arg1":"https:\/\/devcenter.heroku.com\/start"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"https:\/\/www.heroku.com\/connect"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"https:\/\/www.heroku.com\/thanks"
    },{
      "function":"_sw",
      "arg0":["macro",17],
      "arg1":"https:\/\/signup.heroku.com\/nodese"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"id.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"engineering.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"toolbelt.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"partners.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",17],
      "arg1":"kafka-summit-nyc-2019"
    }],
  "rules":[
    [["if",0,1,2],["add",0,22]],
    [["if",3],["add",0,38]],
    [["if",8],["add",1]],
    [["if",9],["add",2]],
    [["if",3],["unless",10],["add",3]],
    [["if",0,1,2],["unless",10],["add",3]],
    [["if",3,5],["add",4,7],["block",0,3,9,17,25,29,30,38,48,54,55,56]],
    [["if",3,11],["add",5,43,44,57,59,60,62],["block",9]],
    [["if",3,12],["add",6,48,50,51,54,55,56]],
    [["if",3,13],["add",6,9,37,48,51,54,55,56,64]],
    [["if",3,14],["add",6,51,54,55,56]],
    [["if",7,15],["add",8]],
    [["if",3,16],["add",9,48,49,51,54,55,56,64]],
    [["if",3,17],["add",9,48,54,55,56]],
    [["if",7,20],["add",10]],
    [["if",7,20],["unless",10],["add",11]],
    [["if",8],["unless",10],["add",12]],
    [["if",9],["unless",10],["add",13]],
    [["if",5,7],["unless",10],["add",14]],
    [["if",21],["add",15]],
    [["if",21],["unless",10],["add",16]],
    [["if",3,22],["add",17]],
    [["if",23,24,25],["add",18]],
    [["if",25,26],["add",19]],
    [["if",25,27,28],["add",20]],
    [["if",3,29],["add",21,40,48]],
    [["if",3,4],["add",22,51],["block",0,29,30]],
    [["if",7,20,30],["add",23]],
    [["if",8,30],["add",24]],
    [["if",0,1,2,30,31],["add",25]],
    [["if",7,30],["add",25]],
    [["if",21,30],["add",26]],
    [["if",9,30],["add",27]],
    [["if",5,7,30],["add",28]],
    [["if",3,6],["add",29,30]],
    [["if",7],["add",31,32,33,34,35,36]],
    [["if",3,36],["add",39]],
    [["if",3,37,38],["add",41,45,61]],
    [["if",3,39],["add",42]],
    [["if",3,40],["add",46]],
    [["if",3,41],["add",46]],
    [["if",7,42],["add",47]],
    [["if",7,43],["add",48]],
    [["if",3,44],["add",48,51]],
    [["if",3,45],["add",51]],
    [["if",3,46],["add",51]],
    [["if",7,47],["add",52]],
    [["if",48,49],["add",53]],
    [["if",49],["add",58]],
    [["if",7,50],["add",63]],
    [["if",6,7],["block",0,3]],
    [["if",3,18],["unless",5,19],["block",9,38,48]],
    [["if",3,32],["block",38]],
    [["if",7,33],["block",38]],
    [["if",3,34],["block",38]],
    [["if",3,35],["block",38]],
    [["if",43,49],["block",58]]]
},
"runtime":[
[],[]
]



};
var aa,da=this||self,ea=function(a){return"boolean"==typeof a},fa=/^[\w+/_-]+[=]{0,2}$/,ha=null;var ia=function(){},ja=function(a){return"function"==typeof a},ka=function(a){return"string"==typeof a},la=function(a){return"number"==typeof a&&!isNaN(a)},ma=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},oa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},pa=function(a,b){if(a&&ma(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},qa=function(a,b){if(!la(a)||
!la(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},sa=function(a,b){for(var c=new ra,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},ta=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},ua=function(a){return Math.round(Number(a))||0},va=function(a){return"false"==String(a).toLowerCase()?!1:!!a},wa=function(a){var b=[];if(ma(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},xa=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},ya=function(){return(new Date).getTime()},ra=function(){this.prefix="gtm.";this.values={}};ra.prototype.set=function(a,b){this.values[this.prefix+a]=b};ra.prototype.get=function(a){return this.values[this.prefix+a]};ra.prototype.contains=function(a){return void 0!==this.get(a)};
var za=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ca=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Da=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ea=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Fa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ga=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ha=function(a){if(null==a)return String(a);var b=Ga.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ia=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ja=function(a){if(!a||"object"!=Ha(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ia(a,"constructor")&&!Ia(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ia(a,b)},f=function(a,b){var c=b||("array"==Ha(a)?[]:{}),d;for(d in a)if(Ia(a,d)){var e=a[d];"array"==Ha(e)?("array"!=Ha(c[d])&&(c[d]=[]),c[d]=f(e,c[d])):Ja(e)?(Ja(c[d])||(c[d]={}),c[d]=f(e,c[d])):c[d]=e}return c};
var Ka=[],La={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Ma=function(a){return La[a]},Na=/[\x00\x22\x26\x27\x3c\x3e]/g;var Ra=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Va={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Wa=function(a){return Va[a]};
Ka[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Ra,Wa)+"'"}};var db=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,eb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},fb=function(a){return eb[a]};Ka[16]=function(a){return a};var ib=[],jb=[],kb=[],lb=[],mb=[],nb={},pb,qb,rb,sb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},tb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!nb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?nb[c](e):(void 0)(c,e,b)},vb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=ub(a[e],b,c));return d},
wb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=nb[b];return c?c.priorityOverride||0:0},ub=function(a,b,c){if(ma(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(ub(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=ib[g];if(!h||b.Dc(h))return;c[g]=!0;try{var k=vb(h,b,c);k.vtp_gtmEventId=b.id;d=tb(k,b);rb&&(d=rb.Jf(d,k))}catch(w){b.be&&b.be(w,Number(g)),d=!1}c[g]=!1;return d;
case "map":d={};for(var l=1;l<a.length;l+=2)d[ub(a[l],b,c)]=ub(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=ub(a[n],b,c);qb&&(m=m||p===qb.yb);d.push(p)}return qb&&m?qb.Mf(d):d.join("");case "escape":d=ub(a[1],b,c);if(qb&&ma(a[1])&&"macro"===a[1][0]&&qb.ng(a))return qb.zg(d);d=String(d);for(var t=2;t<a.length;t++)Ka[a[t]]&&(d=Ka[a[t]](d));return d;case "tag":var q=a[1];if(!lb[q])throw Error("Unable to resolve tag reference "+q+".");return d={Od:a[2],index:q};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=xb(r,b,c);a[4]&&(v=!v);return v;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},xb=function(a,b,c){try{return pb(vb(a,b,c))}catch(d){JSON.stringify(a)}return null};var yb=function(){var a=function(b){return{toString:function(){return b}}};return{gd:a("convert_case_to"),hd:a("convert_false_to"),jd:a("convert_null_to"),kd:a("convert_true_to"),ld:a("convert_undefined_to"),hh:a("debug_mode_metadata"),ka:a("function"),We:a("instance_name"),Xe:a("live_only"),Ye:a("malware_disabled"),Ze:a("metadata"),jh:a("original_vendor_template_id"),$e:a("once_per_event"),Cd:a("once_per_load"),Dd:a("setup_tags"),Ed:a("tag_id"),Fd:a("teardown_tags")}}();var zb=null,Cb=function(a){function b(p){for(var t=0;t<p.length;t++)d[p[t]]=!0}var c=[],d=[];zb=Ab(a);for(var e=0;e<jb.length;e++){var g=jb[e],h=Bb(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<lb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Bb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=zb(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=zb(e[g]);if(null===h)return null;
if(h)return!1}return!0},Ab=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=xb(kb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var Db,Eb=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.uf&&(l["fix_"+m]=!0),l.Pd=l.Pd||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var q=k.indexOf("--\x3e");if(0<=q)return{content:k.substr(4,q),length:q+3}},endTag:function(){var q=k.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=p.startTag();
if(q){var r=k.slice(q.length);if(r.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var v=r.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(v)return{tagName:q.tagName,F:q.F,content:v[1],length:v[0].length+q.length}}}},startTag:function(){var q=k.match(c);if(q){var r={};q[2].replace(e,function(v,w,y,x,A){var z=y||x||A||g.test(w)&&w||null,B=document.createElement("div");B.innerHTML=z;r[w]=B.textContent||B.innerText||z});return{tagName:q[1],F:r,mb:!!q[3],length:q[0].length}}},chars:function(){var q=
k.indexOf("<");return{length:0<=q?q:k.length}}},t=function(){for(var q in n)if(n[q].test(k)){var r=p[q]();return r?(r.type=r.type||q,r.text=k.substr(0,r.length),k=k.slice(r.length),r):null}};l.Pd&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,r=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.ae=function(){return this[this.length-1]};v.Hc=function(B){var E=this.ae();return E&&E.tagName&&E.tagName.toUpperCase()===B.toUpperCase()};v.If=
function(B){for(var E=0,F;F=this[E];E++)if(F.tagName===B)return!0;return!1};var w=function(B){B&&"startTag"===B.type&&(B.mb=q.test(B.tagName)||B.mb);return B},y=t,x=function(){k="</"+v.pop().tagName+">"+k},A={startTag:function(B){var E=B.tagName;"TR"===E.toUpperCase()&&v.Hc("TABLE")?(k="<TBODY>"+k,z()):l.rh&&r.test(E)&&v.If(E)?v.Hc(E)?x():(k="</"+B.tagName+">"+k,z()):B.mb||v.push(B)},endTag:function(B){v.ae()?l.Wf&&!v.Hc(B.tagName)?x():v.pop():l.Wf&&(y(),z())}},z=function(){var B=k,E=w(y());k=B;if(E&&
A[E.type])A[E.type](E)};t=function(){z();return w(y())}}();return{append:function(q){k+=q},Ig:t,wh:function(q){for(var r;(r=t())&&(!q[r.type]||!1!==q[r.type](r)););},clear:function(){var q=k;k="";return q},xh:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.Ch="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.yh=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,g=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.Dh=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,p;for(p in m.F){var t=m.F[p];
n+=" "+p+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.mb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.qh=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.zf=a.zf||!b[h]&&h;Db=a})();(function(){function a(){}function b(p){return void 0!==p&&null!==p}function c(p,t,q){var r,v=p&&p.length||0;for(r=0;r<v;r++)t.call(q,p[r],r)}function d(p,t,q){for(var r in p)p.hasOwnProperty(r)&&t.call(q,r,p[r])}function e(p,
t){d(t,function(q,r){p[q]=r});return p}function g(p,t){p=p||{};d(t,function(q,r){b(p[q])||(p[q]=r)});return p}function h(p){try{return m.call(p)}catch(q){var t=[];c(p,function(r){t.push(r)});return t}}var k={hf:a,jf:a,kf:a,lf:a,vf:a,wf:function(p){return p},done:a,error:function(p){throw p;},Mg:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function p(q,r,v){var w="data-ps-"+r;if(2===arguments.length){var y=q.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?q.setAttribute(w,
v):q.removeAttribute(w)}function t(q,r){var v=q.ownerDocument;e(this,{root:q,options:r,ob:v.defaultView||v.parentWindow,Ca:v,Rb:Db("",{uf:!0}),qc:[q],Sc:"",Tc:v.createElement(q.nodeName),kb:[],qa:[]});p(this.Tc,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.qa,arguments);for(var q;!this.Jb&&this.qa.length;)q=this.qa.shift(),"function"===typeof q?this.Df(q):this.cd(q)};t.prototype.Df=function(q){var r={type:"function",value:q.name||q.toString()};this.Oc(r);q.call(this.ob,this.Ca);this.de(r)};
t.prototype.cd=function(q){this.Rb.append(q);for(var r,v=[],w,y;(r=this.Rb.Ig())&&!(w=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("script"):!1)&&!(y=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("style"):!1);)v.push(r);this.fh(v);w&&this.bg(r);y&&this.cg(r)};t.prototype.fh=function(q){var r=this.Af(q);r.Hd&&(r.Bc=this.Sc+r.Hd,this.Sc+=r.Eg,this.Tc.innerHTML=r.Bc,this.dh())};t.prototype.Af=function(q){var r=this.qc.length,v=[],w=[],y=[];c(q,function(x){v.push(x.text);if(x.F){if(!/^noscript$/i.test(x.tagName)){var A=
r++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+A+" $1"));"ps-script"!==x.F.id&&"ps-style"!==x.F.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+A+(x.mb?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{Eh:q,raw:v.join(""),Hd:w.join(""),Eg:y.join("")}};t.prototype.dh=function(){for(var q,r=[this.Tc];b(q=r.shift());){var v=1===q.nodeType;if(!v||!p(q,"proxyof")){v&&(this.qc[p(q,"id")]=q,p(q,"id",null));var w=q.parentNode&&p(q.parentNode,"proxyof");
w&&this.qc[w].appendChild(q)}r.unshift.apply(r,h(q.childNodes))}};t.prototype.bg=function(q){var r=this.Rb.clear();r&&this.qa.unshift(r);q.src=q.F.src||q.F.kh;q.src&&this.kb.length?this.Jb=q:this.Oc(q);var v=this;this.eh(q,function(){v.de(q)})};t.prototype.cg=function(q){var r=this.Rb.clear();r&&this.qa.unshift(r);q.type=q.F.type||q.F.lh||"text/css";this.gh(q);r&&this.write()};t.prototype.gh=function(q){var r=this.Cf(q);this.lg(r);q.content&&(r.styleSheet&&!r.sheet?r.styleSheet.cssText=q.content:
r.appendChild(this.Ca.createTextNode(q.content)))};t.prototype.Cf=function(q){var r=this.Ca.createElement(q.tagName);r.setAttribute("type",q.type);d(q.F,function(v,w){r.setAttribute(v,w)});return r};t.prototype.lg=function(q){this.cd('<span id="ps-style"/>');var r=this.Ca.getElementById("ps-style");r.parentNode.replaceChild(q,r)};t.prototype.Oc=function(q){q.vg=this.qa;this.qa=[];this.kb.unshift(q)};t.prototype.de=function(q){q!==this.kb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.kb.shift(),this.write.apply(this,q.vg),!this.kb.length&&this.Jb&&(this.Oc(this.Jb),this.Jb=null))};t.prototype.eh=function(q,r){var v=this.Bf(q),w=this.Sg(v),y=this.options.hf;q.src&&(v.src=q.src,this.Qg(v,w?y:function(){r();y()}));try{this.kg(v),q.src&&!w||r()}catch(x){this.options.error(x),r()}};t.prototype.Bf=function(q){var r=this.Ca.createElement(q.tagName);d(q.F,function(v,w){r.setAttribute(v,w)});q.content&&(r.text=q.content);return r};t.prototype.kg=function(q){this.cd('<span id="ps-script"/>');
var r=this.Ca.getElementById("ps-script");r.parentNode.replaceChild(q,r)};t.prototype.Qg=function(q,r){function v(){q=q.onload=q.onreadystatechange=q.onerror=null}var w=this.options.error;e(q,{onload:function(){v();r()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(v(),r())},onerror:function(){var y={message:"remote script failed "+q.src};v();w(y);r()}})};t.prototype.Sg=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.Mg&&q.src&&q.hasAttribute("async"))};
return t}();l.postscribe=function(){function p(){var w=r.shift(),y;w&&(y=w[w.length-1],y.jf(),w.stream=t.apply(null,w),y.kf())}function t(w,y,x){function A(F){F=x.wf(F);v.write(F);x.lf(F)}v=new n(w,x);v.id=q++;v.name=x.name||v.id;var z=w.ownerDocument,B={close:z.close,open:z.open,write:z.write,writeln:z.writeln};e(z,{close:a,open:a,write:function(){return A(h(arguments).join(""))},writeln:function(){return A(h(arguments).join("")+"\n")}});var E=v.ob.onerror||a;v.ob.onerror=function(F,M,Q){x.error({th:F+
" - "+M+":"+Q});E.apply(v.ob,arguments)};v.write(y,function(){e(z,B);v.ob.onerror=E;x.done();v=null;p()});return v}var q=0,r=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=g(x,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.sh?w[0]:w;var A=[w,y,x];w.yg={cancel:function(){A.stream?A.stream.abort():A[1]=a}};x.vf(A);r.push(A);v||p();return w.yg},{streams:{},vh:r,mh:n})}();Eb=l.postscribe}})();for(var Fb="floor ceil round max min abs pow sqrt".split(" "),Gb=0;Gb<Fb.length;Gb++)Math.hasOwnProperty(Fb[Gb]);var u=window,C=document,Hb=navigator,Ib=C.currentScript&&C.currentScript.src,Jb=function(a,b){var c=u[a];u[a]=void 0===c?b:c;return u[a]},Kb=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Lb=function(a,b,c){var d=C.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Kb(d,b);c&&(d.onerror=c);var e;if(null===ha)b:{var g=da.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&fa.test(k)){ha=k;break b}}ha=""}e=ha;e&&d.setAttribute("nonce",e);var l=C.getElementsByTagName("script")[0]||C.body||C.head;l.parentNode.insertBefore(d,l);return d},Mb=function(){if(Ib){var a=Ib.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Nb=function(a,b){var c=C.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=C.body&&C.body.lastChild||
C.body||C.head;d.parentNode.insertBefore(c,d);Kb(c,b);void 0!==a&&(c.src=a);return c},Ob=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},D=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Pb=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},G=function(a){u.setTimeout(a,0)},Qb=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Rb=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Sb=function(a){var b=C.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Tb=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},Ub=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var H={ac:"event_callback",Na:"event_timeout",W:"gtag.config",P:"allow_ad_personalization_signals",S:"cookie_expires",Ma:"cookie_update",xa:"session_duration"};var ic=/[A-Z]+/,jc=/\s/,kc=function(a){if(ka(a)&&(a=xa(a),!jc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(ic.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],N:d}}}}},mc=function(a){for(var b={},c=0;c<a.length;++c){var d=kc(a[c]);d&&(b[d.id]=d)}lc(b);var e=[];ta(b,function(g,h){e.push(h)});return e};
function lc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.N[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var nc={},oc=null,pc=Math.random();nc.i="GTM-JD26";nc.Cb="9b0";var qc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0},rc="www.googletagmanager.com/gtm.js";var sc=rc,tc=null,uc=null,vc=null,wc="//www.googletagmanager.com/a?id="+nc.i+"&cv=316",xc={},yc={},zc=function(){var a=oc.sequence||0;oc.sequence=a+1;return a};var Ac={},Bc=function(a,b){Ac[a]=Ac[a]||[];Ac[a][b]=!0},Dc=function(a){for(var b=[],c=Ac[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var Ec=function(){return"&tc="+lb.filter(function(a){return a}).length},Oc=function(){Fc&&(u.clearTimeout(Fc),Fc=void 0);void 0===Gc||Hc[Gc]&&!Ic||(Jc[Gc]||Kc.pg()||0>=Lc--?(Bc("GTM",1),Jc[Gc]=!0):(Kc.Kg(),Ob(Mc()),Hc[Gc]=!0,Nc=Ic=""))},Mc=function(){var a=Gc;if(void 0===a)return"";var b=Dc("GTM"),c=Dc("TAGGING");return[Pc,Hc[a]?"":"&es=1",Qc[a],b?"&u="+b:"",c?"&ut="+c:"",Ec(),Ic,Nc,"&z=0"].join("")},Rc=function(){return[wc,"&v=3&t=t","&pid="+qa(),"&rv="+nc.Cb].join("")},Sc="0.005000">
Math.random(),Pc=Rc(),Tc=function(){Pc=Rc()},Hc={},Ic="",Nc="",Gc=void 0,Qc={},Jc={},Fc=void 0,Kc=function(a,b){var c=0,d=0;return{pg:function(){if(c<a)return!1;ya()-d>=b&&(c=0);return c>=a},Kg:function(){ya()-d>=b&&(c=0);c++;d=ya()}}}(2,1E3),Lc=1E3,Uc=function(a,b){if(Sc&&!Jc[a]&&Gc!==a){Oc();Gc=a;Ic="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Qc[a]="&e="+c+"&eid="+a;Fc||(Fc=u.setTimeout(Oc,500))}},Vc=function(a,b,c){if(Sc&&!Jc[a]&&b){a!==Gc&&(Oc(),Gc=a);var d=String(b[yb.ka]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;Ic=Ic?Ic+"."+e:"&tr="+e;Fc||(Fc=u.setTimeout(Oc,500));2022<=Mc().length&&Oc()}};var Wc={},Xc=new ra,Yc={},Zc={},cd={name:"dataLayer",set:function(a,b){f($c(a,b),Yc);ad()},get:function(a){return bd(a,2)},reset:function(){Xc=new ra;Yc={};ad()}},bd=function(a,b){if(2!=b){var c=Xc.get(a);if(Sc){var d=dd(a);c!==d&&Bc("GTM",5)}return c}return dd(a)},dd=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:fd(d)},fd=function(a){for(var b=Yc,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var id=function(a,b){Zc.hasOwnProperty(a)||(Xc.set(a,b),f($c(a,b),Yc),ad())},$c=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},ad=function(a){ta(Zc,function(b,c){Xc.set(b,c);f($c(b,void 0),Yc);f($c(b,c),Yc);a&&delete Zc[b]})},jd=function(a,b,c){Wc[a]=Wc[a]||{};var d=1!==c?dd(b):Xc.get(b);"array"===Ha(d)||"object"===Ha(d)?Wc[a][b]=f(d):Wc[a][b]=d},kd=function(a,b){if(Wc[a])return Wc[a][b]};var ld=function(){var a=!1;return a};var J=function(a,b,c,d){return(2===md()||d||"http:"!=u.location.protocol?a:b)+c},md=function(){var a=Mb(),b;if(1===a)a:{var c=sc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=C.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Bd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Cd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Dd={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Ed="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Gd=function(a){var b=bd("gtm.whitelist");b&&Bc("GTM",9);var c=b&&Fa(wa(b),Cd),d=bd("gtm.blacklist");d||(d=bd("tagTypeBlacklist"))&&Bc("GTM",3);
d?Bc("GTM",8):d=[];Fd()&&(d=wa(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=oa(wa(d),"google")&&Bc("GTM",2);var e=d&&Fa(wa(d),Dd),g={};return function(h){var k=h&&h[yb.ka];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=yc[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>oa(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>
oa(c,l[p])){Bc("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=oa(e,k);if(q)t=q;else{var r=sa(e,l||[]);r&&Bc("GTM",10);t=r}}var v=!m||t;v||!(0<=oa(l,"sandboxedScripts"))||c&&-1!==oa(c,"sandboxedScripts")||(v=sa(e,Ed));return g[k]=v}},Fd=function(){return Bd.test(u.location&&u.location.hostname)};var Hd={Jf:function(a,b){b[yb.gd]&&"string"===typeof a&&(a=1==b[yb.gd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(yb.jd)&&null===a&&(a=b[yb.jd]);b.hasOwnProperty(yb.ld)&&void 0===a&&(a=b[yb.ld]);b.hasOwnProperty(yb.kd)&&!0===a&&(a=b[yb.kd]);b.hasOwnProperty(yb.hd)&&!1===a&&(a=b[yb.hd]);return a}};var Id={active:!0,isWhitelisted:function(){return!0}},Jd=function(a){var b=oc.zones;!b&&a&&(b=oc.zones=a());return b};var Kd=!1,Ld=0,Md=[];function Nd(a){if(!Kd){var b=C.createEventObject,c="complete"==C.readyState,d="interactive"==C.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Kd=!0;for(var e=0;e<Md.length;e++)G(Md[e])}Md.push=function(){for(var g=0;g<arguments.length;g++)G(arguments[g]);return 0}}}function Od(){if(!Kd&&140>Ld){Ld++;try{C.documentElement.doScroll("left"),Nd()}catch(a){u.setTimeout(Od,50)}}}var Pd=function(a){Kd?a():Md.push(a)};var Qd={},Rd={},Sd=function(a,b,c,d){if(!Rd[a]||qc[b]||"__zone"===b)return-1;var e={};Ja(d)&&(e=f(d,e));e.id=c;e.status="timeout";return Rd[a].tags.push(e)-1},Td=function(a,b,c,d){if(Rd[a]){var e=Rd[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Ud(a){for(var b=Qd[a]||[],c=0;c<b.length;c++)b[c]();Qd[a]={push:function(d){d(nc.i,Rd[a])}}}
var Xd=function(a,b,c){Rd[a]={tags:[]};ja(b)&&Vd(a,b);c&&u.setTimeout(function(){return Ud(a)},Number(c));return Wd(a)},Vd=function(a,b){Qd[a]=Qd[a]||[];Qd[a].push(Ca(function(){return G(function(){b(nc.i,Rd[a])})}))};function Wd(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ca(function(){b++;d&&b>=c&&Ud(a)})},sf:function(){d=!0;b>=c&&Ud(a)}}};var Yd=function(){function a(d){return!la(d)||0>d?0:d}if(!oc._li&&u.performance&&u.performance.timing){var b=u.performance.timing.navigationStart,c=la(cd.get("gtm.start"))?cd.get("gtm.start"):0;oc._li={cst:a(c-b),cbt:a(uc-b)}}};var be=!1,ce=function(){return u.GoogleAnalyticsObject&&u[u.GoogleAnalyticsObject]},de=!1;
var ee=function(a){u.GoogleAnalyticsObject||(u.GoogleAnalyticsObject=a||"ga");var b=u.GoogleAnalyticsObject;if(u[b])u.hasOwnProperty(b)||Bc("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);u[b]=c}Yd();return u[b]},fe=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=ce();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var he=function(){},ge=function(){return u.GoogleAnalyticsObject||"ga"};var je=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var ke=/:[0-9]+$/,le=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},oe=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=me(a.protocol)||me(u.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:u.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||u.location.hostname).replace(ke,"").toLowerCase());var g=b,h,k=me(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=ne(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(ke,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||Bc("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=oa(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=le(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},me=function(a){return a?a.replace(":","").toLowerCase():""},ne=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
pe=function(a){var b=C.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Bc("TAGGING",1),c="/"+c);var d=b.hostname.replace(ke,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var ve=function(a){};function ue(a,b){a.containerId=nc.i;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function we(a,b,c,d){var e=lb[a],g=xe(a,b,c,d);if(!g)return null;var h=ub(e[yb.Dd],c,[]);if(h&&h.length){var k=h[0];g=we(k.index,{J:g,U:1===k.Od?b.terminate:g,terminate:b.terminate},c,d)}return g}
function xe(a,b,c,d){function e(){if(g[yb.Ye])k();else{var w=vb(g,c,[]),y=Sd(c.id,String(g[yb.ka]),Number(g[yb.Ed]),w[yb.Ze]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var B=ya()-z;Vc(c.id,lb[a],"5");Td(c.id,y,"success",B);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var B=ya()-z;Vc(c.id,lb[a],"6");Td(c.id,y,"failure",B);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;Vc(c.id,g,"1");var A=function(B){var E=ya()-z;ve(B);Vc(c.id,g,"7");Td(c.id,y,"exception",E);x||(x=!0,k())};var z=ya();try{tb(w,c)}catch(B){A(B)}}}var g=lb[a],h=b.J,k=b.U,l=b.terminate;if(c.Dc(g))return null;var m=ub(g[yb.Fd],c,[]);if(m&&m.length){var n=m[0],p=we(n.index,{J:h,U:k,terminate:l},c,d);if(!p)return null;h=p;k=2===n.Od?l:p}if(g[yb.Cd]||g[yb.$e]){var t=g[yb.Cd]?mb:c.Ug,q=h,r=k;if(!t[a]){e=Ca(e);var v=ye(a,t,e);h=v.J;k=v.U}return function(){t[a](q,r)}}return e}
function ye(a,b,c){var d=[],e=[];b[a]=ze(d,e,c);return{J:function(){b[a]=Ae;for(var g=0;g<d.length;g++)d[g]()},U:function(){b[a]=Be;for(var g=0;g<e.length;g++)e[g]()}}}function ze(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Ae(a){a()}function Be(a,b){b()};var Ee=function(a,b){for(var c=[],d=0;d<lb.length;d++)if(a.fb[d]){var e=lb[d];var g=b.add();try{var h=we(d,{J:g,U:g,terminate:g},a,d);h?c.push({te:d,ie:wb(e),Uf:h}):(Ce(d,a),g())}catch(l){g()}}b.sf();c.sort(De);for(var k=0;k<c.length;k++)c[k].Uf();return 0<c.length};function De(a,b){var c,d=b.ie,e=a.ie;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.te,k=b.te;g=h>k?1:h<k?-1:0}return g}
function Ce(a,b){if(!Sc)return;var c=function(d){var e=b.Dc(lb[d])?"3":"4",g=ub(lb[d][yb.Dd],b,[]);g&&g.length&&c(g[0].index);Vc(b.id,lb[d],e);var h=ub(lb[d][yb.Fd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var Fe=!1,Ge=function(a,b,c,d,e){if("gtm.js"==b){if(Fe)return!1;Fe=!0}Uc(a,b);var g=Xd(a,d,e);jd(a,"event",1);jd(a,"ecommerce",1);jd(a,"gtm");var h={id:a,name:b,Dc:Gd(c),fb:[],Ug:[],be:function(n){Bc("GTM",6);ve(n)}};h.fb=Cb(h);var k=Ee(h,g);
if(!k)return k;for(var l=0;l<h.fb.length;l++)if(h.fb[l]){var m=lb[l];if(m&&!qc[String(m[yb.ka])])return!0}return!1};var Ie=function(a,b,c,d,e){var g=this;this.eventModel=a;this.containerConfig=c||{};this.targetConfig=b||{};this.containerConfig=c||{};this.hb=d||{};this.globalConfig=e||{};this.getWithConfig=function(h){if(g.eventModel.hasOwnProperty(h))return g.eventModel[h];if(g.targetConfig.hasOwnProperty(h))return g.targetConfig[h];if(g.containerConfig.hasOwnProperty(h))return g.containerConfig[h];if(g.hb.hasOwnProperty(h))return g.hb[h];if(g.globalConfig.hasOwnProperty(h))return g.globalConfig[h]}};var Je={},Ke=["G"];Je.ue="";var Le=Je.ue.split(",");function Me(){var a=oc;return a.gcq=a.gcq||new Ne}
var Oe=function(a,b){Me().register(a,b,void 0)},Pe=function(a,b,c,d){Me().push("event",[b,a],c,d)},Qe=function(a,b){Me().push("config",[a],b)},Re={},Se=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.hb={};this.je=null;this.Yd=!1},Te=function(a,b,c,d,e){this.type=a;this.Zg=b;this.O=c||"";this.Fb=d;this.defer=e},Ne=function(){this.Kd={};this.Td={};this.Za=[]},Ue=function(a,b){var c=kc(b);return a.Kd[c.containerId]=a.Kd[c.containerId]||new Se},Ve=function(a,b,c,d){if(d.O){var e=
Ue(a,d.O),g=e.je;if(g){var h=f(c),k=f(e.targetConfig[d.O]),l=f(e.containerConfig),m=f(e.hb),n=f(a.Td),p=new Ie(h,k,l,m,n);try{g(b,d.Zg,p)}catch(t){}}}};Ne.prototype.register=function(a,b,c){if(3!==Ue(this,a).status){Ue(this,a).je=b;Ue(this,a).status=3;c&&(Ue(this,a).hb=c);var d=kc(a),e=Re[d.containerId];if(void 0!==e){var g=bd("gtm.uniqueEventId"),h=d.prefix,k=ya()-e;if(Sc&&!Jc[g]){g!==Gc&&(Oc(),Gc=g);var l=""+h+Math.floor(k);Nc=Nc?Nc+"."+l:"&cl="+l}delete Re[d.containerId]}this.flush()}};
Ne.prototype.push=function(a,b,c,d){var e=Math.floor(ya()/1E3);if(c){var g=kc(c),h;if(h=g){var k;if(k=1===Ue(this,c).status)a:{var l=g.prefix;k=!0}h=k}if(h&&(Ue(this,c).status=2,this.push("require",[],g.containerId),Re[g.containerId]=ya(),!ld())){var m=encodeURIComponent(g.containerId);Lb(("http:"!=u.location.protocol?"https:":
"http:")+("//www.googletagmanager.com/gtag/js?id="+m+"&l=dataLayer&cx=c"))}}this.Za.push(new Te(a,e,c,b,d));d||this.flush()};
Ne.prototype.flush=function(a){for(var b=this;this.Za.length;){var c=this.Za[0];if(c.defer)c.defer=!1,this.Za.push(c);else switch(c.type){case "require":if(3!==Ue(this,c.O).status&&!a)return;break;case "set":ta(c.Fb[0],function(l,m){b.Td[l]=m});break;case "config":var d=c.Fb[0],e=!!d[H.wb];delete d[H.wb];var g=Ue(this,c.O),h=kc(c.O),k=h.containerId===h.id;e||(k?g.containerConfig={}:g.targetConfig[c.O]={});g.Yd&&e||Ve(this,H.W,d,c);g.Yd=!0;k?f(d,g.containerConfig):f(d,g.targetConfig[c.O]);break;case "event":Ve(this,
c.Fb[1],c.Fb[0],c)}this.Za.shift()}};var We=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Ze=function(a,b,c,d){var e=Xe(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Ye(e,function(g){return g.Kb},b);if(1===e.length)return e[0].id;e=Ye(e,function(g){return g.gb},c);return e[0]?e[0].id:void 0}};
function $e(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=We(b,e).indexOf(c)}
var df=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var p=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":p=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===p){for(var v=bf(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!cf(y,t)&&$e(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else p&&"none"!=p&&(m+="; domain="+p),k=!cf(p,t)&&$e(m,a,l)}return k};function Ye(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function Xe(a,b){for(var c=[],d=We(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Kb:1*k[0]||1,gb:1*k[1]||1}))}}return c}
var ef=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,ff=/(^|\.)doubleclick\.net$/i,cf=function(a,b){return ff.test(document.location.hostname)||"/"===b&&ef.test(a)},bf=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;ff.test(e)||ef.test(e)||a.push("none");return a};var gf=new function(){this.Pc={}};var hf="".split(/,/),jf=null,kf={},lf={},mf,nf=function(a,b){var c={event:a};b&&(c.eventModel=f(b),b[H.ac]&&(c.eventCallback=b[H.ac]),b[H.Na]&&(c.eventTimeout=b[H.Na]));return c};
var tf={config:function(a){},event:function(a){var b=
a[1];if(ka(b)&&!(3<a.length)){var c;if(2<a.length){if(!Ja(a[2]))return;c=a[2]}var d=nf(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];gf.Pc[b]?gf.Pc[b].push(c):gf.Pc[b]=[c]}},set:function(a){var b;2==a.length&&Ja(a[1])?b=f(a[1]):3==a.length&&ka(a[1])&&(b={},b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},uf={policy:!0};var wf=function(a){return vf?C.querySelectorAll(a):null},xf=function(a,b){if(!vf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!C.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},yf=!1;if(C.querySelectorAll)try{var zf=C.querySelectorAll(":root");zf&&1==zf.length&&zf[0]==C.documentElement&&(yf=!0)}catch(a){}var vf=yf;var Gf=function(a){if(Ff(a))return a;this.bh=a};Gf.prototype.ag=function(){return this.bh};var Ff=function(a){return!a||"object"!==Ha(a)||Ja(a)?!1:"getUntrustedUpdateValue"in a};Gf.prototype.getUntrustedUpdateValue=Gf.prototype.ag;var Hf=!1,If=[];function Jf(){if(!Hf){Hf=!0;for(var a=0;a<If.length;a++)G(If[a])}}var Kf=function(a){Hf?G(a):If.push(a)};var Lf=[],Mf=!1,Nf=function(a){return u["dataLayer"].push(a)},Of=function(a){var b=oc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},Qf=function(a){var b=a._clear;ta(a,function(g,h){"_clear"!==g&&(b&&id(g,void 0),id(g,h))});tc||(tc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=zc(),a["gtm.uniqueEventId"]=d,id("gtm.uniqueEventId",d));vc=c;var e=Pf(a);
vc=null;switch(c){case "gtm.init":Bc("GTM",19),e&&Bc("GTM",20)}return e};function Pf(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=oc.zones;d=e?e.checkState(nc.i,c):Id;return d.active?Ge(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var Rf=function(){for(var a=!1;!Mf&&0<Lf.length;){Mf=!0;delete Yc.eventModel;ad();var b=Lf.shift();if(null!=b){var c=Ff(b);if(c){var d=b;b=Ff(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=bd(h,1);if(ma(k)||Ja(k))k=f(k);Zc[h]=k}}try{if(ja(b))try{b.call(cd)}catch(v){}else if(ma(b)){var l=b;if(ka(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=bd(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(v){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&ka(b[0])){var r=tf[b[0]];if(r&&(!c||!uf[b[0]])){b=r(b);break a}}b=void 0}if(!b){Mf=!1;continue}}a=Qf(b)||a}}finally{c&&ad(!0)}}Mf=!1}
return!a},Sf=function(){var a=Rf();try{var b=nc.i,c=u["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},Tf=function(){var a=Jb("dataLayer",[]),b=Jb("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Pd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Kf(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<oc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Gf(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Lf.push.apply(Lf,d);if(300<this.length)for(Bc("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Rf()&&h};Lf.push.apply(Lf,a.slice(0));G(Sf)};var Uf;var pg={};pg.yb=new String("undefined");
var qg=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===pg.yb?b:a[d]);return c.join("")}};qg.prototype.toString=function(){return this.resolve("undefined")};qg.prototype.valueOf=qg.prototype.toString;pg.bf=qg;pg.nc={};pg.Mf=function(a){return new qg(a)};var rg={};pg.Lg=function(a,b){var c=zc();rg[c]=[a,b];return c};pg.Ld=function(a){var b=a?0:1;return function(c){var d=rg[c];if(d&&"function"===typeof d[b])d[b]();rg[c]=void 0}};pg.ng=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};pg.zg=function(a){if(a===pg.yb)return a;var b=zc();pg.nc[b]=a;return'google_tag_manager["'+nc.i+'"].macro('+b+")"};pg.rg=function(a,b,c){a instanceof pg.bf&&(a=a.resolve(pg.Lg(b,c)),b=ia);return{Bc:a,J:b}};var sg=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Qb(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},tg=function(a){oc.hasOwnProperty("autoEventsSettings")||(oc.autoEventsSettings={});var b=oc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},ug=function(a,b,c){tg(a)[b]=c},vg=function(a,b,c,d){var e=tg(a),g=za(e,b,d);e[b]=c(g)},wg=function(a,b,c){var d=tg(a);return za(d,b,c)};var xg=function(){for(var a=Hb.userAgent+(C.cookie||"")+(C.referrer||""),b=a.length,c=u.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(ya()/1E3)].join(".")},Ag=function(a,b,c,d){var e=yg(b);return Ze(a,e,zg(c),d)},Bg=function(a,b,c,d){var e=""+yg(c),g=zg(d);1<g&&(e+="-"+g);return[b,e,a].join(".")},yg=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},zg=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Cg=["1"],Dg={},Hg=function(a,b,c,d){var e=Eg(a);Dg[e]||Fg(e,b,c)||(Gg(e,xg(),b,c,d),Fg(e,b,c))};function Gg(a,b,c,d,e){var g=Bg(b,"1",d,c);df(a,g,c,d,0==e?void 0:new Date(ya()+1E3*(void 0==e?7776E3:e)))}function Fg(a,b,c){var d=Ag(a,b,c,Cg);d&&(Dg[a]=d);return d}function Eg(a){return(a||"_gcl")+"_au"};var Ig=function(){for(var a=[],b=C.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({$c:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].$c]||(g[a[h].$c]=[]),g[a[h].$c].push({timestamp:k[1],Yf:k[2]}))}return g};function Jg(){for(var a=Kg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Lg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Kg,Mg,Ng=function(a){Kg=Kg||Lg();Mg=Mg||Jg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(Kg[l],Kg[m],Kg[n],Kg[p])}return b.join("")},Og=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Mg[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Kg=Kg||Lg();Mg=Mg||
Jg();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Pg;function Qg(a,b){if(!a||b===C.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var Ug=function(){var a=Rg,b=Sg,c=Tg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){D(C,"mousedown",d);D(C,"keyup",d);D(C,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},Tg=function(){var a=Jb("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Vg=/(.*?)\*(.*?)\*(.*)/,Wg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Xg=/^(?:www\.|m\.|amp\.)+/,Yg=/([^?#]+)(\?[^#]*)?(#.*)?/,Zg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,ah=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Ng(String(d))))}var e=b.join("*");return["1",$g(e),e].join("*")},$g=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Pg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}Pg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Pg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},ch=function(){return function(a){var b=pe(u.location.href),c=b.search.replace("?",""),d=le(c,"_gl",!0)||"";a.query=bh(d)||{};var e=oe(b,"fragment").match(Zg);a.fragment=bh(e&&e[3]||
"")||{}}},dh=function(){var a=ch(),b=Tg();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Da(c,d.query),Da(c,d.fragment));return c},bh=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=Vg.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===$g(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=Og(t[q+1]);return p}}}}catch(r){}};
function eh(a,b,c){function d(m){var n=m,p=Zg.exec(n),t=n;if(p){var q=p[2],r=p[4];t=p[1];r&&(t=t+q+r)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=Yg.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function fh(a,b,c){for(var d={},e={},g=Tg().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&Qg(k.domains,b)&&(k.fragment?Da(e,k.callback()):Da(d,k.callback()))}if(Ea(d)){var l=ah(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=C.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=eh(l,a.action);je.test(v)&&(a.action=v)}}}else gh(l,a,!1)}if(!c&&Ea(e)){var w=ah(e);gh(w,a,!0)}}function gh(a,b,c){if(b.href){var d=eh(a,b.href,void 0===c?!1:c);je.test(d)&&(b.href=d)}}
var Rg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||fh(e,e.hostname,!1)}}catch(h){}},Sg=function(a){try{if(a.action){var b=oe(pe(a.action),"host");fh(a,b,!0)}}catch(c){}},hh=function(a,b,c,d){Ug();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};Tg().decorators.push(e)},ih=function(){var a=C.location.hostname,b=Wg.exec(C.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Xg,""),l=e.replace(Xg,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},jh=function(a,b){return!1===a?!1:a||b||ih()};var kh={};var lh=/^\w+$/,mh=/^[\w-]+$/,nh=/^~?[\w-]+$/,oh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function ph(a){return a&&"string"==typeof a&&a.match(lh)?a:"_gcl"}var rh=function(){var a=pe(u.location.href),b=oe(a,"query",!1,void 0,"gclid"),c=oe(a,"query",!1,void 0,"gclsrc"),d=oe(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||le(e,"gclid",void 0);c=c||le(e,"gclsrc",void 0)}return qh(b,c,d)};
function qh(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(mh))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==kh.gtm_3pds?0:kh.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}var th=function(a){var b=rh();sh(b,a)};
function sh(a,b,c){function d(p,t){var q=uh(p,e);q&&df(q,t,h,g,l,!0)}b=b||{};var e=ph(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Kc?7776E3:b.Kc;c=c||ya();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.Gh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var wh=function(a,b,c,d,e){for(var g=dh(),h=ph(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==oh[l]){var m=uh(l,h),n=g[m];if(n){var p=Math.min(vh(n),ya()),t;b:{for(var q=p,r=We(m,C.cookie),v=0;v<r.length;++v)if(vh(r[v])>q){t=!0;break b}t=!1}t||df(m,n,c,d,0==e?void 0:new Date(p+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};sh(qh(g.gclid,g.gclsrc),w)},uh=function(a,b){var c=oh[a];if(void 0!==c)return b+c},vh=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function xh(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var yh=function(a,b,c,d,e){if(ma(b)){var g=ph(e);hh(function(){for(var h={},k=0;k<a.length;++k){var l=uh(a[k],g);if(l){var m=We(l,C.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},zh=function(a){return a.filter(function(b){return nh.test(b)})},Ah=function(a){for(var b=["aw","dc"],c=ph(a&&a.prefix),d={},e=0;e<b.length;e++)oh[b[e]]&&(d[b[e]]=oh[b[e]]);ta(d,function(g,h){var k=We(c+h,C.cookie);if(k.length){var l=k[0],m=vh(l),n={};n[g]=[xh(l)];sh(n,a,m)}})};var Bh=/^\d+\.fls\.doubleclick\.net$/;function Ch(a){var b=pe(u.location.href),c=oe(b,"host",!1);if(c&&c.match(Bh)){var d=oe(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Dh(a,b){if("aw"==a||"dc"==a){var c=Ch("gcl"+a);if(c)return c.split(".")}var d=ph(b);if("_gcl"==d){var e;e=rh()[a]||[];if(0<e.length)return e}var g=uh(a,d),h;if(g){var k=[];if(C.cookie){var l=We(g,C.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=xh(l[m]);n&&-1===oa(k,n)&&k.push(n)}h=zh(k)}else h=k}else h=k}else h=[];return h}
var Eh=function(){var a=Ch("gac");if(a)return decodeURIComponent(a);var b=Ig(),c=[];ta(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Yf);g=zh(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},Fh=function(a,b,c,d,e){Hg(b,c,d,e);var g=Dg[Eg(b)],h=rh().dc||[],k=!1;if(g&&0<h.length){var l=oc.joined_au=oc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+g;Hb.sendBeacon&&Hb.sendBeacon(t)||Ob(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var q=Eg(b),r=Dg[q];r&&Gg(q,r,c,d,e)}};var Gh;if(3===nc.Cb.length)Gh="g";else{var Ih="G";Gh=Ih}
var Jh={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Gh,OPT:"o"},Kh=function(a){var b=nc.i.split("-"),c=b[0].toUpperCase(),d=Jh[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===nc.Cb.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+nc.Cb+e};var Ph=["input","select","textarea"],Qh=["button","hidden","image","reset","submit"],Rh=function(a){var b=a.tagName.toLowerCase();return!pa(Ph,function(c){return c===b})||"input"===b&&pa(Qh,function(c){return c===a.type.toLowerCase()})?!1:!0},Sh=function(a){return a.form?a.form.tagName?a.form:C.getElementById(a.form):Tb(a,["form"],100)},Th=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,g=1;e<a.elements.length;e++){var h=a.elements[e];if(Rh(h)){if(h.getAttribute(c)===d)return g;
g++}}return 0};var Wh=!!u.MutationObserver,Xh=void 0,Yh=function(a){if(!Xh){var b=function(){var c=C.body;if(c)if(Wh)(new MutationObserver(function(){for(var e=0;e<Xh.length;e++)G(Xh[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;D(c,"DOMNodeInserted",function(){d||(d=!0,G(function(){d=!1;for(var e=0;e<Xh.length;e++)G(Xh[e])}))})}};Xh=[];C.body?b():G(b)}Xh.push(a)};var zi=u.clearTimeout,Ai=u.setTimeout,K=function(a,b,c){if(ld()){b&&G(b)}else return Lb(a,b,c)},Bi=function(){return u.location.href},Ci=function(a){return oe(pe(a),"fragment")},Di=function(a){return ne(pe(a))},Ei=null;
var Fi=function(a,b){return bd(a,b||2)},Gi=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Nf(a)},Hi=function(a,b){u[a]=b},W=function(a,b,c){b&&(void 0===u[a]||c&&!u[a])&&(u[a]=b);return u[a]},Ii=function(a,b,c){return We(a,b,void 0===c?!0:!!c)},Ji=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Kc:d};th(e);Ah(e)},Ki=function(a,b,c,d,e){wh(a,b,c,d,e);},Li=function(a,b,c,d,e){
yh(a,b,c,d,e);},Mi=function(a,b){if(ld()){b&&G(b)}else Nb(a,b)},Ni=function(a){return!!wg(a,"init",!1)},Oi=function(a){ug(a,"init",!0)},Pi=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":sc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&ta(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});K(J("https://","http://",d))},Qi=function(a,b){var c=a[b];
return c};
var Si=pg.rg;var Ti=new ra,Ui=function(a,b){function c(h){var k=pe(h),l=oe(k,"protocol"),m=oe(k,"host",!0),n=oe(k,"port"),p=oe(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},Vi=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ma(c)){for(var d=0;d<c.length;d++)if(Vi({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=oa(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=Ti.get(q);r||(r=new RegExp(c,t),Ti.set(q,r));p=r.test(b)}catch(v){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Ui(b,c)}return!1};var Xi={},Yi=function(){if(u._gtmexpgrp&&u._gtmexpgrp.hasOwnProperty(1))return u._gtmexpgrp[1];void 0===Xi[1]&&(Xi[1]=Math.floor(2*Math.random()));return Xi[1]};var Zi=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var $i={},aj=encodeURI,X=encodeURIComponent,bj=Ob;var cj=function(a,b){if(!a)return!1;var c=oe(pe(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var dj=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};$i.og=function(){var a=!1;return a};var Dj=function(){var a=u.gaGlobal=u.gaGlobal||{};a.hid=a.hid||qa();return a.hid};var mk=window,nk=document,ok=function(a){var b=mk._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===mk["ga-disable-"+a])return!0;try{var c=mk.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=We("AMP_TOKEN",nk.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return nk.getElementById("__gaOptOutExtension")?!0:!1};var tk=function(a,b,c){Pe(b,c,a)},uk=function(a,b,c){Pe(b,c,a,!0)},wk=function(a,b){},vk=function(a,b){},
xk=function(a){return"_"===a.charAt(0)},yk=function(a){ta(a,function(c){xk(c)&&delete a[c]});var b=a[H.xb]||{};ta(b,function(c){xk(c)&&delete b[c]})};var Z={a:{}};


Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.b="sp";Z.__sp.g=!0;Z.__sp.priorityOverride=0})(function(a){var b=void 0,c="//www.googleadservices.com/pagead/conversion_async.js";var d=a.vtp_gtmOnFailure;Yd();K(c,function(){var e=W("google_trackConversion");
if(ja(e)){var g={};"DATA_LAYER"==a.vtp_customParamsFormat?g=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(g=dj(a.vtp_customParams,"key","value"));var h={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(g.event=a.vtp_eventName),a.vtp_eventValue&&(h.value=a.vtp_eventValue),a.vtp_eventItems&&(h.items=a.vtp_eventItems));var k={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:g,google_gtag_event_data:h,google_remarketing_only:!0,
onload_callback:a.vtp_gtmOnSuccess,google_gtm:Kh()};b&&(k.google_additional_conversion_params=b);e(k)||d()}else d()},d)})}();Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();

Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(kd(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=Fi("gtm.referrer",1)||C.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?oe(pe(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Di(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=sg(c,"gtm.click");Gi(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!Ni("cl")){var c=W("document");D(c,"click",a,!0);Oi("cl")}G(b.vtp_gtmOnSuccess)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=W(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0;Z.__k.priorityOverride=0})(function(a){return Ii(a.vtp_name,Fi("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0;Z.__r.priorityOverride=0})(function(a){return qa(a.vtp_min,a.vtp_max)})}();
Z.a.t=["google"],function(){(function(a){Z.__t=a;Z.__t.b="t";Z.__t.g=!0;Z.__t.priorityOverride=0})(function(){return(new Date).getTime()})}();
Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Fi("gtm.url",1))||Bi();var d=b[a("vtp_component")];if(!d||"URL"==d)return Di(String(c));var e=pe(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?ma(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var p=oe(e,"QUERY",void 0,void 0,m[n]);if(void 0!=p&&(!l||""!==p)){g=p;break a}}g=void 0}else g=oe(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Fi(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},g={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;f(dj(n.vtp_fieldsToSet,"fieldName","value"),g);f(dj(n.vtp_contentGroup,"index","group"),h);f(dj(n.vtp_dimension,"index","dimension"),k);f(dj(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var p=f(n);d=f(d,p)}f(dj(d.vtp_fieldsToSet,"fieldName","value"),g);f(dj(d.vtp_contentGroup,
"index","group"),h);f(dj(d.vtp_dimension,"index","dimension"),k);f(dj(d.vtp_metric,"index","metric"),l);var t=ee(d.vtp_functionName);if(ja(t)){var q="",r="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(r=d.vtp_trackerName,q=r+"."):(r="gtm"+zc(),q=r+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},y=function(T){var O=[].slice.call(arguments,0);O[0]=q+O[0];t.apply(window,O)},x=function(T,O){return void 0===O?O:T(O)},A=function(T,O){if(O)for(var na in O)O.hasOwnProperty(na)&&y("set",T+na,O[na])},z=function(){},B=function(T,O,na){var Sa=0;if(T)for(var Aa in T)if(T.hasOwnProperty(Aa)&&(na&&v[Aa]||!na&&void 0===v[Aa])){var Ta=w[Aa]?va(T[Aa]):T[Aa];"anonymizeIp"!=Aa||Ta||(Ta=void 0);O[Aa]=Ta;Sa++}return Sa},E={name:r};B(g,E,!0);t("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",Kh(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(T,O){void 0!==d[O]&&y("set",T,d[O])})("nonInteraction","vtp_nonInteraction");A("contentGroup",h);A("dimension",k);A("metric",l);var F={};B(g,F,!1)&&y("set",F);var M;
d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var T=g&&g.hitCallback;ja(T)&&T();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),z());var Q={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(ua,d.vtp_eventValue||
e.value)};B(M,Q,!1);y("send",Q);}else if("TRACK_SOCIAL"==d.vtp_trackType){var S={hitType:"social",socialNetwork:String(d.vtp_socialNetwork),socialAction:String(d.vtp_socialAction),socialTarget:String(d.vtp_socialActionTarget)};B(M,S,!1);y("send",S);}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(y("require","ec","ec.js"),z());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var Y=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:Y})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ba="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:ba})}M?y("send","pageview",M):y("send","pageview");d.vtp_autoLinkDomains&&fe(q,d.vtp_autoLinkDomains,!!d.vtp_useHashAutoLink,!!d.vtp_decorateFormsAutoLink);
}if(!a){var ca=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ca="internal/"+ca);a=!0;var Ba=J("https:","http:","//www.google-analytics.com/"+ca,g&&g.forceSSL);K(Ba,function(){var T=ce();T&&T.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else G(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();


Z.a.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.b="cid";Z.__cid.g=!0;Z.__cid.priorityOverride=0})(function(){return nc.i})}();


Z.a.aev=["google"],function(){function a(q,r){var v=kd(q,"gtm");if(v)return v[r]}function b(q,r,v,w){w||(w="element");var y=q+"."+r,x;if(n.hasOwnProperty(y))x=n[y];else{var A=a(q,w);if(A&&(x=v(A),n[y]=x,p.push(y),35<p.length)){var z=p.shift();delete n[z]}}return x}function c(q,r,v){var w=a(q,t[r]);return void 0!==w?w:v}function d(q,r){if(!q)return!1;var v=e(Bi());ma(r)||(r=String(r||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<r.length;y++)if(r[y]instanceof RegExp){if(r[y].test(q))return!1}else{var x=
r[y];if(0!=x.length){if(0<=e(q).indexOf(x))return!1;w.push(e(x))}}return!cj(q,w)}function e(q){m.test(q)||(q="http://"+q);return oe(pe(q),"HOST",!0)}function g(q,r,v){switch(q){case "SUBMIT_TEXT":return b(r,"FORM."+q,h,"formSubmitElement")||v;case "LENGTH":var w=b(r,"FORM."+q,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(r,"id",v);case "INTERACTED_FIELD_NAME":return l(r,"name",v);case "INTERACTED_FIELD_TYPE":return l(r,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(r,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(r,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(q){switch(q.tagName.toLowerCase()){case "input":return Qb(q,"value");case "button":return Rb(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var r=0,v=0;v<q.elements.length;v++)Rh(q.elements[v])&&r++;return r}}function l(q,r,v){var w=a(q,"interactedFormField");return w&&Qb(w,r)||v}var m=/^https?:\/\//i,n={},p=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(q){var r=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var y=a(r,"element");return y&&y.tagName||
v;case "TEXT":return b(r,w,Rb)||v;case "URL":var x;a:{var A=String(a(r,"elementUrl")||v||""),z=pe(A),B=String(q.vtp_component||"URL");switch(B){case "URL":x=A;break a;case "IS_OUTBOUND":x=d(A,q.vtp_affiliatedDomains);break a;default:x=oe(z,B,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===q.vtp_attribute)E=c(r,w,v);else{var F=q.vtp_attribute,M=a(r,"element");E=M&&Qb(M,F)||v||""}return E;case "MD":var Q=q.vtp_mdValue,S=b(r,"MD",li);return Q&&S?oi(S,Q)||
v:S||v;case "FORM":return g(String(q.vtp_component||"SUBMIT_TEXT"),r,v);default:return c(r,w,v)}})}();

Z.a.cegg=["nonGoogleScripts"],function(){var a={};(function(b){Z.__cegg=b;Z.__cegg.b="cegg";Z.__cegg.g=!0;Z.__cegg.priorityOverride=0})(function(b){try{var c=b.vtp_usersNumericId;if(c)if(a.hasOwnProperty(c)&&!0===a[c])b.vtp_gtmOnSuccess();else{b.vtp_snapshotName&&(u.CE_SNAPSHOT_NAME=b.vtp_snapshotName);for(var d=c.toString();8>d.length;)d="0"+d;var e=d.replace(/(\d+)(\d{4})$/,"/pages/scripts/$1/$2.js");K("//script.crazyegg.com"+e+"?"+Math.floor((new Date).getTime()/36E5),b.vtp_gtmOnSuccess,b.vtp_gtmOnFailure);
a[c]=!0}else G(b.vtp_gtmOnFailure)}catch(g){G(b.vtp_gtmOnFailure)}})}();
Z.a.hl=["google"],function(){function a(g){return g.target&&g.target.location&&g.target.location.href?g.target.location.href:Bi()}function b(g,h){D(g,"hashchange",function(k){var l=a(k);h({source:"hashchange",state:null,url:Di(l),D:Ci(l)})})}function c(g,h){D(g,"popstate",function(k){var l=a(k);h({source:"popstate",state:k.state,url:Di(l),D:Ci(l)})})}function d(g,h,k){var l=h.history,m=l[g];if(ja(m))try{l[g]=function(n,p,t){m.apply(l,[].slice.call(arguments,0));k({source:g,state:n,url:Di(Bi()),D:Ci(Bi())})}}catch(n){}}
function e(){var g={source:null,state:W("history").state||null,url:Di(Bi()),D:Ci(Bi())};return function(h){var k=g,l={};l[k.source]=!0;l[h.source]=!0;if(!l.popstate||!l.hashchange||k.D!=h.D){var m={event:"gtm.historyChange","gtm.historyChangeSource":h.source,"gtm.oldUrlFragment":g.D,"gtm.newUrlFragment":h.D,"gtm.oldHistoryState":g.state,"gtm.newHistoryState":h.state};m["gtm.oldUrl"]=g.url,m["gtm.newUrl"]=h.url;
g=h;Gi(m)}}}(function(g){Z.__hl=g;Z.__hl.b="hl";Z.__hl.g=!0;Z.__hl.priorityOverride=0})(function(g){var h=W("self");if(!Ni("hl")){var k=e();b(h,k);c(h,k);d("pushState",h,k);d("replaceState",h,k);Oi("hl")}G(g.vtp_gtmOnSuccess)})}();
Z.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=W("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(k){Yd();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:Kh()},m=function(v){return function(w,y,x){var A="DATA_LAYER"==v?Fi(x):k[y];A&&(l[w]=A)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}}));var p=function(v,w){(l.google_additional_conversion_params=l.google_additional_conversion_params||{})[v]=w},t=function(v){return function(w,y,x,A){var z="DATA_LAYER"==
v?Fi(x):k[y];A(z)&&p(w,z)}},q="//www.googleadservices.com/pagead/conversion_async.js";k.vtp_enableNewCustomerReporting&&(n=t(k.vtp_newCustomerReportingDataSource),n("vdnc","vtp_awNewCustomer","new_customer",ea),n("vdltv","vtp_awCustomerLTV","customer_lifetime_value",
function(v){return void 0!=v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var r=!0;r&&b.push(l);a||(a=!0,K(q,g(),
e(q)))};Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0;Z.__awct.priorityOverride=0}();Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=dj(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Z.a.hid=["google"],function(){(function(a){Z.__hid=a;Z.__hid.b="hid";Z.__hid.g=!0;Z.__hid.priorityOverride=0})(function(){return pg.yb})}();
Z.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=C.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Kb(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){G(h)}}}var b=function(d,e,g){Pd(function(){var h,k=oc;k.postscribe||(k.postscribe=Eb);h=k.postscribe;var l={done:e},m=C.createElement("div");m.style.display="none";m.style.visibility="hidden";C.body.appendChild(m);try{h(m,d,l)}catch(n){G(g)}})};var c=function(d){if(C.body){var e=
d.vtp_gtmOnFailure,g=Si(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.Bc,k=g.J;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(C.body,Sb(h),k,e)()}else Ai(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();





Z.a.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.b="img";Z.__img.g=!0;Z.__img.priorityOverride=0})(function(a){var b=Sb('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}bj(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();



var Hk={};Hk.macro=function(a){if(pg.nc.hasOwnProperty(a))return pg.nc[a]},Hk.onHtmlSuccess=pg.Ld(!0),Hk.onHtmlFailure=pg.Ld(!1);Hk.dataLayer=cd;Hk.callback=function(a){xc.hasOwnProperty(a)&&ja(xc[a])&&xc[a]();delete xc[a]};Hk.xf=function(){oc[nc.i]=Hk;Da(yc,Z.a);qb=qb||pg;rb=Hd};
Hk.jg=function(){kh.gtm_3pds=!0;oc=u.google_tag_manager=u.google_tag_manager||{};if(oc[nc.i]){var a=oc.zones;a&&a.unregisterChild(nc.i)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)ib.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)lb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)kb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);jb.push(p)}nb=Z;pb=Vi;Hk.xf();Tf();Kd=!1;Ld=0;if("interactive"==C.readyState&&!C.createEventObject||"complete"==C.readyState)Nd();else{D(C,"DOMContentLoaded",Nd);D(C,"readystatechange",Nd);if(C.createEventObject&&C.documentElement.doScroll){var q=!0;try{q=!u.frameElement}catch(y){}q&&Od()}D(u,"load",Nd)}Hf=!1;"complete"===C.readyState?Jf():
D(u,"load",Jf);a:{if(!Sc)break a;u.setInterval(Tc,864E5);}
uc=(new Date).getTime();
}};(0,Hk.jg)();

})()
