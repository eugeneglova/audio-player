# Audio library/player

## Backend (Node.js)

The backend will serve the library (list of songs with metadata)

To start app run next command

```
npm run start
```

and go to http://localhost:3000/api/library/songs to get JSON output

To extend this api please go to `src/backend/controllers/` and `src/backend/routes/`

For songs api used Itunes public API https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/
