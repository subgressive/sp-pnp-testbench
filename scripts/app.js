"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
const sp_pnp_js_1 = require("sp-pnp-js");
sp_pnp_js_1.default.setup({
    baseUrl: "https://breadcrumb1.sharepoint.com"
});
sp_pnp_js_1.default.sp.web.select("Title").get().then(function (web) {
    $("#pnp-test-bench").text("This is the title of the current Web : " + web.Title);
});
//# sourceMappingURL=app.js.map