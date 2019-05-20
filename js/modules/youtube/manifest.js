console.log("modules/youtube/manifest.js");
import {AllModules} from '../../modules.js';
var Youtube = (function() {
    'use strict';
    
    return {
        name: "Youtube",
        description: "This module looks through all activities of a user on Youtube and captures those activities that the user has permitted",
        path: "/youtube",
        URL: ["https://www.youtube.com"],
        functions: ["content" ,"browsing", "apiCall"],
		viewGroups: [
			{
				name: "UX",
				title: "User Experience"
			},
			{
				name: "API",
				title: "Youtube API"
			}
		],
        is_enabled: true,
        privacy_level: 3,        
        status: "enabled",
        icons: ["data:image/png;base64,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","",""],
        version: 1,
        changelog: [],
		style: {mainColor:"c4302b", fontColor:"fff"},
		type: "builtin",
		is_verified: false		
		
    };
}());
AllModules.push(Youtube);
export {Youtube};