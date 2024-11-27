import { useEffect, useState } from "react";
import DisplayCard from "../../Components/DisplayCard";
import axios from "axios";

const Requests = () => {
  const [requestCradData, setRequestCradData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://media-content.ccbp.in/website/react-assignment/resources.json"
        );
        const filteredData = response.data.filter(
          (item: any) => item.tag === "request"
        );
        setRequestCradData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="card-container flex mt-10 justify-center items-center flex-wrap h-full m-auto gap-5 w-[80%]">
        {requestCradData.map((card) => (
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

export default Requests;
