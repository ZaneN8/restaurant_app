import React from "react";
import { Button } from "semantic-ui-react";

const Menu = ({ id, name }) => {
  return (
    <>
      <h2>{name}</h2>
      <Button>Delete</Button>
      <Button>Edit</Button>
    </>
  );
};

export default Menu;
