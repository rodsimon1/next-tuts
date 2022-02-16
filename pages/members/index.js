import Link from 'next/link';

import styles from '../../styles/Members.module.css';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  // return to this function should always be a props object
  return {
    props: { members: data },
  };
};

const Members = ({ members }) => {
  return (
    <>
      {/* index creates root component, so path is just [folderName]/ */}
      <div>
        <h1>All Members</h1>

        {members.map((member) => (
          <Link key={member.id} href={`/members/${member.id}`}>
            <a className={styles.single}>
              <h3>{member.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Members;
