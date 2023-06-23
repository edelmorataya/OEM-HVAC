
    var initESW = function(gslbBaseURL) {
        embedded_svc.settings.displayHelpButton = true; //Or false
        embedded_svc.settings.language = ''; //For example, enter 'en' or 'en-US'

        //embedded_svc.settings.defaultMinimizedText = '...'; //(Defaults to Chat with an Expert)
        //embedded_svc.settings.disabledMinimizedText = '...'; //(Defaults to Agent Offline)

        //embedded_svc.settings.loadingText = ''; //(Defaults to Loading)
        //embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)

        // Settings for Chat
        //embedded_svc.settings.directToButtonRouting = function(prechatFormData) {
            // Dynamically changes the button ID based on what the visitor enters in the pre-chat form.
            // Returns a valid button ID.
        //};
        //embedded_svc.settings.prepopulatedPrechatFields = {}; //Sets the auto-population of pre-chat form fields
        //embedded_svc.settings.fallbackRouting = []; //An array of button IDs, user IDs, or userId_buttonId
        //embedded_svc.settings.offlineSupportMinimizedText = '...'; //(Defaults to Contact Us)

        embedded_svc.settings.enabledFeatures = ['LiveAgent'];
        embedded_svc.settings.entryFeature = 'LiveAgent';

        embedded_svc.init(
            'https://oemservicedemo-dev-ed.develop.my.salesforce.com',
            'https://oemservicedemo-dev-ed.develop.my.salesforce-sites.com/liveAgentSetupFlow',
            gslbBaseURL,
            '00D6e000000rtCe',
            'Support_Team',
            {
                baseLiveAgentContentURL: 'https://c.la4-c2-ia4.salesforceliveagent.com/content',
                deploymentId: '5726e000000Ndyy',
                buttonId: '5736e000000NggT',
                baseLiveAgentURL: 'https://d.la4-c2-ia4.salesforceliveagent.com/chat',
                eswLiveAgentDevName: 'Support_Team',
                isOfflineSupportEnabled: true
            }
        );
    };

    if (!window.embedded_svc) {
        var s = document.createElement('script');
        s.setAttribute('src', 'https://oemservicedemo-dev-ed.develop.my.salesforce.com/embeddedservice/5.0/esw.min.js');
        s.onload = function() {
            initESW(null);
        };
        document.body.appendChild(s);
    } else {
        initESW('/');
    }
