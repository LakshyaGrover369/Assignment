// import React from "react";

interface DisplayCardProps {
  title: string;
  iconUrl?: string;
  link?: string;
  description: string;
  category: string;
  tag?: string;
}
const DisplayCard: React.FC<DisplayCardProps> = ({
  title,
  iconUrl,
  link,
  description,
  //   category,
  //   tag,
}) => {
  return (
    <>
      <div className="max-w-sm mx-auto border  shadow-md overflow-hidden  h-[192px] w-[390px]">
        <div className="p-4">
          <div className="flex items-center">
            <img
              src={iconUrl}
              alt="Company Logo"
              className="h-10 w-10 rounded"
            />
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
              <p className="text-sm text-gray-600">Cloud Services</p>
            </div>
          </div>
          <div className="mt-4">
            <a
              href={link}
              target="_blank"
              className="text-blue-500 hover:underline text-sm"
            >
              www.dropbox.com
            </a>
            <p className="mt-2 text-gray-700 text-sm">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayCard;
