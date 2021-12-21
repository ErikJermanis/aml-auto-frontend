import classNames from "classnames";

const TextLogo = ({ className }) => (
  <span className={classNames('font-bold', className)}><span className="text-primary">AML</span> <span className="text-secondary">Auto</span></span>
);

export default TextLogo;
