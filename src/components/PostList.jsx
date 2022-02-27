import Link from './Link';
import Image from 'next/image';

import RenderTags from './RenderTags';
import renderPostDate from '../utils/renderPostDate';

function PostList({ articles }) {
    return articles.map((article, index) => (
        <article key={index} className="flex pb-4 mb-4 md:pb-8 md:mb-8 border-b border-gray-500">
          <Link
            href={`/${article.category.slug}/${article.slug}`}
            className="block"
            ariaLabel={article.title}
          >
            <div className="w-48 sm:w-56 md:w-80 h-34 md:h-48 object-cover">
              <Image
                quality={95}
                src={article.image.url}
                alt={article.image.alt}
                width={320}
                height={192}
                objectFit="cover"
              />
            </div>
          </Link>
          <div className="w-full ml-3 md:ml-7 relative">
            <Link
              href={`/${article.category.slug}/${article.slug}`}
              className="hover:underline"
            >
              <h2 className="text-base sm:text-xl md:text-2xl font-bold mb-3 lg:mb-5 text-gray-800">{article.title}</h2>
              <p className="hidden md:block text-base text-gray-700">{article.description}</p>
            </Link>
            <div className="absolute bottom-0 lg:bottom-3 w-full hidden sm:flex flex-col lg:flex-row lg:items-center justify-start xl:justify-between">
              <RenderTags
                marginTop="0"
                category={article.category}
                tags={article.tags}
                max={2}
              />
              <span className="mt-2 lg:mt-0 text-base text-gray-500 font-medium">
                <time dateTime="2020-12-28T20:35:04.892Z">{renderPostDate(article)}</time>
              </span>
            </div>
          </div>
        </article>
      ));
}

export default PostList;