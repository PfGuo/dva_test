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
        type: 'example/getCountRank'
      });

      dispatch({
        type: 'example/querySizeRank'
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

      /**
      const count_data = [{
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
        }];

      const size_data = [{
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
        width: '88%',
        render: (text, record, index) => <Progress percent={ parseInt(text) } format={percent => `${percent}` } strokeWidth={5} />
      }];
      const size_columns = [{
        title: '',
        dataIndex: 'uid',
        key: 'uid'
      }, {
        title: 'Message Size Top 10',
        dataIndex: 'msgsize',
        key: 'msgsize',
        width: '88%',
        render: (text, record, index) => <Progress percent={ parseInt(text) } format={percent => `${percent}` } strokeWidth={5} />
      }];

      const main_columns = [{
        title: 'Domain Name',
        dataIndex: 'domainname',
        key: 'domainname'
      }, {
        title: 'Message Count',
        dataIndex: 'msgcount',
        key: 'msgcount'
      }, {
        title: 'Message Size',
        dataIndex: 'msgsize',
        key: 'msgsize'
      }, {
        title: 'Attachment',
        dataIndex: 'attachment',
        key: 'attachment'
      }];

      function onChange(value, dateString) {}

      function onOk(value) {
        dispatch({
          type: 'example/getDetailList',
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
      }

      function lastweek() {
        dispatch({
          type: 'example/getDetailList',
          stime: parseInt(new Date(new Date().getTime() - 604800000)/1000),
          etime: parseInt(new Date().getTime()/1000)
        });
      }

      return (
        <div className={styles.mainlayout}>

          <div className={styles.leftside}>
            <Table className={styles.lefttable} loading={countrankloading} dataSource={count_data} columns={count_columns} pagination={false} />
          </div>

          <div className={styles.rightside}>
            <Table className={styles.righttable} loading={sizerankloading} dataSource={size_data} columns={size_columns} pagination={false} />
          </div>

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
          <Table loading={detaillistloading} className={styles.mainTable} dataSource={main_Data} columns={main_columns} pagination={false} />
        </div>
      );
    }
};

Example.propTypes = {
};

export default connect(({example}) => ({
  example
}))(Example);
