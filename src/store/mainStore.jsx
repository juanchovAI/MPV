import { create } from "zustand";

import qs from "qs";

const loginPageQuery = qs.stringify({
  populate: {
    ImagenPrincipal: {
      fields: ["url"],
    },
    LogoImg: {
      fields: ["url"],
    },
  },
});
const baseUrl = "http://127.0.0.1:1337";
async function getStrapiData(path) {
  const url = new URL(path, baseUrl);
  url.search = loginPageQuery;
  try {
    const response = await fetch(url.href);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

const useUserStore = create((set) => ({
  user: {},
  //inc: () => set((state) => ({ count: state.count + 1 })),
}));

export const useLoginFormStore = create((set) => ({
  loginInfo: {},
  fetchLoginInfo: async () => {
    const result = await getStrapiData("/api/login-page");
    set({ loginInfo: result });
  },
}));
