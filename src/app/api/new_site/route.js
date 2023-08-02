// import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import { db } from '../../../../public/libs/firebase';

import { addDoc, collection } from 'firebase/firestore';

// Create a new template for current user
export async function GET(request) {
    // Get current user id
    const cookieStore = cookies();
    const uid = cookieStore.get('eport-uid');

    // Unauthenticated users can't visit this route
     if (!uid) {
        redirect('/login');
    }

    // Get template selected
    const { searchParams } = new URL(request.url);
    const selectedTemplate = searchParams.get('selectedTemplate');
    
    // Create the new template in Firestore
    const siteRef = await addDoc(collection(db, "sites"), {
        owner: uid.value,
        selectedTemplate: parseInt(selectedTemplate),
        sections: [
            {
                id: 0,
                profilePic: "https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fprofile-new.jpg?alt=media&token=47be1e13-26e6-4416-afa5-205f1d5635b7",
                fullName: "John Doe",
                job: "Web Developer",
                link1: ["Download CV", "#"],
                link2: ["Download CV", "#"]
            },
            {
                id: 1,
                heading: "About me",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam convallis sapien sit amet pulvinar. Morbi a elit in velit eleifend malesuada et eget libero. Nulla suscipit congue purus, quis tristique tortor euismod ut. Sed ullamcorper magna id tristique facilisis. Fusce consequat metus vitae augue sagittis ultricies. Nullam varius posuere dapibus. Nullam luctus, sapien nec fermentum cursus, elit dolor vestibulum leo, et elementum enim neque vitae ligula. In at elit pellentesque, laoreet nibh eu, sagittis elit. Donec sit amet ultrices tortor, ut pharetra leo. Donec pretium nisi a mi sollicitudin, vitae consectetur sem rutrum.",
                extraInfo: [
                    {key: "Name", value: "John Doe"},
                    {key: "Degree", value: "Master in Computer Science"},
                    {key: "Age", value: "24"},
                    {key: "Experience", value: "3 years"},
                    {key: "Email", value: "jdoe@example.org"},
                    {key: "Hobbies", value: "Soccer, Video game"}
                ]
            },
            {
                id: 2,
                heading: "Skills",
                skills: [
                    {key: "HTML", value: 95},
                    {key: "jQuery", value: 100},
                    {key: "CSS", value: 80},
                    {key: "Bootstrap", value: 85},
                    {key: "JavaScript", value: 90},
                    {key: "React", value: 90},
                ]
            },
            {
                id: 3,
                heading: "Experience",
                experiences: [
                    {
                        jobTitle: 'Web designer',
                        company: 'Soft Company',
                        startYear: 2020,
                        endYear: 2023,
                        description: 'Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam'
                    },
                    {
                        jobTitle: 'Web designer',
                        company: 'Soft Company',
                        startYear: 2020,
                        endYear: 2023,
                        description: 'Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam'
                    },
                    {
                        jobTitle: 'Web designer',
                        company: 'Soft Company',
                        startYear: 2020,
                        endYear: 2023,
                        description: 'Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam'
                    }
                ]
            },
            {
                id: 4,
                heading: "Services",
                services: [
                    {
                        icon: 'fa-solid fa-laptop',
                        title: 'Web design',
                        description: 'Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore'
                    },
                    {
                        icon: 'fa-solid fa-laptop',
                        title: 'Web design',
                        description: 'Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore'
                    },
                    {
                        icon: 'fa-solid fa-laptop',
                        title: 'Web design',
                        description: 'Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore'
                    },
                    {
                        icon: 'fa-solid fa-laptop',
                        title: 'Web design',
                        description: 'Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore'
                    }
                ]
            },
            {
                id: 5,
                heading: "Projects",
                projects: [
                    {
                        images: ['https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fportfolio-new-1.jpg?alt=media&token=ede526bb-b5e2-4648-a8ab-b683e181b46a', 'https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fportfolio-new-4.jpg?alt=media&token=7f8dbb12-04f4-45db-9a17-9e175c9bf33e', 'https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fportfolio-new-2.jpg?alt=media&token=bf0a6327-f60a-492d-bf4c-60304fb13bb5', 'https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fportfolio-new-3.jpg?alt=media&token=193fbd36-9f41-4441-b515-86353e1b5289'],
                        title: 'Web application',
                        description: 'Donec laoreet, ligula ut ultrices rhoncus, metus leo dictum nisi, ut viverra ex odio vel mauris. Sed laoreet laoreet risus ut convallis. Donec nec facilisis augue, at rhoncus est. Aliquam eros justo, pulvinar eu tortor a, cursus auctor felis. In tincidunt mauris sollicitudin auctor pretium. Aenean auctor neque non arcu facilisis, a pulvinar turpis iaculis. Duis vel vulputate neque.',
                        tags: ['Development', 'Web design']
                    },
                    {
                        images: ['https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fportfolio-new-2.jpg?alt=media&token=bf0a6327-f60a-492d-bf4c-60304fb13bb5', 'https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fportfolio-new-1.jpg?alt=media&token=ede526bb-b5e2-4648-a8ab-b683e181b46a', 'https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fportfolio-new-3.jpg?alt=media&token=193fbd36-9f41-4441-b515-86353e1b5289', 'https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fportfolio-new-4.jpg?alt=media&token=7f8dbb12-04f4-45db-9a17-9e175c9bf33e'],
                        title: 'Mobile application',
                        description: 'Donec laoreet, ligula ut ultrices rhoncus, metus leo dictum nisi, ut viverra ex odio vel mauris. Sed laoreet laoreet risus ut convallis. Donec nec facilisis augue, at rhoncus est. Aliquam eros justo, pulvinar eu tortor a, cursus auctor felis. In tincidunt mauris sollicitudin auctor pretium. Aenean auctor neque non arcu facilisis, a pulvinar turpis iaculis. Duis vel vulputate neque.',
                        tags: ['Development', 'Mobile design']
                    }
                ]
            },
            {
                id: 6,
                heading: "Testimonials",
                testimonials: [
                    {
                        name: 'Catherine Oliver',
                        job: 'Lawyer',
                        content: 'Integer sollicitudin fringilla tellus, id viverra urna dignissim suscipit. Praesent ut leo at lectus tincidunt aliquam. Curabitur non enim sed est lacinia congue. Nunc ante ex, convallis quis metus id, euismod consectetur mi. Aliquam erat volutpat. Aenean sit amet eros eu erat imperdiet ultricies. Mauris a blandit urna.'
                    },
                    {
                        name: 'Louella Kim',
                        job: 'Marketing manager',
                        content: 'Maecenas eleifend interdum vestibulum. Aliquam commodo mattis mauris in interdum. Nam ut arcu non augue tempus ultricies. Nam non lorem vitae nunc bibendum mollis. Donec velit arcu, euismod ultrices eros a, vestibulum fringilla dui. Nam quis nibh ante. Quisque lacus tellus, mattis in lectus quis, eleifend bibendum augue.'
                    },
                    {
                        name: 'Luis Kim',
                        job: 'Plumber',
                        content: 'Donec laoreet, ligula ut ultrices rhoncus, metus leo dictum nisi, ut viverra ex odio vel mauris. Sed laoreet laoreet risus ut convallis. Donec nec facilisis augue, at rhoncus est. Aliquam eros justo, pulvinar eu tortor a, cursus auctor felis. In tincidunt mauris sollicitudin auctor pretium. Aenean auctor neque non arcu facilisis, a pulvinar turpis iaculis. Duis vel vulputate neque.'
                    }
                ]
            },
            {
                id: 7,
                heading: "Get in touch",
                socials: [
                    {key: "gmail", value: "https://gmail.com"},
                    {key: "instagram", value: "https://instagram.com"},
                    {key: "linkedin", value: "https://linkedin.com"},
                ]
            }
        ]
    })

    redirect('/')
}