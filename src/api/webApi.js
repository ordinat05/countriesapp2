import axios from "axios";

export const fetch_countries_api = (searchQuery) => {
  const fetch_all_countries_url = "https://restcountries.eu/rest/v2/all";
  //   const fetch_countries_by_name_url = "https://restcountries.eu/rest/v2/name/" + searchQuery;
  // Bu birinci Yöntem
  const fetch_countries_by_name_url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  // Bu ikinci Yöntem
  const url = searchQuery
    ? fetch_countries_by_name_url
    : fetch_all_countries_url;
  return axios.get(url);
};
