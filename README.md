# dva_test

#Envirment

1. npm install

2. npm start

#API

1. Count top 10:

    url: '/api/getcountrank',

    response: 
    
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

2. Size top 10:

    url: '/api/getsizerank',

    response: 

            status: 0,
            msg: "success",
            data: [{
                size_message: "aaa",
                size: "10"
            }, {
                size_message: "bbb",
                size: "10"
            }, {
                size_message: "ccc",
                size: "10"
            }, {
                size_message: "ddd",
                size: "10"
            }, {
                size_message: "eee",
                size: "10"
            }]

3. Table:

    url: '/api/getdetaillist?stime=' + stime + '&etime=' + etime,

    params: 

        stime: start time, default just moment.

        etime: end time, default last day.
    
    response: 

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