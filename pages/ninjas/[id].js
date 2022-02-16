import Link from 'next/link';
import styles from '../../styles/Home.module.css';

// file name in brackets tell Next that it's a wrap parameter, a changeble value

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths, // the same as paths: paths
    fallback: false, // fallback pages, more on that later
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  return (
    <>
      <div>
        <h1>{ninja.name} Details</h1>
        <p>{ninja.username}</p>
        <p>{ninja.email}</p>
        <p>{ninja.website}</p>
        <p>{ninja.address.city}</p>
      </div>

      <Link href="/ninjas">
        <a className={styles.btn}>Back to Ninjas</a>
      </Link>
    </>
  );
};

export default Details;
