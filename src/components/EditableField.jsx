import {useRef, useState} from "react";

function EditableField (props) {
    const value = props.value
    const [editMode, setEditMode] = useState(props.editMode || false)
    const inputRef = useRef()

    function swapMode() {
        if(editMode){
            props.onNewValue(inputRef.current.value)
        }
        setEditMode(!editMode)
    }

    function onKeyDown (event) {
        if(event.keyCode === 13) {
            props.onNewValue(inputRef.current.value)
            setEditMode(false)
        }
    }

    return(
        <>
            {editMode ? <input type="text" defaultValue={value} ref={inputRef} onKeyDown={onKeyDown}/> : <> {value} </>}
            <button className="small transparent emoji" onClick={swapMode}>🖊</button>
        </>
    );
}

export default EditableField