declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_NEWS_API_URL: string;
      NEXT_PUBLIC_NEWS_RAPIDAPI_HOST: string;
      NEXT_PUBLIC_RAPIDAPI_KEY: string;
      NEXT_PUBLIC_CRYPTO_API_URL: string;
      NEXT_PUBLIC_CRYPTO_RAPIDAPI_HOST: string;
    }
  }
}

export {};
