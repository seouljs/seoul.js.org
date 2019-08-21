export default () => {
  return (
    <>
      <footer>
        <div>
          <div>
            <h4>About Seoul.js</h4>
            <p>About</p>
            <p>Organizers</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="copyright">
          <a
            href="https://seoul.js.org"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="seouljs"
          >
            <img className="logo" src="/static/images/title_w.png" alt="Logo" />
          </a>
          <div> Copyright © 2019 SEOUL.JS. All rights reserved.</div>
        </div>
      </footer>
      <style jsx>{`
        .logo {
          width: 90px;
        }
        a,
        p,
        .copyright {
          color: #8c8c8c;
        }
        h4 a {
          color: inherit;
        }
        a:hover {
          color: #efefef;
        }
        .copyright {
          margin-top: 3rem;
        }
        .copyright div {
          margin-top: 0.5rem;
        }
        footer {
          display: flex;
          flex-direction: column;
          padding: 2rem 0 4rem;
          width: 100vw;
          min-height: 320px;
          margin: 0 auto;
          padding: 0 1rem;
          max-width: 1024px;
        }
        h4 {
          margin-bottom: 0.75rem;
        }
        p {
          margin-top: 0;
          margin-bottom: 0.25rem;
        }
        * + h4 {
          margin-top: 1rem;
        }
      `}</style>
    </>
  );
};
