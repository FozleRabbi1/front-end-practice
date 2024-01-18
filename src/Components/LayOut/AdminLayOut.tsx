import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Container from "../UI/Container";

const AdminLayOut = () => {
  return (
    <Container>
      <div className="flex">
        <div className="flex-[1]">
          <SideBar></SideBar>
        </div>
        <div className="flex-[5]">
          <Outlet></Outlet>
        </div>
      </div>
    </Container>
  );
};

export default AdminLayOut;
