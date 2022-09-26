import './App.css';
import './base.scss'
import './utility.scss'
import MainFooter from "./components/MainFooter/MainFooter";
import MainFootBanner from "./components/MainFootBanner/MainFootBanner";
import MainCorpUse from "./components/MainCorpUse/MainCorpUse";

function App() {
  return (
    <div>
      <MainCorpUse></MainCorpUse>
      <MainFootBanner></MainFootBanner>
      <MainFooter></MainFooter>
    </div>
  );
}

export default App;
