import React from 'react';
import { forwardRef } from 'react';

function Select({ label, className, onChange, options, ...props }, ref) {
  return (
    <div className="flex flex-col space-y-2">
      {label && <label className="text-black">{label}</label>}
      <select
        onChange={onChange}
        className={`p-3 bg-black text-white border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105 ${className}`}
        {...props}
        ref={ref}
      >
        <option value="" className="text-gray-500">Select Category</option>
        {options.map(option => (
          <option key={option.value} value={option.value} className="bg-black text-white">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default forwardRef(Select);
