package com.example.demo.profile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {
    
    private final ProfileRepository profileRepository;
    
    @Autowired
    public ProfileService(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }
    
    public Profile getProfileById(Long id) {
        return profileRepository.findById(id).orElse(null);
    }

	public Profile saveProfile(Profile profile) {
		// TODO Auto-generated method stub
		return null;
	}
}
