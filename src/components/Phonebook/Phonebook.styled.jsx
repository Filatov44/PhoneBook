import styled from 'styled-components';

export const StyledPhonebookContainer = styled.div`
  p,
  h1,
  /* h2, */
  h3,
  h4,
  h5,
  h6 {
    margin: 0px;
  }

  ul {
    list-style: none;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  display: flex;
`;
export const StyledPhonebookTitle = styled.h1`
  font-size: 28px;
  padding: 15px 0px;
  margin-bottom: 30px;
  text-align: center;
  margin-top: 0;
  margin-bottom: 20px;
`;
export const StyledTitleContactAd = styled.h2`
  font-size: 24px;
  color: blue;
  text-align: center;
  margin-bottom: 50px;
`;

export const StyledTitleContact = styled.h2`
  font-size: 24px;
  color: blue;
  text-align: center;
  margin-bottom: 25px;
`;

export const StyledPhonebookWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledDivContacts = styled.div`
  flex-grow: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 15px 15px 40px;
`;

export const StyledDivAddContact = styled.div`
  flex-grow: 1;
  padding: 15px;
  border-right: 1px solid blue;
`;
