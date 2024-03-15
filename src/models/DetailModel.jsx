import axios from "axios";
import { SiCoinmarketcap } from "react-icons/si";
import { MdEventAvailable, MdPriceChange } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { RiStockFill } from "react-icons/ri";

export default class DetailModel {
  //classtan alacagımız örneklerden elde edeceğimiz veriyi calıştırır.

  constructor(coin) {
    // coin verilerini classtan alınacak örneğin içine gönder
    this.coin = coin;

    //detay verilerini alacagımız bir dizi olustur
    this.infoFields = [
      {
        icon: <SiCoinmarketcap />,
        label: "Market Hacmi",
        value: coin?.detail.marketCapUsd,
      },
      {
        icon: <MdEventAvailable />,
        label: "Tedarik",
        value: coin?.detail.maxSupply,
      },
      {
        icon: <MdPriceChange />,
        label: "Fiyat",
        value: coin?.detail.priceUsd,
      },
      {
        icon: <FaPercent />,
        label: "24s Değişim (%)",
        value: coin?.detail.changePercent24Hr,
      },
      {
        icon: <RiStockFill />,
        label: "24 Hacim",
        value: coin?.detail.volumeUsd24Hr,
      },
    ];

    //grafik için kullanılacak veri
    // grafik için kullanılacak veri
    this.graphicData = {
      labels: coin?.history.map((i) => new Date(i.date).toLocaleDateString()),
      datasets: [
        {
          id: 1,
          label: "Fiyat",
          data: coin?.history.map((i) => i.priceUsd),
          borderColor: "red",
          backgroundColor: "orange",
        },
      ],
    };
  }

  //api dan hem fiyat hem detay verisini almak için istek attık
  static async getCoin(id) {
    //Birden fazla api istegini aynı anda atmak için olanak saglar Promise.all
    const response = await Promise.all([
      axios.get(`https://api.coincap.io/v2/assets/${id}`),

      axios.get(`https://api.coincap.io/v2/assets/${id}/history?interval=d1`),
    ]);
    return {
      detail: response[0].data.data,
      history: response[1].data.data,
    };
  }
}
