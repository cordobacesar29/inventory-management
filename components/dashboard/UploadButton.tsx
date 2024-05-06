export default function UploadButton() {
  return (
      <UploadButton
        /*@ts-ignore*/
        endpoint="imageUploader"
        onClientUploadComplete={(res: any) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
  );
}
