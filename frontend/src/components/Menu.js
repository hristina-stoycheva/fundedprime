import React, { useEffect, useState } from "react";
import "./styles/Menu.css";
import {fetchMenu} from "../api";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const fetchedMenu = await fetchMenu();
      setMenuItems(fetchedMenu);
// console.log(fetchedMenu);
    };
    fetchData();
  }, []);
  const renderMenuItems = (items) => {
    return items.map((item) => {
      if (item.children && item.children.length > 0) {
        return (
          <li className="nav-item dropdown" key={item.id}>
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id={`nav-dropdown-${item.id}`}
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {item.title}
            </a>
            <ul
              className="dropdown-menu"
              aria-labelledby={`nav-dropdown-${item.id}`}
            >
              {renderMenuItems(item.children)}
            </ul>
          </li>
        );
      }

      return (
        <li className="nav-item" key={item.id}>
          <a className="nav-link" href={item.slug}>
            {item.title}
          </a>
        </li>
      );
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <ul className="navbar-nav">{renderMenuItems(menuItems)}</ul>
    </nav>
  );
};

export default Menu;
