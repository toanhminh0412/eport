// Local imports
import PublishedTemplate0 from "@/components/freelancer/template0/published";
import PublishedTemplate1 from "@/components/freelancer/template1/published";
import { Page404 } from "@/components/pages/status_pages";

// Third party imports
import { db } from "../../../../public/libs/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

// Generate <head> metadata for this page
export async function generateMetadata({ params }) {
    // read route params
    const domain = params.domain;
   
    // fetch data
    const project = await getProject(domain);
    if (!project) {
        return {
            title: "Not found",
            description: "This page is not found",
        }
    }

    let fullName = '';
    let description = '';
    let openGraphImage = '';

    for (let i = 0; i < project.sections.length; i++) {
        if (project.sections[i].sectionType === 'header') {
            const section = project.sections[i];
            fullName = section.heading;
            description = section.description;
            openGraphImage = section.avatar.src;
        }
    }
   
    // optionally access and extend (rather than replace) parent metadata
   
    return {
      title: `${fullName} - Freelancer`,
      description: description,
      alternates: {
        canonical: `https://eport.site/freelancer/${domain}`,
      },
      openGraph: {
        images: openGraphImage,
      },
    }
}

// Get freelancer published site
const getProject = async (domain) => {
    const projectQuery = query(collection(db, 'published_freelancer'), where ('domain', '==', domain));
    const projectQuerySnapshot = await getDocs(projectQuery)

    if (projectQuerySnapshot.docs.length > 0) {
        return projectQuerySnapshot.docs[0].data();
    } else {
        return null;
    }
}

export default async function PublishedFreelancer({params}) {
    const project = await getProject(params.domain);

    if (project) {
        if (project.templateId === 0) {
            return <PublishedTemplate0 project={project}/>
        } else if (project.templateId === 1) {
            return <PublishedTemplate1 project={project}/>
        }
        
    } else {
        return <Page404 message="Sorry! This project doesn't exist."/>
    }
}
