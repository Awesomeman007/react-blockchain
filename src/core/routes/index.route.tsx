import { Outlet, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/navbar";
import Landing from "../components/pages/landing";
import Main from "../components/pages/main";
import COLORS from "../constants/colors";

const Background = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${COLORS.backgroundPrimary};
`;

const MainRoute = () => {
  const RouterWithNav = () => (
    <Route element={<NavBar />}>
      <Route path="main" element={<Main />} />
    </Route>
  );

  const NavLayout = () => (
    <>
      <NavBar />
      <Background>
        <Outlet />
      </Background>
    </>
  );
  return (
    <Routes>
      {/* <Route path="/" element={<Landing />} /> */}
      <Route path="landing" element={<Landing />} />
      <Route element={<NavLayout />}>
        <Route path="main" element={<Main />} />
      </Route>
      {/* <RouterWithNav /> */}
    </Routes>
  );
};

export default MainRoute;
