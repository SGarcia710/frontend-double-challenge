import "../assets/styles/Button.css";

type ButtonProps = {
  text: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = (props: ButtonProps) => {
  return (
    <button {...props} className="button-container">
      {props.text}
    </button>
  );
};
