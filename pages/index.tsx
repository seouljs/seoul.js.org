import Header from '../components/header';
import Pages from '../components/pages';
import Nav from '../components/nav';
import Pane from '../components/pane';
import Footer from '../components/footer';

export default () => {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Pages title="Welcome, Seoul.js" description="Seoul.js - JS Community in Seoul">
        <Pane>
          <img src="/static/images/hero.png" className="hero"></img>
        </Pane>
        <Footer />
      </Pages>
      <style jsx>{`
        .hero {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};
