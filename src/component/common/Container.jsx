function Container({ children, className }) {
  return (
    <div className={`max-w-330 mx-auto px-1.5 lg:px-0 ${className}`}>
      {children}
    </div>
  );
}

export default Container;
