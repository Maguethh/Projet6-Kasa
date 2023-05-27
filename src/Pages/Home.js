import Header from "../Components/Header.js";
import AppartList from "../Components/AppartList.js";
import Footer from "../Components/Footer.js";
import Banner from "../Components/Banner.js";
import HomeBanner from "../Assets/ae.jpg";
import EquipementsBox from "../Components/EquipementsBox.js";

function Home() {
  return (
    <div>
      <Header />
      <Banner image={HomeBanner} />
      <AppartList />
      <Footer />
    </div>
  );
}

export default Home;
