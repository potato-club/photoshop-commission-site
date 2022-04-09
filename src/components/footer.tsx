import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import github from '../assets/image/github.png';

const Footer: NextPage = () => {
  return (
    <>
      <footer>
        <div className="wrapper">
          <div className="contentBox">
            <ul>
              <li>
                <Link href="/">
                  <a className="page">인트로페이지</a>
                </Link>
              </li>
              <li>
                <ul>
                  <Link href="/">
                    <a className="page as"> HOME</a>
                  </Link>
                  <li>
                    <Link href="/">
                      <a>의뢰전</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>의뢰중</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>의뢰완료</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <Link href="/">
                    <a className="page">ABOUT</a>
                  </Link>
                  <li>
                    <Link href="/">
                      <a>공지사항</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>이용약관</a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <hr></hr>
          </div>
          <div className="emailBox">
            <div>
              <span>이메일: thdwo999@naver.com</span>
              <Image src={github} alt="nothing" className="github"></Image>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        footer {
          height: 279px;
          background-color: rgba(7, 104, 159, 0.14);
          position: relative;
        }
        .wrapper {
          display: flex;
          flex-direction: column;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .contentBox {
          width: 1178px;
          list-style: none;
          margin: 0 auto;
        }
        .contentBox > ul {
          margin-bottom: 30px;

        }
        .contentBox > ul > li:nth-child(2) {
          margin: 0 220px;
        }
        .page {
          color: rgba(7, 104, 159, 1);
          font-family: 'Roboto', sans-serif;
          font-size: 20px;
          font-weight: 900;
          display: inline-block;
          margin-bottom: 9px;
        }
        .page ~ li {
          font-size: 12px;
          font-family: 'Roboto', sans-serif;
          color: rgba(173, 173, 173, 1);
          padding: 7px 0 7px 0;
        }
        .page ~ li:hover {
          font-weight: 900;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        a {
          text-decoration: none;
          color: rgba(173, 173, 173, 1);
        }
        hr {
          border: 0;
          height: 0.5px;
          background: rgba(173, 173, 173, 1);
        }
        .contentBox > ul {
          display: flex;
          justify-content: center;
        }
        .emailBox {
          width: 1178px;
          position: relative;
          margin: 0 auto;
          color: rgba(173, 173, 173, 1);
          font-size: 12px;
          height: 30px;
          margin-top: 27px;
        }
        .emailBox div {
          position: absolute;
          right: 0px;
          display: flex;
          align-items: center;
        }
        .emailBox div span {
          margin-right: 15px;
        }
      `}</style>
    </>
  );
};

export default Footer;
