import type React from 'react';

interface InputProps {
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
}

function Input({
  value,
  name,
  onChange,

  type = '',
  placeholder = '',
}: InputProps) {
  return (
    <input
      value={value}
      name={name}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      autoComplete="off"
    />
  );
}

export default Input;
