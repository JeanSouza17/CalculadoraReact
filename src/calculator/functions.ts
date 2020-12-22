import IValue from "./IValue";

let data: IValue = {
  input: "",
  memory: "",
  operator: ""
};

function Result(values: IValue): string {
  let valueA: number = Number(values.memory);
  let valueB: number = Number(values.input);
  switch (values.operator) {
    case "+":
      return (valueA + valueB).toString();

    case "-":
      return (valueA - valueB).toString();

    default:
      return "";
  }
}

export default function Calcs(value: IValue): string {
  switch (value.input) {
    case "%":
      return value.input;
    case "CE":
      data.input = "";
      return value.input;
    case "C":
      data.input = "";
      data.memory = "";
      return value.input;
    case "±":
      data.operator = value.input;
      return value.input;
    case "÷":
      data.operator = value.input;
      return value.input;
    case "✕":
      data.operator = value.input;
      return value.input;
    case "-":
      data.memory = data.input;
      data.operator = value.input;
      data.input = "";
      return value.input;
    case "+":
      data.memory = data.input;
      data.operator = value.input;
      data.input = "";
      return value.input;
    case "=":
      return Result(data);
    default:
      data.input += value.input;
      return data.input;
  }
}
