require("greenlock-express")
    .init(function() {
        var pkg = require("./package.json");
        return {
            greenlock: require("@root/greenlock").create({
                // name & version for ACME client user agent
                packageAgent: pkg.name + "/" + pkg.version,

                // contact for security and critical bug notices
                maintainerEmail: pkg.author,

                // where to find .greenlockrc and set default paths
                packageRoot: __dirname
            }),

            // whether or not to run at cloudscale
            cluster: false
        };
    })
    .ready(function(glx) {
        var app = require("./src/app.js");

        // Serves on 80 and 443
        // Get's SSL certificates magically!
        glx.serveApp(app);
    });