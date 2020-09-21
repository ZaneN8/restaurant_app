import React from "react";
import Menu from "./Menu";

class MenuList extends React.Component {
  render() {
    return (
      <div>
        {this.props.menus.map((menu) => {
          return <Menu key={menu.id} {...menu} />;
        })}
      </div>
    );
  }
}

export default MenuList;
