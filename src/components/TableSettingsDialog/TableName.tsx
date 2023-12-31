import { useEffect } from "react";
import { useWatch } from "react-hook-form";
import { startCase } from "lodash-es";
import {
  ShortTextComponent,
  IShortTextComponentProps,
} from "@rowy/form-builder";

export interface ITableNameProps extends IShortTextComponentProps {
  watchedField?: string;
}

export default function TableName({ watchedField, ...props }: ITableNameProps) {
  const {
    field: { onChange },
    useFormMethods: { control },
    disabled,
  } = props;

  const watchedValue = useWatch({ control, name: watchedField } as any);
  useEffect(() => {
    if (!disabled && typeof watchedValue === "string" && !!watchedValue)
      onChange(startCase(watchedValue));
  }, [watchedValue, disabled]);

  return <ShortTextComponent {...props} />;
}
