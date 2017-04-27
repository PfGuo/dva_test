import React, { Component } from 'react';
import { DatePicker, Table, Button } from 'antd';
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
        type: 'example/getDetailList'
      });
    }

    render() {

      const { dispatch } = this.props;

      const { countrankloading, sizerankloading, detaillistloading, countrank, sizerank, detaillist } = this.props.example;

      const count_data = countrankloading ? [] : countrank.data;

      const size_data = sizerankloading ? [] : sizerank.data;

      const main_Data = detaillistloading ? [] : detaillist.data;
      

      const count_columns = [{
        title: 'Message',
        dataIndex: 'count_message',
        key: 'count_message'
      }, {
        title: 'Count Top 10',
        dataIndex: 'count',
        key: 'count'
      }];
      const size_columns = [{
        title: 'Message',
        dataIndex: 'size_message',
        key: 'size_message'
      }, {
        title: 'Size Top 10',
        dataIndex: 'size',
        key: 'size'
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

      function onChange(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
      }

      function onOk(value) {
        console.log('onOk: ', value);
        dispatch({
          type: 'example/getDetailList',
          stime: value[0]._d,
          etime: value[1]._d
        });
      }

      return (
        <div className={styles.mainlayout}>

          <div className={styles.leftside}>
            <Table loading={countrankloading} dataSource={count_data} columns={count_columns} pagination={false} />
          </div>

          <div className={styles.rightside}>
            <Table loading={sizerankloading} dataSource={size_data} columns={size_columns} pagination={false} />
          </div>

          <RangePicker
            style={{marginTop: "10px"}}
            showTime
            format="YYYY-MM-DD HH:mm:ss"
            placeholder={['开始时间', '结束时间']}
            onChange={onChange}
            onOk={onOk}
          />
          <Button className={styles.datebtn} type="dashed">Last Day</Button>
          <Button className={styles.datebtn} type="dashed">Last Week</Button>
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
