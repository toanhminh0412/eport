// Local imports
import TextEditor from "../TextEditor";

export default function ContentTabFormattedText({ content, onChange, onDelete=null }) {
    return (
        <div className="form-control w-full flex flex-row gap-x-2 py-2">
            <TextEditor 
                onChange={onChange}
                placeholder="Your bio"
                defaultValue={content}/>
            {onDelete ? <i className="fa-solid fa-trash text-slate-300 hover:text-slate-700 duration-100 text-lg absolute top-4 right-2" onClick={onDelete}></i> : null}
        </div>
    )
}