import React from "react";
import ReactJoyride, { STATUS } from "react-joyride";

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
    {
        target: ".tour-myAccountButton",
        content: "Click 'My Account' button to manage your subscriptions, change password and log out!",
        placement: "bottom"
    }
];

const Tour = (runHandle) => {
    const { setRun, run } = runHandle;

    // Need to set our running state to false, so we can restart if we click start again
    // Note: must use this function name to get data i.e. handleJoyrideCallback
    const handleJoyrideCallback = (data) => {
        const { status } = data;
        const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];
        if (finishedStatuses.includes(status)) {
            setRun(false);
        }
    }

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
                        backgroundColor: "rgb(59, 130, 246)"
                    },
                    buttonBack: {
                        marginRight: 10,
                    }
                }}
            />
        </>
    )
}

export default Tour;