import React from 'react';
import { graphql } from 'gatsby';

const Page = ({
  data: {
    storyblokEntry: { field_Title_string, field_Description_string }
  }
}) => {
  return (
    <main>
      <h1>{field_Title_string}</h1>
      <p>{field_Description_string}</p>
    </main>
  );
};

export const query = graphql`
  query ($id: String) {
    storyblokEntry(id: { eq: $id }) {
      field_Title_string
      field_Description_string
    }
  }
`;

export default Page;
