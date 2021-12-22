const getTime = async () => {
  const response = await fetch('http://worldclockapi.com/api/json/est/now');
  console.log(await response.json());
};

const getPosts = async () => {
  const response = await fetch('http://jsonplaceholder.typicode.com/posts');
  return await response.json();
}

const ajaxUtils = {
  getTime,
  getPosts
}

export default ajaxUtils;