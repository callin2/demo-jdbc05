package net.bitnine.agensbrowser.bundle.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import net.bitnine.agensbrowser.bundle.model.AdminSession;

public interface AdminSessionsDAO {

	List<AdminSession> getAllSessions();
	List<AdminSession> getAllSessionsByPid(Integer pid);
	
}
