export default function EmployeeTemplate({name, message, imageData}){



    return(
        <div className="box" >
            <img src = {`data:image/jpeg;base64,${imageData}`} width = '250px'/>
            <h1> {name}</h1>
            <p> {`"` + message + `"`}</p>
        </div>
);
}