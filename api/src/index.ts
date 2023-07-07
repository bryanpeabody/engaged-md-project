import express from "express"
import { validateCreditCardNumber } from "./validators";

const app = express();

const port = 8080;

// Routes
app.get('/validate/:ccNum', (req, res) => {
    const isValid = validateCreditCardNumber(req.params.ccNum);
    res.set('Access-Control-Allow-Origin', '*');
    res.json({
        isValid
    });
})

// Start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );