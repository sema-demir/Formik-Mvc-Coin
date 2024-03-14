import axios from "axios";

//anasayfanın Model katmanı
export default class MainModel {
  //apiden coin verilerini alır
  static async getCoins(page) {
    try {
      const params = {
        offset: (page - 1) * 15, // kaç tane veri atlayacagız
        limit: 15, // kaç veri alınacak
      };
      const res = await axios.get("https://api.coincap.io/v2/assets", {
        params,
      });
      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  }
}
