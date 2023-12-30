import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/apiCalls';
import { Link, useNavigate } from 'react-router-dom';
import {TailSpin} from 'react-loader-spinner';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "77%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  margin: 0 0 10px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  font-size: 15px;
  color: white;
  cursor: pointer;
  margin: 15px 0 0 0;
  &:disabled{
    color: green;
    cursor: not-allowed;
  }
`;

const Error = styled.span`
margin-top: 10px ;
color: red;
`;

const Links = styled.a`
cursor: pointer;
`;

const Log = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
`;

const Login = () => {
  const [username, setUsername] = useState('abc123')
  const [password, setPassword] = useState('abc123')
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {isFetching, error} = useSelector(state=> state.user)

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, {username, password})
    // navigate('/')
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username" value="abc123" onChange={(e)=>setUsername(e.target.value)}/>
          <Input placeholder="Password" type='password' value="abc123" onChange={(e)=>setPassword(e.target.value)}/>
          <Link to='/register'>

          <Links>Not a User? Create a new account!</Links>
          </Link>
          <Button onClick={handleClick} disabled={isFetching}>
            {isFetching? 
            <Log>
            <TailSpin
                visible={true}
                height="15"
                width="15"
                color="white"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
            /></Log>  : "LOGIN"}</Button>
          {error && <Error>Something went wrong</Error>}
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
