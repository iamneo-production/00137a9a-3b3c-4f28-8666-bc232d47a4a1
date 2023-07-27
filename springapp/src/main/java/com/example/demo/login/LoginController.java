package com.example.demo.login;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@RequestMapping("/")
@CrossOrigin(origins = {"http://localhost:3000"})
public class LoginController {

    private LoginService loginService;

    @Autowired
    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping("/post")
    	public Login createUser(@RequestBody Login user) {
        return loginService.registerUser(user);
    }
    
    @GetMapping("/get")
    public List<Login> getAllUsers() {
        return loginService.getAllUsers();
    }

    @GetMapping("/get/{id}")
    public Login getUserById(@PathVariable Long id) {
        return loginService.getUserById(id);
    }

    @PutMapping("/put")
    public Login updateUser(@RequestBody Login user) {
        return loginService.updateUser(user);
    }

    @DeleteMapping("/put/{id}")
    public void deleteUser(@PathVariable Long id) {
        loginService.deleteUser(id);
    }
}
