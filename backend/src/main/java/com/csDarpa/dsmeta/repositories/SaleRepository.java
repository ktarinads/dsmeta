package com.csDarpa.dsmeta.repositories;

import java.time.LocalDate;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.csDarpa.dsmeta.entities.Sale;

//esse vai ser o componente responsavel por acessar o db
public interface SaleRepository extends JpaRepository<Sale, Long>{
	//comando JPQL - adaptacao de SQL pro JPA
	@Query("SELECT obj FROM Sale obj WHERE obj.date BETWEEN :min AND :max ORDER BY obj.amount DESC")
	Page<Sale> findSales(LocalDate min, LocalDate max, Pageable pageable);
}