'use client';
import { useState } from "react";

import Image from "next/image"

export default function FilesModal({files, selectedImageId, activeImages, uploadFiles, deleteFiles}) {
    const [newImageIndex, setNewImageIndex] = useState(-1);
    const [newImageSrc, setNewImageSrc] = useState('');
    
    const [manageMode, setManageMode] = useState(false);
    const [selectedImagesSrc, setSelectedImagesSrc] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [deleting, setDeleting] = useState(false);

    const insertImage = () => {
        document.getElementById(selectedImageId).srcset = '';
        document.getElementById(selectedImageId).src = newImageSrc;
    }

    // Select/deselect images fo deletion
    const selectImagesForDeletion = imageURL => {
        setSelectedImagesSrc(prevImagesSrc => {
            let imageFounded = false;
            let newImagesSrc = [];
            prevImagesSrc.forEach(src => {
                if (src !== imageURL) {
                    newImagesSrc.push(src);
                } else {
                    imageFounded = true;
                }
            })
            if (!imageFounded) {
                newImagesSrc.push(imageURL);
            }
            return newImagesSrc;
        })
    }

    // Upload new files for users
    const localUploadFiles = e => {
        setUploading(true);
        let newFiles = [];
        for (const [key, value] of Object.entries(e.target.files)) {
            if (key !== "length") {
                newFiles.push(value);
            }
        }
        uploadFiles(newFiles, () => {setUploading(false);});
    }

    // Delete files from users' storages
    const localDeleteFiles = e => {
        e.preventDefault();
        setDeleting(true);
        console.log('Deleting files');
        deleteFiles(selectedImagesSrc, () => {setDeleting(false); setSelectedImagesSrc([]);});
    }

    if (manageMode) {
        return (
            <dialog id="filesModal" className="modal">
                <form method="dialog" className="modal-box max-w-lg overflow-scroll">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">Your files</h3>
                    <p className="py-4">Select files and click "Delete files" to delete, click "Choose files" to upload new files, click "Back" to insert a file. <br/>You have <strong>100MB</strong> max for file uploads</p>
                    <div className="flex flex-row flex-wrap gap-4">
                        {files.map((fileURL, index) => activeImages.includes(fileURL) ? null : (
                        <div key={index} className="relative w-40 h-40">
                            <Image 
                            src={fileURL} 
                            alt="Uploaded image" 
                            fill 
                            style={{objectFit: "contain"}}
                            className={`transition-opacity hover:opacity-50 ${selectedImagesSrc.includes(fileURL) ? 'opacity-50': ''}`}
                            onClick={() => {selectImagesForDeletion(fileURL)}}/>
                        </div>
                        ))}
                        {uploading ? (<span className="loading loading-spinner loading-lg"></span>) : null}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Upload new files:</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered file-input-sm file-input-primary w-full max-w-xs" multiple onChange={localUploadFiles} disabled={uploading}/>
                    </div>
                    <div className="modal-action">
                        <button className="btn" onClick={e => {e.preventDefault(); setManageMode(false);}}>Back</button>
                        <button className="btn btn-error" disabled={selectedImagesSrc.length === 0 || deleting} onClick={localDeleteFiles}>{deleting ? `Deleting ${selectedImagesSrc.length} files...` : `Delete files (${selectedImagesSrc.length})`}</button>
                    </div>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        )
    }
    
    return (
        <dialog id="filesModal" className="modal">
            <form method="dialog" className="modal-box max-w-lg overflow-scroll">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <h3 className="font-bold text-lg">Your files</h3>
                <p className="py-4">Select a new file to replace the current file!</p>
                <div className="flex flex-row flex-wrap gap-4">
                    {files.map((fileURL, index) => (
                    <div key={index} className="relative w-40 h-40">
                        <Image 
                        src={fileURL} 
                        alt="Uploaded image" 
                        fill 
                        style={{objectFit: "contain"}}
                        className={`transition-opacity hover:opacity-50 ${index === newImageIndex ? 'opacity-50': ''}`}
                        onClick={() => {setNewImageIndex(prevIndex => prevIndex === index ? -1 : index); setNewImageSrc(prevURL => fileURL === prevURL ? '' : fileURL);}}/>
                    </div>
                    ))}
                </div>
                <div className="modal-action">
                    <button className="btn btn-neutral" onClick={e => {e.preventDefault(); setManageMode(true);}}>Manage files</button>
                    <button className="btn btn-primary" disabled={newImageIndex === -1} onClick={insertImage}>Insert</button>
                </div>
            </form>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}