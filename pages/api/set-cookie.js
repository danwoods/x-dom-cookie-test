import Cors from 'cors'
import initMiddleware from '../../util/init-middleware'
import Cookies from 'cookies'

var keys = ['keyboard cat']

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS']
  })
)

export default async function handler(req, res) {
  // Run cors
  await cors(req, res)

  // Set cookie
  var cookies = new Cookies(req, res, { keys: keys })

  cookies.set('rachio-auth', 'abc', { signed: true })

  // Rest of the API logic
  res.json({ message: `${req.query.toString()}` })
}
