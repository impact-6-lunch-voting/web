import axios, { type CreateAxiosDefaults } from "axios";
import { env } from "~/env.mjs";

const config: CreateAxiosDefaults = {
  baseURL: env.NEXT_PUBLIC_API_BASE_URL,
};

export const axiosClient = axios.create(config);
