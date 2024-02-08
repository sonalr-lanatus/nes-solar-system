import React, { useContext, useState } from "react";
import { TextInput } from "./TextInput";
import { FormProvider, useForm } from "react-hook-form";
import { InputLabel } from "@mui/material";
import { Button } from "./Button";
import FileUploadInput from "./FileUploadInput";
import { sendContactForm } from "../../lib/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type SelectFileType = {
  base64: string;
  file: File;
};
export default function ContactUsFormComponent() {
  const methods = useForm({});
  const [selectFile, setSelectFile] = useState<SelectFileType | undefined>();
  const [documentSizeError, setDocumentSizeError] = useState(false);
  const saveData = async (data: any) => {
    const formData = {
      ...data,
      file: selectFile?.base64,
      fileName: selectFile?.file.name,
      fileType: selectFile?.file.type,
    };
    try {
      await sendContactForm(formData);
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
    <div>
      <div className="cbox-19-1 p_item">
        <FormProvider {...methods}>
          <form
            className="e_form-44 s_form_layout1 response-transition"
            onSubmit={methods.handleSubmit(saveData)}
            method="post"
          >
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
            <div className="cbox-44-0 p_formItem">
              <p className="e_text-50 s_title response-transition">
                Look forward to receiving your comments or feedback!
              </p>

              <div className="grid grid-cols-2 gap-2 ">
                <div className="e_clueName-45 s_form1 form-group response-transition">
                  <label className="p_label">
                    <InputLabel className="s_label">Name</InputLabel>
                  </label>
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
                <div className="e_clueMobile-47 s_form1 form-group response-transition">
                  <label className="p_label">
                    <InputLabel className="s_label">Phone Number</InputLabel>
                  </label>
                  <div className="input-group">
                    <TextInput
                      variant="outlined"
                      label="Phone"
                      size="small"
                      iName="Phone"
                      required={true}
                      maxLength={10}
                      patternInput={"[0-9]*"}
                      inputMode={"numeric"}
                    />

                    <div className="invalid-feedback"></div>
                  </div>
                </div>
                <div className="e_clueEmail-48 s_form1 form-group">
                  <label className="p_label">
                    <InputLabel className="s_label">Email</InputLabel>
                  </label>
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
                <div className="e_clueEmail-48 s_form1 form-group">
                  <label className="p_label">
                    <InputLabel className="s_label">
                      Attach Light Bill
                    </InputLabel>
                  </label>
                  <div className="input-group">
                    <FileUploadInput
                      label="light bill"
                      name={"file"}
                      required={true}
                      handleFileUpload={handleChange}
                      documentSizeError={documentSizeError}
                      selectFile={selectFile}
                      classes={undefined}
                    />
                  </div>
                </div>
                <div className="e_clueEmail-48 s_form1 form-group">
                  <label className="p_label">
                    <InputLabel className="s_label">Address</InputLabel>
                  </label>
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
                className="e_formBtn-46 s_button1 btn-primary"
                label="Submit"
              ></Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
