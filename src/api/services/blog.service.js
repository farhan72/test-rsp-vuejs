import axios from "axios";


const getCategoryList  = () => axios.get("./json/blogs.json");
const getPopularArticles  = () => axios.get("./json/article-popular.json");
const getBestArticles = () => axios.get("./json/best-articles.json");
const getPostData = () => axios.get("./json/post-list.json");

export {getPopularArticles, getCategoryList, getBestArticles, getPostData};
