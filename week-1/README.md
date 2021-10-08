## 'Moji Wars
Thanks for taking up this assignment, agent! We need a new tool ASAP that'll speed up the work we do at the agency significantly.

### Problem
Currently, in order to redact TOP SECRET information in our documents, our agents have to manually replace names and locations with emojis. This is time consuming!

### Proposed Solution
We need YOU, our expert in serverless functions, to build an endpoint that allows our agents to simply send the document's content in a parameter named `redact` and receive back a redacted version.

`John` should be replaced with 🕵🏽
`Nora` should be replaced with 🕵🏻‍♀️
`Waverly Valley Place` should be replaced with 🗻

#### Example:
If our agents send `Mission #1: Operation Moji Town Steal. Nora and John will conduct survellaince at 5:00 PM EST sharp in Waverly Valley Place.` in a paramter of `redact`, they should receive `Mission #1: Operation Moji Town Steal. 🕵🏻‍♀️ and 🕵🏽 will conduct survellaince at 5:00 PM EST sharp in 🗻.`

Good luck!