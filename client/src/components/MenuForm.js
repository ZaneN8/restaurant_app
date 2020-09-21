import React from "react";
import { Form } from "semantic-ui-react";

class MenuForm extends React.Component {
  state = { name: "" };

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.updateMenuProp({ ...this.state, id: this.props.id });
      this.props.handleToggleProp();
    } else {
      this.props.addMenuProps(this.state.name);
      this.setState({ name: "" });
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Menu"
          placeholder="Enter Menu Here"
          value={this.state.name}
          onChange={this.handleChange}
        />
      </Form>
    );
  }
}

export default MenuForm;
