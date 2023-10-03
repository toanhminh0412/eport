export default function Page({searchParams}) {
    const projectId = searchParams.projectId;
    
    return (
        <main className="prose">
            <div className="bg-slate-100 w-screen h-full pt-40 lg:pt-24 pb-32 dark:bg-slate-700">
                <h1>Freelancer project id {projectId}</h1>
            </div>
        </main>
    )
}