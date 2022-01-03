import Select from 'react-select';
import classNames from 'classnames';

const InputSelect = ({ label, invalid, className, options, isMulti, disabled, value }) => {
  return (
    <div className={classNames('flex flex-col', { 'text-red-600': invalid }, className)}>
      <label className="pl-1.5">{label}</label>
      {/* <input onInput={onChange} ref={ref} type={type} className="px-2 py-1 rounded-lg shadow-lg" /> */}
      <Select
        options={options}
        // theme={theme}
        classNamePrefix="inputSelect"
        isMulti={isMulti}
        isDisabled={disabled}
        value={value}
      />

      <span className="text-sm pl-1">{invalid}</span>
    </div>
  )
};

export default InputSelect;
