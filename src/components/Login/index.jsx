import React from 'react';
import {Row,Col,Typography,Button} from 'antd';
import {auth} from '../../firebase/config';
import firebase  from '../../firebase/config';
import {useHistory} from 'react-router-dom';
const {Title} = Typography;
const fbProvider = new firebase.auth.FacebookAuthProvider();

function Login(props) {
    const history = useHistory();
    const handleFbLogin = ()=>{
        auth.signInWithPopup(fbProvider);
    }
    auth.onAuthStateChanged((user)=>{
        // console.log('User: '+ user);
        if(user){
            history.push("/");
        }
    })
    return (
        <div>
            <Row span={8} justify='center' style={{width:'800'}}>
                <Col >
                    <Title style={{textAlign:'center'}}>Mutosi Chating</Title>
                    <Button style={{width:'100%',marginBottom:10}}>Đăng nhập bằng Google</Button>
                    <Button style={{width:'100%'}} onClick={handleFbLogin} >Đăng nhập bằng Facebook</Button>
                </Col>
            </Row>
        </div>
    );
}

export default Login;