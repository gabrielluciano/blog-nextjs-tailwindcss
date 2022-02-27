import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import SideMenu from './SideMenu'

function Layout({ children, postTitle, showTitle, selectedCategory, categories }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>

      <Header
        postTitle={postTitle}
        showTitle={showTitle}
        selectedCategory={selectedCategory}
        categories={categories}
      />

      <main className="pt-16">
        <SideMenu
          categories={categories}
          selectedCategory={selectedCategory}
        />
        {children}
      </main>
      
      <Footer />
    </>
  );
}

export default Layout;