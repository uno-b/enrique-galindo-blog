import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #283c48;
  width: 100%;
  padding: 10px 0;
`;

const SocialLinks = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin-bottom: 20px;

  a {
    margin: 0 20px;

    &:hover {
      li {
        * {
          color: white;
        }
      }
    }

    li {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #c3ccd33b;
      display: flex;
      justify-content: center;
      align-items: center;

      * {
        color: #c3ccd3;
        width: 20px;
        height: 20px;
        transition-duration: 0.2s;
      }
    }
  }
`;

const Underline = styled.div`
  width: 70px;
  border-bottom: 2px solid #c3ccd3;
  margin: auto;
`;

const Copyright = styled.p`
  color: #c3ccd3;
  text-align: center;
`;

const Footer = ({ data }) => {
  const { facebookLink, twitterLink, instagramLink, copyrightText } = data;

  return (
    <Container>
      <SocialLinks>
        <a href={facebookLink} target='_blank' rel='noreferrer'>
          <li>
            <FaFacebookF />
          </li>
        </a>
        <a href={twitterLink} target='_blank' rel='noreferrer'>
          <li>
            <FaTwitter />
          </li>
        </a>
        <a href={instagramLink} target='_blank' rel='noreferrer'>
          <li>
            <FaInstagram />
          </li>
        </a>
      </SocialLinks>
      <Underline />
      <Copyright>{copyrightText}</Copyright>
    </Container>
  );
};

export default Footer;
