import "./style.css"
import img from "./../../jpg/01.jpg"

function EventHomebox () {
    return(
        <div className="admin">
            <div className="admindiv">
                <div className="admindivup">
                    <div className="admindivupleft">
                        <p className="pading">Студенческая весна 2024</p>
                    </div>
                    <div className="admindivupright"> 15 Января </div>
                </div>
                <div className="admindivdown">
                    <div>
                        <img className="admindivdownLeft" src={img}/>
                    </div>
                    <div className="admindivdownRight">Ежегодное творческое мероприятие, на котором студенты пробуют себя.</div>
                </div>
            </div>
        </div>
    );
}

export default EventHomebox;