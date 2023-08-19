const jsonServer = require('json-server')
const auth = require('json-server-auth')

const app = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// /!\ Bind the router db to the app
app.db = router.db



app.use(middlewares)
// Add this before server.use(router)
const rules = auth.rewriter({
	// Permission rules
	// users: 600,
	// messages: 640,
	// Other rules
	'/posts/:category': '/posts?category=:category',
  })

app.use(rules)
app.use(auth)
app.use(router)

app.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = app