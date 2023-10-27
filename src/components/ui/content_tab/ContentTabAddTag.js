export default function ContentTabAddTag({ portfolio, addTag, removeTag }) {
    return (
        <div>
            <div className="join">
                <input 
                className="input border-black join-item w-32 lg:w-56" 
                placeholder="Enter a tag"
                id={`input-${portfolio.id}`}
                />
                <button className="btn btn-primary join-item dark:border-blue-400" onClick={() => {addTag(document.getElementById(`input-${portfolio.id}`).value); document.getElementById(`input-${portfolio.id}`).value = ''}}>Add tag</button>
            </div>
            <div className="flex flex-row flex-wrap gap-3 mt-3">
                {portfolio.tags.map((tag, tagInd) => (
                <div key={`${tag}-${tagInd}`} className="project-tag py-1 px-2 rounded-xl bg-slate-100 dark:bg-slate-500 dark:text-white shadow-lg cursor-default">
                    {tag}
                    <span className="ms-2 text-slate-700 dark:text-slate-200 hover:text-black dark:hover:text-white hover:font-semibold" onClick={() => removeTag(tagInd)}>✕</span>
                </div>  
                ))}
            </div>
        </div>
    )
}