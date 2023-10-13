export default function ContentTabRating({ content, onChange }) {
    return (
        <div className="form-control w-full my-2">
            <select className="select border border-neutral w-full max-w-xs" onChange={onChange} value={content}>
                {[...Array(5)].map((e, i) =>
                    <option key={i}>{i+1}</option>
                )}
            </select>
        </div>
    )
}