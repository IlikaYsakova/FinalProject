import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthContextProvider from "./Components/Context/AuthContext";
import ProductContextProvider from "./Components/Context/ProductContext";
import PrimarySearchAppBar from "./Components/NavBar/NavBar";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ProductContextProvider>
          <PrimarySearchAppBar />
          <MainRoutes />
        </ProductContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
