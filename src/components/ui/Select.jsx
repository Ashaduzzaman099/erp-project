const Select = ({
  label,
  options = [],
  value,
  onChange,
  placeholder = "Select",
  disabled = false,
  className = "",
}) => {
  return (
    <div className={className}>
      {label && (
        <label className="mb-1 block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <select
        value={value || ""}
        onChange={onChange}
        disabled={disabled}
        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none"
      >
        <option value="">{placeholder}</option>

        {options.map((option) => (
          <option
            key={option.optionId || option.id}
            value={option.optionId || option.id}
          >
            {option.label || option.business || option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
