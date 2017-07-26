import * as $ from "jquery";
import pnp from "sp-pnp-js";

pnp.setup({
    baseUrl: "https://breadcrumb1.sharepoint.com"
});

pnp.sp.web.select("Title").get().then(function(web){
 $("#pnp-test-bench").text("This is the title of the current Web : " + web.Title);
});