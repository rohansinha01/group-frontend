
const URL = process.env.REACT_APP_URL

export const bookmarkLoader = async () => {
    const response = await fetch(`${URL}/bookmark`)
    const data = await response.json()
    return data
}


