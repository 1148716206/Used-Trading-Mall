import React from 'react'
import {useState} from "react";
import styles from './index.less'
import { Input, Button, Tabs, Statistic, Form, message } from 'antd';
const { TabPane } = Tabs;
const FormItem = Form.Item;
import { ExclamationCircleOutlined } from '@ant-design/icons';


const login = () => {
  const [data,setData] = useState(1)
  const LoginForm = (
    <Form className="login-form">
      <div className={styles.kxyun_sms} >
        <div className={styles.kxyun_sms_img_box}>
          <img src="" alt="" />
        </div>
        <div className={styles.tip}>
          <ExclamationCircleOutlined className={styles.tip_icon} />
          <span>
                            账号已开启两步验证，请在手机上查看验证码
                        </span>
        </div>
        <FormItem
          className="auth-code"
        >
          <FormItem
            name="kxyCode"
            rules={[{
              validator: (rule, value) => {
                if (!value) {
                  return Promise.reject('请输入验证码');
                }
                if (!/^\d{6}$/.test(value)) {
                  return Promise.reject('请输入6位数字验证码');
                }
                return Promise.resolve();
              },
            }]}
            className={styles.step_two_sms_form_item}
          >
            <Input placeholder="6位数字" />
          </FormItem>

        </FormItem>
      </div>

      <FormItem
        name="name"

      >
        <Input
          placeholder="手机号/邮箱/账号" className="login-form-imput"
        />
      </FormItem>
      <FormItem
        name="password"
      >
        <Input
          type="password" placeholder="密码" className="login-form-imput"
        />
      </FormItem>

      <div id="kxyNc"  />
      <FormItem
        name="mobile"
      >
        <Input
          placeholder="手机号" className="login-form-imput"
        />
      </FormItem>
      <FormItem
        className="auth-code"

      >
        <FormItem
          name="code"

        >
          <Input
            placeholder="验证码" className="login-form-imput"
          />
        </FormItem>

      </FormItem>
      <div id="nc"  />

      <FormItem style={{ marginBottom: 10 }}>

          <Button
            type="primary"
            className={'login-form-button kxy'}

          >
            登录
          </Button>


      </FormItem>
      <div >
        <span>还没有帐号？</span>
      </div>
    </Form>
  );
  return (
    <div className={styles.container} >
      <div className={styles.login_panel_outer}>
        <div className={styles.login_panel}>
          <h1 className={styles.login_title}>登录</h1>
          <Tabs
          >
            <TabPane
              tab="密码登录"
              key="password"
            />
            <TabPane
              tab="验证码登录"
              key="auth-code"
            />
          </Tabs>

          {LoginForm}
        </div>
      </div>

    </div>
  )
}
export default login
