function NotFound() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="display-1 fw-bold">404</h1>
          <p className="text-3xl">
            <span className="text-red-600">Opps!</span> Page not found.
          </p>
          <p className="lead">The page you’re looking for doesn’t exist.</p>
        </div>
      </div>
    </>
  );
}

export default NotFound;
