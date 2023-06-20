import sendEmail from './sendEmail.js';

const name = 'send-email';

// playwright.config.js

module.exports = {
    reporter: [
        ['list'],
        ['monocart-reporter', {  
            name: "My Test Report",
            outputFile: './test-results/report.html',
            onEnd: async (reportData, capability) => {

                await sendEmail(reportData, capability)
        }]
    ]
};