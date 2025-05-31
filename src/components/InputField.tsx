import { InputFieldProps } from '../types/InputFieldProps';

const InputField = (props: InputFieldProps): React.JSX.Element => {
  return (
    <>
      <label className="text-gray-900">
        {props.label}
        <input
          className="w-full border px-1 py-0.5"
          inputMode="decimal"
          name={props.name}
          onChange={props.onChange}
          placeholder={props.placeholder}
          value={props.value}
        />
      </label>
    </>
  );
};

export default InputField;
