import Article from '@/components/Article';
import { categories } from '@/constants';
import fetchNews from '@/lib/fetchNews';
import Pagination from '@/components/Pagination';
import NewsList from '@/components/NewsList';

async function Home({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] }
}) {
  const page = +searchParams.p || 0;
  const category = searchParams.category?.toString();
  const keywords = searchParams.keywords?.toString();
  const news: NewsResponse = await fetchNews(page, category || categories.join(','), keywords);
  const filteredNews = news.data.filter((article) => article.image);
  return (
    <NewsList news={filteredNews} />
  );
}

export default Home;  
