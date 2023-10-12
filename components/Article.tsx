import Image from 'next/image';
import Link from 'next/link';

function Article({ title, image, description, author, published_at, url }: Article) {
  return (
    <li className="group rounded-xl bg-slate-100 list-none flex flex-col shadow-lg  border border-slate-300">
      {image && (
        <div className="relative rounded-t-xl h-[210px] overflow-hidden">
          <Image className="group-hover:scale-105 duration-[400ms] ease-out object-cover rounded-t-xl" fill src={image} alt={title} />
        </div>
      )}
      <div className='px-2 pt-4 pb-0 flex flex-col gap-2 grow'>
        <h3 className="font-semibold text-lg leading-5">{title}</h3>
        <p className="text-ellipsis line-clamp-3 grow">{description}</p>

        <p className="text-right text-sm font-medium mt-4 p-1">{(author ? author + ', ' : '') + new Date(published_at).toLocaleDateString()}</p>
      </div>
      <Link className="w-full p-2 text-white rounded-b-xl font-medium text-lg bg-orange-400 block text-center" href={url}>
        Read more
      </Link>
    </li>
  );
}

export default Article;
