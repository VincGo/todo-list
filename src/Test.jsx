import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

export default function Test() {
    const [souris, setSouris] = useState([]);

    function addSouris() {
        setSouris([...souris, nanoid()]);
    }

    function deleteSouris(id) {
        let pos = souris.findIndex((s) => s.id === id);
        if (pos > -1) {
            souris.splice(pos, 1);
            setSouris([...souris]);
        }
    }

    return (
        <>
            <button onClick={addSouris}>+ Ajouter un composant Souris</button>
            {souris.map((s) => (
                <Souris key={s} onDelete={deleteSouris} />
            ))}
        </>
    );
}

function Souris(props) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        document.addEventListener("mousemove", onMouseMove);

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    function onMouseMove(event) {
        setPosition({
            x: event.pageX,
            y: event.pageY,
        });
        console.log("Evenement mousemove déclenché !");
    }

    function deleteMe() {
        props.onDelete(props.key);
    }

    return (
        <>
            <h1>
                Position de la souris : {position.x}, {position.y}
                <button onClick={deleteMe}>❌</button>
            </h1>
        </>
    );
}
