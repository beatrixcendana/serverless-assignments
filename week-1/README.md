## 'Moji Wars
Thanks for taking up this assignment, agent! We need a new tool ASAP that'll speed up the work we do at the agency significantly.

### Problem
Currently, in order to un-redact TOP SECRET information in our documents, our agents have to manually replace emojis with the corresponding names and places. This is time consuming!

### Proposed Solution
We need YOU, our expert in serverless functions, to build an endpoint that allows our agents to simply send the redacted document's content in a parameter named `redacted` and receive back a translated version that's easy to read.

- [] 🕵🏽 should be replaced with `John`
- [] 🕵🏻‍♀️ should be replaced with `Nora`
- [] 🗻 should be replaced with `Waverly Valley Place`

You can use the npm package [`emoji-translator`](https://www.npmjs.com/package/emoji-translator) for this mission. 🚀

#### Test case:
If our agents send `Mission #1: Operation Moji Town Steal. 🕵🏻‍♀️ and 🕵🏽 will conduct survellaince at 5:00 PM EST sharp in 🗻.` in a paramter of `redacted`, they should receive `Mission #1: Operation Moji Town Steal. Nora and John will conduct survellaince at 5:00 PM EST sharp in Waverly Valley Place.`

Good luck!