import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to="/">
      <div className="text-center text-4xl my-5">
        THE GARDEN
      </div>
    </Link>
  );
}

export default Header;
