package com.example.demo.volunteeroop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/")
@CrossOrigin
public class ConfirmController {

    private final ConfirmRepo confirmationRepository;

    @Autowired
    public ConfirmController(ConfirmRepo confirmationRepository) {
        this.confirmationRepository = confirmationRepository;
    }

    @PostMapping("/register")
    public Confirmation registerConfirmation(@RequestBody Confirmation confirmation) {
        return confirmationRepository.save(confirmation);
    }

    @GetMapping("/users")
    public List<Confirmation> getAllUsers() {
        return confirmationRepository.findAll();
    }

    @GetMapping("/users/{id}")
    public Optional<Confirmation> getUserById(@PathVariable Long id) {
        return confirmationRepository.findById(id);
    }

    @DeleteMapping("/users/{id}")
    public String deleteUserById(@PathVariable Long id) {
        confirmationRepository.deleteById(id);
        return "User with ID: " + id + " has been deleted successfully.";
    }

    @PutMapping("/users/{id}")
    public Confirmation updateUserById(@PathVariable Long id, @RequestBody Confirmation updatedConfirmation) {
        Optional<Confirmation> optionalConfirmation = confirmationRepository.findById(id);
        if (optionalConfirmation.isPresent()) {
            Confirmation existingConfirmation = optionalConfirmation.get();
            existingConfirmation.setFirstname(updatedConfirmation.getFirstname());
            existingConfirmation.setLastname(updatedConfirmation.getLastname());
            existingConfirmation.setEmail(updatedConfirmation.getEmail());
            existingConfirmation.setPassword(updatedConfirmation.getPassword());
            existingConfirmation.setConfirmpassword(updatedConfirmation.getConfirmpassword());
            existingConfirmation.setAddress(updatedConfirmation.getAddress());
            return confirmationRepository.save(existingConfirmation);
        } else {
            throw new IllegalArgumentException("User with ID " + id + " not found.");
        }
    }
}
