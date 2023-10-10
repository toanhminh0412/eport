// Next imports
import { useContext } from "react";

// Local imports
import { DeleteSectionContext, SectionsContext, ActiveContentContext } from "../../site";

export function DeleteSectionButton() {
    const { sections, _setSections } = useContext(SectionsContext);
    const { activeSectionInd, _setActiveSectionInd } = useContext(ActiveContentContext);
    const { deleteSection } = useContext(DeleteSectionContext);

    return (
        <div className="my-5">
            <div className="text-center">
                <button className="btn bg-blue-700 border-none hover:bg-blue-900 text-white" onClick={()=>document.getElementById('delete_modal').showModal()}>Delete Section</button>
            </div>
            <dialog id="delete_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Delete Section!</h3>
                    <p className="py-4">Are you sure you want to delete this {sections[activeSectionInd].sectionType}?</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <button className="btn mr-4 bg-blue-700 hover:bg-blue-900 duration-200 text-white" onClick={() => deleteSection(sections[activeSectionInd])}>Yes</button>
                            <button className="btn mr-[-50px] bg-red-700 hover:bg-red-900 duration-200 text-white">No</button>
                        </form>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}