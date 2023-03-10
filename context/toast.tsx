import React, { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

export const ToastProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Toaster
        position={"bottom-center"}
        reverseOrder={false}
        toastOptions={{
          // Define default options

          className: "",
          style: {
            background: "#363636",
            // background: "#00e676",
            color: "#fff",
            zIndex: 1,
            // width: "28vh",
          },
          duration: 5000,
          // Default options for specific types
          success: {
            duration: 8000,
          },
          error: {
            style: {
              background: "#ffa726",
            },
            duration: 8000,
          },
        }}
      />
      {children}
    </>
  );
};
