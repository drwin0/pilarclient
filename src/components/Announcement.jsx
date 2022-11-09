import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #ffc71a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Contact US to get your product listed on this platform.</Container>;
};

export default Announcement;
