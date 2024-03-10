import React from 'react'
import SearchField from "./SearchField.jsx";
import Button from "./Button.jsx";

const AddForm = () => {
    return (
        <div>
            <form action="">
                <SearchField />
                <Button text={"Add"} className={"addBtn"}/>
            </form>
        </div>
    )
}
export default AddForm
