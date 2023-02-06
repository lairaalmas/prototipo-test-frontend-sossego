interface IForm extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

const Form = (props: IForm) => {
  return <form {...props}>{props.children}</form>;
};

export default Form;
