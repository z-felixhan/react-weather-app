import "./form.css";
import {
  Alert,
  Autocomplete,
  Box,
  Button,
  Grid,
  Snackbar,
  TextField,
} from "@mui/material";
import React from "react";

const Form = (props) => {
  return (
    <>
      <form className="form-container" onSubmit={props.getWeather}>
        <Grid container>
          <Autocomplete
            id="country"
            autoHighlight
            getOptionLabel={(option) => option.name}
            onChange={(e, value) => {
              if (value) props.setAlphaTwo({ alphaTwo: [value.alphaTwo][0] });
            }}
            options={props.countries}
            renderInput={(params) => (
              <TextField {...params} label="Country" required />
            )}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/${option.alphaTwo.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${option.alphaTwo.toLowerCase()}.png 2x`}
                  alt=""
                />
                {option.name}
              </Box>
            )}
            sx={{ width: 300 }}
            disablePortal
          />
          <TextField
            id="city"
            inputProps={{ style: { textTransform: "capitalize" } }}
            label="City"
            variant="outlined"
            required
          />
          <Button type="submit" variant="outlined" disableElevation>
            Get Weather
          </Button>
        </Grid>
      </form>
      <div>{props.error ? error(props) : null}</div>
    </>
  );
};

function error(props) {
  return (
    <Snackbar
      open={true}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      autoHideDuration={6000}
      onClose={() => props.setError({ error: false })}
    >
      <Alert severity="error" onClose={() => props.setError({ error: false })}>
        An error was encountered. Please verify input or try again later.
      </Alert>
    </Snackbar>
  );
}

export default Form;
