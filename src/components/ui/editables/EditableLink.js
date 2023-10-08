// Next imports
import Link from "next/link"


export default function EditableLink({ content, position="bottom-left", className }) {
    const { text, href } = content;
    
    return (
        <div className={className}>
            <div className="box-border border-4 border-dotted border-transparent hover:border-blue-700 duration-200">{text}</div>
        </div>
    )
}