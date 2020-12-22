import React, { useState } from "react";
import {
  Display,
  Buttons,
  Container,
  CalculatorKey,
  CalculatorContainerRight,
  CalculatorContainerLeft,
  CalculatorContainer
} from "./styles";

import Calcs from "./functions";
import IValue from "./IValue";

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState<IValue | string>("");

  return (
    <>
      <Container>
        <h1>Calculadora (In Progress)</h1>
        <CalculatorContainer>
          <Display>{display}</Display>
          <Buttons>
            <CalculatorContainerLeft>
              <CalculatorKey
                onClick={() => setDisplay(Calcs({ input: "%" }))}
                as="button"
              >
                %
              </CalculatorKey>
              <CalculatorKey
                onClick={() => setDisplay(Calcs({ input: "CE" }))}
                as="button"
              >
                CE
              </CalculatorKey>
              <CalculatorKey
                onClick={() => setDisplay(Calcs({ input: "C" }))}
                as="button"
              >
                C
              </CalculatorKey>
              <CalculatorKey
                onClick={() => setDisplay(Calcs({ input: "7" }))}
                as="button"
              >
                7
              </CalculatorKey>
              <CalculatorKey
                onClick={() => setDisplay(Calcs({ input: "8" }))}
                as="button"
              >
                8
              </CalculatorKey>
              <CalculatorKey
                onClick={() => setDisplay(Calcs({ input: "9" }))}
                as="button"
              >
                9
              </CalculatorKey>
              <CalculatorKey
                onClick={() => setDisplay(Calcs({ input: "4" }))}
                as="button"
              >
                4
              </CalculatorKey>
              <CalculatorKey
                onClick={() => setDisplay(Calcs({ input: "5" }))}
                as="button"
              >
                5
              </CalculatorKey>
              <CalculatorKey
                onClick={() => setDisplay(Calcs({ input: "6" }))}
                as="button"
              >
                6
              </CalculatorKey>
              <CalculatorKey
                onClick={() => setDisplay(Calcs({ input: "1" }))}
                as="button"
              >
                1
              </CalculatorKey>
              <CalculatorKey
                onClick={() => setDisplay(Calcs({ input: "2" }))}
                as="button"
              >
                2
              </CalculatorKey>
              <CalculatorKey
                onClick={() => setDisplay(Calcs({ input: "3" }))}
                as="button"
              >
                3
              </CalculatorKey>
              <CalculatorKey
                onClick={() => setDisplay(Calcs({ input: "±" }))}
                as="button"
              >
                ±
              </CalculatorKey>
              <CalculatorKey
                onClick={() => setDisplay(Calcs({ input: "0" }))}
                as="button"
              >
                0
              </CalculatorKey>
              <CalculatorKey
                onClick={() => setDisplay(Calcs({ input: "." }))}
                as="button"
              >
                .
              </CalculatorKey>
            </CalculatorContainerLeft>
            <CalculatorContainerRight>
              <CalculatorKey
                onClick={() => setDisplay(Calcs({ input: "÷" }))}
                as="button"
              >
                ÷
              </CalculatorKey>
              <CalculatorKey
                onClick={() => setDisplay(Calcs({ input: "✕" }))}
                as="button"
              >
                ✕
              </CalculatorKey>
              <CalculatorKey
                onClick={() => setDisplay(Calcs({ input: "-" }))}
                as="button"
              >
                -
              </CalculatorKey>
              <CalculatorKey
                onClick={() => setDisplay(Calcs({ input: "+" }))}
                as="button"
              >
                +
              </CalculatorKey>
              <CalculatorKey
                onClick={() => setDisplay(Calcs({ input: "=" }))}
                as="button"
              >
                =
              </CalculatorKey>
            </CalculatorContainerRight>
          </Buttons>
        </CalculatorContainer>
      </Container>
    </>
  );
};

export default Calculator;
