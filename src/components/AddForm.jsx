import React from 'react'
import SearchField from "./SearchField.jsx";

const AddForm = () => {
    return (
        <div className={"add-form"}>
            <form action="">
                <SearchField/>
                <button className={"btn addBtn heading"} type="submit">Add</button>
            </form>
        </div>
    )
}
export default AddForm
