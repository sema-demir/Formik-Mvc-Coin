import { useParams } from "react-router-dom";
import DetailView from "../views/DetailView";
import { useEffect, useState } from "react";
import DetailModel from "../models/DetailModel";

const DetailController = () => {
  const [coin, setCoin] = useState(null);
  //urlden id yi aldım
  const { id } = useParams();

  //coin detay verilerini ve fiyat gecmişini Api dan al
  useEffect(() => {
    DetailModel.getCoin(id).then((data) => setCoin(data));
  }, []);
  //clastan örnek al
  const model = new DetailModel(coin);

  return <DetailView model={model} />;
};

export default DetailController;
