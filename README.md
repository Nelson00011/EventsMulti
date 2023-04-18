# EventsMulti
General Practice Site for Router Functions

## Technology Stack
Front-End: HTML5, CSS, REACT, Node.js

Back-End: Firebase? tbd?




## Run Code (Environment)
### Front-End Helpful Hints (for Node.js environment)
- confirm that config is up to date:

```
> node -v
> npm -v
> git --version
```

- Initial package.json & install dependencies (localhost: 3000):
```
> npx create-react-app <project name>
> cd <project name>
> npm install --save react-router-dom
```
- Test front-end once pages are generated (ctrl-c to exit):
```
> npm run start
```

### Back-End Helpful Hints (for Node.js environment)
- You must run "npm install" in both project folders.
- Thereafter, you can start the dummy backend API server via "npm start" (inside the "backend-api" folder).
- The React app dev server is then also started via "npm start" (though inside the "react-frontend" folder).
- The dummy backend API does not use any external database - instead the dummy data is saved to an "events.json" file inside the project folder.


## Resources & Helpful Hints:
- [CSS modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/) to allow styles to be treated like objects.
- Requires backend & front end servers. 
