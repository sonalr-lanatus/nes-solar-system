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
import { sendEnquiryForm } from "@/lib/api";
import { ToastContainer, toast } from "react-toastify";

type SelectFileType = {
  base64: string;
  file: File;
};
export default function EnquireFormComponent({ title, setOpen, id }: any) {
  const methods = useForm({});
  const [selectFile, setSelectFile] = useState<SelectFileType | undefined>();
  const [documentSizeError, setDocumentSizeError] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const saveData = async (data: any) => {
    const formData = {
      ...data,
      file: selectFile?.base64,
      fileName: selectFile?.file.name,
      fileType: selectFile?.file.type,
      title: title,
    };
    try {
      await sendEnquiryForm(formData);
      toast.success("Form submitted successfully");
      methods.reset();
      setSelectFile(undefined);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };
  const handleChange = (event: any) => {
    const file = event?.target?.files?.[0];
    // Check if an image is selected
    if (!file) {
      return;
    }
    const reader = new FileReader();

    reader.onloadend = () => {
      // Convert image to Base64 string
      if (reader.result) {
        setSelectFile({
          file: event?.target?.files?.[0],
          base64: reader.result.toString(),
        });
      }
    };

    // Check the image size
    const fileSizeInMB = file.size / (1024 * 1024); // Convert bytes to megabytes
    if (fileSizeInMB > 10) {
      setDocumentSizeError(true);
      return;
    }
    setDocumentSizeError(false);
    setSelectFile(event?.target?.files?.[0]);
    reader.readAsDataURL(file);
  };

  return (
    <>
      <Container>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(saveData)} method="post">
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              pauseOnHover
              draggable
              draggablePercent={60}
              closeButton={false}
              style={{ zIndex: 9999 }}
            />
            <Box
              sx={{
                backgroundColor: "white",
                marginTop: "30px",
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

                <Grid item xs={12} sm={6} md={3}>
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
                      iName="Phone"
                      type="tel"
                      required={true}
                      maxLength={10}
                      pattern={/^[a-zA-Z0-9]{10}$/i}
                      errorMessage="Please enter a valid 10 digit phone no"
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
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
                      iName="PinCode"
                      type="number"
                      required={true}
                      maxLength={6}
                      pattern={/^[0-9]{6}$/i}
                      errorMessage="Please enter a valid 6 digit Pin code"
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
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
                <Grid item xs={12} mt={4} sm={6} md={3}>
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
