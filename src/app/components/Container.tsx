interface Props {
    children: React.ReactNode;
  }
  
  const Container = ({ children }: Props) => {
    return (
      <div className="max-w-[1920px] xl:px-20 md:px-8 px-4">
        {children}
      </div>
    );
  };
  
  export default Container;