import React from 'react'
import './ListItem.css'
function ListItem(props) {
    const deleteItem=()=>{
        props.deleting(props.item)
    }
    return (
        <>
            {props.item&&<div className="list">
                <p className="text">{props.item}</p>
                {props.item&&<img onClick={deleteItem} src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0yNTYgNTEyYy02OC4zNzg5MDYgMC0xMzIuNjY3OTY5LTI2LjYyODkwNi0xODEuMDE5NTMxLTc0Ljk4MDQ2OS00OC4zNTE1NjMtNDguMzUxNTYyLTc0Ljk4MDQ2OS0xMTIuNjQwNjI1LTc0Ljk4MDQ2OS0xODEuMDE5NTMxczI2LjYyODkwNi0xMzIuNjY3OTY5IDc0Ljk4MDQ2OS0xODEuMDE5NTMxYzQ4LjM1MTU2Mi00OC4zNTE1NjMgMTEyLjY0MDYyNS03NC45ODA0NjkgMTgxLjAxOTUzMS03NC45ODA0NjlzMTMyLjY2Nzk2OSAyNi42Mjg5MDYgMTgxLjAxOTUzMSA3NC45ODA0NjljNDguMzUxNTYzIDQ4LjM1MTU2MiA3NC45ODA0NjkgMTEyLjY0MDYyNSA3NC45ODA0NjkgMTgxLjAxOTUzMXMtMjYuNjI4OTA2IDEzMi42Njc5NjktNzQuOTgwNDY5IDE4MS4wMTk1MzFjLTQ4LjM1MTU2MiA0OC4zNTE1NjMtMTEyLjY0MDYyNSA3NC45ODA0NjktMTgxLjAxOTUzMSA3NC45ODA0Njl6bTAtNDcyYy0xMTkuMTAxNTYyIDAtMjE2IDk2Ljg5ODQzOC0yMTYgMjE2czk2Ljg5ODQzOCAyMTYgMjE2IDIxNiAyMTYtOTYuODk4NDM4IDIxNi0yMTYtOTYuODk4NDM4LTIxNi0yMTYtMjE2em0xMTAgMTk1Ljk4MDQ2OWgtMjIwdjQwaDIyMHptMCAwIi8+PC9zdmc+" alt="remove__item" />}
            </div>}
        </>
    )
}

export default ListItem
