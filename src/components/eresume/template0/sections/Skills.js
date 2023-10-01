export default function Skills({content}) {
    const skills = content.skills;
    
    return (
        <section className="prose max-w-none w-11/12 mx-auto shadow-md rounded-lg p-8 my-4 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 dark:text-slate-200">
            <h1 className="dark:text-white">{content.heading}</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-4">
                {skills.map((skill, index) => (
                <div key={index}>
                    <div className="flex flex-row justify-between"><span>{skill.key}</span><span className="ms-auto">{skill.value}%</span></div>
                    <progress className="progress progress-primary w-full" value={skill.value} max="100"></progress>
                </div>
                ))}
            </div>
        </section>
    )
}