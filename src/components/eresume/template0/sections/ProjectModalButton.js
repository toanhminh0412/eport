"use client";

export default function ProjectModalButton({projIndex}) {
    return (
        <button 
            className="btn bg-blue-500 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-900 dark:border-blue-700 duration-200 text-white mt-6"
            onClick={() => {document.getElementById(`project-${projIndex}`).showModal()}}>See more</button>
    )
}