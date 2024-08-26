import { button } from './theme/button';
import type { ButtonVariants } from './theme/button';

type ButtonHTMLAttributes = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'>;

export type ButtonProps = ButtonHTMLAttributes & ButtonVariants & {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export function Button ({ children, onClick, ...props }: ButtonProps) {
  return <button className={button(props)}>{children}</button>
}