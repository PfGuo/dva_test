# dva_test

# Envirment

1. npm install

2. npm start

# API

1. Top 10 sender by sendCount:

    url: '/api/top/<int:top_num>?t=c',

    response: 
    
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

2. Top 10 sender by sendSize:

    url: '/api/top/<int:top_num>?t=s',

    response: 

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

3. List by domain:

	GET /api/stat?sday=20170201&eday=20170304&limit=10

    params: 

        sday: start time, default just moment.

        eday: end time, default last day.

    response: 

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
