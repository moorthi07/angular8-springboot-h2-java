package com.im.ngspringh2;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.im.ngspringh2.model.address;

@CrossOrigin
@RepositoryRestResource
public interface addressRestRepository extends JpaRepository<address, Long>{
}
