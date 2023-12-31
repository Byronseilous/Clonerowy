import { ISettingsProps } from "@src/components/fields/types";
import { TextField, FormControlLabel, Switch } from "@mui/material";

export default function Settings({ onChange, config }: ISettingsProps) {
  return (
    <>
      <TextField
        variant="filled"
        fullWidth
        margin="none"
        onChange={(e) => onChange("min")(parseFloat(e.target.value))}
        value={config["min"]}
        id={`settings-field-min`}
        label="Minimum value"
        type="number"
      />

      <TextField
        variant="filled"
        fullWidth
        margin="none"
        onChange={(e) => onChange("max")(parseFloat(e.target.value))}
        value={config["max"]}
        id={`settings-field-max`}
        label="Maximum value"
        type="number"
      />

      <TextField
        variant="filled"
        fullWidth
        margin="none"
        onChange={(e) => onChange("step")(parseFloat(e.target.value))}
        value={config["step"]}
        id={`settings-field-step`}
        label="Step value"
        type="number"
      />

      <FormControlLabel
        control={
          <Switch
            checked={config.marks}
            onChange={() => onChange("marks")(!Boolean(config.marks))}
            name="marks"
          />
        }
        label="Show slider steps"
      />
    </>
  );
}
