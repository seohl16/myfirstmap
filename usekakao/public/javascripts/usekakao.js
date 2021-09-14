
// const axios= require('axios');
const cheerio = require('cheerio');
const request = require('request');
// const phantom = require('phantom');
// const puppeteer = require('puppeteer');

// import axios from 'axios';
// import { printT} from "./another.js"
// import * as cheerio from '../../node_modules/cheerio'

// axios.get("https://cors-anywhere.herokuapp.com/https://example.com");

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
	document.getElementById("resulturl").innerHTML = null;
	for (var i of Array(content_arr.length).keys()){
		ps.keywordSearch(content_arr[i], placeSearchCB);
	}
	// ps.keywordSearch(content, placeSearchCB);
})

// var cnt = 0;
// var resultlist = [];

// function delay(ms) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function(){
//             resolve();
//         },ms);
//     });
// }

// function getHTML(url) {
//     return new Promise(resolve=>{
//         delay(300).then(function() {
//             axios.get(url).then(function(data) {
//                 resolve(data);
//             })
// 			.catch(error => {
// 				console.log(error.response);
// 			});
//         });
//     })    
// }

// function makeJSON(workList) {
//     getHTML(workList).then(html => {
//         let result = {};
//         const $ = cheerio.load(html);
// 		// console.log($);
//         let title = $('title');
// 		console.log(title);
//         // result['date'] = $("body").find(".tit_loc").text();
//         // result['content_trans'] = $("body").find(".ins_view_pd").find(".paragraph").eq(0).text();
//         // result['content_origin'] = $("body").find(".ins_view_pd").find(".paragraph").eq(1).text();
//         // console.log(result);
// 		return result;
//     })
//     // 추가 작성
//     // .then(res => {
//     //     cnt++;
//     //     resultList.push(res);
//     //     if(workList.length == cnt){
//     //         fs.writeFile('result_json.txt', JSON.stringify(resultList), 'utf8', function(error){
//     //             console.log('write end');
//     //         });
//     //     } else {
//     //         makeJSON(workList);
//     //     }
//     //     console.log(cnt);
//     // });
// }

// request({
//     method: 'GET',
//     url: 'https://cors-anywhere.herokuapp.com/http://place.map.kakao.com/8836576'
// }, (err, res, body) => {

//     if (err) return console.error(err);

//     let $ = cheerio.load(body);

//     let h1El = $('div');

//     let parentEl = h1El.parent();

//     console.log(h1El.tagName)
// });

// const axios = require('axios');
// axios.get(`https://cors-anywhere.herokuapp.com/https://thebook.io/080212`)
//     .then(dataa => {
//         console.log(dataa);
//     });

// phantom.create(function (ph) {
// 	ph.createPage(function (page) {
// 		var url = "https://cors-anywhere.herokuapp.com/https://place.map.kakao.com/8836576";
// 		page.open(url, function () {
// 			page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
// 				page.evaluate(function () {
// 					$('.wrap_mapdetail, #kakaoWrap > div').each(function(index, item){
// 						console.log($(item).find('a').attr('href'));
// 					});
// 				}), function () {
// 					ph.exit()
// 				};
// 			});
// 		});
// 	});
// })

// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   await page.goto('https://cors-anywhere.herokuapp.com/https://www.npmjs.com/');

//   const textContent = await page.evaluate(() => {
//     return document.querySelector('.npm-expansions').textContent
//   });

//   console.log(textContent); /* No Problem Mate */

//   browser.close();
// })();

// const request = require('request');
request('https://cors-anywhere.herokuapp.com/https://place.map.kakao.com/8836576', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

let $href = [];
axios.get(`https://cors-anywhere.herokuapp.com/https://place.map.kakao.com/8836576`)
    .then(dataa => {
        const $ = cheerio.load(dataa.data);
		console.log($);
		console.log(dataa.data);
        // $('div.location_present').each((index, item)=>{
		// 	// var temp = $(item).html();
		// 	// console.log(temp);
		// 	$href.push($(item).attr('href'));
		// });
		$('.wrap_mapdetail, #kakaoWrap > div').each((index, item) => {
			var temp = $(item).html();
			console.log(temp);
		})
		// console.log($('div[class="location_present"]').text());
		// console.log("hi");
    });

// axios.get(`https://cors-anywhere.herokuapp.com/https://thebook.io/080212/`)
// 	.then(dataa => {
// 		const $ = cheerio.load(dataa.data);
// 		$('section.book-toc>ul>li>a').each((index, item)=>{
// 			// var temp = $(item).html();
// 			// console.log(temp);
// 			$href.push(item.attribs.href)
// 		});
// 		$('section.book-toc').each((index, item) => {
// 			var temp = $(item).html();
// 			console.log(temp);
// 		})
// 	});

	function printNewTarget(oldtarget){
	const {category_group_code, category_group_name, distance, phone, address_name, id, ...target} = oldtarget;
	console.log(target);
	let output = '';
	for (var key in target) {
		output += key + ': '+ target[key] + ';\n';
		// if (key === "place_url"){
		// 	var aTag = '<p> An absolute URL : <a href="'+ target[key] + '">'+"text"+'</a></p>';
		// 	var a =  document.getElementById("result")
		// 	a.innerHTML += aTag;
		// }
	}
	var parent = document.getElementById("resulturl");
	parent.innerHTML += `<a href=${target["place_url"]} target="_blank">${target["place_name"]}<a><br>`
	// makeJSON("https://cors-anywhere.herokuapp.com/https://example.com");
	// $.ajax({url:target['place_url'], success: function(data) {alert(data);}});
	// output += '}'
	// const http_req = new XMLHttpRequest();
 
	// http_req.open("GET", "https://cors-anywhere.herokuapp.com/https://stackoverflow.com/", true);
	// http_req.send();
	// alert(http_req.responseText);
	// document.write(http_req.responseText);
	document.getElementById("result").innerText += output + "\n";
	console.log($href);
	// printT();
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
