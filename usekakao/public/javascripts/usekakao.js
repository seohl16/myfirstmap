
// const axios= require('axios');
// const cheerio = require('cheerio');
// import axios from 'axios';

var input = document.getElementById("search_input");
document.getElementsByClassName("result").innerText = input;

// function printName()  {
// 	const name = document.getElementById('search_input').value;
// 	document.getElementById("result").innerText = name;
// }

let ps = new kakao.maps.services.Places();
let search_arr = [];

$("#search_input").on("keydown", function(e){
	if (e.keyCode === 13){
		let content = $(this).val();
		let content_arr = content.split(',');
		document.getElementById("result").innerText = null;
		for (var i of Array(content_arr.length).keys()){
			ps.keywordSearch(content_arr[i], placeSearchCB);
		}

		// ps.keywordSearch(content, placeSearchCB);
	}
})

$("#search_button").on("click", function(e) {
	let content = $("#search_input").val();
	let content_arr = content.split(',');
	document.getElementById("result").innerText = null;
	for (var i of Array(content_arr.length).keys()){
		ps.keywordSearch(content_arr[i], placeSearchCB);
	}
	// ps.keywordSearch(content, placeSearchCB);
})

function printNewTarget(oldtarget){
	const {category_group_code, category_group_name, distance, phone, ...target} = oldtarget;
	console.log(target);
	let output = '';
	for (var key in target) {
		output += key + ': '+ target[key] + ';\n';
	}
	// $.ajax({url:target['place_url'], success: function(data) {alert(data);}});
	// output += '}'
	// const http_req = new XMLHttpRequest();
 
	// http_req.open("GET", "https://cors-anywhere.herokuapp.com/https://stackoverflow.com/", true);
	// http_req.send();
	// alert(http_req.responseText);
	// document.write(http_req.responseText);
	document.getElementById("result").innerText += output + "\n";
	return target;
}

function placeSearchCB(data, status, pagination){
	if (status === kakao.maps.services.Status.OK){
		let oldtarget = data[0];
		printNewTarget(oldtarget);


	// 	console.log(target);
	// 	const lat = target.y;
	// 	const lng = target.x;
	// 	const latlng = new naver.maps.LatLng(lat, lng);
	// 	marker = new naver.maps.Marker({
	// 		map:map, 
	// 		position : latlng,
	// 	})
	// 	if (search_arr.length == 0){
	// 		search_arr.push(marker);
	// 	} else {
	// 		search_arr.push(marker);
	// 		let pre_marker = search_arr.splice(0,1);
	// 		pre_marker[0].setMap(null);
	// 	}
	// 	map.setZoom(14, false);
	// 	map.panTo(latlng);
	} else {
		alert("검색결과가 없습니다. ");
	}
}
