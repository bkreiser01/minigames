import axios from "axios"

export function validateObject(obj) {
    if (!(typeof obj === 'object')) {
        throw new Error(`Input is not an object`)
    }

}

export async function getAPI(url) {
    let { data } = await axios.get(url)

    return data
}