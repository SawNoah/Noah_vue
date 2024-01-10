import { defineStore } from "pinia";
import axios from "axios";
export const useEmployee = defineStore('employees', {
    state: () => ({
        companyName: 'Employee.io',
        employees: [],
        Employee: '',
    }),
    getters: {
        getEmployee() {
            return this.Employee;
        }
    },
    actions: {
        async refreshEmployees() {
            const data = await axios.get('http://localhost:8000/api/employees_list');
            this.employees = data.data.employees;
            console.log("refresh employees");
        },
        updateEmployee(Employee) {
            this.Employee = Employee;
            console.log("Employee Updated", Employee);
        }
    }
})