export default function ContentTabLink({ content, onChange, onDelete=null }) {
    const {text, href} = content;

    return (
        <div className="bg-white rounded-md shadow-lg border border-slate-300 duration-150 py-4 px-3 my-3 relative">
            {onDelete ? <i className="fa-solid fa-trash text-slate-300 hover:text-slate-700 duration-100 text-lg absolute top-4 right-2" onClick={onDelete}></i> : null}
            <div className="form-control w-full">
                <label className="pt-0">
                    <span className="label-text text-slate-500">Text</span>
                </label>
                <input 
                    type="text"
                    name="text"
                    placeholder="Heading text" 
                    className="input input-sm border border-neutral w-full" 
                    defaultValue={text}
                    onChange={e => onChange(e, "text")}/>
            </div>
            <div className="form-control w-full">
                <label className="mt-2">
                    <span className="label-text text-slate-500">Link</span>
                </label>
                <input 
                    type="text" 
                    name="link"
                    placeholder="Heading link" 
                    className="input input-sm border border-neutral w-full" 
                    defaultValue={href}
                    onChange={e => onChange(e, "link")}/>
            </div>
        </div>
    )
}