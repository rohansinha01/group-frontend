
const URL = process.env.REACT_APP_URL

export const bookmarkLoader = async () => {
    const response = await fetch(`${URL}/bookmark`)
    const data = await response.json()
    return data
}

export const singleBookmarkLoader = async ({params}) => {
    const response = await fetch(`${URL}/bookmark/${params.id}`)
    const data = await response.json()
    return data
}

