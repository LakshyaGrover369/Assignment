import { useNavigate } from "react-router-dom";
import MainLogo from "../assets/MainLogo.png";
import user from "../assets/user.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center h-[8vh] justify-between p-4 shadow-lg">
      <img src={MainLogo} alt="NXT Wave Logo" className="h-10" />

      <div className="relative flex items-center">
        <button
          className="bg-green-600 text-white font-bold px-4 py-2 rounded-[3px] hover:bg-green-700"
          onClick={() => {
            navigate("/additem");
          }}
        >
          Add Item
        </button>
        <img
          src={user}
          alt="User Avatar"
          className="h-10 w-10 rounded-full ml-3 border-2 border-black-500 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
