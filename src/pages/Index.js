import { Link, useLoaderData, Form } from "react-router-dom"

const ShowAll = () => {
    const bookmarks = useLoaderData()
    console.log(bookmarks)
    return (
        <div className="header">
            <h1 className="nav-title">Add a Bookmark</h1>
            <Form action={`/create`} method='post' className="add-form">
                <input type='input' name='name' placeholder="bookmark" className="field" />
                <input type='input' name='url' placeholder="website" className="field" />
                <input className="button" type='submit' value={`create bookmark`}/>
            </Form>

            <div className="container">
                <h2 className="bookmark-title">Bookmark List</h2>
                <div className="bookmarks">
                    {bookmarks.map(v => {
                        return (
                            <div key={v._id} className="bookmark">
                                <Link className="links" to={`/${v._id}`}>
                                    <h4>{v.name}</h4>
                                </Link>
                                
                            </div>            
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ShowAll