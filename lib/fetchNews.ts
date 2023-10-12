async function fetchNews(page: number, category?: Category | string, keywords?: string) {
  const key = process.env.MEDIASTACK_API_KEY;
  const offset = page === 0 ? 0 : page * 20;
  console.log(keywords)
  const url = `http://api.mediastack.com/v1/news?access_key=${key}&limit=20&offset=${offset}&categories=${category}${keywords ? '&keywords=' + keywords : ''}`;
  const res = await fetch(url);

  return await res.json();
}

export default fetchNews;