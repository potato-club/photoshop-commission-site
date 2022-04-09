import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import user from '../assets/image/user.png';
import alert from '../assets/image/alert.png';
import Link from 'next/link';

const Header: NextPage = () => {
  return (
    <>
      <Head>
        <title>Header</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      </Head>

      <header className="headerBox">
        <nav className="contentBox">
          <Link href="/">
            <a className="theme">가나다 포토샵</a>
          </Link>
          <div>
            <Link href="user">
              <a>
                <Image
                  src={user}
                  alt="Picture of the author"
                  className="user"
                ></Image>
              </a>
            </Link>

            <Link href="alert">
              <a>
                <Image
                  src={alert}
                  alt="Picture of the author"
                  className="alert"
                ></Image>
              </a>
            </Link>
          </div>
        </nav>
      </header>

      <style jsx>{`
        .theme {
          color: white;
          font-family: 'Roboto', sans-serif;
          font-weight: 900;
          font-size: 32px;
          text-decoration: none;
        }
        div {
          display: flex;
          width: 100px;
          align-items: center;
          justify-content: space-between;
        }
        .user {
          width: 45px;
          height: 40px;
        }
        .alert {
          width: 35px;
          height: 35px;
        }
        .headerBox {
          background-color: rgba(7, 104, 159, 1);
          width: 100%;
          height: 60px;
        }
        .contentBox {
          display: flex;
          width: 1178px;
          justify-content: space-between;
          align-items: center;
          height: 100%;
          margin: auto auto;
        }
      `}</style>
    </>
  );
};

export default Header;
