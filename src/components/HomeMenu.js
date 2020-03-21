import React, { useState } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';

const HomeMenu = () => {
  const [activeItem, setActiveItem] = useState("");

  const handleClick = event => {
    setActiveItem(event.name);
  }

  return (
    <Menu>
      <Menu.Item
        name='home'
        active={activeItem == 'home'}
        onClick={handleClick}
        href="/"
      >Home</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item
          name='website'
          active={activeItem == 'website'}
          onClick={handleClick}
          href="https://andydavisson.com"
        >andydavisson.com</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
 
export default HomeMenu;