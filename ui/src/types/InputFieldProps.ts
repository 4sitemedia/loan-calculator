import { ChangeEventHandler } from 'react';

export interface InputFieldProps {
  label?: string | undefined;
  name: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder?: string | undefined;
  value?: string | undefined;
}
