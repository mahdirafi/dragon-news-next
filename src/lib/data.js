
export async function getCategories() {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const item =await res.json();
  return item.data ;
}

export async function getNewsByCategoryId(category_id) {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
  const item =await res.json();
  return item.data ;
}

export async function getNewDetailsById(news_id) {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/${news_id}`);
  const item =await res.json();
  return item.data[0] ;
}

// export const getCategories = async () => {
//   const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
//   const item = await res.json();
//   return item.data;
// };

// export const getNewsByCategoryId = async (category_id) => {
//   const res = await fetch(
//     `https://openapi.programming-hero.com/api/news/category/${category_id}`
//   );
//   const item = await res.json();
//   return item.data;
// };

// export const getNewDetailsById = async (news_id) => {
//   const res = await fetch(
//     `https://openapi.programming-hero.com/api/news/${news_id}`
//   );
//   const item = await res.json();
//   return item.data;
// };


// const getCategories = async () => {
//   const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
//   const item = await res.json();
//   return item.data;
// };

// const getNewsByCategoryId = async (category_id) => {
//   const res = await fetch(
//     `https://openapi.programming-hero.com/api/news/category/${category_id}`
//   );
//   const item = await res.json();
//   return item.data;
// };

// const getNewDetailsById = async (news_id) => {
//   const res = await fetch(
//     `https://openapi.programming-hero.com/api/news/${news_id}`
//   );
//   const item = await res.json();
//   return item.data;
// };

// export default {
//   getCategories,
//   getNewsByCategoryId,
//   getNewDetailsById,
// };