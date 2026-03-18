import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { FaSearch, FaShoppingCart, FaShoppingBasket } from "react-icons/fa";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";
import userImg from "../assets/user.png";
import { RiUserLine } from "react-icons/ri";
import { ShopContext } from "../context/ShopContext";

const Header = () => {


  const { user, setUser, navigate } = useContext(ShopContext);
  const [menuOpened, setMenuOpened] = useState(false);
  const [showSearch, setShowSearch] = useState(true);
  const location = useLocation();
  const isHomepage = location.pathname === '/';
  const isCollectionPage = location.pathname.endsWith('/collection')
  const toggleMenu = () => setMenuOpened((prev) => !prev);
  const toggleSearch = () => setShowSearch((prev) => !prev);
  return (
    <Navbar></Navbar>
  );
};

export default Header;
