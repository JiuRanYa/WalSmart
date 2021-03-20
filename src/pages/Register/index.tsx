
  
import React,{ useState} from 'react'
import {Card,Input,Button,Spin,message} from 'antd';
import {UserOutlined ,KeyOutlined } from '@ant-design/icons'
import './index.scss'
// import axiosInstance from '../../util';

const Register = (props:any)=>{
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [currentPassword,setCurrentPassword] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    function handleSubmit(){

        setIsLoading(true)
        // setTimeout(()=>{setIsLoading(false)},1000)
        if(!username){
            message.error('用户名不能为空')
            setTimeout(()=>{
                setIsLoading(false)
            },500)
            return ;
        }else if(!password){
            message.error('密码不能为空')
            setTimeout(()=>{
                setIsLoading(false)
            },500)
            return ;
        }
        // axiosInstance.request({url:'/login',method:'POST',data:{username:username,password:password}}).then(res=>{
        //     setIsLoading(false)
        //     if(res.data.code===200){
        //         localStorage.setItem('openId',res.data.openId)
        //         props.history.push('/admin')
        //     }else{
        //         message.error('用户名密码错误')
        //     }
        // })
    }
  
return(
    <div className="login-div">
        <Spin tip="loading..." spinning={isLoading} >
            <Card title="Walsmart" bordered={true} style={{width:400}}>
                <Input
                className="ipt"
                id="userName"
                size="large"
                placeholder="Enter your userName"
                prefix={<UserOutlined style={{color:'rgba(0,0,0,.25)'}}/>}
                onChange={(e)=>{setUsername(e.target.value)}}
                
                />
                 <br></br>
                 <Input.Password
                className="ipt"
                id="password"
                size="large"
                placeholder="Enter your Password"
                prefix={<KeyOutlined style={{color:'rgba(0,0,0,.25)'}}/>}
                onChange={(e)=>{setPassword(e.target.value)}}
                />
                <Input.Password
                className="ipt"
                id="password_current"
                size="large"
                placeholder="Current your Password"
                prefix={<KeyOutlined style={{color:'rgba(0,0,0,.25)'}}/>}
                onChange={(e)=>{setCurrentPassword(e.target.value)}}
                />
                <br/>
                <Button className="btn" type="primary" block size="large"  onClick={handleSubmit}>提交</Button>
            </Card>
           
            
        </Spin>
    </div>
)
}
export default Register

