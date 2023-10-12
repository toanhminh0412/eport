export default function ContentTabBtn({ content, onChange, onDelete=null }) {
    const {text, href, color} = content;

    return (
        <div className="bg-white rounded-md shadow-lg border border-slate-300 duration-150 py-4 px-3 my-3 relative">
            {onDelete ? <i className="fa-solid fa-trash text-slate-300 hover:text-slate-700 duration-100 text-lg absolute top-4 right-2" onClick={onDelete}></i> : null}
            {/* Text */}
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
                    onChange={onChange}/>
            </div>

            {/* Link */}
            <div className="form-control w-full mt-2">
                <label>
                    <span className="label-text text-slate-500">Link</span>
                </label>
                <input 
                    type="text" 
                    name="link"
                    placeholder="Heading link" 
                    className="input input-sm border border-neutral w-full" 
                    defaultValue={href}
                    onChange={onChange}/>
            </div>

            {/* Color */}
            <div className="label-text text-slate-500 mt-2">Color</div>
            <div className="flex flex-row flex-wrap mt-1 gap-2">
                <div className={`w-8 h-8 rounded-full hover:border-2 hover:border-black bg-primary ${color === 'primary' ? 'border-2 border-black' : ''}`} data-color="primary" onClick={onChange}></div>
                <div className={`w-8 h-8 rounded-full hover:border-2 hover:border-black bg-secondary ${color === 'secondary' ? 'border-2 border-black' : ''}`} data-color="secondary" onClick={onChange}></div>
                <div className={`w-8 h-8 rounded-full hover:border-2 hover:border-black bg-success ${color === 'success' ? 'border-2 border-black' : ''}`} data-color="success" onClick={onChange}></div>
                <div className={`w-8 h-8 rounded-full hover:border-2 hover:border-black bg-accent ${color === 'accent' ? 'border-2 border-black' : ''}`} data-color="accent" onClick={onChange}></div>
                <div className={`w-8 h-8 rounded-full hover:border-2 hover:border-black bg-error ${color === 'error' ? 'border-2 border-black' : ''}`} data-color="error" onClick={onChange}></div>
                <div className={`w-8 h-8 rounded-full hover:border-2 hover:border-black bg-warning ${color === 'warning' ? 'border-2 border-black' : ''}`} data-color="warning" onClick={onChange}></div>
                <div className={`w-8 h-8 rounded-full hover:border-2 hover:border-black bg-orange-500 ${color === 'orange' ? 'border-2 border-black' : ''}`} data-color="orange" onClick={onChange}></div>
                <div className={`w-8 h-8 rounded-full hover:border-2 hover:border-black bg-info ${color === 'info' ? 'border-2 border-black' : ''}`} data-color="info" onClick={onChange}></div>
                <div className={`w-8 h-8 rounded-full hover:border-2 hover:border-white bg-neutral ${color === 'neutral' ? 'border-2 border-white' : ''}`} data-color="neutral" onClick={onChange}></div>
            </div>
        </div>
    )
}