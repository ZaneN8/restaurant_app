import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import MenuList from "./components/MenuList";
import { Container } from "semantic-ui-react";
import MenuForm from "./components/MenuForm";

function App() {
  const [menus, setMenus] = useState([
    { id: 1, name: "bill" },
    { id: 2, name: "ted" },
    { id: 3, name: "circle k" },
  ]);

  useEffect(() => {
    axios
      .get("/api/menus")
      .then((res) => {
        setMenus(res.data);
      })
      .catch((err) => {
        alert("error did not fetch data");
      });
  }, []);

  const addMenu = (name) => {
    axios
      .post("/api/menus", { name: name })
      .then((res) => {
        setMenus([...menus, res.data]);
      })
      .catch((err) => "Error add did not work");
  };

  const updateMenu = () => {};

  const deleteMenu = () => {};

  return (
    <Container>
      <h1>Menus Page</h1>
      <MenuForm addMenuProps={addMenu} />
      <MenuList menus={menus} />
    </Container>
  );
}

export default App;
