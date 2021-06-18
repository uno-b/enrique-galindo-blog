import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: fit-content;
  height: ${(props) => (props.large ? '600px' : '500px')};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  background-color: white;
  padding: 15px;
  margin: auto;
`;

const Content = styled.div`
  width: ${(props) => (props.large ? '600px' : '25vw')};
  margin-bottom: 25px;
`;

const ImgWrapper = styled.div`
  margin-bottom: 35px;
  width: ${(props) => (props.large ? '600px' : '25vw')};

  * {
    object-fit: cover;

    height: ${(props) => (props.large ? '340px' : '200px')};
  }
`;

const Title = styled.p`
  font-size: ${(props) => (props.large ? '27px' : '20px')};
  font-weight: 700;
  color: #263843;
  text-align: center;
  margin: 25px 0px 0px;
`;

const Info = styled.p`
  color: #c3ccd3;
  text-align: center;
  margin: none;
`;

const ShortDesc = styled.p`
  color: #768791;
  font-size: 14px;
  font-weight: 500;
  width: 90%;
  margin: auto;
  line-height: 30px;
`;

const ReadMore = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: #f5381a;
  transition-duration: 0.2s;

  &:hover {
    color: #f5371aba;
  }
`;

const Card = ({ large, data }) => {
  const { createdAt, slug, title, shortDescription, image } = data;

  return (
    <Wrapper large={large}>
      <Content large={large}>
        <ImgWrapper large={large}>
          <GatsbyImage image={image.gatsbyImageData} alt={image.title} />
        </ImgWrapper>
        <Title large={large}>{title}</Title>
        <Info>{createdAt}</Info>
        <ShortDesc>
          {shortDescription}
          <ReadMore href={`/posts/${slug}`}>{` `}Read More</ReadMore>
        </ShortDesc>
      </Content>
    </Wrapper>
  );
};

export default Card;
