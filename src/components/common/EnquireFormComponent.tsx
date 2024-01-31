import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  Container,
  TextField,
  InputLabel,
  Grid,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FileUploadInput from "./FileUploadInput";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { TextInput } from "./TextInput";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function EnquireFormComponent({ title, setOpen }: any) {
  const [selectFile, setSelectFile] = useState([]);
  const [documentSizeError, setDocumentSizeError] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  const methods = useForm({});
  const saveData = (data: any) => {
    console.log("data", data);
    console.log("selectFile", selectFile);
  };
  const handleChange = (event: any) => {
    const file = event?.target?.files?.[0];
    // Check if an image is selected
    if (!file) {
      return;
    }

    // Check the image size
    const fileSizeInMB = file.size / (1024 * 1024); // Convert bytes to megabytes
    if (fileSizeInMB > 10) {
      setDocumentSizeError(true);
      return;
    }
    setDocumentSizeError(false);
    setSelectFile(event?.target?.files?.[0]);
  };
  return (
    <>
      <Container>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(saveData)} method="post">
            <Box
              sx={{
                backgroundColor: "white",
                minWidth: "500px",
                marginTop: "80px",
                color: "#203F69",
                boxShadow: "0 5px 50px rgb(0 0 0 / 10%)",
                height: "50%",
                borderRadius: "20px",
              }}
            >
              <Grid container sx={{ padding: "24px" }}>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h6"></Typography>
                  <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                      right: 8,
                      color: "black",
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Grid>

                <Grid item xs={3}>
                  <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <InputLabel sx={{ fontSize: "0.9rem", color: "black" }}>
                      Enter 10 digit Phone Number
                    </InputLabel>
                  </Grid>
                  <Grid item xs={12} sx={{ alignItems: "center" }} mt={2}>
                    <TextInput
                      variant="outlined"
                      label="Mobile Number"
                      size="small"
                      iName="Mobile Number"
                      type="tel"
                      required={true}
                      maxLength={10}
                      pattern={/^[a-zA-Z0-9]{10}$/i}
                      errorMessage="Please enter a valid 10 digit phone no"
                    />
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <InputLabel sx={{ fontSize: "0.9rem", color: "black" }}>
                      Enter 6 digit Pin Code
                    </InputLabel>
                  </Grid>
                  <Grid item xs={12} sx={{ alignItems: "center" }} mt={2}>
                    <TextInput
                      variant="outlined"
                      label="pinCode"
                      size="small"
                      iName="pinCode"
                      type="number"
                      required={true}
                      maxLength={6}
                      pattern={/^[0-9]{6}$/i}
                      errorMessage="Please enter a valid 6 digit Pin code"
                    />
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <InputLabel sx={{ fontSize: "0.9rem", color: "black" }}>
                      Attach Electricity Bill
                    </InputLabel>
                  </Grid>
                  <Grid item xs={12} sx={{ alignItems: "center" }}>
                    <FileUploadInput
                      label="Attach electricity bill"
                      name={"file"}
                      required={true}
                      handleFileUpload={handleChange}
                      documentSizeError={documentSizeError}
                      selectFile={selectFile}
                      classes={undefined}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={3} mt={4}>
                  <Grid item xs={12} sx={{ alignItems: "center" }}>
                    <Button
                      variant="outlined"
                      type="submit"
                      endIcon={<ArrowForwardIosIcon />}
                      sx={{
                        paddingLeft: "50px",
                        paddingRight: "50px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                    ></Button>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </form>
        </FormProvider>
      </Container>
    </>
  );
}
