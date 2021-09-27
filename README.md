# SLACK dashboard clone with React + Styled Components

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/).

## Preview

Click the button bellow to preview the [live demo](https://react-slack-clone-delta.vercel.app/) on the Vercel Deployment:
[![Preview](https://vercel.com/button)](https://react-slack-clone-delta.vercel.app/)

## Setting up and Configuring

Clone the repo on your local machine.

```bash
git clone https://github.com/davoodmood/react-slack-clone.git
```

Since this repo is using FireStore as database, you must create a [Firebase project](https://console.firebase.google.com/) and add the configuration details to `.env.local` file on the root of the project.

A sample of variable required are on the `.env-example` file with the below content. you can also rename this file to `.env.local`.


```
REACT_APP_API_KEY=""
REACT_APP_AUTH_DOMAIN=""
REACT_APP_DB_URL=""
REACT_APP_PROJECT_ID=""
REACT_APP_SOTRAGE_BUCKET=""
REACT_APP_MSG_SENDER_ID=""
REACT_APP_APP_ID=""
```

## How to use

Execute `yarn install` to install the dependencies and bootstrap this clone:

```bash
yarn install
```

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
