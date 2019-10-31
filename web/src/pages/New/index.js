import React, { useState, useMemo } from "react";
import Button from "../../Components/Button";
import { Form, InputFile } from "./styles";
import camera from "../../assets/camera.svg";
import api from "../../services/api";

export default function New({ history }) {
  const [form, setForm] = useState({
    company: "",
    techs: "",
    price: ""
  });
  const [thumbnail, setThumbnail] = useState(false);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    const user_id = localStorage.getItem("user");

    data.append("thumbnail", thumbnail);
    data.append("company", form.company);
    data.append("price", form.price);
    data.append("techs", form.techs);

    await api.post("/spots", data, { headers: { user_id } });
    history.push("/dashboard");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputFile preview={preview}>
        <input type="file" onChange={e => setThumbnail(e.target.files[0])} />
        <img src={camera} alt="Select img" />
      </InputFile>

      <label htmlFor="company">EMPRESA *</label>
      <input
        id="company"
        placeholder="Sua empresa"
        value={form.company}
        onChange={e => setForm({ ...form, company: e.target.value })}
      />
      <label htmlFor="techs">
        TECNOLOGIAS * <span>(separadas por vírgula)</span>
      </label>
      <input
        id="techs"
        placeholder="Quais tecnologias usam?"
        value={form.techs}
        onChange={e => setForm({ ...form, techs: e.target.value })}
      />
      <label htmlFor="price">
        VALOR DA DIÁRIA * <span>(em branco para GRATUITO)</span>
      </label>
      <input
        id="price"
        placeholder="Valor cobrado por dia"
        value={form.price}
        onChange={e => setForm({ ...form, price: e.target.value })}
      />

      <Button title="Cadastrar" />
    </Form>
  );
}
