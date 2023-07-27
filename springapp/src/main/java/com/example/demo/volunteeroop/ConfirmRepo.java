package com.example.demo.volunteeroop;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConfirmRepo extends JpaRepository<Confirmation, Long> {

	Confirmation save(Confirmation confirmation);

	Confirmation findByEmail(String email);
    
}