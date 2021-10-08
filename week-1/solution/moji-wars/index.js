var translator = require("emoji-translator")

module.exports = async function (context, req) {
    let redacted = req.query.redacted
    context.log('HTTP Function has received redacted text: ' + redacted);

    const vocabulary = { '🕵🏽': 'John', '🕵🏻‍♀️': 'Nora', '🗻': 'Waverly Valley Place' };
    const translate = translator(vocabulary)
    const string = translate(redacted)

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: string
    };
}