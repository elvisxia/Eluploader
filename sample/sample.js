(function(){
    "use strict"

    eluploader.render({
        "image": {
            uploadUrl: "http://localhost:4003/",
            uploadCallback: function(){
                alert("in callback");
            }
        },
        "file": {

        }
    });

    eluploader.show("image");

})();