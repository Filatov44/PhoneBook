import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { StyledLayoutContainer, StyledLayoutOutlet } from "./Layout.styled";

export default function Layout() {
    return (
      <StyledLayoutContainer>
        <Header />
        <StyledLayoutOutlet>
          <Outlet />
        </StyledLayoutOutlet>

        <Footer />
      </StyledLayoutContainer>
    );
}