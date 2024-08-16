const url = 'http://localhost:8080'
const contentType = 'application/json';
const headers = {
    'content-type': contentType
}

/**
 * NET_TOOL
 * simplified get and set
 * 
 * @author George Muigai Njau
 */
export class NET_TOOL {
    constructor() { }

    static async Post(urlEndPoint, body) {
        return await fetch(`${url}/${urlEndPoint}`,
            {
                'method': 'POST',
                'headers': headers,
                'body': JSON.stringify(body)
            }
        )
    }

    static async Request(urlEndPoint) {
        return await fetch(`${url}/${urlEndPoint}`)
    }
}