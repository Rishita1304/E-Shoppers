import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from "../redux/apiCalls";

const Container = styled.div`
  height: 60px;
  ${mobile({height: "50px"})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  cursor: pointer;
  font-size: 14px;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "10px" })}
`;

const Input = styled.input`
  border: none;
  height: 100%;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bolder;
  text-align: center;
  ${mobile({ fontSize: "13px" , marginLeft: "2px"})}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const MenuName = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity);

  const navigate = useNavigate();
  
  const user = useSelector(state=>state.user.currentUser);
  console.log(user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    logOut(dispatch);
  navigate('/');
 }

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>SEARCH </Language>
          <SearchContainer>
            <Input placeholder="Search"/>
            <Search style={{ color: "grey", fontsize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>E-SHOPPERS.</Logo>
        </Center>
        <Right>
        {!user? <>
          <Link to='/register'>
          <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to='/login'>
          <MenuItem>LOGIN</MenuItem>
          </Link></> : <>
          <MenuName> {user.username}</MenuName>
          <MenuItem onClick={handleLogout}>LOGOUT</MenuItem>
          <MenuItem>
          <Link to='/cart'>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </Link>
          </MenuItem>
          </>
          }
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
