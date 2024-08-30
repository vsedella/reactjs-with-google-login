# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

To Run the Application : 
1) Install Node.js & NPM
2) Create a project in google cloud
3) Create Credentials -> Oauth Client Id. Input authorized javascript origins and redirect urls. At the end it will generate a clientId.
	We need the cliendId to pass it as an input to GoogleOAuthProvider for login. Configure Oauth consent screen.
4) Create Credentials -> API Key. Configure it and at an API KEY will be generated. We need to pass it as an request parameter to the search API
5) Create a programmable search engine and copy the search engine ID. We need to pass it as an request parameter to the search API
6) check out the project and update the .env file with values we got from above steps.
7) run "npm i"
8) Once all the dependencies are installed run "npm run dev". It will run a local vite server.
9) navigate to http://localhost:5173/
