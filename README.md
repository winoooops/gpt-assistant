# A Frontend Web Application for Chat-bot based on OpenAI API

## Tech Stack
* React Query for data fetching
* React Router for routing
* React Redux for state management(particularly local UI state)
* Backend logic is built with Node.js and Express.js, go check [gpt-backend](https://github.com/winoooops/gpt-backend)

## Configuration of Backend Server
> You can do this by adapting the implementation the [gpt-backend](https://github.com/winoooops/gpt-backend)

### Configure backend server api endpoint
* Copy the `.env.example` and rename it as `.env` file in the root directory of the project.
* Change the `OPENAI_API_ENDPOINT` to your backend server api endpoint.
* Change the `OPENAI_API_MODEL` to your OpenAI API model name, default is `Turbo-3.5`(will do this in the future).
