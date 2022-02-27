import Image from 'next/image';
import Link from '../components/Link';

import Layout from '../components/Layout'
import PostList from '../components/PostList';
import Seo from '../components/Seo';

import api from '../services/api';

function Home({ articles, categories }) {
  const seo = {
    metaTitle: "Blog de notícias!",
    metaDescription: "Fique atualizado sobre todas as notícias neste blog",
  }

  function renderRecentPosts() {
    const articlesToRender = articles.slice(0, 5);

    return articlesToRender.map((article, index) => (
      <Link
        href={`/${article.category.slug}/${article.slug}`}
        className={`block relative ${index === 0 ? 'lg:col-span-2' : ''}`}
        key={index}
      >
        <article
          className="group relative h-96 bg-gray-500 transition-background-size overflow-hidden flex items-center justify-start md:justify-center">
          <Image
            src={article.image.url}
            alt={article.image.alt | ''}
            quality={100}
            layout="fill"
            objectFit="cover"
            className="flex-shrink-0 transition duration-500 transform scale-100 group-hover:scale-110"
          />
          <div className={`absolute bottom-0 z-30 px-4 md:px-0 ${index === 0 ? 'left-auto md:left-6 max-w-lg' : 'left-auto md:left-6 2xl:left-auto w-full 2xl:px-4 max-w-lg md:max-w-sm'}`}>
            <h2 className={` mb-3 text-white font-bold text-shadow transition duration-500 transform translate-y-0 group-hover:-translate-y-5 ${index === 0 ? 'text-2xl 2xl:text-4xl' : 'text-2xl'}`}>
              {article.title}
            </h2>
            <p className=" mb-8 text-white font-medium text-shadow transition duration-500 transform translate-y-0 group-hover:-translate-y-5">
              {article.description}
            </p>
          </div>
          <div className="z-10 absolute w-full h-full" style={{ background: 'linear-gradient(179.78deg, rgba(0, 0, 0, 0) 60%, #000000 100%)' }}></div>
        </article>
      </Link>
    ));
  }

  return (
    <Layout
      selectedCategory={''}
      categories={categories}
    >

      <Seo seo={seo} />

      <section id="last-posts">
        <div className="px-4 2xl:px-0 mt-8 max-w-screen-xl mx-auto">
          <h1
            className="inline-block pb-3 mb-8 text-2xl md:text-3xl text-gray-800 font-bold border-b-4 border-blue-600">
            Últimas postagens
          </h1>
        </div>

        <div className="px-4 2xl:px-0 max-w-screen-xl mx-auto grid 2xl:grid-cols-3 2xl:grid-rows-2 gap-5">

          {renderRecentPosts()}

        </div>
      </section>

      <div className="px-4 2xl:px-0 max-w-screen-xl mx-auto grid xl:grid-cols-3 gap-5">
        <section id="other-posts" className="col-span-2">
          <div className="mt-10 max-w-screen-xl mx-auto">
            <h2
              className="inline-block pb-3 mb-8 text-2xl md:text-3xl text-gray-800 font-bold border-b-4 border-blue-600">
              Outras postagens
            </h2>
          </div>

          <PostList articles={articles.slice(5, articles.length)} />

        </section>

        <aside>
        </aside>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {

  const response = await Promise.all([
    api.get('posts?_limit=15'), // Fetch articles
    api.get('categories') // Fetch categories
  ]);

  const articles = response[0].data;
  const categories = response[1].data;

  return {
    props: { articles, categories },
    // revalidate: 1800
  }
}

export default Home;