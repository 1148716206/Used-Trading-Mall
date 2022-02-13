import React, { useState } from 'react'
import { Table, Radio, Divider } from 'antd';
import styles from './index.less'

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const Cart = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };


  return (
    <div className={styles.cart_body}>
      <div className={styles.cart_content}>
        <div className={styles.cart_filter_bar}>
            <span>全部商品</span>
            <span className={styles.switch_cart_number}>2</span>
        </div>
          <Table
            rowSelection={{
              ...rowSelection,
            }}
            columns={columns}
            dataSource={data}
          />

      </div>

    </div>
  )
}

export default Cart
