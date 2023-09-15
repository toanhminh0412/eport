// Next imports
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

// Local imports
import { db } from '../../../../public/libs/firebase';
import { getUserFromToken } from '@/helpers/authentication';

// 3rd party imports
import { addDoc, collection } from 'firebase/firestore';

// Create a new template for current user
export async function GET(request) {
    // Get current user id
    const cookieStore = cookies();
    const userTokenCookie = cookieStore.get('eport-token');

    // Unauthenticated users can't visit this route
    if (!userTokenCookie) {
        redirect('/login');
    }

    const userToken = userTokenCookie.value;
    const user = getUserFromToken(userToken);

    // Get template selected
    const { searchParams } = new URL(request.url);
    const selectedTemplate = searchParams.get('selectedTemplate');
    
    // Create the new template in Firestore
    await addDoc(collection(db, "sites"), {
        owner: user.uid,
        selectedTemplate: parseInt(selectedTemplate),
        sections: [
            {
                id: 0,
                profilePic: "https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/users%2FciAeL8lbbMDaFbZadkGRI%2Fimages%2FprofilePic.jpg?alt=media&token=360a0dbc-e6ae-4b30-8ce9-05562a109409",
                fullName: "Eport Website",
                job: "Portfolio Builder",
                link1: ["Download CV", "#"],
                link2: ["Download CV", "#"]
            },
            {
                id: 1,
                heading: "About me",
                hidden: false,
                bio: "This is a simple bio with concrete facts that goes a long way. Remember that your About Me section serves as a first impression for many people who encounter your onlne presence. It should leave a memorable and positive impression while giving readers a glimpse into your personality, values, and professional background. To edit this section, go to Edit Site and find About Me section.",
                extraInfo: [
                    {key: "Name", value: "Eport Website"},
                    {key: "Support email", value: "support@eport.site"},
                    {key: "Since", value: "2023"},
                    {key: "Produced by", value: "Archie To & Hoang Nguyen"},
                    {key: "Basic plan", value: "Free"},
                    {key: "Premium plan", value: "2.49 CAD / month with 15 days of free trial"}
                ]
            },
            {
                id: 2,
                heading: "Skills",
                hidden: false,
                skills: [
                    {key: "Cheap Price", value: 100},
                    {key: "Professional", value: 100},
                    {key: "Impressive", value: 100},
                    {key: "Secure", value: 100},
                    {key: "Responsive", value: 100},
                    {key: "Design", value: 100},
                ]
            },
            {
                id: 3,
                heading: "Experience",
                hidden: false,
                experiences: [
                    {
                        jobTitle: 'Portfolio Builder',
                        company: 'Eport Website',
                        startYear: 2023,
                        endYear: 0,
                        description: 'Remember that your Experience section should tell a compelling story of your career progression and accomplishments. It should clarify to potential employers why you are a strong candidate for the job that you are seeking. Be honest, concise, and specific in your description, and focus on how your past experiences have prepared you for future success. To edit this section, go to Edit Site and find Experience section.'
                    },
                    {
                        jobTitle: 'Portfolio Builder',
                        company: 'Eport Website',
                        startYear: 2023,
                        endYear: 0,
                        description: 'Remember that your Experience section should tell a compelling story of your career progression and accomplishments. It should clarify to potential employers why you are a strong candidate for the job that you are seeking. Be honest, concise, and specific in your description, and focus on how your past experiences have prepared you for future success. To edit this section, go to Edit Site and find Experience section.'
                    },
                    {
                        jobTitle: 'Portfolio Builder',
                        company: 'Eport Website',
                        startYear: 2023,
                        endYear: 0,
                        description: 'Remember that your Experience section should tell a compelling story of your career progression and accomplishments. It should clarify to potential employers why you are a strong candidate for the job that you are seeking. Be honest, concise, and specific in your description, and focus on how your past experiences have prepared you for future success. To edit this section, go to Edit Site and find Experience section.'
                    }
                ]
            },
            {
                id: 4,
                heading: "Services",
                hidden: false,
                services: [
                    {
                        icon: 'fa-solid fa-laptop',
                        title: 'Portfolio Design',
                        description: 'Remember that the goal of your Services section is to inform potential clients about what you offer, build trust, and persuade them to take action. Be clear, concise, and persuasive in your descriptions, and provide easy-to-follow steps for visitors to engage with your services. To edit this section, go to Edit Site and find Services section.'
                    },
                    {
                        icon: 'fa-solid fa-laptop',
                        title: 'Portfolio Design',
                        description: 'Remember that the goal of your Services section is to inform potential clients about what you offer, build trust, and persuade them to take action. Be clear, concise, and persuasive in your descriptions, and provide easy-to-follow steps for visitors to engage with your services. To edit this section, go to Edit Site and find Services section.'
                    },
                    {
                        icon: 'fa-solid fa-laptop',
                        title: 'Portfolio Design',
                        description: 'Remember that the goal of your Services section is to inform potential clients about what you offer, build trust, and persuade them to take action. Be clear, concise, and persuasive in your descriptions, and provide easy-to-follow steps for visitors to engage with your services. To edit this section, go to Edit Site and find Services section.'
                    },
                    {
                        icon: 'fa-solid fa-laptop',
                        title: 'Portfolio Design',
                        description: 'Remember that the goal of your Services section is to inform potential clients about what you offer, build trust, and persuade them to take action. Be clear, concise, and persuasive in your descriptions, and provide easy-to-follow steps for visitors to engage with your services. To edit this section, go to Edit Site and find Services section.'
                    }
                ]
            },
            {
                id: 5,
                heading: "Projects",
                hidden: false,
                projects: [
                    {
                        images: ['https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fportfolio-new-1.jpg?alt=media&token=ede526bb-b5e2-4648-a8ab-b683e181b46a', 'https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fportfolio-new-4.jpg?alt=media&token=7f8dbb12-04f4-45db-9a17-9e175c9bf33e', 'https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fportfolio-new-2.jpg?alt=media&token=bf0a6327-f60a-492d-bf4c-60304fb13bb5', 'https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fportfolio-new-3.jpg?alt=media&token=193fbd36-9f41-4441-b515-86353e1b5289'],
                        title: 'Eport Website',
                        description: 'The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging. To edit this section, go to Edit Site and find Projects section.',
                        tags: ['Development', 'Website', 'Portfolio']
                    },
                    {
                        images: ['https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fportfolio-new-2.jpg?alt=media&token=bf0a6327-f60a-492d-bf4c-60304fb13bb5', 'https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fportfolio-new-1.jpg?alt=media&token=ede526bb-b5e2-4648-a8ab-b683e181b46a', 'https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fportfolio-new-3.jpg?alt=media&token=193fbd36-9f41-4441-b515-86353e1b5289', 'https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fportfolio-new-4.jpg?alt=media&token=7f8dbb12-04f4-45db-9a17-9e175c9bf33e'],
                        title: 'Eport Website',
                        description: 'The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging. To edit this section, go to Edit Site and find Projects section.',
                        tags: ['Development', 'Mobile design', 'Portfolio']
                    }
                ]
            },
            {
                id: 6,
                heading: "Testimonials",
                hidden: false,
                testimonials: [
                    {
                        name: 'Eport Website',
                        job: 'Portfolio Builder',
                        content: 'The Testimonials section serves as a social proof and validation of your work or services. It can greatly influence potential clients or customers in their decision-making process. Make sure the testimonials you feature are genuine, compelling, and relevant to your target audience. To edit this section, go to Edit Site and find Testimonials section.'
                    },
                    {
                        name: 'Eport Website',
                        job: 'Portfolio Builder',
                        content: 'The Testimonials section serves as a social proof and validation of your work or services. It can greatly influence potential clients or customers in their decision-making process. Make sure the testimonials you feature are genuine, compelling, and relevant to your target audience. To edit this section, go to Edit Site and find Testimonials section.'
                    },
                    {
                        name: 'Eport Website',
                        job: 'Portfolio Builder',
                        content: 'The Testimonials section serves as a social proof and validation of your work or services. It can greatly influence potential clients or customers in their decision-making process. Make sure the testimonials you feature are genuine, compelling, and relevant to your target audience. To edit this section, go to Edit Site and find Testimonials section.'
                    }
                ]
            },
            {
                id: 8,
                heading: "References",
                hidden: false,
                references: [
                    {
                        name: 'Eport Support',
                        relationship: 'Supporter',
                        phone: 123456789,
                        email: 'support@eport.site',
                        linkedin: 'https://linkedin.com',
                        facebook: 'https://www.facebook.com/eportsite'
                    }
                ]
            },
            {
                id: 7,
                heading: "Get in touch",
                hidden: false,
                socials: [
                    {key: "gmail", value: "support@eport.site"},
                    {key: "facebook", value: "https://www.facebook.com/eportsite"},
                    {key: "instagram", value: "https://instagram.com"},
                    {key: "linkedin", value: "https://linkedin.com"},
                ]
            },
        ]
    })

    redirect('/')
}