import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { AppRoute } from '../const';

const QuotesStyled = styled.div`
  box-sizing: border-box;
  padding: 10px 20px;

  article {
    display: flex;
    flex-direction: column;
  }

  a {
    align-self: center;
  }

  img {
    margin: 0 10px 10px 0;
  }

  @media (min-width: 768px) {
    width: auto;
    padding: 20px 100px;

    article {
      flex-direction: row;
    }

    img {
    }

    p {
      font-size: 18px;
    }
  }
`;

const quotesQuery = gql`
  {
    quotes(limit: 10) {
      imageURL
      title
      text
    }
  }
`;

const Quotes = () => {
  const { loading, error, data } = useQuery(quotesQuery);

  if (loading) return 'Loading...';
  if (error) return <p>Error :(</p>;

  const { quotes } = data;

  return (
    <QuotesStyled>
      {quotes.map((quote) => (
        <article key={quote.title}>
          <Link to={AppRoute.QUOTE}>
            <img src={quote.imageURL} alt={quote.title} />
          </Link>
          <div>
            <p>{quote.title}</p>
            <p>{quote.text}</p>
          </div>
        </article>
      ))}
    </QuotesStyled>
  );
};

Quotes.propTypes = {};

export default Quotes;
