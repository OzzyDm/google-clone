import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

function HomeSearch() {
  return (
    <>
      <form className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl">
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input type="text" className="flex-grow focus:outline-none" />
        <BsFillMicFill className="text-lg" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row justify-center mt-8">
        <button className="btn">Google Search</button>
        <button className="btn">I'm Feeling Lucky</button>
      </div>
    </>
  );
}

export default HomeSearch;
