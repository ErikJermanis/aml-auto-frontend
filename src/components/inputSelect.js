import { memo, forwardRef } from 'react';
import Select from 'react-select';
import classNames from 'classnames';

const InputSelect = forwardRef(({ label, invalid, className, options, disabled, onChange }, ref) => {

  const customStyles = {
    control: provided => ({
      ...provided,
      borderWidth: 0,
      minHeight: 32,
      boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      borderRadius: '0.5rem'
    }),
    dropdownIndicator: provided => ({
      ...provided,
      color: 'black'
    }),
    indicatorSeparator: provided => ({
      ...provided,
      backgroundColor: '#FFA64E'
    }),
    menu: provided => ({
      ...provided,
      boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      borderRadius: '0.5rem',
      overflow: 'hidden'
    }),
    option: provided => ({
      ...provided,
      padding: '4px 10px'
    })
  };

  return (
    <div className={classNames('flex flex-col', { 'text-red-600': invalid }, className)}>
      <label className="pl-1.5">{label}</label>
      <Select
        options={options}
        styles={customStyles}
        isDisabled={disabled}
        onChange={onChange}
        ref={ref}
      />

      <span className="text-sm pl-1">{invalid}</span>
    </div>
  )
});

export default memo(InputSelect);
