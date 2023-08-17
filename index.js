
const jsonServer = require('json-server')
const cors = require('cors');
const auth = require('json-server-auth')
const app = jsonServer.create()
const router = jsonServer.router('db.json')

// /!\ Bind the router db to the app
app.db = router.db
//access-control-allow-credentials:true
const corsConfig = {
    credentials: true,
    origin: true,
};
app.use(cors(corsConfig));


app.use(auth)
app.use(router)

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`)
})