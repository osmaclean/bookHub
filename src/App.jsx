import Search from "./components/Search/Search";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
  return (
    <div className="container__row">
      <Sidebar />
      <div>
        <Search />
      </div>
    </div>
  );
}
