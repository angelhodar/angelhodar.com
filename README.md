# angelhodar.dev

This repository contains my personal website. You can fork and modify any content to suit your needs.

## Technology Stack

- **NextJS**: Very interesting React framework that allows some features such as **SSG** (static site generation) to pre-render pages at compile time and make everything much more fluid (instant navigation).
- **ChakraUI**: User interface library of UI components, very customizable and easy to use. It also allows to add dark mode to the web almost automatically.
- **MDX**: Allows to render markdown in React, and to map a mardown tag to a component. I use this for my personal blog, but it can even be used to render a complete web page using markdown.
- **Vercel**: Project deployment platform, with automatic SSL, automation with commits from GitHub and NextJS creators.

## Pages

The web has the following pages:

- **Home/Landing**: Here you can add a short introduction about yourself. In my case I have added a description of the website and a subset of the most relevant projects/articles.
- **Projects**: Your GitHub projects or any information related to your personal projects that you want to add.
- **Blog**: A personal blog where you can share anything you want. It supports searching and tag filtering. All blog pages are rendered using MDX so you can change any UI aspect by using React.
- **Resume**: Your personal resume, using any CMS you want as your data source. I have used GitConnected as it uses the standard JSON Resume Schema and a PDF link to the info you write in your profile.

## Development

To start the project locally, all you have to do is fork the project and execute the following inside the downloaded folder:

```
npm install (just once to install dependencies) && npm run dev
```
