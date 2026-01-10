import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { styled } from '@mui/material/styles';
import { 
  Box, 
  TextField, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Button, 
  Typography,
  FormHelperText,
  Paper 
} from "@mui/material";
import { addBox } from "store/boxSlice";
import { SHIPPING_RATES } from "constants";
import { ToastComponent } from "components/Toast";

const Container = styled(Box)(({ theme }) => ({
  maxWidth: 600,
  margin: '2rem auto',
  padding: '0 1rem',
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: '2rem',
}));

const FormPaper = styled(Paper)(({ theme }) => ({
  padding: '2rem',
}));

const FormGroup = styled(Box)(({ theme }) => ({
  marginBottom: '1.5rem',
}));

const ColorPickerWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
}));

const ColorInput = styled('input')(({ theme }) => ({
  width: '50px',
  height: '40px',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '4px',
}));

const ColorLabel = styled(Typography)(({ theme }) => ({
  marginBottom: '0.5rem',
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: '1rem',
}));

export default function AddBox() {
  const dispatch = useDispatch();
  const [toastOpen, setToastOpen] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      receiverName: "",
      weight: "",
      boxColour: "#3498db",
      destinationCountry: "",
    },
  });

  const boxColour = watch("boxColour");

  const weightRegister = register("weight", {
    required: "Weight is required",
    min: {
      value: 0.01,
      message: "Weight must be greater than 0",
    },
    validate: (value) => {
      if (value === "" || value === null) {
        return "Weight is required";
      }
      const numValue = parseFloat(value);
      if (isNaN(numValue) || numValue <= 0) {
        return "Weight must be greater than 0";
      }
      return true;
    },
  });

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      const r = parseInt(result[1], 16);
      const g = parseInt(result[2], 16);
      const b = parseInt(result[3], 16);
      return `${r}, ${g}, ${b}`;
    }
    return "0, 0, 0";
  };

  const onSubmit = (data) => {
    const boxData = {
      receiverName: data.receiverName.trim(),
      weight: parseFloat(data.weight),
      boxColour: hexToRgb(data.boxColour),
      destinationCountry: data.destinationCountry,
    };

    dispatch(addBox(boxData));

    reset({
      receiverName: "",
      weight: "",
      boxColour: "#3498db",
      destinationCountry: "",
    });

    setToastOpen(true);
  };

  return (
    <Container>
      <Title variant="h1">
        Add New Box
      </Title>

      <ToastComponent
        open={toastOpen}
        onOpenChange={setToastOpen}
        title="Success"
        description="Box added successfully!"
        variant="success"
      />

      <FormPaper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <TextField
              fullWidth
              label="Receiver Name"
              id="receiverName"
              {...register("receiverName", {
                required: "Receiver name is required",
                validate: (value) => {
                  if (!value.trim()) {
                    return "Receiver name is required";
                  }
                  return true;
                },
              })}
              placeholder="Enter receiver name"
              error={!!errors.receiverName}
              helperText={errors.receiverName?.message}
            />
          </FormGroup>

          <FormGroup>
            <TextField
              fullWidth
              label="Weight (kg)"
              type="number"
              id="weight"
              {...weightRegister}
              onChange={(e) => {
                const value = e.target.value;
                const numValue = parseFloat(value);
                if (!isNaN(numValue) && numValue < 0) {
                  setValue("weight", "0", { shouldValidate: true });
                } else {
                  weightRegister.onChange(e);
                }
              }}
              placeholder="Enter weight in kilograms"
              inputProps={{ step: "0.01" }}
              error={!!errors.weight}
              helperText={errors.weight?.message}
            />
          </FormGroup>

          <FormGroup>
            <ColorLabel variant="body2" color="text.secondary">
              Box Colour
            </ColorLabel>
            <ColorPickerWrapper>
              <ColorInput
                type="color"
                id="boxColour"
                {...register("boxColour")}
              />
              <Typography variant="body2" color="text.secondary">
                RGB({hexToRgb(boxColour)})
              </Typography>
            </ColorPickerWrapper>
          </FormGroup>

          <FormGroup>
            <Controller
              name="destinationCountry"
              control={control}
              rules={{ required: "Please select a destination country" }}
              render={({ field }) => (
                <FormControl fullWidth error={!!errors.destinationCountry}>
                  <InputLabel id="destinationCountry-label">Destination Country</InputLabel>
                  <Select
                    labelId="destinationCountry-label"
                    id="destinationCountry"
                    label="Destination Country"
                    {...field}
                  >
                    {Object.entries(SHIPPING_RATES).map(([key, country]) => (
                      <MenuItem key={key} value={key}>
                        {country.name} (₹{country.rate} per box)
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.destinationCountry && (
                    <FormHelperText>{errors.destinationCountry.message}</FormHelperText>
                  )}
                </FormControl>
              )}
            />
          </FormGroup>

          <SubmitButton 
            type="submit" 
            variant="contained" 
            fullWidth 
            size="large"
          >
            Save Box
          </SubmitButton>
        </form>
      </FormPaper>
    </Container>
  );
}
