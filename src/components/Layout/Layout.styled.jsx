import styled from 'styled-components';

export const StyledLayoutContainer = styled.div`
  /* display: flex; */
  display: grid;
  grid-template-rows: auto 1fr auto;

  /* grid-template-rows: auto 1fr auto; */
  flex-direction: column;
  /* align-content: space-between; */
  /* box-sizing: border-box; */
  min-height: 100vh;
  /* min-height: 100%; */
  overflow: hidden;
  /* height: 100vh; */
`;

export const StyledLayoutOutlet = styled.div`
/* flex: 1 1 auto; */
    /* margin-bottom: auto; */
    /* padding-bottom: auto; */
    /* flex-grow: 1; */
    /* grid-template-rows: auto 1fr auto; */
`