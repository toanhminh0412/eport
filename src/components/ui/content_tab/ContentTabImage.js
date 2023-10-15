"use client";

// Next, React imports
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

// Third party imports
import Cropper from "react-easy-crop";

export default function ContentTabImage({ content, onChange, defaultImage, croppable=false, cropper, onCropAreaChange }) {
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(content);

    // For croppable images
    const [crop, setCrop] = useState(cropper ? cropper.crop : null)
    const [zoom, setZoom] = useState(cropper ? cropper.zoom : null)

    // Preview image
    useEffect(() => {
        let fileReader = false;
        if (imageFile) {
          fileReader = new FileReader();
          fileReader.onload = (e) => {
            const { result } = e.target;
            if (result) {
              setImagePreview(result);
              onChange(result);
            }
          }
          fileReader.readAsDataURL(imageFile);
        }
        return () => {
            if (fileReader && fileReader.readyState === 1) {
                fileReader.abort();
            }
        }
    }, [imageFile]);

    // Upload new image for review or change
    const uploadImage = e => {
        if (e.target.files.length > 0) {
            setImageFile(e.target.files[0]);
        }
    }

    // Use default image
    const useDefaultImage = () => {
        setImageFile(null);
        setImagePreview(defaultImage);
        onChange(defaultImage);
    }

    if (croppable) {
        return (
            <div>
                {/* <Image 
                src={imagePreview} 
                alt="Profile picture" 
                width={250} 
                height={250} 
                style={{objectFit: "contain"}}
                className="mx-auto border border-slate-300"/> */}
                <div className="relative w-full h-[300px] my-2">
                    <Cropper
                        image={imagePreview}
                        crop={crop}
                        zoom={zoom}
                        aspect={3/4}
                        onCropChange={setCrop}
                        onCropAreaChange={croppedArea => onCropAreaChange(croppedArea, {crop: crop, zoom: zoom})}
                        onZoomChange={setZoom}/>
                </div>
                <label className="flex flex-row justify-between">Upload file <span>or</span> <span className="link" onClick={useDefaultImage}>Use default image</span></label>
                <input type="file" accept="image/*" className="mt-1 file-input border border-black w-full" onChange={e => {uploadImage(e)}}/>
            </div>
        )
    }

    return (
        <div>
            <Image 
            src={imagePreview} 
            alt="Profile picture" 
            width={250} 
            height={250} 
            style={{objectFit: "contain"}}
            className="mx-auto border border-slate-300"/>
            <label className="flex flex-row justify-between">Upload file <span>or</span> <span className="link" onClick={useDefaultImage}>Use default image</span></label>
            <input type="file" accept="image/*" className="mt-1 file-input border border-black w-full" onChange={e => {uploadImage(e)}}/>
        </div>
    )
}