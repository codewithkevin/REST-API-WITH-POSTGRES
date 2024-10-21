import express, { json, urlencoded } from 'express'
import productRoutes from "./products/routes"

const port = 3000

const app = express()

app.use(urlencoded({ extended: true }))
app.use(json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//products 
app.use('/products', productRoutes)


app.listen(port, () => {
    console.log(`Running on ${port}`)
})