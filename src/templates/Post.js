import React from 'react';
import { graphql, Link } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import { options } from '../components/RichTextOptions';

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

const Wrapper = styled.div`
  width: 80%;
  margin: 50px auto;
`;

const Post = ({ data }) => {
  return (
    <>
      <Header>
        <h1>
          <Link to='/'>Enrique Galindo</Link>
        </h1>
      </Header>

      <GatsbyImage
        image={data.contentfulBlogPost.image.gatsbyImageData}
        alt={data.contentfulBlogPost.image.title}
      />
      <h1>{data.contentfulBlogPost.title}</h1>
      <p>{data.allContentfulAboutTheAuthor.edges[0].node.name}</p>
      <p>{data.contentfulBlogPost.createdAt}</p>
      <Wrapper>
        {renderRichText(data.contentfulBlogPost.postContent, options)}
      </Wrapper>
    </>
  );
};

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      createdAt(fromNow: true)
      image {
        gatsbyImageData
        title
      }
      postContent {
        raw
      }
    }
    allContentfulAboutTheAuthor {
      edges {
        node {
          name
        }
      }
    }
  }
`;

export default Post;
