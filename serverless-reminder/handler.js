'use strict';

module.exports.sendReminderDaily = async (event, context, callback) => {
    const AWS = require('aws-sdk');
    AWS.config.update({
        region: 'us-east-1'
    });
    const ses = new AWS.SES();
    const fs = require('fs');

    const emailHtml = fs.readFileSync("./dailyReminder.html", "utf-8");

    const toAndFromAddress = 'dipjyotimetia@outlook.com'
    const params = {
        Destination: {
            ToAddresses: [toAndFromAddress]
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: emailHtml
                },
                Text: {
                    Charset: "UTF-8",
                    Data: "Here is a weekend reminder"
                }
            },
            Subject: {
                Charset: "UTF=8",
                Data: "Test"
            }
        },
        ReplyToAddresses: [toAndFromAddress],
        Source: toAndFromAddress
    };
    ses.sendEmail(params, (err, data) => {
        if (err) console.log(err, err.stack);
        else callback(null, data);
    });
};

module.exports.sendReminderWeekend = (event, context, callback) => {

    const AWS = require('aws-sdk');
    AWS.config.update({
        region: 'us-east-1'
    });
    const ses = new AWS.SES();
    const fs = require('fs');

    const emailHtml = fs.readFileSync('./weekendReminder.html', 'utf-8');

    const toAndFromAdress = 'dipjyotimetia@outlook.com'
    const params = {
        Destination: {
            ToAddresses: [toAndFromAdress]
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: emailHtml
                },
                Text: {
                    Charset: "UTF-8",
                    Data: "Here's a weekend Remember that puppies are adorable!!"
                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: "Woof Garden Reminder"
            }
        },
        ReplyToAddresses: [toAndFromAdress],
        Source: toAndFromAdress,
    };

    ses.sendEmail(params, (err, data) => {
        // an error occurred
        if (err) console.log(err, err.stack);
        // successful response
        else callback(null, data);
    });
};