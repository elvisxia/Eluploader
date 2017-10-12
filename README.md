# Eluploader

- **Usage:**

        var options={
          "file": {
                    "uploadUrl": "",
                    "maxSize": 10,//max siz of the to uploaded file
                    "uploadCallback": function (args) { },
                    "acceptTypes": {
                        'pattern': /(\S+)\/(\S+)/
                    }
                },
                "image": {
                    "uploadUrl": "",
                    "maxSize": 2,//the size of max upload 2=2MB
                    "uploadCallback": function (args) { },
                    "acceptTypes": {
                        'image/png': true,
                        'image/jpeg': true,
                        'image/gif': true
                    }
                }
        };
        eluploader.render(options);
        eluploader.show();
