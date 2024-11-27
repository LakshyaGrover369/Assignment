import { useEffect, useState } from "react";
import DisplayCard from "../../Components/DisplayCard";
import axios from "axios";

const Users = () => {
  const [userCardData, setUserCardData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://media-content.ccbp.in/website/react-assignment/resources.json"
        );
        const filteredUserData = response.data.filter(
          (item: any) => item.tag === "user"
        );
        setUserCardData(filteredUserData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="card-container flex justify-center items-center flex-wrap h-full mt-10 m-auto gap-5 w-[80%]">
        {userCardData.map((card) => (
          <DisplayCard
            key={card.id}
            title={card.title}
            iconUrl={card.icon_url}
            link={card.link}
            description={card.description}
            category={card.category}
            tag={card.tag}
          />
        ))}
      </div>
    </>
  );
};

export default Users;
