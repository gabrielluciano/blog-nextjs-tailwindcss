import Link from './Link';
import shuffleArray from '../utils/shuffleArray';

export default function RenderTags({ marginTop, tags, category = null, max = 3 }) {
  const tagsShuffled = shuffleArray(tags);

  return (
    <div className={"flex mt-" + marginTop}>
      {category ? (
        <Link 
        href={`/${category.slug}`}
        className="capitalize block px-4 py-1 text-sm text-gray-50 font-bold bg-blue-600 rounded-full hover:bg-gray-700 transition mr-4"
        >
          {category.name}
        </Link>
      ): null}

      {tagsShuffled.map((tag, index) => {

        const out = (index < max - 1) ? (
          <div 
          key={tag.slug} 
          className="capitalize block px-4 py-1 text-sm text-gray-50 font-bold bg-blue-600 rounded-full transition mr-4"
          >
            {tag.name}
          </div>
        ) : null;

        return out;
      })}
    </div>
  );
}