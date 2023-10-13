export default function ContentTabBadge({ content, onChange, onDelete=null }) {
    const {text, color} = content;

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
                    value={text}
                    onChange={onChange}/>
            </div>

            {/* Color */}
            {/* Archie: Currently need to render one by one instead of using map because tailwind doesn't display background color dynamically correctly */}
            <div className="label-text text-slate-500 mt-2">Color</div>
            <div className="flex flex-row flex-wrap mt-1 gap-2">
                <div className={`w-8 h-8 rounded-full hover:border-2 hover:border-black bg-green-700 ${color === 'green' ? 'border-2 border-black' : ''}`} data-color="green" onClick={onChange}></div>
                <div className={`w-8 h-8 rounded-full hover:border-2 hover:border-black bg-blue-700 ${color === 'blue' ? 'border-2 border-black' : ''}`} data-color="blue" onClick={onChange}></div>
                <div className={`w-8 h-8 rounded-full hover:border-2 hover:border-black bg-red-700 ${color === 'red' ? 'border-2 border-black' : ''}`} data-color="red" onClick={onChange}></div>
                <div className={`w-8 h-8 rounded-full hover:border-2 hover:border-black bg-yellow-700 ${color === 'yellow' ? 'border-2 border-black' : ''}`} data-color="yellow" onClick={onChange}></div>
                <div className={`w-8 h-8 rounded-full hover:border-2 hover:border-black bg-purple-700 ${color === 'purple' ? 'border-2 border-black' : ''}`} data-color="purple" onClick={onChange}></div>
                <div className={`w-8 h-8 rounded-full hover:border-2 hover:border-black bg-pink-700 ${color === 'pink' ? 'border-2 border-black' : ''}`} data-color="pink" onClick={onChange}></div>
                <div className={`w-8 h-8 rounded-full hover:border-2 hover:border-slate-400 bg-neutral ${color === 'neutral' ? 'border-2 border-slate-400' : ''}`} data-color="neutral" onClick={onChange}></div>
                <div className={`w-8 h-8 rounded-full hover:border-2 hover:border-black bg-slate-100 ${color === 'slate' ? 'border-2 border-black' : ''}`} data-color="slate" onClick={onChange}></div>
            </div>
        </div>
    )
}