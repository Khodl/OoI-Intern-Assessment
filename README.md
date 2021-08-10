# UNICEF Office of Innovation Intern Assessment

Go as far as you can in the allotted time.

1. Fork the repository
2. Clone your forked repository
3. `npm install && cd client; npm install`
4. Setup and configure a database as per the configuration included in the repo
5. Create a new branch `fullstack-assesment`
6. To start the server: `node index.js`
7. To start the client: `cd client; npm run start`

## Submission

Once you complete the assignment, please make your repository private and invite `mehranhydary` and `tenthirtyone` to the repository so that your solution can be reviewed by UNICEF.

## Requirements identified

  1. Store in the database any successful login, storing the current timestamp (date + time) and the identifier of the user that did the login
  2. Create an endpoint to return the logs of the logins. The raw data is returned, without filtering/counting by day, so the client can develop more auditing features without more back-end development.
  3. Retrieve from the previous the endpoint the logins and filter/count by day
  4. Show a first version with a table showing the raw data 
  5. Replace the raw data with a graph, using chart.js --> Not enough time to do it (30 minutes more would be enough)

## Reasons for choosing [chart.js](https://www.chartjs.org/)

  * Open source (indeed)
  * Does not require external library (no jQuery, for instance)
  * Already include [reacts component](https://reactchartjs.github.io/react-chartjs-2/#/)
  * Use canvas, allowing interaction
  * Customizable
  * Wide variety of charts
  * Present in distribution platforms (npm) or via CDN
  * Bonus: already worked with it

## Notes

### Proxy problems
I encountered problems with the proxy, and tried to solve it during about 1h30, before going for a temporary solution.
I considered that the code provided was working and that the problem was on my end.
The problem was not solved in the end ("Error occured while trying to proxy to XXXXXX"). It is probably a simple trick that someone could help me with in a work context. I tried changing IP addresses (using local ones, network ones, localhost), using different ports, clearing node cache, and other minor changes.

Here are the workarounds used to provide some results:
  * Developed and tested backend API using Postman
  * Managed to use the local storage to simulate a connexion on the frontend 
  * Used mock data when I had no other way to test it

If I had a bit more time, I would have implemented Chart.js, as I already did in another project (in vanilla code).

### User's content only?
The current login did not include any user token, only a `LOGIN-STATUS` set to `active`. The logs displayed are therefore ALL the logs from the database.

A temporary, but not safe solution, would be to store the `user._id` instead of `active`, and to add a filter in the backend query to return only the user's logs.

A better implementation would be to generate a session token or use a JWT to authenticate the user in the backend.

### Tests
The tests already provided are not up to date, they seem to contain legacy code from a previous test (getting wallets). I did not updated them.