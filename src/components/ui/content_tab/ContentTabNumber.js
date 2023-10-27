export default function ContentTabNumber({ content, onChange, min, max }) {
    return (
        <div className="form-control w-full my-2">
            {/* <select className="select border border-neutral w-full max-w-xs" onChange={onChange} value={content}>
                {[...Array(5)].map((e, i) =>
                    <option key={i}>{i+1}</option>
                )}
            </select> */}
            <input 
                type="number" 
                value={content} 
                onChange={onChange} 
                className="input border border-neutral w-full"
                min={min}
                max={max}></input>
        </div>
    )
}