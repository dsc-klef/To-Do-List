import "./App.css";
import Home from "./pages/home";
import ListProvider from "./context/listprovider";
function App() {
  return (
    <ListProvider>
      <Home />
    </ListProvider>
  );
}

export default App;
