package toy.project.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import toy.project.demo.domain.Member;
import toy.project.demo.persistance.MemberRepository;

@Service
public class SecurityUserDetailsService implements UserDetailsService {

    private final MemberRepository memberRepository;
    private final BCryptPasswordEncoder encoder;

    @Autowired
    public SecurityUserDetailsService(MemberRepository memberRepository, BCryptPasswordEncoder encoder) {
        this.memberRepository = memberRepository;
        this.encoder = encoder;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Member member = memberRepository.findByUsername(username);

        if (member == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }

        return User.builder()
                .username(member.getUsername())
                .password(member.getPassword())
                .authorities(member.getAuthorities())
                .build();
    }

    public boolean signUp(Member newMember) {
        if (memberRepository.existsByUsername(newMember.getUsername())) {
            return false; // Username already exists
        }

        newMember.setPassword(encoder.encode(newMember.getPassword()));
        newMember.setRole("ROLE_MANAGER");
        newMember.setEnabled(true);
        memberRepository.save(newMember);
        return true; // Signup successful
    }

    public boolean login(Member loginRequest) {
        Member member = memberRepository.findByUsername(loginRequest.getUsername());
        if (member != null && encoder.matches(loginRequest.getPassword(), member.getPassword())) {
            return true; // Login successful
        }
        return false; // Login failed
    }
}
