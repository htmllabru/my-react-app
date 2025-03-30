/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_DEBUG: string;
  readonly VITE_SOME_KEY: string;
  readonly DB_PASSWORD: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
