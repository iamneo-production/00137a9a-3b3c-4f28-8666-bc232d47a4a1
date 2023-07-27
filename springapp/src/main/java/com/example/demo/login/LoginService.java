package com.example.demo.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoginService {

    private final LoginRepo loginRepository;

    @Autowired
    public LoginService(LoginRepo loginRepository) {
        this.loginRepository = loginRepository;
    }

    public Login registerUser(Login user) {
        return loginRepository.save(user);
    }

    public List<Login> getAllUsers() {
        return loginRepository.findAll();
    }

    public Login getUserById(Long id) {
        return loginRepository.findById(id).orElse(null);
    }

    public Login updateUser(Login user) {
        return loginRepository.save(user);
    }

    public void deleteUser(Long id) {
        loginRepository.deleteById(id);
    }
}
