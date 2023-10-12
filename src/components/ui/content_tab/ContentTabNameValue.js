export default function ContentTabNameValue({ nameRows=1, valueRows=1, content, onChange, onDelete=null }) {
    const {name, value} = content;

    return (
        <div className="bg-white rounded-md shadow-lg border border-slate-300 duration-150 py-4 px-3 my-3 relative">
            {onDelete ? <i className="fa-solid fa-trash text-slate-300 hover:text-slate-700 duration-100 text-lg absolute top-4 right-2" onClick={onDelete}></i> : null}
            <div className="form-control w-full">
                <label className="pt-0">
                    <span className="label-text text-slate-500">Name</span>
                </label>
                <textarea 
                    name="name"
                    placeholder="Type some text" 
                    rows={nameRows}
                    className="textarea border border-neutral w-full" 
                    defaultValue={name}
                    onChange={onChange}/>
            </div>
            <div className="form-control w-full">
                <label className="mt-2">
                    <span className="label-text text-slate-500">Value</span>
                </label>
                <textarea 
                    name="value"
                    placeholder="Type some text" 
                    rows={valueRows}
                    className="textarea border border-neutral w-full" 
                    defaultValue={value}
                    onChange={onChange}/>
            </div>
        </div>
    )
}