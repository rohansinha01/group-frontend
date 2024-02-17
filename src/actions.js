import { redirect } from "react-router-dom";

const URL = process.env.REACT_APP_URL

// create people through the front end

export const createAction = async ({request}) => {
    const formData = await request.formData()
    const newBookmark = {
        name: formData.get('name'),
        url: formData.get('url'),

    }
    console.log(newBookmark)

    await fetch(`${URL}/bookmark`, {
        method: 'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBookmark)
    })

    return redirect('/') //go back to the landing page 
}