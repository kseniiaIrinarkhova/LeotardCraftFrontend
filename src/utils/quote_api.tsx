import axios from "axios";
import { getErrorMessage } from "./error.util";


const QUOTE_API_URI = "https://api.api-ninjas.com/v1/quotes?category=dreams"

async function getQuotation() {
        //call quote API

    try {
        let res = await axios({
            method: 'GET',
            url: QUOTE_API_URI,
            headers: {
                'x-api-key': import.meta.env.VITE_QUOTE_API_KEY || ""
            }
        })
        console.log(res.data)
        return res.data[0]
    } catch (err) {
        throw getErrorMessage(err);
    }
    
}

export {getQuotation}