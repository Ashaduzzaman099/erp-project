import { useState } from "react";
import { NavLink } from "react-router-dom";
import { sidebarMenu } from "../../constants/sidebarMenu";
import logo from "../assets/logo.png";
// Menu data array

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleToggle = (key) => {
    setOpenMenu((prev) => (prev === key ? null : key));
  };

  const linkClass = "block p-2 rounded hover:bg-green-600 cursor-pointer";

  return (
    <div className="w-64 bg-slate-900 text-white flex flex-col">
      {/* Logo */}
      <div className="flex items-center bg-slate-900 gap-2 p-4 border-b border-green-600">
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logo} alt="UCC Logo" className="w-10 h-10 object-contain" />
          <span className="text-lg font-bold text-white">UCC ERP</span>
        </NavLink>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2">
        {sidebarMenu.map((item) => (
          <div key={item.title}>
            {item.children.length === 0 ? (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block p-2 rounded cursor-pointer ${
                    isActive ? "bg-green-600" : "hover:bg-slate-800"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ) : (
              <>
                <button
                  onClick={() => handleToggle(item.key)}
                  className="w-full flex justify-between items-center p-2 rounded hover:bg-slate-800"
                >
                  <span>{item.title}</span>
                  <span>{openMenu === item.key ? "−" : "+"}</span>
                </button>
                {openMenu === item.key && (
                  <div className="ml-4 mt-1 space-y-1 text-sm">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.title}
                        to={child.path}
                        className={linkClass}
                      >
                        {child.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
