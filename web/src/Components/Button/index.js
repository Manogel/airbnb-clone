import React from "react";
import { Container } from "./styles";

export default function Button({ title, ...rest }) {
  return <Container {...rest}>{title}</Container>;
}
