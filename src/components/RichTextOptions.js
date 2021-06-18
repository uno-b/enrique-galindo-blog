import React from 'react';
import { Link } from 'gatsby';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import styled from 'styled-components';

const Bold = styled.span`
  font-weight: bold;
  font-size: 26px;
`;

const Text = styled.p`
  margin: 32px 0;
  color: #000000d2;
  line-height: 1.5;
`;

const A = styled.a`
  text-decoration: none;
  font-weight: bold;
`;

export const options = {
  renderText: (text) => {
    return text.split('\n').reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      );
    },
    hyperlink: (node, children) => {
      const { data } = node;
      return (
        <A href={data.uri} target='_blank' aria-label='Link to another page'>
          {children}
        </A>
      );
    },
  },
};
