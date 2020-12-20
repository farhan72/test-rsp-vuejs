import {mockIO} from "../baseAPI";


const getCategoryList  = () => mockIO("blogs");
const getPopularArticles  = () => mockIO("article-popular");
const getBestArticles = () => mockIO("featured-articles");
const getPostData = () => mockIO("post-list");
const getTrainingMaterials = () => mockIO("training-materials");

export {getPopularArticles, getCategoryList, getBestArticles, getPostData, getTrainingMaterials};
