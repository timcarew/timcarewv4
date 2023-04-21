import { useEffect } from 'react';
import Head from 'next/head';
import Div100vh from 'react-div-100vh';
import { work } from '@/data/work';
export default function Home() {
  useEffect(() => {
    const cursor = document.querySelector('.Cursor');
    document.addEventListener('mousemove', (e) => {
      cursor.style.top = e.pageY + 'px';
      cursor.style.left = e.pageX + 'px';
    });
  });
  return (
    <>
      <Head>
        <title>Tim Carew | Front End Developer</title>
        <meta name="description" content="Tim Carew's Portfolio" />
        <meta property="og:image" content="/meta-tim.jpg" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Div100vh>
        <main>
          <div className="Portfolio">
            <p>-----------------------------------</p>
            <p>&gt; Welcome to Tim Carew&apos;s Portfolio</p>
            <p>-----------------------------------</p>
            <br />
            <p>&gt; Tim Carew</p>
            <br />
            <p>&gt; Front End Developer</p>
            <br />
            <p className="Bio">
              &gt; Hi there! I&apos;m a dedicated front-end engineer with a
              passion for crafting top-notch web applications and user
              experiences. My focus is on front-end development, and I
              specialize in using React (Next.js) to build modern and efficient
              web applications that look and feel great. I love exploring the
              world of animation and visualization using tools like GSAP and D3.{' '}
              <br /> <br /> I take pride in delivering high-quality work that
              meets the unique needs of each project and client. I&apos;m a
              problem-solver at heart, and I&apos;m always willing to go the
              extra mile to find the best solution for any challenge. Don&apos;t
              just take my word for it! Check out my recent projects listed
              below in the <a href="#work">Recent Work</a> section. <br />{' '}
              <br />
              I&apos;m always looking for new ways to improve my skills and
              learn new technologies (including learning by doing)! Feel free to
              reach out to me if you&apos;d like to work together!
            </p>{' '}
            <br />
            <p>&gt; Recent Work: </p>
            <div className="Work" id="work">
              <ul className="Work-List">
                {work.map((item) => {
                  return (
                    <li key={item.title} className="Work-Item">
                      <span className="Work-Item_Title">{item.title}</span>
                      {item.description}
                      <span className="Work-Item_Links">
                        {item.media && (
                          <a href={item.media} target="_blank">
                            In the Media
                          </a>
                        )}
                        {item.href && (
                          <a href={item.href} target="_blank">
                            Visit Project
                          </a>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <p>
              &gt; Thanks for visiting!
              <span className="Cursor"></span>
            </p>
          </div>
        </main>
      </Div100vh>
      <style jsx>{`
        main {
          position: relative;
          height: 100%;
          width: 100vw;
          color: #fff;
          background: linear-gradient(
            to bottom right,
            #00a6ff,
            #0087ff,
            #0059ff,
            #002bfe
          );
          font-family: 'source-code-pro', monospace;
          line-height: 1.5;
          overflow: hidden;
        }
        .Portfolio {
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          padding: 2rem;
          overflow-y: scroll;
        }
        .Bio,
        .Work-Item {
          width: 50%;
        }
        .Work {
          padding: 1rem 2rem;
        }
        .Work-Item {
          display: flex;
          flex-direction: column;
          margin-bottom: 1rem;
        }
        .Work-Item_Title {
          font-weight: 600;
          line-height: 2;
        }
        .Work-Item_Links {
          display: flex;
        }
        .Work-Item_Links > a {
          margin-right: 1rem;
        }
        .Cursor {
          display: inline-block;
          width: 10px;
          height: 20px;
          margin-bottom: -4px;
          margin-left: 4px;
          background-color: white;
          animation: blink 0.8s linear infinite;
        }
        @media (orientation: portrait) {
          .Bio,
          .Work-Item {
            width: 100%;
          }
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
