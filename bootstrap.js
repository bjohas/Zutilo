/* Copyright 2012 Will Shanks.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

function install(data, reason) {
	
}

function startup(data, reason) {
	Components.utils.import("chrome://zutilo/content/zutilo.jsm");
	Zutilo.init(reason);
}

function shutdown(data, reason) {
	if (reason == APP_SHUTDOWN) {
		return;
	}
	
	if (ZutiloChrome.zoteroOverlay) {
		ZutiloChrome.zoteroOverlay.cleanup();
	}
	
	Components.utils.unload("chrome://zutilo/content/zutilo.jsm");
}

function uninstall(data, reason) {
	
}