import React from "react";
import Menu from "./Menu";

class MenuList extends React.Component {
  render() {
    return (
      <div>
        {this.props.menus.map((menu) => {
          return (
            <Menu
              key={menu.id}
              {...menu}
              deleteMenu={this.props.deleteMenuProps}
              updateMenu={this.props.updateMenuProps}
            />
          );
        })}
      </div>
    );
  }
}

export default MenuList;
