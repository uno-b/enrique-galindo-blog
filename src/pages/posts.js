import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';

import Card from '../components/Card';
import Footer from '../components/Footer';
import Seo from '../components/Seo';

const Header = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  padding: 50px;
  background-color: #263843;
  h1 {
    padding: 0;
    margin: 0;

    * {
      text-decoration: none;
      color: white;
    }
  }
`;

const Title = styled.h1`
  margin-top: 50px;
  text-align: center;
`;

const Underline = styled.div`
  margin: 0;
  border-bottom: 2px solid #f5381a;
  width: 70px;
  margin: -10px auto 50px;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: 50px auto;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 50px;
`;

const Posts = ({ data }) => {
  const [sortNew, setSortNew] = useState(true);
  const [updatedPosts, setUpdatedPosts] = useState(null);

  const blogPostsData = data.allContentfulBlogPost.edges;
  const footerData = data.allContentfulFooter.edges[0].node;
  const websiteSeoData = data.allContentfulWebsiteSeo.edges[0].node;
  const {
    name,
    siteTitle,
    websiteDescription,
    siteUrl,
    keywords,
    socialImage,
  } = websiteSeoData;

  return (
    <main>
      <Seo
        title='Posts'
        siteTitle={siteTitle}
        description={websiteDescription}
        author={name}
        keywords={keywords}
        image={socialImage}
        siteUrl={siteUrl}
      />
      <Header>
        <h1>
          <Link to='/'>Enrique Galindo</Link>
        </h1>
      </Header>
      <Fade left distance='60px'>
        <Title>The Library</Title>
      </Fade>
      <Fade right distance='60px'>
        <Underline />
      </Fade>

      <Wrapper>
        <div>
          <div>
            Sort By:
            <input
              type='radio'
              name='sort'
              id='new'
              checked={sortNew === true}
              onChange={() => {
                setSortNew(true);
              }}
            />
            <label htmlFor='new'>New</label>
            <input
              type='radio'
              name='sort'
              id='old'
              checked={sortNew === false}
              onChange={() => {
                setSortNew(false);
              }}
            />
            <label htmlFor='old'>Old</label>
          </div>
          <input />
        </div>

        <Content>
          {sortNew
            ? blogPostsData.map((edge, i) => {
                return (
                  <Fade bottom delay={i % 2 === 0 ? 0 : 200}>
                    <Card large={true} data={edge.node} key={i} />
                  </Fade>
                );
              })
            : blogPostsData
                .slice(0)
                .reverse()
                .map((edge, i) => {
                  return (
                    <Fade bottom delay={i % 2 === 0 ? 0 : 200}>
                      <Card large={true} data={edge.node} key={i} />
                    </Fade>
                  );
                })}
        </Content>
      </Wrapper>
      <Footer data={footerData} />
    </main>
  );
};

export const query = graphql`
  query PostQuery {
    allContentfulBlogPost(
      sort: { fields: postContent___references___createdAt }
    ) {
      edges {
        node {
          createdAt(fromNow: true)
          slug
          title
          shortDescription
          image {
            gatsbyImageData
            title
          }
        }
      }
    }
    allContentfulFooter {
      edges {
        node {
          facebookLink
          twitterLink
          instagramLink
          copyrightText
        }
      }
    }
    allContentfulWebsiteSeo {
      edges {
        node {
          name
          websiteDescription
          siteUrl
          socialImage {
            gatsbyImageData
            fixed {
              width
              height
            }
            file {
              url
            }
            title
          }
          siteTitle
          keywords
        }
      }
    }
  }
`;

export default Posts;
