const Container = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="px-[80px]">{children}</div>;
};

export default Container;
