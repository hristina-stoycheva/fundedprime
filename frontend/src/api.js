import axios from "axios";

const WP_API_URL = "http://localhost/fundedprime/wp-json/wp/v2";
const ACF_API_URL = "http://localhost/fundedprime/wp-json/acf/v2/options";
const WP_MENU_API_URL ="http://localhost/fundedprime/wp-json/menus/v1/menus/header_menu";

// Posts
export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${WP_API_URL}/posts`);
    return response.data; // posts array
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

// Acf options
export const fetchACFData = async () => {
  try {
    const response = await axios.get(ACF_API_URL);
    return response.data.acf; // acf options
  } catch (error) {
    console.error("Error fetching ACF data:", error);
    return {};
  }
};
// Menu
export const fetchMenu = async () => {
  try {
    const response = await axios.get(WP_MENU_API_URL);
    return response.data; // menu
  } catch (error) {
    console.error("Error fetching Menus:", error);
    return {};
  }
};
export const fetchPage = async (slug) => {
  try {
    const response = await axios.get(`${WP_API_URL}/pages?slug=${slug}`);
    return response.data[0]; // Fetches the first page that matches the slug
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
};
export const fetchPageData = async (slug) => {
  try {
    const response = await axios.get(`${WP_API_URL}/pages?slug=${slug}`);
    console.log('API Response:', response); // Добавете тази линия, за да видите какво връща API-то
    return response.data[0]; // Return the first page that matches the slug
  } catch (error) {
    console.error('Error fetching page data:', error);
    return null;
  }
};
