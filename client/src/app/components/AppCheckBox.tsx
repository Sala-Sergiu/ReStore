import { Checkbox, FormControlLabel } from "@mui/material";
import { UseControllerProps, useController } from "react-hook-form";

interface Props extends UseControllerProps {
  lable: string;
  disabled: boolean;
}

export default function AppCheckBox(props: Props) {
  const { field } = useController({ ...props, defaultValue: false });

  return (
    <FormControlLabel
      control={<Checkbox {...field} checked={field.value} color="secondary" />}
      label={props.lable}
      disabled={props.disabled}
    />
  );
}
