import { StyledButton } from './styles';

export interface ButtonProps {
  theme?: any;
  children?: Node | string;
  variant?: string;
  loading?: boolean;
  type: string;
  disabled?: boolean;
  withArrow?: boolean;
};

function Button(props: ButtonProps) {
  const { 
    children, 
    loading,
    ...moreProps
  } = props;

  return (
    <StyledButton
      {...moreProps}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
