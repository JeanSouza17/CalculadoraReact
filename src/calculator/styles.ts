import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  align-items: center;
  background: #c9d6ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #e2e2e2,
    #c9d6ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #e2e2e2,
    #c9d6ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-box-shadow: 0px 0px 105px -32px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 0px 105px -32px rgba(0, 0, 0, 1);
  box-shadow: 0px 0px 105px -32px rgba(0, 0, 0, 1);
`;

export const Title = styled.h1`
  font-size: 48px;
`;

export const Display = styled.div`
  background-color: #000000;
  padding: 40px 20px;
  font-size: 24px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  color: #ffffff;
`;
export const Buttons = styled.div`
  padding: 20px 20px 40px 20px;
  display: flex;
  width: 100%;
`;

export const CalculatorKey = styled.button`
  max-width: 100%;
  min-width: 33.33%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  background-color: rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const CalculatorContainerLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`;

export const CalculatorContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`;
