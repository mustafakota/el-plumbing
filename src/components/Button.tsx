import './Button.css';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  withIcon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  fullWidth = false,
  withIcon = false
}) => {
  const baseClass = `btn btn-${variant} ${fullWidth ? 'full-width' : ''} ${className}`;
  
  return (
    <button className={baseClass} onClick={onClick}>
      <span className="btn-text">{children}</span>
      {withIcon && <ArrowRight size={18} className="btn-icon" strokeWidth={1.5} />}
    </button>
  );
};

export default Button;
