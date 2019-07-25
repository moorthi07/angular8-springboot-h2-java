package com.im.ngspringh2;


import com.im.ngspringh2.model.customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource
public interface CustomerRestRepository extends JpaRepository<customer, Long>{
}
 

