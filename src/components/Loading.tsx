const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center position-absolute translate-middle top-50 start-50">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
