export default function ContentTabText({ rows=1, content, onChange, onDelete=null }) {
    return (
        <div className="form-control w-full flex flex-row gap-x-2 py-2">
            <textarea 
                placeholder="Type some text" 
                rows={rows}
                className="textarea border border-neutral w-full" 
                value={content}
                onChange={onChange}/>
            {onDelete ? <i className="fa-solid fa-trash text-slate-300 hover:text-slate-700 duration-100 text-lg my-auto" onClick={onDelete}></i> : null}
        </div>
    )
}