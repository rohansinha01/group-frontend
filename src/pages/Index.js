import { Link, useLoaderData, Form } from "react-router-dom"

const ShowAll = () => {
    const bookmarks = useLoaderData()
    console.log(bookmarks)
    return (
        <div>
            <h1>Add a Bookmark</h1>
            <Form action={`/create`} method='post'>
                <input type='input' name='name' placeholder="bookmark" />
                <input type='input' name='url' placeholder="website" />
                <input type='submit' value={`create bookmark`}/>
            </Form>

            <h2>Bookmark List</h2>
            {bookmarks.map(v => {
                return (
                    <div key={v._id} className="bookmark">
                        <Link to={`/${v._id}`}>
                            <h4>{v.name}</h4>
                        </Link>
                        
                    </div>            
                )
            })}
            
        </div>
    )
}

export default ShowAll