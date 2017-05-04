
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
      "msgcount": 6, 
      "msgsize": 13837.79, 
      "uid": "xiaoi"
    }, 
    {
      "msgcount": 1, 
      "msgsize": 9394.54, 
      "uid": "qq_315747165"
    }, 
    {
      "msgcount": 1, 
      "msgsize": 8967.38, 
      "uid": "huangyuyang"
    }, 
    {
      "msgcount": 1, 
      "msgsize": 8561.97, 
      "uid": "gaoyun"
    }, 
    {
      "msgcount": 1, 
      "msgsize": 7056.55, 
      "uid": "shenhe"
    }, 
    {
      "msgcount": 2, 
      "msgsize": 6668.47, 
      "uid": "zhenzhen.peng"
    }, 
    {
      "msgcount": 1, 
      "msgsize": 6560.52, 
      "uid": "zhangchenting"
    }, 
    {
      "msgcount": 2, 
      "msgsize": 6537.33, 
      "uid": "lihongzhen"
    }, 
    {
      "msgcount": 1, 
      "msgsize": 5794.15, 
      "uid": "JiaWang_sx"
    }, 
    {
      "msgcount": 1, 
      "msgsize": 5227.06, 
      "uid": "wanglina_sx"
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
                "data": [
    {
      "domain_name": "163.com", 
      "msgcount": 28, 
      "msgsize": 16066.75
    }, 
    {
      "domain_name": "1fusion.com.cn", 
      "msgcount": 2, 
      "msgsize": 6668.47
    }, 
    {
      "domain_name": "adzshd.com", 
      "msgcount": 1, 
      "msgsize": 450.02
    }, 
    {
      "domain_name": "aem.qiyi.virtual", 
      "msgcount": 1, 
      "msgsize": 367.20
    }, 
    {
      "domain_name": "aspiration-cn.com", 
      "msgcount": 1, 
      "msgsize": 78.33
    }, 
    {
      "domain_name": "canon.com.cn", 
      "msgcount": 1, 
      "msgsize": 433.49
    }, 
    {
      "domain_name": "chinanetcenter.com", 
      "msgcount": 1, 
      "msgsize": 63.58
    }, 
    {
      "domain_name": "ctrip.com", 
      "msgcount": 2, 
      "msgsize": 45.61
    }, 
    {
      "domain_name": "daily.musikid.com", 
      "msgcount": 1, 
      "msgsize": 35.05
    }, 
    {
      "domain_name": "daydaycook.com", 
      "msgcount": 1, 
      "msgsize": 5.96
    }, 
    {
      "domain_name": "dev133.localhost.localdomain", 
      "msgcount": 6, 
      "msgsize": 32.69
    }, 
    {
      "domain_name": "email.travelzoo.com", 
      "msgcount": 1, 
      "msgsize": 88.46
    }, 
    {
      "domain_name": "gimc.cn", 
      "msgcount": 1, 
      "msgsize": 13.61
    }, 
    {
      "domain_name": "gmail.com", 
      "msgcount": 5, 
      "msgsize": 3609.79
    }, 
    {
      "domain_name": "goldenfinance.com.cn", 
      "msgcount": 1, 
      "msgsize": 44.40
    }, 
    {
      "domain_name": "groupm.com", 
      "msgcount": 1, 
      "msgsize": 263.69
    }, 
    {
      "domain_name": "hunteron.com", 
      "msgcount": 1, 
      "msgsize": 187.28
    }, 
    {
      "domain_name": "hylinkad.com", 
      "msgcount": 2, 
      "msgsize": 145.88
    }, 
    {
      "domain_name": "idiaoyan.com", 
      "msgcount": 2, 
      "msgsize": 3307.54
    }, 
    {
      "domain_name": "ifenghui.com", 
      "msgcount": 1, 
      "msgsize": 7.94
    }, 
    {
      "domain_name": "ifgfilm.com", 
      "msgcount": 2, 
      "msgsize": 19.83
    }, 
    {
      "domain_name": "intel.com", 
      "msgcount": 1, 
      "msgsize": 22.38
    }, 
    {
      "domain_name": "iott.tw", 
      "msgcount": 4, 
      "msgsize": 645.16
    }, 
    {
      "domain_name": "iqibai.com", 
      "msgcount": 1, 
      "msgsize": 8.37
    }, 
    {
      "domain_name": "isqyx.com", 
      "msgcount": 1, 
      "msgsize": 285.13
    }, 
    {
      "domain_name": "kiyu.tw", 
      "msgcount": 1, 
      "msgsize": 8.60
    }, 
    {
      "domain_name": "liuxiaodandeMac-mini.local", 
      "msgcount": 1, 
      "msgsize": 5.98
    }, 
    {
      "domain_name": "localhost.localdomain", 
      "msgcount": 16, 
      "msgsize": 86.82
    }, 
    {
      "domain_name": "mail.maimai.cn", 
      "msgcount": 1, 
      "msgsize": 495.48
    }, 
    {
      "domain_name": "mail.mams.qiyi.domain", 
      "msgcount": 1, 
      "msgsize": 7.68
    }, 
    {
      "domain_name": "mail30.lagoujobs.com", 
      "msgcount": 7, 
      "msgsize": 91.91
    }, 
    {
      "domain_name": "mail7.lietou-edm.com", 
      "msgcount": 4, 
      "msgsize": 158.41
    }, 
    {
      "domain_name": "mams.iqiyi.domain", 
      "msgcount": 68, 
      "msgsize": 1043.01
    }, 
    {
      "domain_name": "marketing.reedkuozhan.com", 
      "msgcount": 1, 
      "msgsize": 61.50
    }, 
    {
      "domain_name": "meizu.com", 
      "msgcount": 1, 
      "msgsize": 61.01
    }, 
    {
      "domain_name": "mindshareworld.com", 
      "msgcount": 1, 
      "msgsize": 105.04
    }, 
    {
      "domain_name": "ossec-hybrid-slave-online001-sjhl.qiyi.virtual", 
      "msgcount": 2, 
      "msgsize": 12.65
    }, 
    {
      "domain_name": "ossec-hybrid-slave-online002-jylt.qiyi.virtual", 
      "msgcount": 1, 
      "msgsize": 6.29
    }, 
    {
      "domain_name": "phdmedia.com", 
      "msgcount": 1, 
      "msgsize": 91.10
    }, 
    {
      "domain_name": "publicismedia.com", 
      "msgcount": 1, 
      "msgsize": 684.95
    }, 
    {
      "domain_name": "puremedia.com.cn", 
      "msgcount": 1, 
      "msgsize": 64.99
    }, 
    {
      "domain_name": "pz5.com", 
      "msgcount": 1, 
      "msgsize": 65.58
    }, 
    {
      "domain_name": "qiyi.com", 
      "msgcount": 1720, 
      "msgsize": 123442.18
    }, 
    {
      "domain_name": "qq.com", 
      "msgcount": 10, 
      "msgsize": 3153.49
    }, 
    {
      "domain_name": "qvantel.com", 
      "msgcount": 2, 
      "msgsize": 85.98
    }, 
    {
      "domain_name": "smg-bj-02.qiyi.com", 
      "msgcount": 1, 
      "msgsize": 11.47
    }, 
    {
      "domain_name": "smg-sh-01.qiyi.com", 
      "msgcount": 5, 
      "msgsize": 56.05
    }, 
    {
      "domain_name": "sootoo.com", 
      "msgcount": 2, 
      "msgsize": 646.99
    }, 
    {
      "domain_name": "sunlink.hk", 
      "msgcount": 1, 
      "msgsize": 1325.09
    }, 
    {
      "domain_name": "text100.com.cn", 
      "msgcount": 1, 
      "msgsize": 2807.33
    }
  ], 
            });
        }, 500);
    },
};
