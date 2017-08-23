'use strict';

function ready(fn) {
  if (document.readyState != 'loading')
    fn();
  else if (document.addEventListener)
    document.addEventListener('DOMContentLoaded', fn);
  else
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading')
        fn();
    });
}

function setPriceByValues(first, second, data) {
	var containerButton = document.getElementsByClassName("filter-button")[0];
	var btnLink = document.getElementById("btn-link");
	var setPrice = data.contratos[parseInt(first)].planes[parseInt(second)].plan.precio;
	var setLink = data.contratos[parseInt(first)].planes[parseInt(second)].plan.link;

	if (first == "0" && second == "4"){
		containerButton.style.display = "none";
	}else{
		containerButton.style.display = "block";
	}
	price.innerHTML = setPrice;
	btnLink.href = setLink;
}

function getPriceByValues(data) {
	contracts.onchange = function(ev){
										//valor 1er select, valor 2do select
		setPriceByValues(ev.target.value, plans.value, data);
	};
	plans.onchange = function(ev){
										//valor 1er select, valor 2do select
		setPriceByValues(contracts.value, ev.target.value, data);
	};
}

function setValuesForSelects(data){
	var opt;

  for (var i = 0; i < data.contratos.length; i++) {
  	opt = document.createElement("option");
  	opt.value = i;
  	opt.textContent = data.contratos[i].nombre;
  	contracts.appendChild(opt);
  }

  for (var j = 0; j < data.contratos[0].planes.length; j++) {
  	opt = document.createElement("option");
  	opt.value = j;
  	opt.textContent = data.contratos[0].planes[j].plan.nombre;
  	plans.appendChild(opt);
  }

}

var init = function() {
	var contracts = document.getElementById("contracts");
	var plans = document.getElementById("plans");
	var price = document.getElementById("price");
	
	var data = {
		contratos: [
			{
				nombre: "Línea Nueva",
				planes: [
					{
						plan: {
							nombre: "Plan vuela 4G S/ 59",
							precio: "1849",
							link: "http://tiendaonline.movistar.com.pe/campanas/form-linea-nueva-desktop-3/?c=HUAVTR1"
						}
					},
					{
						plan: {
							nombre: "Plan vuela 4G S/ 79",
							precio: "1819",
							link: "http://tiendaonline.movistar.com.pe/campanas/form-linea-nueva-desktop-3/?c=HUAVTR2"
						}
					},
					{
						plan: {
							nombre: "Plan vuela 4G S/ 99",
							precio: "1809",
							link: "http://tiendaonline.movistar.com.pe/campanas/form-linea-nueva-desktop-3/?c=HUAVTR3"
						}
					},
					{
						plan: {
							nombre: "Plan vuela 4G S/ 139",
							precio: "1499",
							link: "http://tiendaonline.movistar.com.pe/campanas/form-linea-nueva-desktop-3/?c=HUAVTR4"
						}
					},
					{
						plan: {
							nombre: "Plan vuela 4G S/ 199",
							precio: "1349",
							link: "http://tiendaonline.movistar.com.pe/campanas/form-linea-nueva-desktop-3/?c=HUAVTR5"
						}
					}
				]
			},
			{
				nombre: "Portabilidad",
				planes: [
					{
						plan: {
							nombre: "Plan vuela 4G S/ 59",
							precio: "1839",
							link: "http://tiendaonline.movistar.com.pe/campanas/form-linea-nueva-desktop-3/?c=HUAVTR6"
						}
					},
					{
						plan: {
							nombre: "Plan vuela 4G S/ 79",
							precio: "1809",
							link: "http://tiendaonline.movistar.com.pe/campanas/form-linea-nueva-desktop-3/?c=HUAVTR7"
						}
					},
					{
						plan: {
							nombre: "Plan vuela 4G S/ 99",
							precio: "1799",
							link: "http://tiendaonline.movistar.com.pe/campanas/form-linea-nueva-desktop-3/?c=HUAVTR8"
						}
					},
					{
						plan: {
							nombre: "Plan vuela 4G S/ 139",
							precio: "1349",
							link: "http://tiendaonline.movistar.com.pe/campanas/form-linea-nueva-desktop-3/?c=HUAVTR9"
						}
					},
					{
						plan: {
							nombre: "Plan vuela 4G S/ 199",
							precio: "1199",
							link: "http://tiendaonline.movistar.com.pe/campanas/form-linea-nueva-desktop-3/?c=HUAVTR10"
						}
					}
				]
			},
			{
				nombre: "Renovación",
				planes: [
					{
						plan: {
							nombre: "Plan vuela 4G S/ 59",
							precio: "1839",
							link: "http://tiendaonline.movistar.com.pe/campanas/form-linea-nueva-desktop-3/?c=HUAVTR11"
						}
					},
					{
						plan: {
							nombre: "Plan vuela 4G S/ 79",
							precio: "1809",
							link: "http://tiendaonline.movistar.com.pe/campanas/form-linea-nueva-desktop-3/?c=HUAVTR12"
						}
					},
					{
						plan: {
							nombre: "Plan vuela 4G S/ 99",
							precio: "1799",
							link: "http://tiendaonline.movistar.com.pe/campanas/form-linea-nueva-desktop-3/?c=HUAVTR13"
						}
					},
					{
						plan: {
							nombre: "Plan vuela 4G S/ 139",
							precio: "1349",
							link: "http://tiendaonline.movistar.com.pe/campanas/form-linea-nueva-desktop-3/?c=HUAVTR14"
						}
					},
					{
						plan: {
							nombre: "Plan vuela 4G S/ 199",
							precio: "1199",
							link: "http://tiendaonline.movistar.com.pe/campanas/form-linea-nueva-desktop-3/?c=HUAVTR15"
						}
					}
				]
			}
		]
	};

	setValuesForSelects(data);
	getPriceByValues(data);
};

ready(init);