import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ShowCards = () => {
  const [activeTab, setActiveTab] = useState("Resources");
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full max-w-lg mx-auto mt-10">
        <div className="flex border-b-2 border-blue-200">
          {["Resources", "Request", "Users"].map((tab) => (
            <button
              key={tab}
              className={`flex-1 py-2 text-center font-medium ${
                activeTab === tab
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500"
              } border-b-2 ${
                activeTab === tab ? "border-blue-500" : "border-transparent"
              }`}
              onClick={() => {
                setActiveTab(tab);
                navigate(`/${tab}`);
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default ShowCards;
