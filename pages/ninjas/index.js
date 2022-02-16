import Link from 'next/link';

import styles from '../../styles/Ninjas.module.css';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  // return to this function should always be a props object
  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <>
      {/* index creates root component, so path is just [folderName]/ */}
      <div>
        <h1>All Ninjas</h1>

        {ninjas.map((ninja) => (
          <Link key={ninja.id} href={`/ninjas/${ninja.id}`}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Ninjas;
