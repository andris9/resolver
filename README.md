# Resolver

Url resolver module for Node.JS

This module Resolves destination URLs. Feed it a source url and the resolver returns with the destination url if any redirects happened.

For example

    http://bit.ly/PWoeXs

will be resolved into

    http://www.andrisreinman.com/post/15668406504/eesti-saitide-kodeeringud

Also if the final url has google analytics params (*utm_*), these will be removed.

## Installation

    npm install resolver

## Usage

Use *resolver.resolve(url, callback)*

    var resolver = require("resolver");

    resolver.resolve("http://bit.ly/PWoeXs", function(err, url, filename, contentType){
        console.log(err || url);
    });

## License

**MIT**

