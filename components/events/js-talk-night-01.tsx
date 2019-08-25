export default () => {
  return (
    <>
      <div className="root">
        <h1>JS Talk Night #1 on Twitch</h1>
        <div className="desc">
          <p>주제 설명</p>
        </div>
        <div className="speakers">
          <ul>
            <li>
              <div className="profile">
                <img
                  src="https://pbs.twimg.com/profile_images/1163603323959648256/vjSdwrUr_400x400.jpg"
                  alt=""
                />
                <p>
                  Now 플랫폼에 Rust 와 Node.js 로 API 서버를 만드는 방법을 소개합니다. Rust 와 Now
                  플랫폼의 장점을 살린 프로젝트입니다.
                </p>
              </div>
            </li>
            <li>Rhio</li>
            <li>준영</li>
            <li>TBD</li>
            <li>Workshop</li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .root {
          width: 100%;
          background: #fdf952;
          border-radius: 4px;
          border: 1px solid #333;
          transition: border-color 200ms ease-in-out;
          color: #0f0f0f;
          padding: 16px;
          box-shadow: rgba(51, 51, 51, 0.16) 0px 3px 10px;
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

        .profile {
          display: flex;
          justify-content: space-between;
        }

        .profile img {
          border-radius: 50%;
          width: 80px;
          margin-right: 16px;
        }
      `}</style>
    </>
  );
};
