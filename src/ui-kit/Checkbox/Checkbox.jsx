import React from 'react'
import classNames from 'classnames'
import './Checkbox.css'

// interface ICheckboxProps {
//   className?: string;
//   type: 'redio' | 'checkbox'
//   id: string;
//   nameGroup: string;
//   label: string;
//   onChange: (
//     event: React.ChangeEvent<HTMLInputElement>,
//     nameGroup: string
//   ) => void;
// }

const Checkbox = ({
  className,
  id,
  nameGroup,
  // checkedBoxByGroup,
  label,
  onChange
}) => {
  // const isChecked = checkedBoxByGroup[nameGroup].includes(label)
  const handleChange = (event) => {
    onChange(event, nameGroup)
  }
  return (
    <label
      className={classNames('CheckBox', className)}
      htmlFor={id}
    >
      <span className="CheckBox-Inner">
        <input
          // checked={isChecked}
          id={id}
          name={label}
          type='checkbox'
          value={label}
          onChange={handleChange}
        />
      </span>
      {label && <span className="CheckBox-Label">{label}</span>}
    </label>
  )
}

export default Checkbox
