import { cn } from "@/lib/utils";
import { File, X } from "lucide-react";
import { useDropzone } from "react-dropzone";

export default function DropZone({
  onChange,
  getValues,
  name,
  setValue,
  className,
  error,
}) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    isDragAccept,
  } = useDropzone({
    accept: {
      "application/pdf": [],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      file.preview = URL.createObjectURL(file);
      onChange(file);
    },
  });
  return (
    <div className={className}>
      <div
        className={cn(
          "relative flex flex-col items-center justify-center w-full h-full overflow-hidden border-2 border-dashed rounded-md w-min-400px h-400px outline-none transition duration-300 ease-in-out hover:border-green-500",
          getValues(name) != null ? "p-0" : "p-5",
          isDragAccept
            ? "border-green-500"
            : isDragReject
            ? "border-red-500"
            : "border-gray-300"
        )}
        {...getRootProps()}
      >
        {getValues(name) == null ? (
          <>
            <input
              {...getInputProps()}
              onChange={(e) => {
                const file = e.target.files[0];
                file.preview = URL.createObjectURL(file);
                onChange(file);
              }}
            />
            <File
              sx={{
                fontSize: 80,
                mb: 2,
              }}
            />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p className="text-center">
                Drag and drop some files here,
                <br />
                or click to select files
              </p>
            )}
          </>
        ) : (
          <div className="relative w-full h-full">
            <iframe
              src={getValues(name).preview || getValues(name)}
              alt="preview"
              className="w-full h-full object-cover"
            />
            <button
              className="absolute top-1 right-1 p-1 text-white bg-black bg-opacity-50 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                setValue(name, null);
              }}
            >
              <X />
            </button>
          </div>
        )}
      </div>
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
}
