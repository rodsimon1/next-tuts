import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sint nulla vel tempora unde perspiciatis
          recusandae? Nulla at, possimus suscipit magni laborum inventore laudantium ex voluptatibus explicabo ea. Magni,
          repudiandae.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sint nulla vel tempora unde perspiciatis
          recusandae? Nulla at, possimus suscipit magni laborum inventore laudantium ex voluptatibus explicabo ea. Magni,
          repudiandae.
        </p>

        <Link href="/ninjas">
          <a className={styles.btn}> See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
