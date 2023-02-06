import "../../style/css/Container.min.css";

type IContainer = {
  children: React.ReactNode;
  size?: string;
};

const Container = (props: IContainer) => {
  return (
    <div className={`Container bg-white shadow -${props.size}`}>
      {props.children}
    </div>
  );
};

export default Container;
