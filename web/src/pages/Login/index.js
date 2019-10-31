import React, { useState } from "react";

import { Description, Form } from "./styles";
import api from "../../services/api";

export default function Login({ history }) {
  const [email, setEmail] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    const response = await api.post("/sessions", { email });
    const { _id } = response.data;

    localStorage.setItem("user", _id);

    history.push("/dashboard");
  }

  return (
    <>
      <Description>
        Reserve lugares únicos para se hospedar e coisas para fazer.
      </Description>
      <Form onSubmit={handleLogin}>
        <label htmlFor="email">EMAIL *</label>
        <input
          type="email"
          id="email"
          placeholder="Seu melhor email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </Form>
    </>
  );
}
