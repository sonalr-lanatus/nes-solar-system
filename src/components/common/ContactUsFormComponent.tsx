import React, { useState } from "react";
import { TextInput } from "./TextInput";
import { FormProvider, useForm } from "react-hook-form";
import { InputLabel } from "@mui/material";
import { Button } from "./Button";
import FileUploadInput from "./FileUploadInput";

export default function ContactUsFormComponent() {
  const methods = useForm({});
  const [selectFile, setSelectFile] = useState([]);
  const [documentSizeError, setDocumentSizeError] = useState(false);
  const saveData = async (data: any) => {
    console.log("data", data);
    const formData = new FormData();
    formData.append("name", data.Name);
    formData.append("email", data.Email);
    formData.append("message", data.Details);
    formData.append("message", data.Phone);
    formData.append("message", data.Address);
    // formData.append("file", selectFile);
    try {
      const response = await fetch("/api/contactForm", {
        method: "POST",
        body: formData,
      });
      console.log("response", response);

      if (response.ok) {
        console.log("Form submitted successfully");
        // Optionally, you can redirect the user or show a success message
      } else {
        console.error("Failed to submit form");
      }
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
    <div>
      {" "}
      <div className="cbox-19-1 p_item">
        <FormProvider {...methods}>
          <form
            className="e_form-44 s_form_layout1 response-transition"
            onSubmit={methods.handleSubmit(saveData)}
            method="post"
          >
            <div className="cbox-44-0 p_formItem">
              <p className="e_text-50 s_title response-transition">
                Look forward to receiving your comments or feedback!
              </p>

              <div className="grid grid-cols-2 gap-2 ">
                <div className="e_clueName-45 s_form1 form-group response-transition">
                  <label className="p_label">
                    <InputLabel className="s_label">Name</InputLabel>
                  </label>
                  <div className="">
                    <div className="input-group">
                      <TextInput
                        variant="outlined"
                        label="Name"
                        size="small"
                        iName="Name"
                        type="text"
                        required={true}
                      />
                      <div className="invalid-feedback"></div>
                    </div>
                  </div>
                </div>
                <div className="e_clueMobile-47 s_form1 form-group response-transition">
                  <label className="p_label">
                    <InputLabel className="s_label">Phone Number</InputLabel>
                  </label>
                  <div className="">
                    <div className="input-group">
                      <TextInput
                        variant="outlined"
                        label="Phone"
                        size="small"
                        iName="Phone"
                        type="tel"
                        required={true}
                        maxLength={10}
                      />
                      <div className="invalid-feedback"></div>
                    </div>
                  </div>
                </div>
                <div className="e_clueEmail-48 s_form1 form-group">
                  <label className="p_label">
                    <InputLabel className="s_label">Email</InputLabel>
                  </label>
                  <div className="">
                    <div className="input-group">
                      <TextInput
                        variant="outlined"
                        label="Email"
                        size="small"
                        iName="Email"
                        type="email"
                        required={true}
                      />
                    </div>
                  </div>
                </div>
                <div className="e_clueEmail-48 s_form1 form-group">
                  <label className="p_label">
                    <InputLabel className="s_label">
                      Attach Light Bill
                    </InputLabel>
                  </label>
                  <div className="">
                    <div className="input-group">
                      <FileUploadInput
                        label="Attach electricity bill"
                        name={"file"}
                        required={true}
                        handleFileUpload={handleChange}
                        documentSizeError={documentSizeError}
                        selectFile={selectFile}
                        classes={undefined}
                      />
                    </div>
                  </div>
                </div>
                <div className="e_clueEmail-48 s_form1 form-group">
                  <label className="p_label">
                    <InputLabel className="s_label">Address</InputLabel>
                  </label>
                  <div className="">
                    <div className="input-group">
                      <TextInput
                        multiline
                        variant="outlined"
                        label="Address"
                        size="small"
                        iName="Address"
                        type="text"
                        rows={4}
                        required={true}
                      />
                    </div>
                  </div>
                </div>{" "}
                <div className="e_clueEmail-48 s_form1 form-group">
                  <label className="p_label">
                    <InputLabel className="s_label">Details</InputLabel>
                  </label>
                  <div className="">
                    <div className="input-group">
                      <TextInput
                        multiline
                        variant="outlined"
                        label="Details"
                        size="small"
                        iName="Details"
                        type="text"
                        rows={4}
                        required={true}
                      />
                    </div>
                  </div>
                </div>{" "}
              </div>
              <Button
                variant="outlined"
                type="submit"
                className="e_formBtn-46 s_button1 btn btn-primary"
                label="Submit"
              ></Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
