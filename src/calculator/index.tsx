import React from "react";
import {
  Title,
  Display,
  Buttons,
  Container,
  CalculatorKey,
  CalculatorContainerRight,
  CalculatorContainerLeft
} from "./styles";

const Calculator: React.FC = () => (
  <>
    <Container>
      <Title>Caculadora</Title>
      <Display>555</Display>
      <Buttons>
        <CalculatorContainerLeft>
          <CalculatorKey>%</CalculatorKey>
          <CalculatorKey>CE</CalculatorKey>
          <CalculatorKey>C</CalculatorKey>
          <CalculatorKey>7</CalculatorKey>
          <CalculatorKey>8</CalculatorKey>
          <CalculatorKey>9</CalculatorKey>
          <CalculatorKey>4</CalculatorKey>
          <CalculatorKey>5</CalculatorKey>
          <CalculatorKey>6</CalculatorKey>
          <CalculatorKey>1</CalculatorKey>
          <CalculatorKey>2</CalculatorKey>
          <CalculatorKey>3</CalculatorKey>
          <CalculatorKey>±</CalculatorKey>
          <CalculatorKey>0</CalculatorKey>
          <CalculatorKey>.</CalculatorKey>
        </CalculatorContainerLeft>
        <CalculatorContainerRight>
          <CalculatorKey>÷</CalculatorKey>
          <CalculatorKey>✕</CalculatorKey>
          <CalculatorKey>-</CalculatorKey>
          <CalculatorKey>+</CalculatorKey>
          <CalculatorKey>=</CalculatorKey>
        </CalculatorContainerRight>
      </Buttons>
    </Container>
  </>
);

export default Calculator;
