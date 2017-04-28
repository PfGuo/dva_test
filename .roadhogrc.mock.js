
export default {
    '/api/getcountrank': function(req, res) {
        setTimeout(function() {
            res.json({
                status: 0,
                msg: "success",
                data: [{
                    count_message: "aaa",
                    count: "10"
                }, {
                    count_message: "bbb",
                    count: "20"
                }, {
                    count_message: "ccc",
                    count: "30"
                }, {
                    count_message: "ddd",
                    count: "40"
                }, {
                    count_message: "eee",
                    count: "50"
                }]
            });
        }, 500);
    },

    '/api/getsizerank': function(req, res) {
        setTimeout(function() {
            res.json({
                status: 0,
                msg: "success",
                data: [{
                    size_message: "aaa",
                    size: "10"
                }, {
                    size_message: "bbb",
                    size: "40"
                }, {
                    size_message: "ccc",
                    size: "60"
                }, {
                    size_message: "ddd",
                    size: "80"
                }, {
                    size_message: "eee",
                    size: "90"
                }]
            });
        }, 500);
    },

    '/api/getdetaillist': function(req, res) {
        setTimeout(function() {
            res.json({
                status: 0,
                msg: "success",
                data: [{
                    domainname: 'xxx',
                    msgcount: 50,
                    msgsize: 100,
                    attachment: "yyyy"
                }, {
                    domainname: 'zzz',
                    msgcount: 50,
                    msgsize: 300,
                    attachment: "eee"
                }]
            });
        }, 500);
    },
};
