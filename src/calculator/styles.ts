import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 48px;
    color: rgba(16, 32, 39, 1);
    text-align: center;
  }
`;

export const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  align-items: center;
  background: rgb(49, 71, 85);
  background: linear-gradient(
    180deg,
    rgba(49, 71, 85, 1) 0%,
    rgba(16, 32, 39, 1) 100%
  );
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-box-shadow: 0px 0px 105px -32px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 0px 105px -32px rgba(0, 0, 0, 1);
  box-shadow: 0px 0px 105px -32px rgba(0, 0, 0, 1);
  -webkit-box-shadow: inset 0px 0px 2px 1px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: inset 0px 0px 2px 1px rgba(0, 0, 0, 0.5);
  box-shadow: inset 0px 0px 2px 1px rgba(0, 0, 0, 0.5);
  padding: 40px 20px;
  max-width: 320px;
`;

export const Display = styled.div`
  background-color: transparent;
  font-size: 24px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  color: #ffffff;
  border-bottom: 1px solid #fff;
  padding: 20px 20px;
  font-size: 36px;
  height: 80px;
`;

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
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

export const CalculatorKey = styled.button`
  max-width: 100%;
  min-width: 33.33%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  background-color: transparent;
  transition: background-color 0.2s;
  border-radius: 50%;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.6);
  }
`;
