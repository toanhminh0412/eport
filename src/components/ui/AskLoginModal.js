export default function AskLoginModal() {
    // Prompt message that ask user to login
    return (
        <dialog id="ask_login_modal" className="modal">
            <form method="dialog" className="modal-box max-w-xl">
                <div className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => window.ask_login_modal.close()}>✕</div>
                <h3>Please log in to publish your site, upload images or CV, and add more section items!</h3>
            </form>
            <form method="dialog" className="modal-backdrop">
                    <button>close</button>
            </form>
        </dialog>
    )
}