import scryfallApi from "./scryfallApi";

export type CardType = {
  id: string;
  name: string;
  normalImgUrl: string;
  pngImgUrl: string;
  cmc: number;
  cost: string;
};

const cardService = {
  searchCards: async (name: string) => {
    const res = await scryfallApi
      .get(`/cards/search?q=${encodeURIComponent(name)}`)
      .catch((err) => {
        console.log(err.response?.data.message);

        return err.response;
      });

    return res;
  },
};
