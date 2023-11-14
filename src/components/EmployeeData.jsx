import  {useEffect, useState} from "react";
import EmployeeTemplate from "./EmployeeTemplate.jsx";
import Carousel from 'react-bootstrap/Carousel';

export default function EmployeeData() {

    const[employeeData, setEmployeeData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9191/image")
            .then((res) => res.json())
            .then((data) => setEmployeeData(data));
    }, []);


    const employee = employeeData.map( employee1 => (
        <Carousel.Item key={employee1.id}>
            <EmployeeTemplate
             imageData={employee1.imageData}
             message = {employee1.message}
             name = {employee1.employeeName}/>
        </Carousel.Item>

    ));

    return (
        <Carousel >
            {employee}
        </Carousel>
    )

}