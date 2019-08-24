import Header from '../components/header';
import Pages from '../components/pages';
import Nav from '../components/nav';
import Section from '../components/section';
import Footer from '../components/footer';

export default () => {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Pages title="Welcome, Seoul.js" description="Seoul.js - JS Community in Seoul">
        <Section>
          <div className="hero">
            <div className="logo">
              <img src="/static/images/logo-sq.png" alt="" />
            </div>
            <div className="title">
              <h1>Seoul.js</h1>
              <h2>Javascript is everywhere not only in Seoul</h2>
              <p>
                넓고 얕은 자바스크립트의 지식과 매력으로 여러분의 무릎과 머리를 치게 만들 대한민국
                지역기반 프로젝트. 트위치 플랫폼을 이용해서 시간, 공간의 제약을 넘어서는 새로운 개발
                문화를 만듭니다.
              </p>
              <p>
                Seoul.js 의 Code of Conduct 를 따라 다양한 여러분의 의견과 경험 그리고 지향점을
                공감하고 존중합니다.
              </p>
            </div>
          </div>
        </Section>
        <Footer />
      </Pages>
      <style jsx>{`
        .hero {
          display: flex;
          width: 100%;
          height: 300px;
          overflow: hidden;
          margin: 0px;
        }

        .title {
          margin-left: 30px;
          color: #f3f3f3;
        }

        .title h1 {
          font-size: 5em;
          color: #fefefe;
          margin: 0;
          margin: 0px;
          line-height: 1em;
        }

        .title h2 {
          font-size: 1.5em;
          margin: 0;
          font-family: Lato;
          margin: 0px;
          opacity: 0.7;
        }

        .title p {
          font-size: 1.2em;
          width: 28em;
          line-height: 1.5em;
        }

        .logo img {
          width: 300px;
        }
      `}</style>
    </>
  );
};
