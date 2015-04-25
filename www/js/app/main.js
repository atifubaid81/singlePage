define(["jquery", "jquery.single-page", "jquery.includer"], function() {
    //the jquery.nav.js and jquery.footer.js plugins have been loaded.
    jQuery(function() {
            require(["index.html"], function (page) {
            if (typeof page !== 'undefined') page();
        });
    });
});
