import classNames from "classnames"

const Button = ({ children, primary, secondary, className }) => (
  <button className={classNames(
    'font-semibold py-2 px-4 rounded-full duration-300',
    { 'bg-primary text-white hover:bg-blue-900': primary },
    { 'bg-secondary hover:bg-hsecondary': secondary },
    className
  )}>{children}</button>
);

export default Button;
