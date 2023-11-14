import {useEffect, useState} from "react";
import {Form, Button }from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

export default function EmployeeForm() {
    const [employee, setEmployee] = useState({
        employeeName : "",
        imageData: "",
        message: ""
    });

    const [successfull, setSuccessfull] = useState(false);
    const formData = new FormData();
    formData.append('image',employee.imageData);
    formData.append('employeeName', employee.employeeName);
    formData.append('message', employee.message);
    const options = {
        method: 'POST',
        body: formData
    };

    const onSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:9191/image', options)
            .then(response => response.json())
            .then(data => {console.log(data)
                setSuccessfull(true)})
            .catch(error => console.error(error));

        event.target.reset()

       setEmployee({employeeName: "", imageData: "", message: ""});
    };

    useEffect(() => {
        if(successfull)
        setInterval(() => setSuccessfull(false), 500);
    }, [successfull]);

    // @ts-ignore
    return (
        <div>
            {successfull && <Alert className="alert-success"> Employee accolade posted successfully</Alert>}
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Employee Name</Form.Label>
                    <Form.Control placeholder="John Dee" type="text" onChange={(event) => setEmployee({ ...employee, employeeName: event.target.value })} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Employee Accolade</Form.Label>
                    <Form.Control placeholder="Enter your text here ..." as="textarea" rows={3} onChange={(event) => setEmployee({ ...employee, message: event.target.value })} />
                </Form.Group>
                <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label>Employee Image</Form.Label>
                    <Form.Control type="file" size="lg" onChange={(event) => setEmployee({ ...employee, imageData: event.target.files[0] })} />
                </Form.Group>
                <Button type="submit">Submit form</Button>
            </Form>

        </div>
    );
}
