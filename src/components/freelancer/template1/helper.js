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
                heading: {
                    text: "John Doe",
                    href: "#"
                },
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
                        text: "Portfolio",
                        href: "#"
                    }
                ],
                actionBtn: {
                    text: "Contact me",
                    href: "#"
                }
            }
        
        // Headers
        case "header1":
            return {
                sectionId: "header1",
                sectionType: "header",
                avatar: "/img/freelancer-template1-header-avatar.jpg",
                backgroundImage: "/img/freelancer-template1-header-bg.png",
                heading: "John Doe - Photographer",
                slogan: "Need a quick photoshoot session? Let me help you!",
                actionBtns: [
                    {
                        id: 0,
                        text: "Services",
                        href: "#",
                        color: "warning"
                    },
                    {
                        id: 1,
                        text: "Contact me",
                        href: "#",
                        color: "warning"
                    }
                ]
            }

        // About me
        case "aboutme1":
            return {
                sectionId: "aboutme1",
                sectionType: "aboutme",
                avatar: "/img/freelancer-template1-aboutme1-avatar.jpg",
                status: {text: "Available for work", color: "green"},
                heading: "John Doe",
                bio: "<p>I&apos;m John, a passionate photographer who captures life&apos;s beauty one click at a time. With an eye for detail and a love for storytelling, I specialize in nature photography. Through my lens, I aim to freeze moments in time, creating lasting memories and artistry. Let&apos;s create magic together.</p>",
                extraInfo: [
                    {
                        id: 0,
                        name: "Email",
                        value: "jdoe@example.org"
                    },
                    {
                        id: 1,
                        name: "Phone number",
                        value: "1234567890"
                    },
                    {
                        id: 2,
                        name: "School",
                        value: "University of Example"
                    },
                    {
                        id: 3,
                        name: "Degree",
                        value: "BSc in Art and Photography"
                    }
                ]
            }

        // Services
        case "service1":
            return {
                sectionId: "service1",
                sectionType: "service",
                heading: "Services",
                tagline: "You aren't happy with my work? Money back guranteed",
                services: [
                    {
                        id: 0,
                        name: "Basic package",
                        price: "20 USD",
                        actionBtn: {
                            text: "Get started",
                            href: "#",
                            color: "orange"
                        },
                        pros: [
                            {
                                id: 0,
                                text: "Build you a beautiful album of 10 nature photos"
                            },
                            {
                                id: 1,
                                text: "Affordable: Suitable for clients on a budget"
                            }
                        ],
                        cons: [
                            {
                                id: 0,
                                text: "Limited Coverage: May not include advanced editing or additional services like prints"
                            },
                            {
                                id: 1,
                                text: "Basic Equipment: May use entry-level camera gear"
                            }
                        ]
                    },
                    {
                        id: 1,
                        name: "Premium package",
                        price: "40 USD",
                        actionBtn: {
                            text: "Get started",
                            href: "#",
                            color: "orange"
                        },
                        pros: [
                            {
                                id: 0,
                                text: "Build you a beautiful album of 40 nature photos"
                            },
                            {
                                id: 1,
                                text: "Professional: Suitable for clients who want the best"
                            },
                            {
                                id: 2,
                                text: "Full coverage: Include advanced editing and additional services like prints"
                            },
                            {
                                id: 3,
                                text: "Advanced Equipment: Use professional camera gear"
                            }
                        ],
                        cons: []
                    }
                ]
            }

        // Portfolios
        case "portfolio1":
            return {
                sectionId: "portfolio1",
                sectionType: "portfolio",
            }

        // Testimonials
        case "testimonial1":
            return {
                sectionId: "testimonial1",
                sectionType: "testimonial",
            }

        // Contacts
        case "contact1":
            return {
                sectionId: "contact1",
                sectionType: "contact",
            }

        default:
            return {}
    }
}