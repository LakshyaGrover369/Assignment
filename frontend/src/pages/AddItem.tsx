import { Link } from "react-router-dom";
import AddItemForm from "../Components/AddItemForm";
import breadcrumbs from "../assets/breadcrumbs.png";
import FormImg from "../assets/FormImg.png";

const AddItem = () => {
  return (
    <>
      <section className="z-10 flex  self-end w-[80%] m-auto max-w-[1391px] max-md:max-w-full">
        <div className="flex flex-col w-[70vw] max-md:ml-0 max-md:w-80 p-5">
          <Link className="absolute left-20" to="/">
            {" "}
            <div className="flex gap-1 self-start text-xs leading-none whitespace-nowrap">
              <img
                loading="lazy"
                src={breadcrumbs}
                className="object-contain shrink-0 w-[50px] aspect-square"
                alt="hello"
              />
            </div>{" "}
          </Link>
          <div className="flex flex-col mt-10 w-[70%] text-gray-500 max-md:mt-10 max-md:max-w-full">
            <div className="flex justify-center w-full">
              <AddItemForm />
            </div>
          </div>
        </div>
        <aside className="flex flex-col ml-5 w-[50vw] h-[100vh] m-0 p-0 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={FormImg}
            className="object-contain grow w-full rounded-none aspect-[0.68] h-[80px]  max-md:mt-10 max-md:max-w-full"
            alt="Item preview"
          />
        </aside>
      </section>
    </>
  );
};

export default AddItem;
