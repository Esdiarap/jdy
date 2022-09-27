import './App.css';
import './base.scss'
import './utility.scss'
import MainFooter from "./components/MainFooter/MainFooter";
import MainFootBanner from "./components/MainFootBanner/MainFootBanner";
import MainCorpUse from "./components/MainCorpUse/MainCorpUse";
import MainBusinessGrowth from "./components/MainBusinessGrowth/MainBusinessGrowth";
import MainIndex from "./components/MainIndex/MainIndex";
import MainRichTemplate from "./components/MainRichTemplate/MainRichTemplate";
import MainLogo from "./components/MainLogo/MainLogo";
import MainAdvancedProductivity from "./components/MainAdvancedProductivity/MainAdvancedProductivity";
import MainPersonalPerform from "./components/MainPersonalPerform/MainPersonalPerform";

function App() {
  return (
    <div>
      <MainIndex></MainIndex>
      <MainLogo></MainLogo>
      <MainPersonalPerform></MainPersonalPerform>
      <MainAdvancedProductivity></MainAdvancedProductivity>
      <MainRichTemplate></MainRichTemplate>
      <MainBusinessGrowth></MainBusinessGrowth>
      <MainCorpUse></MainCorpUse>
      <MainFootBanner></MainFootBanner>
      <MainFooter></MainFooter>
    </div>
  );
}

export default App;
