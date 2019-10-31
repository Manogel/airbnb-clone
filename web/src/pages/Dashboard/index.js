import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SpotList, Spots, SpotHeader } from "./styles";
import api from "../../services/api";
import Button from "../../Components/Button";

export default function Dashboard() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const user_id = localStorage.getItem("user");
      const response = await api.get("/dashboard", {
        headers: {
          user_id
        }
      });

      setSpots(response.data);
    }

    loadSpots();
  }, []);

  return (
    <>
      <SpotList>
        {spots.map(s => (
          <Spots key={s.id}>
            <SpotHeader image={s.thumbnail_url} />
            <strong> {s.company} </strong>
            <span>{s.price ? `R$ ${s.price}/dia` : "GRATUITO"}</span>
          </Spots>
        ))}
      </SpotList>

      <Link to="/new">
        <Button title=" Cadastrar novo spot" />
      </Link>
    </>
  );
}
