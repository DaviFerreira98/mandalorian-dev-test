package org.acme.redis;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.PathParam;
import javax.ws.rs.PUT;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.Path;
import javax.ws.rs.POST;
import javax.ws.rs.DELETE;
import javax.ws.rs.core.MediaType;
import java.util.List;

import io.smallrye.mutiny.Uni;

@Path("/add/task")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TarefasController {

    @Inject
    TarefasService service;

    @GET
    public String getTask(@PathParam("key") String key) {
    	return service.get(key);
    }
    @POST
    public Tarefas postTask(Tarefas tarefas) {
        service.set(tarefas.key, tarefas.value);
        return tarefas;
    }

}
