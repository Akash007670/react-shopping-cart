import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 30px;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  color: white;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over 3000₹</Container>;
};

export default Announcement;
