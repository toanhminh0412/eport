/**
 * Params: sectionId (string)
 * Returns: section initial data (object)
 */
export function getSectionInitialData(sectionId) {
    switch (sectionId) {
        // Navigation bars
        case "navbar1":
            return {
                sectionId: "navbar1",
                sectionType: "navbar",
                navItems: [
                    {
                        id: 0,
                        text: "About me",
                        href: "#"
                    },
                    {
                        id: 1,
                        text: "Services",
                        href: "#"
                    },
                    {
                        id: 2,
                        text: "Portfolios",
                        href: "#"
                    },
                    {
                        id: 3,
                        text: "Testimonials",
                        href: "#"
                    },
                ],
            }
        
        // Headers
        case "header1":
            return {
                sectionId: "header1",
                sectionType: "header",
                avatar: "/img/freelancer-template0-aboutme1-avatar.jpg",
                backgroundImage: "/img/freelancer-template0-header1-white-bg.png",
                heading: "Best caption here",
                slogan: "Build your website really fast with Eport. No code needed!",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                socials: [
                    {
                        id: 0,
                        social: "facebook",
                        href:  "#"
                    },
                    {
                        id: 1,
                        social: "instagram",
                        href:  "#"
                    },
                    {
                        id: 2,
                        social: "twitter",
                        href:  "#"
                    }
                ],
                actionBtns: [
                    {
                        id: 0,
                        text: "Contact",
                        href: "#",
                        color: "orange"
                    }
                ]
            }

        // About me
        case "aboutme1":
            return {
                sectionId: "aboutme1",
                sectionType: "aboutme",
                avatar: "/img/freelancer-template0-aboutme1-avatar.jpg",
                status: {text: "Available for work", color: "green"},
                job: "Software Developer",
                name: "Eport Website",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                tab: [
                    {
                        id: 0,
                        tabHeading: "Basic Information",
                        tabContent: [
                            {id: 0, key: "Name", value: "Eport Website"},
                            {id: 1, key: "Jobs", value: "Website Builder"},
                            {id: 2, key: "Age", value: "22"},
                        ]
                    },
                    {
                        id: 1,
                        tabHeading: "Education",
                        tabContent: [
                            {id: 0, key: "Graduated from", value: "University of Alberta"},
                            {id: 1, key: "Major", value: "Computer Science"},
                            {id: 2, key: "GPA", value: "4.0 / 4.0"},
                        ]
                    },
                    {
                        id: 2,
                        tabHeading: "Experience",
                        tabContent: [
                            {id: 0, key: "Company", value: "Eport"},
                            {id: 1, key: "Position", value: "Fullstack Developer"},
                            {id: 2, key: "From", value: "August, 2023"},
                        ]
                    }
                ]
            }

        // Services
        case "service1":
            return {
                sectionId: "service1",
                sectionType: "service",
                heading: "Service",
                description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,purus sit amet luctus magna fringilla urna",
                services: [
                    {
                        id: 0,
                        icon: "fa-solid fa-cloud",
                        title: "Portfolio Design",
                        price: "200 CAD / month",
                        content: "Remember that the goal of your Services section is to inform potential clients about what you offer, build trust, and persuade them to take action. Be clear, concise, and persuasive in your descriptions, and provide easy-to-follow steps for visitors to engage with your services. To edit this section, go to Edit Site and find Services section."
                    },
                    {
                        id: 1,
                        icon: "fa-solid fa-cloud",
                        title: "Portfolio Design",
                        price: "200 CAD / month",
                        content: "Remember that the goal of your Services section is to inform potential clients about what you offer, build trust, and persuade them to take action. Be clear, concise, and persuasive in your descriptions, and provide easy-to-follow steps for visitors to engage with your services. To edit this section, go to Edit Site and find Services section."
                    },
                    {
                        id: 2,
                        icon: "fa-solid fa-cloud",
                        title: "Portfolio Design",
                        price: "200 CAD / month",
                        content: "Remember that the goal of your Services section is to inform potential clients about what you offer, build trust, and persuade them to take action. Be clear, concise, and persuasive in your descriptions, and provide easy-to-follow steps for visitors to engage with your services. To edit this section, go to Edit Site and find Services section."
                    },
                    {
                        id: 3,
                        icon: "fa-solid fa-cloud",
                        title: "Portfolio Design",
                        price: "200 CAD / month",
                        content: "Remember that the goal of your Services section is to inform potential clients about what you offer, build trust, and persuade them to take action. Be clear, concise, and persuasive in your descriptions, and provide easy-to-follow steps for visitors to engage with your services. To edit this section, go to Edit Site and find Services section."
                    }
                ]
            }

        // Portfolios
        case "portfolio1":
            return {
                sectionId: "portfolio1",
                sectionType: "portfolio",
                heading: "Project",
                sectionDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,purus sit amet luctus magna fringilla urna",
                portfolios: [
                    {
                        id: 0,
                        title: "Project Name",
                        description: "The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging. To edit this section, go to Edit Site and find Projects section. The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging. To edit this section, go to Edit Site and find Projects section. The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging. To edit this section, go to Edit Site and find Projects section. The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging. To edit this section, go to Edit Site and find Projects section. The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging. To edit this section, go to Edit Site and find Projects section.",
                        images: [
                            {
                                id: 0,
                                src: "/img/freelancer-template0-portfolio1-bg.jpg"
                            },
                            {
                                id: 1,
                                src: "/img/freelancer-template1-portfolio1-photo1.jpg"
                            },
                            {
                                id: 2,
                                src: "/img/header-bg.jpg"
                            }
                        ],
                        tags: ["Development", "Website", "Portfolio"],
                        actionBtns: [
                            {
                                id: 0,
                                text: "Learn more",
                                href: null,
                                color: "orange"
                            },
                            {
                                id: 1,
                                text: "See Docs",
                                href: "#",
                                color: "orange"
                            }
                        ]
                    },
                    {
                        id: 1,
                        title: "Project Name",
                        description: "The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging. To edit this section, go to Edit Site and find Projects section. The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging. To edit this section, go to Edit Site and find Projects section. The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging. To edit this section, go to Edit Site and find Projects section. The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging. To edit this section, go to Edit Site and find Projects section. The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging. To edit this section, go to Edit Site and find Projects section.",
                        images: [
                            {
                                id: 0,
                                src: "/img/freelancer-template0-portfolio1-bg.jpg"
                            },
                            {
                                id: 1,
                                src: "/img/freelancer-template1-portfolio1-photo1.jpg"
                            },
                            {
                                id: 2,
                                src: "/img/header-bg.jpg"
                            }
                        ],
                        tags: ["Development", "Website", "Portfolio"],
                        actionBtns: [
                            {
                                id: 0,
                                text: "Learn more",
                                href: null,
                                color: "orange"
                            },
                            {
                                id: 1,
                                text: "See Docs",
                                href: "#",
                                color: "orange"
                            }
                        ]
                    },
                    {
                        id: 2,
                        title: "Project Name",
                        description: "The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging. To edit this section, go to Edit Site and find Projects section. The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging. To edit this section, go to Edit Site and find Projects section. The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging. To edit this section, go to Edit Site and find Projects section. The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging. To edit this section, go to Edit Site and find Projects section. The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging. To edit this section, go to Edit Site and find Projects section.",
                        images: [
                            {
                                id: 0,
                                src: "/img/freelancer-template0-portfolio1-bg.jpg"
                            },
                            {
                                id: 1,
                                src: "/img/freelancer-template1-portfolio1-photo1.jpg"
                            },
                            {
                                id: 2,
                                src: "/img/header-bg.jpg"
                            }
                        ],
                        tags: ["Development", "Website", "Portfolio"],
                        actionBtns: [
                            {
                                id: 0,
                                text: "Learn more",
                                href: null,
                                color: "orange"
                            },
                            {
                                id: 1,
                                text: "See Docs",
                                href: "#",
                                color: "orange"
                            }
                        ]
                    },
                    {
                        id: 3,
                        title: "Project Name",
                        description: "The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging. To edit this section, go to Edit Site and find Projects section. The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging. To edit this section, go to Edit Site and find Projects section. The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging. To edit this section, go to Edit Site and find Projects section. The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging. To edit this section, go to Edit Site and find Projects section. The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging. To edit this section, go to Edit Site and find Projects section.",
                        images: [
                            {
                                id: 0,
                                src: "/img/freelancer-template0-portfolio1-bg.jpg"
                            },
                            {
                                id: 1,
                                src: "/img/freelancer-template1-portfolio1-photo1.jpg"
                            },
                            {
                                id: 2,
                                src: "/img/header-bg.jpg"
                            }
                        ],
                        tags: ["Development", "Website", "Portfolio"],
                        actionBtns: [
                            {
                                id: 0,
                                text: "Learn more",
                                href: null,
                                color: "orange"
                            },
                            {
                                id: 1,
                                text: "See Docs",
                                href: "#",
                                color: "orange"
                            }
                        ]
                    }
                ]
            }

        // Testimonials
        case "testimonial1":
            return {
                sectionId: "testimonial1",
                sectionType: "testimonial",
                description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,purus sit amet luctus magna fringilla urna",
                testimonials: [
                    {
                        id: 0,
                        ratingStars: 4,
                        content: "Lorem ipsum dolor sit amet,  elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis",
                        image: "/img/freelancer-template0-aboutme1-avatar.jpg",
                        name: "Harry Peter",
                        job: "Designer"
                    },
                    {
                        id: 1,
                        ratingStars: 4,
                        content: "Lorem ipsum dolor sit amet,  elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis",
                        image: "/img/freelancer-template0-aboutme1-avatar.jpg",
                        name: "Harry Peter",
                        job: "Designer"
                    },
                    {
                        id: 2,
                        ratingStars: 4,
                        content: "Lorem ipsum dolor sit amet,  elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis",
                        image: "/img/freelancer-template0-aboutme1-avatar.jpg",
                        name: "Harry Peter",
                        job: "Designer"
                    },
                    {
                        id: 3,
                        ratingStars: 4,
                        content: "Lorem ipsum dolor sit amet,  elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis",
                        image: "/img/freelancer-template0-aboutme1-avatar.jpg",
                        name: "Harry Peter",
                        job: "Designer"
                    }
                ],
                actionBtn: {
                    text: null,
                    href: null,
                    color: "black"
                }
            }

        // Contacts
        case "contact1":
            return {
                sectionId: "contact1",
                sectionType: "contact",
                description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,purus sit amet luctus magna fringilla urna",
                slogan: "Let's build something exciting together!",
                contactInfo: [
                    {
                        id: 0,
                        icon: "fa-solid fa-phone",
                        content: "123456789"
                    },
                    {
                        id: 1,
                        icon: "fa-solid fa-envelope",
                        content: "support@eport.site"
                    }
                ],
                socials: [
                    {
                        id: 0,
                        social: "facebook",
                        href:  "#"
                    },
                    {
                        id: 1,
                        social: "instagram",
                        href:  "#"
                    },
                    {
                        id: 2,
                        social: "twitter",
                        href:  "#"
                    }
                ],
                actionBtn: {
                    text: "Submit",
                    href: null,
                    color: "orange"
                }
            }

        default:
            return {}
    }
}