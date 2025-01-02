import { Header } from "./components/Header";
import { NewsProvider } from "./context/NewsProvider";
import { NewsContainer } from "./components/NewsContainer";

function App() {
  return (
    <>
      <NewsProvider>
        <Header />
        <NewsContainer />
      </NewsProvider>
    </>
  );
}

export default App;
