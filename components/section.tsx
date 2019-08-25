export default ({ children }) => {
  return (
    <>
      <div className="root">{children}</div>
      <style jsx>{`
        .root {
          display: flex;
          left: 0;
          width: 100vw;
          height: auto;
          max-width: 1080px;
          margin: 30px auto;
          padding: 1.5em;
        }
      `}</style>
    </>
  );
};
