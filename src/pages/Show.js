import { useLoaderData, Form } from "react-router-dom"

const ShowOne = () => {
    const singleBookmark = useLoaderData()
    console.log(singleBookmark)
    return (
        <div>
            <h1>{singleBookmark.name}</h1>
            <h1>Update the Bookmark</h1>
            <Form action={`/update/${singleBookmark._id}`} method='post'>
                <input type='input' name='name' defaultValue={singleBookmark.name} />
                <input type='input' name='url' defaultValue={singleBookmark.url} />
                <input type='submit' value={`update ${singleBookmark.name}`}/>
            </Form>
            <h2>Delete Book</h2>
            <Form action={`/delete/${singleBookmark._id}`} method='post'>
                <input type='submit' value={`Delete ${singleBookmark.name}`}/>
            </Form>
        </div>
    )
}

export default ShowOne