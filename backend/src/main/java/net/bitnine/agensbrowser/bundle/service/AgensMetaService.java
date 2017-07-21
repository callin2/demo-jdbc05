package net.bitnine.agensbrowser.bundle.service;

import java.util.List;

import net.bitnine.agensbrowser.bundle.model.ConnectRequest;
import net.bitnine.agensbrowser.bundle.model.LabelMetaRequest;
import net.bitnine.agensbrowser.bundle.model.ResultResponse;
import net.bitnine.agensbrowser.bundle.model.meta.AgensDatabase;
import net.bitnine.agensbrowser.bundle.model.meta.AgensNeighbor;
import net.bitnine.agensbrowser.bundle.model.meta.AgensProperty;

public interface AgensMetaService {

	void loadAgensMeta(ConnectRequest cr);	
	
	AgensDatabase getMetaBySessionId(String sessionId);
	
	boolean addConnection(ConnectRequest cr);

	boolean removeConnection(String sessionId);

	boolean isAlive(String sessionId);

	List<AgensProperty> getLabelProperties(LabelMetaRequest param);
	
	Long getLabelCount(LabelMetaRequest param);
	
	void query(ResultResponse result);

	List<AgensNeighbor> getNeighbors(String sessionId, String vid );
	
}
