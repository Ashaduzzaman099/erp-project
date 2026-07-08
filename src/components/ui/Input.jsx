const Input = ({ label, className = "", ...props }) => {
  return (
    <div className={className}>
      {label && (
        <label className="mb-1 block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        {...props}
        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none"
      />
    </div>
  );
};

export default Input;
