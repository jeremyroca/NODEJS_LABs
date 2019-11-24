import express = require('express')

const app = express()
const port: string = process.env.PORT || '1338'

const metrics = require('./metrics.js')

const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

app.set('views', __dirname + "/view")

app.set('view engine', 'ejs')


app.get('/',(req: any, res: any) => {
	res.render('home.ejs')
	res.end()
})

app.get('/hello/:name', (req: any, res: any) => {
	res.render('hello.ejs', {name: req.params.name})
	res.end()
})


app.get('/metrics.json', (req: any, res: any) => {
	metrics.get((err: any, data: any) => {
		if(err) throw err
    	res.status(200).json(data)
  	})
})


app.listen(port, (err: Error) => {
  if (err) {
    throw err
  }
  console.log(`server is listening on port ${port}`)
})
