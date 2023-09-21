"use client";

// Next, React imports
import Image from "next/image";
import { useState, useEffect } from "react";

// Provide an image file input that shows a preview of the image
export default function ImageUploadPreviewer({imageRef=null, demo=false, label, defaultImageSrc}) {
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    
    // Preview image
    useEffect(() => {
        let fileReader = false;
        if (imageFile) {
          fileReader = new FileReader();
          fileReader.onload = (e) => {
            const { result } = e.target;
            if (result) {
              setImagePreview(result);
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
        setImageFile(e.target.files[0]);
    }

    return (
        <div>
            <div>{label}</div>
            <Image 
            src={imagePreview ? imagePreview : defaultImageSrc} 
            alt="Profile picture" 
            width={250} 
            height={250} 
            style={{objectFit: "contain"}}/>
            {!demo ?
                <input ref={imageRef} type="file" accept="image/*" className="file-input file-input-bordered file-input-sm file-input-primary w-full max-w-xs" onChange={uploadImage}/>
            :
                <input disabled ref={el => (profileRef.current[6] = el)} type="file" accept="image/*" className="file-input file-input-bordered file-input-sm file-input-primary w-full max-w-xs" onChange={uploadImage}/>
            }
            <label className="label text-xs">
                {!demo ?
                    <span><strong>Hint: </strong>Upload a new picture will <strong>immediately</strong> replace the current picture</span>
                :
                    <span><strong>Hint: </strong>Please <strong>login to</strong> upload image!</span>
                }
            </label>
        </div>
    )
}