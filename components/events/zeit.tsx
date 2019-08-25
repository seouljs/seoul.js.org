const Profile = ({ url, name, desc }) => {
  return (
    <>
      <div className="profile">
        <img src={url} alt={name} />
        <p>{desc}</p>
      </div>
      <style jsx>{`
        .profile {
          display: flex;
          justify-content: space-between;
        }

        .profile p {
          margin: 0;
        }

        .profile img {
          flex-shrink: 0;
          border-radius: 50%;
          margin-right: 16px;
          width: 80px;
          height: 80px;

          filter: grayscale(100%);
        }
      `}</style>
    </>
  );
};
export default () => {
  return (
    <>
      <div className="root">
        <h1>▲ ZEIT Korea User Group Meetup</h1>
        <div className="desc">
          <p>
            ZEIT 의 Next.js, Hyper, Micro, Serve, Pkg 같은{' '}
            <a href="https://zeit.co/oss">오픈소스들</a>과와 서버레스 플랫폼 Now 에서 제공하는
            다양한 플랫폼 발자 경험에 대해서 소개합니다. 더해서 ZEIT 솔루션의 개발 경험과{' '}
            <a href="https://www.npmjs.com/search?q=keywords:next-plugins">관련 된 오픈소스들</a>도
            소개하고 공유하는 자리를 마련 했습니다. 공유하고 싶은 이야기가 있으시면{' '}
            <a href="https://discord.gg/A6snj9n">Seoul.js 디스코드 채널</a> #zeit 로 오셔서
            알려주세요. <b>스피커, 주제 그리고 프로그램은 변경 될 수 있습니다.</b>
          </p>
        </div>
        <div className="speakers">
          <ul>
            <li>
              <Profile
                url="https://pbs.twimg.com/profile_images/1163603323959648256/vjSdwrUr_400x400.jpg"
                name="jimmymoon"
                desc="Next.js 9.0 에 대한 변경점 소개와 Next.js 를 이용해서 간단한 페이지를 만들어서 직접 Now 에 배포하는 방법을 알아봅니다. Next.js 로 간단한 소개 페이지를 만들고 Now 에 배포한 뒤에 커스텀 도메인을 연결하는 방법을 소개합니다."
              />
            </li>
            <li>
              <Profile
                url="https://pbs.twimg.com/profile_images/378800000603640247/77bf88e4495402923b97b0af5bb195f0_400x400.png"
                name="rhio"
                desc="Vue 와 Now 를 사용하여 Todo 앱을 만드는 방법을 소개합니다."
              />
            </li>
            <li>TBD</li>
            <li>TBD</li>
            <li>Workshop [TBD]</li>
          </ul>
        </div>
        <div className="info">
          <ul>
            <li>장소, 시간: TBD</li>
            <li>참여: TBD</li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .root {
          width: 100%;
          background: #000000;
          border-radius: 4px;
          border: 1px solid #333;
          transition: border-color 200ms ease-in-out;
          color: #fff;
          padding: 16px;
          box-shadow: rgba(51, 51, 51, 0.16) 0px 3px 10px;
        }

        .root a {
          color: #efefef;
        }

        .root a:hover {
          color: #a0a0a0;
        }

        h2 {
          margin: 0;
        }

        .speakers ul {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          list-style: none;
          margin: 0;
          padding: 0 20px;
        }

        .speakers li {
          margin: 10px 0;
          width: calc(50% - 10px);
        }
      `}</style>
    </>
  );
};
