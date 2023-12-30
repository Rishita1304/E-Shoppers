import React, {useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link, useNavigate } from "react-router-dom";
import { publicRequest } from "../Request";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.4)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
padding: 20px;
width: 40%;
background-color: rgba(255, 255, 255, 0.8);
${mobile({ width: "70%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
flex: 1;
min-width: 40%;
width: 100%;
margin: 20px 10px 0 0;
padding: 10px;
`;
const Agreement = styled.div`
font-size: 17px;
margin-top: 20px;
cursor: pointer;
`;
const Button = styled.button`
width: 100%;
border: none;
background-color: teal;
color: white;
cursor: pointer;
margin: 20px 10px 0 0;
padding: 10px;
`;

const Register = () => {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await publicRequest.post("/auth/register", { name,username, email, password, });
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Create Your Account</Title>
        <Form>
          <Input placeholder="Name" name="name" onChange={(e)=>setName(e.target.value)}/>
          <Input placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
          <Input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
          <Input placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
          <Link to='/login'>
          <Agreement>
          Already a User? Sign In!
          </Agreement>
          </Link>
          <Button onClick={handleSubmit}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
