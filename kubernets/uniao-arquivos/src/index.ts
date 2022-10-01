import express, { Request, Response} from "express";

const app = express()

app.set('view engine', 'ejs');

app.get('/', (req: Request, res: Response) => {
  res.json({title: 'Kubernets'})
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})