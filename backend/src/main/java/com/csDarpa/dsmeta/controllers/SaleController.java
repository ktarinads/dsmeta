package com.csDarpa.dsmeta.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.csDarpa.dsmeta.entities.Sale;
import com.csDarpa.dsmeta.services.SaleService;

@RestController
@RequestMapping(value = "/sales") //valor da rota, do caminho que vai ser acessado

public class SaleController {

	@Autowired
	private SaleService service;
	//método pra disponibilizar os métoods pro front
	@GetMapping 
	public List<Sale> findSales(){
		return service.findSales();
	}
	
}
