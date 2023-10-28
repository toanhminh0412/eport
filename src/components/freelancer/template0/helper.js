/**
 * Params: sectionId (string)
 * Returns: section initial data (object)
 */
export function getSectionInitialData(sectionId) {
    const navBarData = {
        sectionType: "navbar",
        sectionTitle: "Navigation bar",
        logo: "/img/eport-logo-color.png",
        navItems: [
            {
                id: 0,
                text: "About me",
                internalHref: "#",
                externalHref: "#",
                isExternal: false
            },
            {
                id: 1,
                text: "Services",
                internalHref: "#",
                externalHref: "#",
                isExternal: false
            },
            {
                id: 2,
                text: "Portfolios",
                internalHref: "#",
                externalHref: "#",
                isExternal: false
            },
            {
                id: 3,
                text: "Testimonials",
                internalHref: "#",
                externalHref: "#",
                isExternal: false
            },
        ],
    }

    const headerData = {
        sectionType: "header",
        sectionTitle: "Header",
        avatar: {
            src: "/img/freelancer-template0-aboutme1-avatar.jpg",
            cropper: {
                crop: {x: 0, y: 0},
                zoom: 1
            },
            style:  {}
        },
        backgroundImage: "/img/freelancer-template0-header1-white-bg.png",
        heading: "Eport Website",
        slogan: "Build your website really fast with Eport. No code needed!",
        description: "Eport is a versatile online platform that allows individuals, businesses, and organizations to create, customize, and publish websites without the need for advanced technical knowledge or coding skills.",
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
                internalHref: "#",
                externalHref: "#",
                isExternal: false,
                color: "orange"
            }
        ]
    }

    const aboutmeData = {
        sectionType: "aboutme",
        sectionTitle: "About me",
        avatar: {
            src: "/img/freelancer-template0-aboutme1-avatar.jpg",
            cropper: {
                crop: {x: 0, y: 0},
                zoom: 1
            },
            style:  {}
        },
        status: {text: "Available for work", color: "green"},
        job: "Software Developer",
        name: "Eport Website",
        description: "<p>This is a simple bio with concrete facts that goes a long way. Remember that your About Me section serves as a first impression for many people who encounter your onlne presence. It should leave a memorable and positive impression while giving readers a glimpse into your personality, values, and professional background.</p>",
        tabs: [
            {
                id: 0,
                tabHeading: "Basic Information",
                tabContent: [
                    {id: 0, key: "Name", value: "Eport Website"},
                    {id: 1, key: "Jobs", value: "Website Builder"},
                    {id: 2, key: "Since", value: "2023"},
                ]
            },
            {
                id: 1,
                tabHeading: "Tab Heading",
                tabContent: [
                    {id: 0, key: "Tab key", value: "Tab value"},
                    {id: 1, key: "Tab key", value: "Tab value"},
                    {id: 2, key: "Tab key", value: "Tab value"},
                ]
            },
            {
                id: 2,
                tabHeading: "Tab Heading",
                tabContent: [
                    {id: 0, key: "Tab key", value: "Tab value"},
                    {id: 1, key: "Tab key", value: "Tab value"},
                    {id: 2, key: "Tab key", value: "Tab value"},
                ]
            }
        ]
    }

    const serviceData = {
        sectionType: "service",
        sectionTitle: "Services",
        heading: "Service",
        description: "The Services section of our website is your gateway to discovering the comprehensive range of solutions we offer.",
        services: [
            {
                id: 0,
                icon: "fa-solid fa-cloud",
                title: "Portfolio Design",
                price: "200 CAD / month",
                content: "<p>Remember that the goal of your Services section is to inform potential clients about what you offer, build trust, and persuade them to take action. Be clear, concise, and persuasive in your descriptions, and provide easy-to-follow steps for visitors to engage with your services.</p>"
            },
            {
                id: 1,
                icon: "fa-solid fa-cloud",
                title: "Portfolio Design",
                price: "200 CAD / month",
                content: "<p>Remember that the goal of your Services section is to inform potential clients about what you offer, build trust, and persuade them to take action. Be clear, concise, and persuasive in your descriptions, and provide easy-to-follow steps for visitors to engage with your services.</p>"
            },
            {
                id: 2,
                icon: "fa-solid fa-cloud",
                title: "Portfolio Design",
                price: "200 CAD / month",
                content: "<p>Remember that the goal of your Services section is to inform potential clients about what you offer, build trust, and persuade them to take action. Be clear, concise, and persuasive in your descriptions, and provide easy-to-follow steps for visitors to engage with your services.</p>"
            },
            {
                id: 3,
                icon: "fa-solid fa-cloud",
                title: "Portfolio Design",
                price: "200 CAD / month",
                content: "<p>Remember that the goal of your Services section is to inform potential clients about what you offer, build trust, and persuade them to take action. Be clear, concise, and persuasive in your descriptions, and provide easy-to-follow steps for visitors to engage with your services.</p>"
            }
        ]
    }

    const portfolioData = {
        sectionType: "portfolio",
        sectionTitle: "Portfolio",
        heading: "Project",
        sectionDescription: "Welcome to our Portfolio section, where we proudly present a visual and insightful journey through our body of work.",
        portfolios: [
            {
                id: 0,
                title: "Project Name",
                description: "<p>The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging.</p>",
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
                        text: "Visit project",
                        href: "#",
                        color: "orange"
                    }
                ]
            },
            {
                id: 1,
                title: "Project Name",
                description: "<p>The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging.</p>",
                images: [
                    {
                        id: 0,
                        src: "/img/freelancer-template0-portfolio1-bg.jpg"
                    },
                    {
                        id: 1,
                        src: "/img/freelancer-template1-portfolio1-photo1.JPG"
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
                        text: "Visit project",
                        href: "#",
                        color: "orange"
                    }
                ]
            },
            {
                id: 2,
                title: "Project Name",
                description: "<p>The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging.</p>",
                images: [
                    {
                        id: 0,
                        src: "/img/freelancer-template0-portfolio1-bg.jpg"
                    },
                    {
                        id: 1,
                        src: "/img/freelancer-template1-portfolio1-photo1.JPG"
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
                        text: "Visit project",
                        href: "#",
                        color: "orange"
                    }
                ]
            },
            {
                id: 3,
                title: "Project Name",
                description: "<p>The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging.</p>",
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
                        text: "Visit project",
                        href: "#",
                        color: "orange"
                    }
                ]
            }
        ]
    }

    const testimonialData = {
        sectionType: "testimonial",
        sectionTitle: "Testimonials",
        heading: "Testimonials",
        description: "Welcome to our Testimonial section, a place where the voices of our satisfied clients, customers, and collaborators take center stage.",
        testimonials: [
            {
                id: 0,
                ratingStars: 4,
                content: "<p>The Testimonials section serves as a social proof and validation of your work or services. It can greatly influence potential clients or customers in their decision-making process. Make sure the testimonials you feature are genuine, compelling, and relevant to your target audience.</p>",
                name: "Harry Peter",
                job: "Designer"
            },
            {
                id: 1,
                ratingStars: 4,
                content: "<p>The Testimonials section serves as a social proof and validation of your work or services. It can greatly influence potential clients or customers in their decision-making process. Make sure the testimonials you feature are genuine, compelling, and relevant to your target audience.</p>",
                name: "Harry Peter",
                job: "Designer"
            },
            {
                id: 2,
                ratingStars: 4,
                content: "<p>The Testimonials section serves as a social proof and validation of your work or services. It can greatly influence potential clients or customers in their decision-making process. Make sure the testimonials you feature are genuine, compelling, and relevant to your target audience.</p>",
                name: "Harry Peter",
                job: "Designer"
            },
            {
                id: 3,
                ratingStars: 4,
                content: "<p>The Testimonials section serves as a social proof and validation of your work or services. It can greatly influence potential clients or customers in their decision-making process. Make sure the testimonials you feature are genuine, compelling, and relevant to your target audience.</p>",
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

    const contactData = {
        sectionType: "contact",
        sectionTitle: "Contact me",
        description: "Welcome to our Contact Us section, the open door to connect, communicate, and collaborate with us.",
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
                social: "linkedin",
                href:  "#"
            },
            {
                id: 1,
                social: "github",
                href:  "#"
            },
            {
                id: 2,
                social: "gmail",
                href:  "#"
            }
        ],
        actionBtn: {
            text: "Submit",
            href: null,
            color: "orange"
        }
    }

    switch (sectionId) {
        // Navigation bars
        case "navbar1":
            return {
                sectionId: "navbar1",
                ...navBarData
            }
        
        case "navbar2":
            return {
                sectionId: "navbar2",
                ...navBarData
            }
        
        // Headers
        case "header1":
            return {
                sectionId: "header1",
                ...headerData
            }

        case "header2":
            return {
                sectionId: "header2",
                ...headerData
            }

        // About me
        case "aboutme1":
            return {
                sectionId: "aboutme1",
                ...aboutmeData
            }
        
        case "aboutme2":
            return {
                sectionId: "aboutme2",
                ...aboutmeData
            }

        // Services
        case "service1":
            return {
                sectionId: "service1",
                ...serviceData
            }

        case "service2":
            return {
                sectionId: "service2",
                ...serviceData
            }

        // Portfolios
        case "portfolio1":
            return {
                sectionId: "portfolio1",
                ...portfolioData
            }
        
        case "portfolio2":
            return {
                sectionId: "portfolio2",
                ...portfolioData
            }
        

        // Testimonials
        case "testimonial1":
            return {
                sectionId: "testimonial1",
                ...testimonialData
            }

        case "testimonial2":
            return {
                sectionId: "testimonial2",
                ...testimonialData
            }

        // Contacts
        case "contact1":
            return {
                sectionId: "contact1",
                ...contactData
            }

        case "contact2":
            return {
                sectionId: "contact2",
                ...contactData
            }

        default:
            return {}
    }
}