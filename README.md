# drive-doctor-ui
`npm run dev`


## Content
```
│   .gitignore
│   index.html
│   package.json
│   README.md
│   tsconfig.json
│   tsconfig.node.json
│   vite.config.ts
│
├───public
│   │   vite.svg
│   │
│   └───images
│           drive_doctor_logo.png
│           drive_doctor_text.png
│
└───src
    │   App.css
    │   App.tsx
    │   main.tsx
    │   Message.tsx
    │   vite-env.d.ts
    │
    ├───assets
    │       react.svg
    │
    ├───clients
    │       drive-doctor-client.ts
    │
    ├───components
    │   │   Footer.tsx
    │   │   Header.tsx
    │   │   Navbar.tsx
    │   │   NewItemCard.tsx
    │   │
    │   ├───home
    │   │       Home.tsx
    │   │       HomePageCard.tsx
    │   │       HomePageGrid.tsx
    │   │
    │   ├───login
    │   │       Login.tsx
    │   │
    │   ├───trip
    │   │       Trip.tsx
    │   │       TripForm.tsx
    │   │       TripsCard.tsx
    │   │       TripsGrid.tsx
    │   │       TripsPage.tsx
    │   │
    │   └───vehicles
    │           AddVehiclePage.tsx
    │           Vehicle.tsx
    │           VehiclesPage.tsx
    │
    ├───hooks
    │       useUserTrips.ts
    │       useUserVehicles.ts
    │
    ├───models
    │   ├───trips
    │   │       Trip.ts
    │   │
    │   └───user
    │           UserTrips.ts
    │           UserVehicles.ts
    │
    └───services
            TripService.ts
            VehicleService.ts
```
