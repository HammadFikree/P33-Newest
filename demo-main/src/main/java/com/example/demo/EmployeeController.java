package com.example.demo;

import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class EmployeeController {
    @GetMapping("/employees")
    public List<Employee> getEmployees(){

        Employee emp1= new Employee(1,"Umang", "Singh");
        Employee emp2= new Employee(2,"A", "C");
        Employee emp3= new Employee(3,"B", "D");

        List<Employee> employeeList= new ArrayList<>();

        employeeList.add(emp1);
        employeeList.add(emp2);
        employeeList.add(emp3);
        if(CollectionUtils.isEmpty(employeeList)){
            return null;
        }
     return employeeList;

    }
}
