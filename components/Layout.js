import Footer from './Footer';
import Navbar from './Navbar';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Member List | {children.type.name}</title>
        <meta name="keywords" content="members" />
      </Head>
      <div className="content">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
