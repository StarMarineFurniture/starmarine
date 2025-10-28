"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface FileUploadProps {
  onFilesChange: (files: File[]) => void;
  selectedFiles: File[];
  maxFiles?: number;
  maxSizePerFile?: number; // in MB
  acceptedFileTypes?: string[];
  className?: string;
}

export function FileUpload({
  onFilesChange,
  selectedFiles,
  maxFiles = 5,
  maxSizePerFile = 10,
  acceptedFileTypes = [".pdf", ".doc", ".docx", ".xls", ".xlsx", ".jpg", ".jpeg", ".png"],
  className = ""
}: FileUploadProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFilesArray = Array.from(e.target.files);
      
      // Check if adding new files would exceed the limit
      const totalFiles = selectedFiles.length + newFilesArray.length;
      if (totalFiles > maxFiles) {
        alert(`Cannot add ${newFilesArray.length} files. Maximum ${maxFiles} files allowed. You currently have ${selectedFiles.length} files.`);
        return;
      }
      
      // Validate file size for new files
      const maxSizeBytes = maxSizePerFile * 1024 * 1024;
      const validFiles = newFilesArray.filter(file => {
        if (file.size > maxSizeBytes) {
          alert(`File ${file.name} is too large. Maximum size is ${maxSizePerFile}MB.`);
          return false;
        }
        return true;
      });

      // Check for duplicate file names
      const duplicateFiles = validFiles.filter(newFile => 
        selectedFiles.some(existingFile => existingFile.name === newFile.name)
      );
      
      if (duplicateFiles.length > 0) {
        const duplicateNames = duplicateFiles.map(f => f.name).join(', ');
        alert(`The following files are already selected: ${duplicateNames}`);
        return;
      }

      // Add new files to existing selection
      const updatedFiles = [...selectedFiles, ...validFiles];
      onFilesChange(updatedFiles);
      
      // Reset the input so the same file can be selected again if needed
      e.target.value = '';
    }
  };

  const removeFile = (index: number) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    onFilesChange(updatedFiles);
  };

  const clearAllFiles = () => {
    onFilesChange([]);
    // Reset file input
    const fileInput = document.getElementById('file-upload-input') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  const getFileIcon = (fileType: string) => {
    if (fileType.startsWith('image/')) {
      return (
        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    } else if (fileType.includes('pdf')) {
      return (
        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      );
    } else {
      return (
        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    }
  };

  const formatFileTypes = () => {
    const types = acceptedFileTypes.map(type => type.replace('.', '').toUpperCase());
    return types.join(', ');
  };

  return (
    <div className={className}>
      <label htmlFor="file-upload-input" className="block text-sm font-medium text-foreground mb-2">
        Attachments
      </label>
      <p className="text-xs text-muted-foreground mb-3">
        Upload up to {maxFiles} files (max {maxSizePerFile}MB each). Accepted formats: {formatFileTypes()}
      </p>
      
      {/* Custom File Upload Button */}
      <div className="relative group">
        <input
          type="file"
          id="file-upload-input"
          multiple
          accept={acceptedFileTypes.join(",")}
          onChange={handleFileChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <Button
          type="button"
          variant="outline"
          className="w-full h-12 border-2 border-dashed border-border hover:border-primary hover:bg-primary/5 hover:scale-[1.02] hover:shadow-md transition-all duration-300 ease-in-out transform"
        >
          <svg className="w-5 h-5 mr-2 transition-transform duration-300 ease-in-out group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          {selectedFiles.length > 0 ? 'Add More Files' : 'Choose Files'}
        </Button>
      </div>
      
      {/* Display selected files */}
      {selectedFiles.length > 0 && (
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-foreground">
              Selected files ({selectedFiles.length}/{maxFiles})
            </p>
            <button
              type="button"
              onClick={clearAllFiles}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Clear all
            </button>
          </div>
          
          <div className="grid gap-2">
            {selectedFiles.map((file, index) => (
              <div key={index} className="flex items-center justify-between bg-muted/50 border border-border p-3 rounded-lg hover:bg-muted/70 transition-colors">
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  {/* File Icon */}
                  <div className="shrink-0">
                    {getFileIcon(file.type)}
                  </div>
                  
                  {/* File Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {file.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                
                {/* Remove Button */}
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="shrink-0 p-1 text-muted-foreground hover:text-red-500 hover:bg-red-50 rounded-md transition-colors ml-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}