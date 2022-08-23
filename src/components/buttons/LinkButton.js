import { Link } from "react-router-dom";

function LinkButton({link, label}) {
  return (
    <Link to={link}>
      <div className="border border-gray-400 w-fit rounded-lg cursor-pointer m-auto">
        <div className="px-6 py-3 text-sm hover:text-highlight font-bold">{label}</div>
      </div>
    </Link>
    
  );
}

export default LinkButton;
