import React from "react";
import { Button, Form, Grid } from "semantic-ui-react";
import MenuForm from "./MenuForm";

// const Menu = ({ id, name, updateMenu, deleteMenu }) => {
class Menu extends React.Component {
  state = { editing: false };

  handleToggle = () => {
    this.setState({
      editing: !this.state.editing,
    });
  };

  render() {
    const { id, name, deleteMenu, updateMenu } = this.props;
    const { editing } = this.state;
    return (
      <div>
        <h2>{name}</h2>
        {editing ? (
          <MenuForm
            id={id}
            name={name}
            handleToggleProp={this.handleToggle}
            updateMenuProp={updateMenu}
          />
        ) : (
          <div>
            <Button color="red" onClick={() => deleteMenu(id)}>
              Delete
            </Button>
            <Button color="blue" onClick={this.handleToggle}>
              Edit
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default Menu;
