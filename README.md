# Distinctiveness and Complexity
Frontend server for LeotardCraft application. Created using ***Typescript***, **React**, **Vite**, **React Router**, **Axios**, and **React Bootstrap** technologies.
This application is using [LeotardCraftBackend](https://github.com/kseniiaIrinarkhova/LeotardCraftBackend) repo as Backend Server.

# Technical documentation of the project
## Files structure in *src* folder:
- **assets** - folder with images and gif for application
- **components** - folder with React Components
- **context** - folder with project useContext hooks
- **utils** - folder with utils functions
    - *api_connection.tsx* - file with all function that use Backend API
    - *error.util.tsx* - file with helper function for error providing
    - *quote_api.tsx* - file with all unction that connected to Qoute API
- *router.tsx* - file that provide all route data
- *vite-env.d.ts* - file for types

## Main types and interfaces
Main types and interfaces that used in project located in `vite-env.d.ts` file:
### Interfaces
Interfases 
- **IUser** - interface that provide information about User 
- **IUserTokenPayload** - interface for user token payload
- **IRhinestone** - interface that provide information about Rhinestone
- **IFabric** - interface that provide information about Fabric
- **IProject** - interface that provide information about Project

### Types
 - *UserUpdatedData* - type that provide all possible fields for user updat
 - *ProjectRhinestone* - type that represents rhinestones related to project
 - *ProjectFabric* - type that represents fabrics related to project
 - *Note* - type that represents notes for project/rhinestone/fabric

### Enums
- *RhinestonesType* - enum for rhinestone types

# Installation
1. Clone repository. run `npm install` to get all dependencies
2. Create .env file according to .env.example structure.
4. Add to `VITE_QUOTE_API_KEY` variable API Key from [API ninjas](https://api-ninjas.com/). If you do not have an accont you could create it for free.
3. To run dev scripts use command `npm run dev`

# User Guide
To be able to work with application user should register/authorize in it. `LogIn` Navigation menu provide opportunity to login or register in application.
After authorization user is able to check user information in `Account` menu or to see all user's projects in `My Project` menu. 
### User projects page
User could create new project by adding project title and pushing `New` button. After creation it is possible to chose project from the side menu and add information about rhinestones and fabric to project.
### User project page
User could see projects photos (it is possible to add them only by API request as URI for pictures), project rhinestones and project fabrics.
#### Add fabric to project
By clicking `Add fabric to project` on fabric tab user is able to choose from user's fabrics one and add to project, or create a completely new fabric and add it to project.
To adding existing fabric - add qauntity in fabric cards and click `Add`. To create a new fabric use **New Fabric** card and provide all information about new fabric.
#### Add rhinestone to project
By clicking `Add rhinestone to project` on rhinestone tab user is able to choose from user's rhinestones one and add to project, or create a completely new rhinestone and add it to project.
To adding existing rhinestone - add amount in rhinestone cards and click `Add`. To create a new rhinestone use **New Rhinestone** card and provide all information about new rhinestone.

# Author
Project prepared as a capstone project for **Software Engineering Bootcamp** at *Per Scholas* by [Kseniia Irinarkhova](https://www.linkedin.com/in/kseniia-irinarkhova/).

# Additional Resources

- [React Router Typesafe](https://github.com/fredericoo/react-router-typesafe)
- [Canva](https://www.canva.com/) - was used for images
- [JWT Authentication in Typescript with Express](https://dev.to/juliecherner/authentication-with-jwt-tokens-in-typescript-with-express-3gb1)