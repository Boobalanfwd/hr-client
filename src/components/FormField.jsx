const FormField = ({
  label,
  name,
  type = "text",
  register,
  validation,
  errors,
  options,
  rows,
}) => {
  const error = errors[name];

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          rows={rows || 3}
          {...register(name, validation)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-10 px-4 py-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      ) : type === "select" ? (
        <select
          id={name}
          {...register(name, validation)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-10 px-4 py-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select {label.toLowerCase()}</option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          type={type}
          {...register(name, validation)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-10 px-4 py-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      )}
      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  );
};

export default FormField;
