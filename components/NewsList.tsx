import Pagination from './Pagination';
import Article from './Article';


function NewsList({ news }: { news: Article[] }) {
  return (
    <>
      <div className="grid sm:grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-3 my-8">
        {news.map((article) => (
          <Article {...article} />
        ))}
      </div>
      <Pagination pageAmount={10} />
    </>
  );
}

export default NewsList;
