import Sidebar from "../Component/Sidebar";
import Topbar from "../Component/Topbar";

function HomePage() {
  return (
    <>
      <h1 className=" text-3xl font-bold underline color-blue">Hello world!</h1>
      <Topbar></Topbar>
      <Sidebar />
    </>
  );
}

export default HomePage;
