import { navigate } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import Card from '../components/Card';

const Container = styled.div`
  width: 90%;
  margin: 50px auto;
`;

const Title = styled.h1`
  text-align: center;
  margin-top: 50px;
`;

const Underline = styled.div`
  margin: 0;
  border-bottom: 2px solid #f5381a;
  width: 70px;
  margin: -10px auto 50px;
`;

const LatestPosts = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-auto-columns: 1fr;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 220px;
    height: 60px;
    border-radius: 64px;
    cursor: pointer;
    transition: ease-out 0.3s;
    margin-top: 20px;

    font-size: 19px;
    font-weight: 600;
    color: #f5381a;
    background-color: transparent;
    border: 2px solid #f5371acf;
    letter-spacing: 2px;

    &:hover {
      color: #f5371aa0;
      border-color: #f5371aa0;
    }
  }
`;

const Posts = ({ data }) => {
  return (
    <Container id='posts'>
      <Fade left distance='60px'>
        <Title>Featured</Title>
      </Fade>
      <Fade right distance='60px'>
        <Underline />
      </Fade>
      <Fade bottom delay={200}>
        <Card large={true} data={data[0].node} />
      </Fade>
      <Fade left distance='60px'>
        <Title>Latest Posts</Title>
      </Fade>
      <Fade right distance='60px'>
        <Underline />
      </Fade>
      <LatestPosts>
        {data.slice(1).map((edge, i) => {
          return (
            <li key={i}>
              <Fade bottom delay={i * 200}>
                <Card data={edge.node} />
              </Fade>
            </li>
          );
        })}
      </LatestPosts>
      <ButtonWrapper>
        <button onClick={() => navigate('/posts/')}>See All</button>
      </ButtonWrapper>
    </Container>
  );
};

export default Posts;
