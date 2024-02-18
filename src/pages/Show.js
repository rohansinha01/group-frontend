import { useLoaderData, Form } from "react-router-dom"

const ShowOne = () => {
    const singleBookmark = useLoaderData()
    console.log(singleBookmark)
    return (
        <div>
            <h1>{singleBookmark.name}</h1>
            <h1>Update the Bookmark</h1>
            <Form action={`/update/${singleBookmark._id}`} method='post'>
                <input type='input' name='name' value={singleBookmark.name} />
                <input type='input' name='url' value={singleBookmark.url} />
                <input type='submit' value={`update ${singleBookmark.name}`}/>
            </Form>
        </div>
    )
}

export default ShowOne