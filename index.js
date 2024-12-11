import express from 'express'
import { fileURLToPath } from 'url'
import path from 'path'
import handlebars from 'express-handlebars'
import Handlebars from 'handlebars'
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access'

const app = express()
/* Configuração da pasta esttica */
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/* Configuração da visão */
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}))
app.set('view engine', 'handlebars')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res){
    res.send('Bem vindo ao estoque')
})

app.listen(3001, ()=> 'Servidor rodando em http:localhost:3000')