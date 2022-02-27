import Image from 'next/image';
import Link from '../../components/Link';
import { useEffect, useState } from 'react';

import Layout from '../../components/Layout';
import RenderTags from '../../components/RenderTags';
import Seo from '../../components/Seo';

import styles from '../../styles/article.module.css';

import ReactMarkdown from 'react-markdown'
import { FaFacebook, FaTwitter, FaWhatsapp, FaRegClock } from 'react-icons/fa';

import api from '../../services/api';

function BlogPost({ article, categories }) {
  const [showPageAnimations, setShowPageAnimations] = useState(false);
  const [progressBarPercentage, setProgressBarPercentage] = useState(0);
  
  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image.url,
  }

  function handleScroll(e) {
    const postContent = document.getElementById('post-content');
    const postHeader = document.getElementById('post-header');

    if (!postContent || !postHeader) {
      return;
    }

    const { top, height } = postContent.getBoundingClientRect();
    const { height: postHeaderHeight } = postHeader.getBoundingClientRect();
    const headerHeight = 104; // header height = 64, post content margin top = 40 -> 64 + 40 = 104
    
    setShowPageAnimations(top <= (headerHeight + (postHeaderHeight > height ? 300 : 0)));

    //  Condition to display progressBar: 
    //  (height - (window.innerHeight - postHeaderHeight - headerHeight)) > postHeaderHeight + headerHeight
    if (!((height - (window.innerHeight - postHeaderHeight - headerHeight)) > postHeaderHeight + headerHeight)) {
      return;
    }

    // Need to be reviwed!
    let progress = Math.round(((top - headerHeight) / (height - window.innerHeight + headerHeight)) * -100);
    if (progress < 0) progress = 0;
    else if (progress > 100) progress = 100;

    setProgressBarPercentage(progress);
  }

  function renderTime() {
    const { published_at, updated_at } = article;

    const publishDate = new Date(published_at);
    const updateDate = new Date(updated_at);

    const publishTime = publishDate.getTime();
    const updateTime = updateDate.getTime();

    const updateAndPublishMinutesDiff = Math.round((updateTime - publishTime) / (1000 * 60));

    return (
      updateAndPublishMinutesDiff >= 10 ? (
        <span className="flex items-center text-gray-500 font-medium text-sm">
          <FaRegClock color="#99a3af" size={14} className="mt-0.5" />
          &nbsp;
          Atualizado em
          &nbsp;
          <time dateTime={updated_at}>{updateDate.toLocaleString('pt-BR').slice(0, 16)}</time>
        </span>
      ) : (
          <span className="flex items-center text-gray-500 font-medium text-sm">
            <FaRegClock color="#99a3af" size={14} className="mt-0.5" />
          &nbsp;
          Publicado em
          &nbsp;
            <time dateTime={published_at}>{publishDate.toLocaleString('pt-BR').slice(0, 16)}</time>
          </span>
        )
    );
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <Layout
      showTitle={showPageAnimations}
      postTitle={article.title}
      selectedCategory={article.category}
      categories={categories}
    >
      <Seo seo={seo} />

      {showPageAnimations && (
        <div id="progress-bar" className="w-full h-2 bg-blue-600 fixed transition-max-width z-30" style={{ maxWidth: progressBarPercentage + '%' }}></div>
      )}

      <div className="max-w-screen-xl mx-auto grid xl:grid-cols-main_container gap-x-16">
        <article className="flex flex-row lg:grid px-4 lg:px-0 lg:grid-cols-article-medium xl:grid-cols-article-large lg:gap-x-16 max-w-3xl lg:max-w-none w- xl:max-w-none mx-auto xl:mx-0">
          <div></div>

          <aside className="fixed w-24 hidden lg:block">
            <div className="flex mt-10">
              <div className={`w-full flex flex-col items-center transition-opacity duration-250 ${showPageAnimations ? 'opacity-100' : 'opacity-0'}`}>
                <a 
                  href="https://facebook.com" 
                  aria-label="Facebook" 
                  target="_blank" rel="noopener noreferrer"
                  className="mb-4 text-gray-800 hover:text-facebook transition">
                    <FaFacebook size={40} />
                </a>
                <a 
                  href="https://twitter.com" 
                  aria-label="Twitter"
                  target="_blank" rel="noopener noreferrer"
                  className="mb-4 text-gray-800 hover:text-twitter transition">
                    <FaTwitter size={40} />
                </a>
                <a 
                  href="https://whatsapp.com" 
                  aria-label="Whatsapp" 
                  target="_blank" rel="noopener noreferrer"
                  className="text-gray-800 hover:text-whatsapp transition">
                    <FaWhatsapp size={40} />
                </a>
              </div>
              <div className={`w-1 bg-blue-600 transition-max-height duration-500 ${showPageAnimations ? 'max-h-40' : ' max-h-0'}`}>
              </div>
            </div>
            <nav className="mt-14 w-full flex">
              <ul className={`w-full flex flex-col items-center transition-opacity duration-250 ${showPageAnimations ? 'opacity-100' : 'opacity-0'}`}>
                {categories.map(category => {
                  return (
                    <li key={category.slug} className="w-full">
                      <Link 
                        href={`/${category.slug}`}
                        className={`block w-full h-full py-1 text-center text-sm font-medium transition capitalize ${category.slug === article.category.slug
                          ? 'text-gray-50 bg-blue-600 hover:bg-blue-800'
                          : 'text-gray-800 hover:bg-gray-800 hover:text-gray-50'
                        }`}
                      >
                        {category.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className={`w-1 bg-blue-600 transition-max-height duration-500 ${showPageAnimations ? 'max-h-40' : ' max-h-0'}`}></div>
            </nav>
          </aside>

          <section id="post">

            <header id="post-header" className="mt-10">
              <h1 className="w-full text-gray-800 text-4xl md:text-5xl font-bold">{article.title}</h1>
              <p className="mt-5 text-xl md:text-2xl text-gray-500 font-medium">{article.description}</p>

              <div className="flex flex-col sm:flex-row justify-between mt-5">
                <div className="text-sm text-gray-500 font-medium">
                  Por <span className="text-gray-700">{article.author.name}</span>
                </div>

                {renderTime()}
              </div>

              <RenderTags
                marginTop="5"
                category={article.category}
                tags={article.tags}
                max={2}
              />

              <div id="post-image" className="mt-8 md:mt-10 w-full">
                <Image
                  src={article.image.url}
                  alt={article.image.alt | ''}
                  quality={100}
                  width={728}
                  height={378}
                  objectFit="cover"
                />
              </div>
            </header>

            <div id="post-content" className={styles.article_markdown}>
              <ReactMarkdown allowDangerousHtml>{article.content}</ReactMarkdown>
            </div>

          </section>
        </article>
        <aside>
          <div className="mt-10"></div>
        </aside>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const response = await api.get('posts');
  const articles = response.data;

  const paths = articles.map(article => {
    return { 
      params: { 
        slug: article.slug, 
        category: article.category.slug,
      } 
    }
  });

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { slug } = context.params;  

  const response = await Promise.all([
    api.get(`posts/?slug=${slug}`),
    api.get('categories'),
  ]);

  const article = response[0].data[0];
  const categories = response[1].data;

  return {
    props: { article, categories },
    // revalidate: 1800
  }
}

export default BlogPost;