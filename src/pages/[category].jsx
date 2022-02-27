import Layout from '../components/Layout'
import PostList from '../components/PostList';
import Seo from '../components/Seo';

import api from '../services/api';

export default function CategoryPage({ articles, categories }) {
  const category = articles[0].category;

  const seo = {
    metaTitle: category.name,
    metaDescription: category.description,
  }

  return (
    <Layout
      selectedCategory={category}
      categories={categories}
    >

      <Seo seo={seo} />

      <div className="px-4 2xl:px-0 max-w-screen-xl mx-auto grid xl:grid-cols-3 gap-5">
        <section id="other-posts" className="col-span-2">
          <div className="mt-10 max-w-screen-xl mx-auto">
            <h1
              className="inline-block pb-3 mb-8 text-3xl text-gray-800 font-bold border-b-4 border-blue-600" style={{ textTransform: 'capitalize' }}>
              {category.name}
            </h1>
          </div>

          <PostList articles={articles} />
        </section>

        <aside>
        </aside>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const response = await api.get('categories');
  const categories = response.data;

  const paths = categories.map(category => {
    return {
      params: {
          category: category.slug
      }
    }
  });

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { category } = context.params;
  
  const response = await Promise.all([
    api.get(`posts?category.slug=${category}`),
    api.get('categories'),
  ]);

  const articles = response[0].data;
  const categories = response[1].data;

  return {
      props: { articles, categories },
      // revalidate: 1800
  }
}