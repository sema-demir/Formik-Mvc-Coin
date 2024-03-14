import { useEffect, useState } from "react";
import MainView from "../views/MainView";
import MainModel from "../models/MainModel";

const MainController = () => {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    // yeni cevap geldiğinde önceki cevabın üzerine ekle yani 15 gösteriken 30 göster diye...
    MainModel.getCoins(page).then((data) => setCoins(coins.concat(data)));
  }, [page]);
  //console.log(coins);
  return <MainView coins={coins} setPage={setPage} />;
};

export default MainController;
