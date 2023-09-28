import React from "react";
import ReactJoyride, { STATUS } from "react-joyride";

export default function Tour ({setRun, run, isLoggedIn, theme}) {
    // Need to set our running state to false, so we can restart if we click start again
    // Note: must use this function name to get data i.e. handleJoyrideCallback
    const handleJoyrideCallback = (data) => {
        const { status } = data;
        const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];
        if (finishedStatuses.includes(status)) {
            setRun(false);
        }
    }

    const steps = [
        {
            target: "body",
            content: "Let's begin our journey! This is the template of your portfolio!",
            placement: "center"
        },
        {
            target: ".tour-editSiteButton",
            content: "Click 'Edit Site' button to edit your portfolio! After editing your site, click 'Save Site' button!",
            placement: "bottom"
        },
        {
            target: ".tour-publishSiteButton",
            content: "Click 'Publish Site' button to publish your site. Then, the 'Visit Site' button will appear. Click on the 'Visit Site' button to visit your page!",
            placement: "bottom"
        },
        isLoggedIn ? {
            target: ".tour-myAccountButton",
            content: "Click 'My Account' button to manage your subscriptions, change password and log out!",
            placement: "bottom"
        } :
        {
            target: ".tour-loginButton",
            content: "Login to your account to make this your real portfolio!",
            placement: "bottom"
        },
    ];

    return (
        <>
            <ReactJoyride
                callback={handleJoyrideCallback}
                run={run}
                steps={steps}
                continuous
                showSkipButton
                showProgress
                hideCloseButton
                styles={{
                    tooltipContainer: {
                        textAlign: "left"
                        
                    },
                    buttonNext: {
                        backgroundColor: `${theme === 'dark' ? "rgb(29, 78, 216)" : "rgb(59, 130, 246)"}`
                    },
                    buttonBack: {
                        marginRight: 10,
                    },
                    options: {
                        backgroundColor: `${theme === 'dark' ? "rgb(30, 41, 59)" : '#fff'}`,
                        textColor: `${theme === 'dark' ? "rgb(226, 232, 240)" : '#333'}`,
                    }
                }}
            />
        </>
    )
}