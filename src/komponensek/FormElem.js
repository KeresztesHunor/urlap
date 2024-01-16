import { useState } from "react";

function FormElem(props)
{
    const [obj, setObj] = useState({
        nev: "",
        szulev: 2000
    });
    const valtozasEsemeny = event => {
        const OBJ = {...obj};
        OBJ[event.target.id] = event.target.value;
        setObj(OBJ);
    };
    return (
        <form onSubmit={event => {
            event.preventDefault();
            props.adatKuld({...obj});
        }}>
            <div>
                <label htmlFor="nev">Név:</label>
                <input type="text" id="nev" name="nev" value={obj.nev} onChange={valtozasEsemeny} />
            </div>
            <div>
                <label htmlFor="szulev">Születési év:</label>
                <input type="number" id="szulev" name="szulev" value={obj.szulev} min="1900" max="2024" onChange={valtozasEsemeny} />
            </div>
            <input type="submit" value="Ok" />
        </form>
    );
}

export default FormElem;