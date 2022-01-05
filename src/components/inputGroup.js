import { memo, forwardRef } from "react";
import classNames from "classnames";

const InputGroup = forwardRef(({ label, type='text', invalid, className, onChange }, ref) => (
  <div className={classNames('flex flex-col', { 'text-red-600': invalid }, className)}>
    <label className="pl-1.5">{label}</label>
    <input onInput={onChange} ref={ref} type={type} className="px-2 py-1 rounded-lg shadow-lg" />
    <span className="text-sm pl-1">{invalid}</span>
  </div>
))

export default memo(InputGroup);
