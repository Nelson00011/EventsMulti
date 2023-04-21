# EventsMulti
General Practice Site for Router Functions & more compilcated request. 

## Technology Stack
**Front-End:** HTML5, CSS, REACT, Node.js

**APIs:** TicketMaster, Google Maps or tbd?

**Back-End:** Express.js, Firebase? tbd?


## Run Code (Environment)
### Front-End Helpful Hints (Node.js)
- confirm that config is up to date:

```
> node -v
> npm -v
> git --version
> npm list react-router-dom
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

### Back-End Helpful Hints (Node.js)
- confirm that config is up to date:

```
> node -v
> npm -v
> git --version
> npm express -v 
```

- Initial package.json & install dependencies (localhost:8080):
```
> cd <backend name>
> npm init -y
> npm install express 
```

- In a separate terminal run
```
> npm start
```


- Thereafter, you can start the dummy backend API server via "npm start" (inside the "backend" folder).
- The React app dev server is then also started via "npm start" (though inside the "frontend" folder).
- The dummy backend API does not use any external database - instead the dummy data is saved to an "events.json" file inside the project folder.


## Resources & Helpful Hints:
- [CSS modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/) to allow styles to be treated like objects.
- [TicketMaster API](https://developer.ticketmaster.com/products-and-docs/apis/getting-started/)
- [GoogleMaps API](https://mapsplatform.google.com/?utm_source=search&utm_medium=googleads&utm_campaign=brand_core_exa_desk_mobile_us&gclid=CjwKCAjwov6hBhBsEiwAvrvN6It7s5nDPDkGxoELArYxrXgEEmysA79BnaoTIwxoXKs7NfHHeIvu_BoCmSIQAvD_BwE&gclsrc=aw.ds)
- [React-router-dom](https://reactrouter.com/en/main/components/await) Await Components and other useful information. 