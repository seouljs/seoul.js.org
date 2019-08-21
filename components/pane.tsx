export default ({ children }) => {
  return (
    <>
      <div className="root">{children}</div>
      <style jsx>{`
        .root {
          display: flex;
          left: 0;
          width: 100wv;
          height: auto;
          background: #fef953;
        }
      `}</style>
    </>
  );
};
