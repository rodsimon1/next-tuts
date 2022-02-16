import Link from 'next/link';
import styles from '../../styles/Home.module.css';

// file name in brackets tell Next that it's a wrap parameter, a changeble value

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map((member) => {
    return {
      params: { id: member.id.toString() },
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
    props: { member: data },
  };
};

const Details = ({ member }) => {
  return (
    <>
      <div>
        <h1>{member.name} Details</h1>
        <p>{member.username}</p>
        <p>{member.email}</p>
        <p>{member.website}</p>
        <p>{member.address.city}</p>
      </div>

      <Link href="/members">
        <a className={styles.btn}>Back to Members</a>
      </Link>
    </>
  );
};

export default Details;
