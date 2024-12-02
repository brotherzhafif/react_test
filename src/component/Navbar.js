import { NavLink } from "react-router";

function Navbar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink> | 
      <NavLink to="/profile">Profile</NavLink> |
      <NavLink to="/home">Home</NavLink> |
      <NavLink to="/user">User</NavLink> 
    </div>
  )
}

export default Navbar;