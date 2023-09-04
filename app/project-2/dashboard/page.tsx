import Navigation from "./components/navigation";
import Header from "./components/header";
import Summary from "./components/summary";

const Project2 = () => {
  return (
    <div className="flex flex-col w-[100%]">
      <Navigation />
      <div className="w-[100%] lg:w-[calc(100vw_-_300px)] ml-auto">
        <Header />
        <div className="w-[100%] flex flex-auto bg-[#FAFAFA] h-[calc(100vh_-_110px)] p-5">
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default Project2;
