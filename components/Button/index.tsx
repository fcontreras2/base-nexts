import { StyledButton } from './styles';
import ClipLoader from "react-spinners/ClipLoader";

export type ButtonProps = {
  theme?: any;
  secondary?: boolean,
  children?: React.FC | string;
  variant?: string;
  loading?: boolean;
  disabled?: boolean;
  withArrow?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  const { 
    children, 
    loading,
    ...moreProps
  } = props;

  return (
    <StyledButton
      {...{...moreProps, loading}}
    >
      {loading ? <ClipLoader size="20" color="main"/> : children}
    </StyledButton>
  );
};

export default Button;
