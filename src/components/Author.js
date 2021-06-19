import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 70%;
  margin: 100px auto;
  display: flex;
`;

const ProfileWrapper = styled.div`
  max-width: 150px;
  max-height: 150px;
  margin: 0 25px;

  * {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border-radius: 50%;
  }
`;

const Info = styled.div`
  line-height: 1.5;
  h1 {
    font-size: 40px;
    margin: 0;
    padding: 0;
  }

  h3 {
    color: #c3ccd3;
    margin: 0;
    padding: 0;
  }
`;

const Author = ({ data }) => {
  const {
    name,
    status,
    profilePicture: { gatsbyImageData, title },
    paragraph1: { paragraph1 },
    paragraph2: { paragraph2 },
  } = data;

  return (
    <Wrapper>
      <ProfileWrapper>
        <GatsbyImage image={gatsbyImageData} alt={title} />
      </ProfileWrapper>
      <Info>
        <h1>{name}</h1>
        <h3>{status}</h3>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
      </Info>
    </Wrapper>
  );
};

export default Author;
