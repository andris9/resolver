'use strict';

var resolver = require('../index');

exports['Url tests'] = {
    'Check FeedBurner URl': function(test) {
        resolver.resolve('http://feedproxy.google.com/~r/AndrisReinman/~3/Cwi_bAR2Ljc/', function(err, url, fileName, contentType) {
            test.ifError(err);
            test.equal(url, 'http://andrisreinman.com/klikkide-jargi-populaarsuse-arvutamine/');
            test.equal(fileName, 'index.html');
            test.equal(contentType, 'text/html');
            test.done();
        });
    }
};

exports['Remove params tests'] = {
    'Keep all params 1': function(test) {
        var url = 'http://www.andrisreinman.com/test?p1=1&p2=2&p3=3';
        test.equal(url, resolver.removeParams(url, []));
        test.done();
    },
    'Keep all params 2': function(test) {
        var url = 'http://www.andrisreinman.com/test?p1=1&p2=2&p3=3';
        test.equal(url, resolver.removeParams(url, ['noexist']));
        test.done();
    },
    'No params 1': function(test) {
        var url = 'http://www.andrisreinman.com/test';
        test.equal(url, resolver.removeParams(url, []));
        test.done();
    },
    'No params 2': function(test) {
        var url = 'http://www.andrisreinman.com/test';
        test.equal(url, resolver.removeParams(url, ['noexists']));
        test.done();
    },
    'Remove string param': function(test) {
        var url = 'http://www.andrisreinman.com/test?p1=1&p2=2&p3=3';
        test.equal('http://www.andrisreinman.com/test?p1=1&p3=3', resolver.removeParams(url, ['p2']));
        test.done();
    },
    'Remove regex param 1': function(test) {
        var url = 'http://www.andrisreinman.com/test?p1=1&p2=2&p3=3';
        test.equal('http://www.andrisreinman.com/test?p1=1&p3=3', resolver.removeParams(url, [/p2/]));
        test.done();
    },
    'Remove regex param 2': function(test) {
        var url = 'http://www.andrisreinman.com/test?p1=1&p2=2&p3=3';
        test.equal('http://www.andrisreinman.com/test', resolver.removeParams(url, [/p/]));
        test.done();
    },
    'Remove regex and string': function(test) {
        var url = 'http://www.andrisreinman.com/test?p1=1&p2=2&p3=3&r=45';
        test.equal('http://www.andrisreinman.com/test?p3=3', resolver.removeParams(url, [/p1|p2/, 'r']));
        test.done();
    }
};