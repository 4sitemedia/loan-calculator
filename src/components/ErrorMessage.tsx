import { ErrorMessageProps } from '../types/ErrorMessageProps';

const ErrorMessage = (props: ErrorMessageProps): React.JSX.Element => {
  return (
    <>
      {props.message ? (
        <div className="text-sm text-red-700">{props.message}</div>
      ) : null}
    </>
  );
};

export default ErrorMessage;
