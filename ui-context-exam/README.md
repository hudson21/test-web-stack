This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Live Demo
If you want to see this application deployed, please go to [https://carlos-hudson-superformula-exam.vercel.app/1](https://carlos-hudson-superformula-exam.vercel.app/1)

## Instructions to install the app
First, install all the necessary dependencies
```bash
npm install
```
Second, run the development server:

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How the App was designed (Client)
### Component Side
This application is located in one page view where there are a number of reusable components to delegate all the business logic.
The components are organized on the following way:
  - Top Section: It contains `h1 heading` plus a reusable `input component` which is used for filtering the users records
  - Middle Section: It contains the `CardList Component` where the users data is passed as props to be shown by rendering each user with a `Card Component`
  - Last Section: It contains the `Button of Load More` that is in charge to display more users data into the UI
  - It is word mentioning there are `3 Reusable Modal Components` rendered in the top of the app that have different states to determined when they should be displayed in the DOM or not
### CSS Side
This application is developed on Next.js environment and uses global style classes as well as css modules on specific components to keep a detailed local css scoped on every component

## How the App was designed (Backend)
- The application is using `ApolloServer library` to create a graphql server to handle api routes
- The database used on the project is `MongoDB` and the reason because I chose `MongoDB` over `DynamoDB` was because I had previous experience using it on other projects. I know there were some requirements to complete on the backend side but I decided to take simplicity over complexity since `DynamoDB` is a new DB for me I did not want to spend too much time creating the backend structure
- The `GraphQL Apollo Server` is using the `GraphQL Studio Playground` in conjuntion with the `mongodb` library to connected with the ´MongoDB´ Database

## How to approach mobile friendly Apps
- A mobile friendly app is an application that as his name stands it supports responsiveness for mobile devices. There are lot of UI libraries like `Bootstrap, Materialize, Material-UI, Tailwind ...` that can make your life way easier when you want to have a fully responsive application, but sometimes because of optimization or performance reasons a library is not your best friend when you want to have the faster loading times for your application. That is why a great way to approach mobile-friendly can be using the methodology of `mobile-first`. This terminology means that your application shoud be oriented for mobile resolutions instead of desktop ones.
- If you dont want to use any library, your best choice are `media queries`. An example of this can be
```
// This approach is for mobile-first
@media(min-width: 400px) {
  ....
}

// This approach is for desktop-first
@media(max-width: 1400px) {
  ....
}
```
- Another workaround that works really great with responsiveness are the measurements you are using on your UI elements. If you use `rem` as your measurement




