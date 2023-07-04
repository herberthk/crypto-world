import { CryptoNews, CryptoNewsParams } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
  "x-rapidapi-host": process.env.NEXT_PUBLIC_NEWS_RAPIDAPI_HOST,
};

const createRequest = (url: string) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_NEWS_API_URL }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query<CryptoNews, CryptoNewsParams>({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
