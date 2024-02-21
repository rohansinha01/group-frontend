import { useLoaderData, Form } from "react-router-dom"


const ShowOne = () => {
    const singleBookmark = useLoaderData()
    sessionStorage.setItem('ID', `${singleBookmark._id}`)
    const value = sessionStorage.getItem('ID')
    console.log(value)

    console.log(singleBookmark)
    return (
        <div className="header">
            <h1 className="nav-title">{singleBookmark.name}</h1>
            <h1 className="nav-title">Update the Bookmark</h1>
            <Form className="add-form" action={`/update/${singleBookmark._id}`} method='post'>
                <input type='input' name='name' className="field" defaultValue={singleBookmark.name} />
                <input type='input' name='url' className="field" defaultValue={singleBookmark.url} />
                <input type='submit' className="field" value={`update ${singleBookmark.name}`}/>
            </Form>
            {/* <h2 className="nav-title">Delete Book</h2> */}
            <Form className="add-form" action={`/delete/${singleBookmark._id}`} method='post'>
                <input className="delete-button" type='submit' value={`Remove ${singleBookmark.name}`}/>
            </Form>
        </div>
    )
}

export default ShowOne