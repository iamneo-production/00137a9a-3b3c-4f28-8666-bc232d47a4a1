package com.example.demo.volunteeroop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ConfirmService {

    private final ConfirmRepo confirmationRepository;

    @Autowired
    public ConfirmService(ConfirmRepo confirmationRepository) {
        this.confirmationRepository = confirmationRepository;
    }

    public Confirmation registerConfirmation(Confirmation confirmation) {
        return confirmationRepository.save(confirmation);
    }
}
