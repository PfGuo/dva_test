
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
                "data": [
    {
      "msgcount": 658, 
      "msgsize": 3033.58, 
      "uid": "tp_alert"
    }, 
    {
      "msgcount": 138, 
      "msgsize": 1389.07, 
      "uid": "no-reply"
    }, 
    {
      "msgcount": 91, 
      "msgsize": 1301.52, 
      "uid": "portal-process"
    }, 
    {
      "msgcount": 76, 
      "msgsize": 3214.43, 
      "uid": "MicrosoftExchange329e71ec88ae4"
    }, 
    {
      "msgcount": 67, 
      "msgsize": 1931.39, 
      "uid": "pms"
    }, 
    {
      "msgcount": 52, 
      "msgsize": 939.19, 
      "uid": "lego"
    }, 
    {
      "msgcount": 51, 
      "msgsize": 418.49, 
      "uid": "bugzilla"
    }, 
    {
      "msgcount": 51, 
      "msgsize": 1069.38, 
      "uid": "oa"
    }, 
    {
      "msgcount": 42, 
      "msgsize": 233.62, 
      "uid": "mbd_zabbix_admin"
    }, 
    {
      "msgcount": 40, 
      "msgsize": 644.65, 
      "uid": "pay-alert"
    }
  ], 
            });
        }, 500);
    },

    '/api/stat': function(req, res) {
        setTimeout(function() {
            res.json({
                status: 0,
                msg: "success",
                data: [{
                    domain_name: 'xxx',
                    msgcount: 50,
                    msgsize: 100
                }, {
                    domain_name: 'zzz',
                    msgcount: 50,
                    msgsize: 300
                }]
            });
        }, 500);
    },
};
