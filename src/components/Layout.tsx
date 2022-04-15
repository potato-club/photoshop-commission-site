type LayoutType = React.PropsWithChildren<{}>;
export const Layout = ({ children }: LayoutType) => {
  return <div style={{ height: '100%' }}>{children}</div>;
};
