import { InputFieldProps } from '../types/InputFieldProps';

const InputField = (props: InputFieldProps): React.JSX.Element => {
  return (
    <>
      <label className="text-gray-900">
        {props.label}
        <input
          className="border px-1 py-0.5 w-full"
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
