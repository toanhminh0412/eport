export default function ControlNav({saveSite, savingState}) {
    return (
        <div className="navbar bg-neutral text-neutral-content py-3 fixed top-16 z-40">
            <div className="navbar-start">
                {savingState ? 
                (<button className="btn">
                    <span className="loading loading-spinner"></span>
                    Saving
                </button>)
                :
                (<button className="btn" onClick={saveSite}>Save site</button>)}
                <button className="btn ms-2">Publish site</button>
            </div>
            <div className="navbar-center hidden lg:flex"></div>
            <div className="navbar-end"></div>
        </div>
    )
}