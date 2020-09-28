//List of Urls which has to block
const block_urls = [
	"*://*.doubleclick.net/*",
	"*://*.partner.googleadservices.com/*",
	"*://*.googleleads.g.doubleclick.net/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://*.creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
	"*://*.ade.clmbtech.com/*",
	"*://*.images.taboola.com/*",
	"*://*.cdn.taboola.com/*",
	"*://*.media.net/*",
	"*://*.srv.buysellads.com/*",
	"*://*.gozefo.com/*",
	"*://*.popup.taboola.com/*",
	"*://*.taboola.com/*",
	"*://*.cdn.taboolasyndication.com/*",
	"*://*.taboolasyndication.com/*",
	"*://*.taboolasyndication.com/*",
	"*://*.cdn.taboolasyndication.com/*",
	"*://*.trc.taboola.com/*",
	"*://*.trc.taboola.com/*",
	"*://*.images.taboola.com/*",
	"*://*.adserver.adtechus.com/*",
	"*://*.adserver.adtechus.com/*",
	"*://*.us-u.openx.net/*",
	"*://*.us-u.openx.net/*",
	"*://*.api.taboola.com/*",
	"*://*.www.api.taboola.com/*",
	"*://*.c2.taboola.com/*",
	"*://*.www.c2.taboola.com/*",
	"*://*.cdn.taboola.com/*",
	"*://*.www.cdn.taboola.com/*",
	"*://*.urc.taboolasyndication.com/*",
	"*://*.www.urc.taboolasyndication.com/*",
	"*://*.taboola.com.edgekey.net/*",
	"*://*.www.taboola.com.edgekey.net/*",
	"*://*.esd-secure.taboola.com.edgekey.net/*",
	"*://*.www.esd-secure.taboola.com.edgekey.net/*",
	"*://*.nr.taboola.com/*",
	"*://*.api.taboola.com/*",
	"*://*.c2.taboola.com/*",
	"*://*.cdn.taboola.com/*",
	"*://*.urc.taboolasyndication.com/*",
	"*://*.esd-secure.taboola.com.edgekey.net/*",
	"*://*.cdn.taboolasyndication.com/*",
	"*://*.carbonads.net/*",
	"*://*.a-ads.com/*",
	"*://*.go.taboola.com/*",
	"*://*.trafficfactory.biz/*",
	"*://*.adpushup.com/*",
];

//Function for blocking Ads
function blockads() {
	return { cancel: true };
}


//function for switching the blocker ON and OFF
function receiver(request, sender, sendResponse) {
	if (request == "ON") {
		console.log("Switch : ON (bg)")
		//Adding Listener to block request for Ads 
		chrome.webRequest.onBeforeRequest.addListener(
			blockads,
			{ urls: block_urls },
			["blocking"]
		);
	}
	else {
		console.log("Switch : OFF (bg)");
		//Removing Listener to block request for Ads 
		chrome.webRequest.onBeforeRequest.removeListener(
			blockads,
			{ urls: block_urls },
			["blocking"]
		);
	}

}

//Listener for recieving message from popup.js 
chrome.runtime.onMessage.addListener(receiver);
