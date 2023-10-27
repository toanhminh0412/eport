export function DeleteSectionButton() {
    return (
        <div className="my-5">
            <div className="text-left ml-3">
                <button className="btn btn-sm bg-blue-700 border-none hover:bg-blue-900 text-white text-xs" onClick={()=>document.getElementById('delete_modal').showModal()}>Delete Section</button>
            </div>
        </div>
    )
}