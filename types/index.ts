type History = {
  price: string;
  timestamp: number;
};

export interface CryptoHistory {
  status: string;
  data: {
    change: string;
    history: History[];
  };
}

type Link = {
  name: string;
  type: string;
  url: string;
};

type Supply = {
  confirmed: boolean;
  supplyAt: number;
  max: string;
  total: string;
  circulating: string;
};

type AllTimeHigh = {
  price: string;
  timestamp: number;
};

type Coin = {
  uuid: string;
  symbol: string;
  name: string;
  description: string;
  color: string;
  iconUrl: string;
  websiteUrl: string;
  links: Link[];
  supply: Supply;
  numberOfMarkets: number;
  numberOfExchanges: number;
  "24hVolume": string;
  marketCap: string;
  fullyDilutedMarketCap: string;
  price: string;
  btcPrice: string;
  priceAt: number;
  change: string;
  rank: number;
  sparkline: string[];
  allTimeHigh: AllTimeHigh;
  coinrankingUrl: string;
  tier: number;
  lowVolume: boolean;
  listedAt: number;
  hasContent: boolean;
  notices: string | null;
  tags: string[];
};

export interface Cryptos {
  status: string;
  data: {
    stats: {
      total: number;
      totalCoins: number;
      totalMarkets: number;
      totalExchanges: number;
      totalMarketCap: string;
      total24hVolume: string;
    };
    coins: Coin[];
  };
}

export interface CyptoDetails {
  status: string;
  data: {
    coin: Coin;
  };
}

export type CryptoHistoryParams = {
  coinId: string;
  timeperiod: string;
};

export interface CryptoNews {
  _type: string;
  readLink: string;
  queryContext: {
    _type: string;
    originalQuery: string;
    adultIntent: boolean;
  };
  totalEstimatedMatches: number;
  sort: {
    _type: string;
    name: string;
    id: string;
    isSelected: boolean;
    url: string;
  }[];
  value: {
    _type: string;
    name: string;
    url: string;
    image: {
      _type: string;
      thumbnail: {
        _type: string;
        contentUrl: string;
        width: number;
        height: number;
      };
    };
    description: string;
    about: {
      _type: string;
      readLink: string;
      name: string;
    }[];
    datePublished: string;
    provider: {
      _type: string;
      name: string;
      image: {
        _type: string;
        thumbnail: {
          _type: string;
          contentUrl: string;
        };
      };
    }[];
  }[];
}

export type CryptoNewsParams = {
  newsCategory: string;
  count: number;
};
