package com.csDarpa.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.csDarpa.dsmeta.entities.Sale;

//esse vai ser o componente responsavel por acessar o db
public interface SaleRepository extends JpaRepository<Sale, Long>{

}