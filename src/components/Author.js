import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #263843;
  padding: 50px 0;
`;

const Title = styled.h1`
  text-align: center;
  padding: 0;
  color: #c3ccd3;
`;

const Content = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgWrapper = styled.div`
  margin-bottom: 30px;
  * {
    border-radius: 50%;
  }
`;

const Info = styled.div``;

const Paragraph = styled.p`
  margin: 20px auto;
  padding: 0;
  color: #768791;
`;

const Underline = styled.div`
  width: 100px;
  border-bottom: 2px solid #768791;
  margin: -10px auto 50px;
`;

const Author = () => {
  return (
    <Wrapper>
      <Title>About The Author</Title>
      <Underline />
      <Content>
        <ImgWrapper>
          <StaticImage
            src='../images/random_pro_pic.png'
            width={200}
            height={200}
          />
        </ImgWrapper>
        <Info>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            laudantium sint consequatur praesentium consequuntur architecto
            dolor aspernatur sed assumenda porro? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Debitis ratione, ullam quas doloremque
            laboriosam amet cupiditate odit nemo magnam voluptatem!
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            veniam, voluptatibus dolorum vel dicta praesentium. Deserunt
            repudiandae quaerat fugiat quam dolores amet blanditiis explicabo
            commodi quae dicta ea, eum voluptas.
          </Paragraph>
        </Info>
      </Content>
    </Wrapper>
  );
};

export default Author;
