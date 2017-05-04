import React, { Component } from 'react';
import { DatePicker, Table, Button, Progress } from 'antd';
import { connect } from 'dva';
const { RangePicker } = DatePicker;

import styles from './Example.css'

class Example extends Component {
    constructor() {
      super();
    }

    componentDidMount() {
      const { dispatch } = this.props;

      dispatch({
        type: 'example/getCountRank',
        stime: parseInt(new Date(new Date().getTime() - 86400000)/1000),
        etime: parseInt(new Date().getTime()/1000)
      });

      dispatch({
        type: 'example/querySizeRank',
        stime: parseInt(new Date(new Date().getTime() - 86400000)/1000),
        etime: parseInt(new Date().getTime()/1000)
      });

      dispatch({
        type: 'example/getDetailList',
        stime: parseInt(new Date(new Date().getTime() - 86400000)/1000),
        etime: parseInt(new Date().getTime()/1000)
      });
    }

    render() {

      const { dispatch } = this.props;

      const { countrankloading, sizerankloading, detaillistloading, countrank, sizerank, detaillist } = this.props.example;

      const count_data = countrankloading ? [] : countrank.data;

      const size_data = sizerankloading ? [] : sizerank.data;

      const main_Data = detaillistloading ? [] : detaillist.data;

      function select_max (group, key) {
        let temp = 0;
        group.map(function(item) {
          temp = item[key] > temp ? item[key] : temp;
        });
        return temp+100;
      }

      const max_count_data = select_max(count_data, 'msgcount');

      const max_size_data = select_max(size_data, 'msgsize');

/** 
      const count_data = [{
            uid: "aaa",
            msgcount: "10"
        }, {
            uid: "bbb",
            msgcount: "20"
        }, {
            uid: "ccc",
            msgcount: "30"
        }, {
            uid: "ddd",
            msgcount: "40"
        }, {
            uid: "eee",
            msgcount: "50"
        }];

      const size_data = [{
          uid: "aaa",
          msgsize: "10"
      }, {
          uid: "bbb",
          msgsize: "40"
      }, {
          uid: "ccc",
          msgsize: "60"
      }, {
          uid: "ddd",
          msgsize: "80"
      }, {
          uid: "eee",
          msgsize: "90"
      }];

      const main_Data = [{
          domainname: 'xxx',
          msgcount: 50,
          msgsize: 100,
          attachment: "yyyy"
      }, {
          domainname: 'zzz',
          msgcount: 50,
          msgsize: 300,
          attachment: "eee"
      }];
*/

      const count_columns = [{
        title: '',
        dataIndex: 'uid',
        key: 'uid'
      }, {
        title: 'Message Count Top 10',
        dataIndex: 'msgcount',
        key: 'msgcount',
        width: '70%',
        render: (text, record, index) => <Progress percent={ (text/max_count_data)*100 } format={percent => parseInt(text) } strokeWidth={5} />
      }];
      const size_columns = [{
        title: '',
        dataIndex: 'uid',
        key: 'uid'
      }, {
        title: 'Message Size Top 10',
        dataIndex: 'msgsize',
        key: 'msgsize',
        width: '70%',
        render: (text, record, index) => <Progress percent={ (text/max_size_data)*100 } format={percent => parseInt(text) } strokeWidth={5} />
      }];

      const main_columns = [{
        title: 'Domain Name',
        dataIndex: 'domain_name',
        key: 'domain_name',
        width: '20%'
      }, {
        title: 'Message Count',
        dataIndex: 'msgcount',
        key: 'msgcount',
        width: '10%'
      }, {
        title: 'Message Size',
        dataIndex: 'msgsize',
        key: 'msgsize',
        width: '20%'
      }, {
        title: 'Attachment',
        dataIndex: 'attachment',
        key: 'attachment',
        width: '50%'
      }];

      function onChange(value, dateString) {}

      function onOk(value) {
        dispatch({
          type: 'example/getDetailList',
          stime: parseInt(value[0]._d.getTime()/1000),
          etime: parseInt(value[1]._d.getTime()/1000)
        });

        dispatch({
          type: 'example/getCountRank',
          stime: parseInt(value[0]._d.getTime()/1000),
          etime: parseInt(value[1]._d.getTime()/1000)
        });

        dispatch({
          type: 'example/querySizeRank',
          stime: parseInt(value[0]._d.getTime()/1000),
          etime: parseInt(value[1]._d.getTime()/1000)
        });
      }

      function lastday() {
        dispatch({
          type: 'example/getDetailList',
          stime: parseInt(new Date(new Date().getTime() - 86400000)/1000),
          etime: parseInt(new Date().getTime()/1000)
        });

        dispatch({
          type: 'example/getCountRank',
          stime: parseInt(new Date(new Date().getTime() - 86400000)/1000),
          etime: parseInt(new Date().getTime()/1000)
        });

        dispatch({
          type: 'example/querySizeRank',
          stime: parseInt(new Date(new Date().getTime() - 86400000)/1000),
          etime: parseInt(new Date().getTime()/1000)
        });
      }

      function lastweek() {
        dispatch({
          type: 'example/getDetailList',
          stime: parseInt(new Date(new Date().getTime() - 604800000)/1000),
          etime: parseInt(new Date().getTime()/1000)
        });

        dispatch({
          type: 'example/getCountRank',
          stime: parseInt(new Date(new Date().getTime() - 604800000)/1000),
          etime: parseInt(new Date().getTime()/1000)
        });

        dispatch({
          type: 'example/querySizeRank',
          stime: parseInt(new Date(new Date().getTime() - 604800000)/1000),
          etime: parseInt(new Date().getTime()/1000)
        });
      }

      return (
        <div className={styles.mainlayout}>

          <div className={styles.top}>

            <RangePicker
              style={{marginTop: "20px"}}
              showTime
              format="YYYY-MM-DD HH:mm:ss"
              placeholder={['开始时间', '结束时间']}
              onChange={onChange}
              onOk={onOk}
            />
            <Button className={styles.datebtn} type="dashed" onClick={lastday}>Last Day</Button>
            <Button className={styles.datebtn} type="dashed" onClick={lastweek}>Last Week</Button>
          </div>

          <div className={styles.midleftside}>
            <Table className={styles.lefttable} loading={countrankloading} dataSource={count_data} columns={count_columns} pagination={false} />
          </div>

          <div className={styles.midrightside}>
            <Table className={styles.righttable} loading={sizerankloading} dataSource={size_data} columns={size_columns} pagination={false} />
          </div>

          <div className={styles.bottom}>
            <Table loading={detaillistloading} className={styles.mainTable} dataSource={main_Data} columns={main_columns} pagination={false} />
          </div>
        </div>
      );
    }
};

Example.propTypes = {
};

export default connect(({example}) => ({
  example
}))(Example);
