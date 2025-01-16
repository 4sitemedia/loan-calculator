import { ErrorMessageProps } from '../types/ErrorMessageProps';

const ErrorMessage = (props: ErrorMessageProps): React.JSX.Element => {
  return (
    <>
      {props.message ? (
        <div className="text-red-700 text-sm">{props.message}</div>
      ) : null}
    </>
  );
};

export default ErrorMessage;
