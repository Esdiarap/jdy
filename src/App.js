import './App.css';
import './base.scss'
import './utility.scss'
import MainFooter from "./components/MainFooter/MainFooter";
import MainFootBanner from "./components/MainFootBanner/MainFootBanner";
import MainCorpUse from "./components/MainCorpUse/MainCorpUse";
import MainBusinessGrowth from "./components/MainBusinessGrowth/MainBusinessGrowth";

function App() {
  return (
    <div>
      <MainBusinessGrowth></MainBusinessGrowth>
      <MainCorpUse></MainCorpUse>
      <MainFootBanner></MainFootBanner>
      <MainFooter></MainFooter>
    </div>
  );
}

export default App;
