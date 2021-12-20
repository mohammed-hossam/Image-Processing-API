## (1) Included scripts:

-   #### Developing: `npm run start`
-   #### Building: `npm run build`
-   #### Linting: `npm run lint`
-   #### Formatting: `npm run prettier`
-   #### Production: `npm run prod`
-   #### testing: `npm run test`

## (2) Main API-endpoint to test the required functionality:

http://localhost:3000/api/images?filename=imageName&width=number&height=number

#### a) imageName should be one of the given names:

-   encenadaport
-   fjord
-   icelandwaterfall
-   palmtunnel
-   santamonica

#### b) and width/height should be number more than zero.

-   Example:
    http://localhost:3000/api/images?filename=palmtunnel&width=200&height=500
