
export default {
    '/api/top/:TOPNUM': function(req, res) {
        setTimeout(function() {
            res.json({
                status: 0,
                msg: "success",
                data: [{
                    uid: 'foo',
                    msgcount: 50,
                    msgsize: 100
                }, {
                    uid: 'foo',
                    msgcount: 50,
                    msgsize: 100
                }]
            });
        }, 500);
    },

    '/api/top/:TOPNUM': function(req, res) {
        setTimeout(function() {
            res.json({
                status: 0,
                msg: "success",
                data: [{
                    uid: 'foo',
                    msgcount: 50,
                    msgsize: 100
                }, {
                    uid: 'bar',
                    msgcount: 20,
                    msgsize: 20
                }]
            });
        }, 500);
    },

    '/api/stat': function(req, res) {
        setTimeout(function() {
            res.json({
                status: 0,
                msg: "success",
                data: [{
                    domainname: 'xxx',
                    msgcount: 50,
                    msgsize: 100
                }, {
                    domainname: 'zzz',
                    msgcount: 50,
                    msgsize: 300
                }]
            });
        }, 500);
    },
};
