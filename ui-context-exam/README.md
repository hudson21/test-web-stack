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
- Another workaround that works really great with responsiveness are the measurements you are using on your UI elements. If you use `rem` as your measurement and you are handling `percentages for the font-size property inside of html tag` you can increase or decrese the font-size according to the resolution you have in your screen to have an adaptable UI on all screen sizes. An example of this can be the following code
```

html {
  font-size: 62.5%
}
```
`1rem = 16px` therefore if the font-size has decreased to `62.5%` it means the value is `10px`
- These aspects are related to the UI side. There could be some other factors which are more related with app features and `User Experience(UX)` like:
    1. Have search options: This allows the user to have up to date data records which he cares about.
    2. Optimization of your resources: This point is related to manipulate different resolutions for the different third party files you are serving in your application `(eg. Fonts, images, CSS styles, JavaScript Files ...)`. An application which does not need to load too much resources is a faster app than the opposite scenario. There are always compressers for these type of situations that will definitely be your best ally.
- You can also take advantage of `CSS Native tools` like `flexbox or css-grid` to manage responsiveness on your applications

There are other factors to take on mind but I think if you cover the previous ones, you are on the right path ✔️.

## Optimization Opportunities
In an application there will be always optimization opportunities to get you application faster and better at the metrics for loading performance. Since this is an application based on `Next.js Framework` you can guess there is a `build` command to generate a build version which is a minified version of your project that is production-ready to be hosted on any hostin provider of your choice. In the case of `Next.js` ecosystem a great helper to achieve a great optimization can be:
1. Using `Image` tag to render your images. This is a helper from the next.js library that can receive a variety of props to get different responses when you want a full-responsive application.
2. Another great advantage of this framework can be to use different ways of rendering `Static Generation or Server Side Rendering`
3. The optimization opportunities are not only to server third-party resources you have on your application. It also means to manage a great architecture inside of your application. How you have your logic splitted among the different views and components
4. If you are interacting with a database, there is always room for query optimizations. Find out strategies to speed the performance of your queries.
5. In the case of the client side, there is always the possibility to use React Context to avoid `prop chaining` or use `Redux` if you have an application you think will get bigger in the future.
6. Another feature which could be beneficial if you have a big app is `Lazy Loading`. When you have different views, you dont need to load them all at once. You can implement `Lazy Loading` to load every page according to the end user needs.




