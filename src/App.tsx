import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Layout } from "./components/Layout";
import { ThemeContextProvider } from "./state/ThemeContext";
function App() {
  return (
    <>
      <ThemeContextProvider>
        <Layout>
          <div className="flex flex-col min-h-screen dark:bg-[#000000]">
            <NavBar />
            <main className="flex-grow">
              <div className="container-width section">
                <Outlet />
              </div>
            </main>
          </div>
        </Layout>
      </ThemeContextProvider>
    </>
  );
}

export default App;
