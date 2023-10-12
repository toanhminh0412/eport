export default function ContentTabBtn({ content, onChange, onDelete=null }) {
    const {text, href, color} = content;

    return (
        <div className="bg-white rounded-md shadow-lg border border-slate-300 duration-150 py-4 px-3 my-3 relative">
            {onDelete ? <i className="fa-solid fa-trash text-slate-300 hover:text-slate-700 duration-100 text-lg absolute top-4 right-2" onClick={onDelete}></i> : null}
            {/* Text */}
            {text !== null ?
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
            : null}

            {/* Link */}
            {href !== null ?
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
            : null}

            {/* Color */}
            <div className="label-text text-slate-500 mt-2">Color</div>
            <div className="flex flex-row flex-wrap mt-1 gap-2">
                <div className={`w-8 h-8 rounded-full hover:border-2 hover:border-black bg-blue-500 ${color === 'blue' ? 'border-2 border-black' : ''}`} data-color="blue" onClick={onChange}></div>
                <div className={`w-8 h-8 rounded-full hover:border-2 hover:border-black bg-red-500 ${color === 'red' ? 'border-2 border-black' : ''}`} data-color="red" onClick={onChange}></div>
                <div className={`w-8 h-8 rounded-full hover:border-2 hover:border-black bg-neutral-500 ${color === 'neutral' ? 'border-2 border-black' : ''}`} data-color="neutral" onClick={onChange}></div>
                <div className={`w-8 h-8 rounded-full hover:border-2 hover:border-black bg-orange-500 ${color === 'orange' ? 'border-2 border-black' : ''}`} data-color="orange" onClick={onChange}></div>
                <div className={`w-8 h-8 rounded-full hover:border-2 hover:border-black bg-yellow-500 ${color === 'yellow' ? 'border-2 border-black' : ''}`} data-color="yellow" onClick={onChange}></div>
                <div className={`w-8 h-8 rounded-full hover:border-2 hover:border-black bg-green-500 ${color === 'green' ? 'border-2 border-black' : ''}`} data-color="green" onClick={onChange}></div>
                <div className={`w-8 h-8 rounded-full hover:border-2 hover:border-black bg-cyan-500 ${color === 'cyan' ? 'border-2 border-black' : ''}`} data-color="cyan" onClick={onChange}></div>
                <div className={`w-8 h-8 rounded-full hover:border-2 hover:border-black bg-purple-500 ${color === 'purple' ? 'border-2 border-black' : ''}`} data-color="purple" onClick={onChange}></div>
                <div className={`w-8 h-8 rounded-full hover:border-2 hover:border-black bg-pink-500 ${color === 'pink' ? 'border-2 border-black' : ''}`} data-color="pink" onClick={onChange}></div>
            </div>
        </div>
    )
}