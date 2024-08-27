import axios from "axios";

const API_URL = "http://localhost:8080/api/employee";

class EmployeeService{
    
    getEmployees = () => {
        return axios.get(API_URL);
    }

    getEmployeeById = (id) => {
        return axios.get(`${API_URL}/${id}`);
    }

    async addEmployee(employee){
        return axios.post(`${API_URL}/add`, employee);
        // return axios.post(`${API_URL}/add`, employee, {
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //   }).then(response => response.data);
    }

    deleteEmployee(id){
        return axios.delete(`${API_URL}/delete-employee/${id}`);
    }

    updateEmployee(id, employee){
        return axios.put(`${API_URL}/update-employee/${id}`, employee)
    }
}

export default new EmployeeService();