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
        alert("Error: Did not fetch data");
      });
  }, []);

  const addMenu = (name) => {
    axios
      .post("/api/menus", { name: name })
      .then((res) => {
        setMenus([...menus, res.data]);
      })
      .catch((err) => "Error: Add did not work");
  };

  const updateMenu = (id) => {
    debugger;
    axios
      .put(`/api/menus/${id}`)
      .then((res) => {
        const updatedMenus = menus.map((menu) => {
          if (menu.id === id) {
            return res.data;
          }
          return menu;
        });
        setMenus(updatedMenus);
      })
      .catch((err) => {
        alert("Error: update did not work");
      });
  };

  const deleteMenu = (id) => {
    axios
      .delete(`/api/menus/${id}`)
      .then((res) => {
        setMenus(menus.filter((menu) => menu.id !== id));
      })
      .catch((err) => {
        alert("Error: Delete did not work");
      });
  };

  return (
    <Container>
      <h1>Menus Page</h1>
      <MenuForm addMenuProps={addMenu} />
      <MenuList
        menus={menus}
        updateMenuProps={updateMenu}
        deleteMenuProps={deleteMenu}
      />
    </Container>
  );
}

export default App;
