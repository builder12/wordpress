$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("UserLib", "UserLib");

        //This will prevent activating multiple versions of this framework being loaded
        f.type = "UserLib";
        f.allow_single_type = true;
        f.user_lib = true

        var comp_comp1 = new PgComponentType('comp1', 'Comp 1 / Div');
        comp_comp1.code = '<div class="vc_row wpb_row vc_row-fluid">\
    <div class="wpb_column vc_column_container vc_col-sm-12">\
        <div class="vc_column-inner">\
            <div class="wpb_wrapper">\
                <div class="vc_wp_posts wpb_content_element"> \
                    <div class="widget widget_recent_entries"> \
                        <h2 class="widgettitle">Recent Posts</h2> \
                        <ul>\
                            <li>\
                                <a href="http://5starlimobusrentals.com/our-holiday-lights-tour-in-naperville-google-maps-location-for-your-convenience.html">Our holiday lights tour in Naperville Google maps location for your convenience</a>\
                                <span class="post-date">November 16, 2018</span>\
                            </li>\
                            <li>\
                                <a href="http://5starlimobusrentals.com/knot-wedding-review-5-star-limos.html">Knot Wedding Review 5 Star Limos</a>\
                                <span class="post-date">November 16, 2018</span>\
                            </li>\
                            <li>\
                                <a href="http://5starlimobusrentals.com/want-fantastic-review-from-one-of-her-customers-on-the-michigan-willing-to-work.html">Want fantastic review from one of her customers on the Michigan willing to work</a>\
                                <span class="post-date">November 16, 2018</span>\
                            </li>\
                        </ul>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>\
</div>';
        comp_comp1.parent_selector = null;
        f.addComponentType(comp_comp1);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("UserLib_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp1]);

        f.addLibSection(section);
   });
});