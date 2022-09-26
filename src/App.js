import './App.css';
import './base.scss'
import './utility.scss'
import MainFooter from "./components/MainFooter/MainFooter";
import MainFootBanner from "./components/MainFootBanner/MainFootBanner";

function App() {
  return (
    <div>
      <MainFootBanner></MainFootBanner>
      <MainFooter></MainFooter>
    </div>
  );
}

export default App;
