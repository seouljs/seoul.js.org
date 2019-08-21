export default () => {
  return (
    <>
      <div className="root">
        <div>
          <img src="/static/images/logo@2x.png" />
        </div>
      </div>
      <style jsx>{`
        .root {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          left: 0;
          width: 100vw;
          height: 100%;
          background: #1b1e35;
        }
        img {
          height: 80px;
        }
      `}</style>
    </>
  );
};
