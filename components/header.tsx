export default ({ children }) => {
  return (
    <>
      <header>{children}</header>
      <style jsx>{`
        header {
          left: 0;
          width: 100vw;
          height: 100px;
          padding: 10px;
        }
      `}</style>
    </>
  );
};
