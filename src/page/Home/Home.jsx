import HomeHeader from "../../components/template/home/HomeHeader/HomeHeader";
import HomeDiscount from "../../components/template/home/HomeDiscount/HomeDiscount";
import HomePoster from "../../components/template/home/HomePoster/HomePoster";
import HomeBest from "../../components/template/home/HomeBest/HomeBest";
import PosterDiscount from "../../components/template/home/PosterDiscount/PosterDiscount";
import HomePopular from "../../components/template/home/HomePopular/HomePopular";
import Weblog from "../../components/template/home/Weblog/Weblog";
import HomeCredit from "../../components/template/home/HomeCredit/HomeCredit";

function Home() {
  return (
   <>
    <HomeHeader/>
    <HomeDiscount/>
    <HomePoster/>
    <HomeBest/>
    <PosterDiscount/>   
    <HomePopular/>
    <Weblog/>
    <HomeCredit/>
   </>
  )
}

export default Home