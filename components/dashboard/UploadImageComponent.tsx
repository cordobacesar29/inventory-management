import { UploadDropzone } from "@/lib/uploadthing";
import { Pencil } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { ClientUploadedFileData } from "uploadthing/types";

interface Props {
  label: string;
  imageUrl?: string;
  setImageUrl: Dispatch<SetStateAction<string | undefined>>;
  className?: string;
}
export default function UploadImageComponent({
  className = "col-span-full",
  imageUrl,
  label,
  setImageUrl,
}: Props) {
  
  const handleUpoadImageComplete = (
    res: ClientUploadedFileData<{ uploadedBy: string }>[]
  ) => {
    if (res) return setImageUrl(res[0].url);
    return;
  };

  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-4">
        <label
          htmlFor="course-image"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        {imageUrl && (
          <button
            onClick={() => setImageUrl("")}
            type="button"
            className="flex space-x-2  bg-slate-900 rounded-md shadow text-slate-50  py-2 px-4"
          >
            <Pencil className="w-5 h-5" />
            <span>Change Image</span>
          </button>
        )}
      </div>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Item image"
          width={200}
          height={267}
        />
      ) : (
        <UploadDropzone
          endpoint={"imageUploader"}
          onClientUploadComplete={handleUpoadImageComplete}
          onUploadError={(error) => {
            // Do something with the error.
            console.log(`ERROR! ${error.message}`);
          }}
        />
      )}
    </div>
  );
}
