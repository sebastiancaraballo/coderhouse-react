import { NavLink } from "react-router-dom";

function Navigation({items}) {
  return (
    <div className="grid place-items-center text-center">
      <ul className="flex flex-col lg:flex-row flex-wrap gap-3 w-4/5">
      {
        items.map((item) => {
          return (
            <NavLink
              to={`categories/${item.name}`}
              className={({ isActive }) =>
                isActive
                  ? "flex-auto text-highlight font-bold"
                  : "flex-auto text-slate-700 hover:text-highlight"
              }
            >
              {item.name.toUpperCase()}
            </NavLink>
          )
        })
      }
      </ul>
    </div>
  );
}

export default Navigation;
