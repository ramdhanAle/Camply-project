import { Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle/index";
import theme from "./utils/constant/theme";
import Home from "./pages/home";
import About from "./pages/About";
import Gear from "./pages/Gear";
import AuthLayout from "./AuthLayout";
import Layout from "./Layout";
import GearDetail from "./pages/Gear/detail";
import Guide from "./pages/Guide";
import GuideDetail from "./pages/Guide/detail";
import Login from "./pages/Auth/login";
import Register from "./pages/Auth/register";
import ForgotPassword from "./pages/Auth/forgotPassword";
import Testing from "./pages/Testing";
import Checklist from "./pages/Checklist";
import DetailChecklist from "./pages/Checklist/detail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import AuthProvider from "./Context/AuthContext";
import { AuthenticatedRoute } from "./lib/RouteProtector";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AuthProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/gear" element={<Gear />} />
              <Route path="/gear/:id" element={<GearDetail />} />
              <Route path="/guide" element={<Guide />} />
              <Route path="/guide/:id" element={<GuideDetail />} />
              <Route path="/testing-page" element={<Testing />} />
              <Route element={<AuthenticatedRoute />}>
                <Route path="/checklist" element={<Checklist />} />
                <Route path="/checklist/:id" element={<DetailChecklist />} />
              </Route>
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/profile" element={<Profile />} />
            </Route>

            <Route element={<AuthLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Route>
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
