import React from "react";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  height: 70px;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  padding: 10px 20px;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const Language = styled.span`
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`;

const InputContainer = styled.input`
  display: flex;
  border: none;
  width: 100%;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  margin-left: 25px;
  padding: 5px;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

const MenuItem = styled.div`
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-left: 20px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <InputContainer />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>SURFACE-FASHION</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
