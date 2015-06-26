$(document).ready(function(){
	function getUrlVars() {
    	var vars = [], hash;
    	var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    	for(var i = 0; i < hashes.length; i++)
    	{
        	hash = hashes[i].split('=');
        	vars.push(hash[0]);
        	vars[hash[0]] = hash[1];
    	}
    	return vars;
	}
	test1 = getUrlVars()['deck1'];
	test2 = getUrlVars()['deck2'];
	test3 = getUrlVars()['deck3'];
	test4 = getUrlVars()['deck4'];
	test5 = getUrlVars()['deck5'];
	test6 = getUrlVars()['deck6'];
	test7 = getUrlVars()['deck7'];
	test8 = getUrlVars()['deck8'];
		tsukaimaname = test1;
			$('#deck1').removeClass(deck1)
			.addClass(tsukaimaname);
			deck1 = tsukaimaname;
			$('.tsukaima').removeClass('deckon1');
			$('#'+deck1).addClass('deckon1');
			$('#'+deck1).html('デッキ選択中');
		tsukaimaname = test2;
			$('#deck2').removeClass(deck2)
			.addClass(tsukaimaname);
			deck2 = tsukaimaname;
			$('.tsukaima').removeClass('deckon2');
			$('#'+deck2).addClass('deckon2');
			$('#'+deck2).html('デッキ選択中');
		tsukaimaname = test3;
			$('#deck3').removeClass(deck3)
			.addClass(tsukaimaname);
			deck3 = tsukaimaname;
			$('.tsukaima').removeClass('deckon3');
			$('#'+deck3).addClass('deckon3');
			$('#'+deck3).html('デッキ選択中');
		tsukaimaname = test4;
			$('#deck4').removeClass(deck4)
			.addClass(tsukaimaname);
			deck4 = tsukaimaname;
			$('.tsukaima').removeClass('deckon4');
			$('#'+deck4).addClass('deckon4');
			$('#'+deck4).html('デッキ選択中');
		tsukaimaname = test5;
			$('#deck5').removeClass(deck5)
			.addClass(tsukaimaname);
			deck5 = tsukaimaname;
			$('.tsukaima').removeClass('deckon5');
			$('#'+deck5).addClass('deckon5');
			$('#'+deck5).html('デッキ選択中');
		tsukaimaname = test6;
			$('#deck6').removeClass(deck6)
			.addClass(tsukaimaname);
			deck6 = tsukaimaname;
			$('.tsukaima').removeClass('deckon6');
			$('#'+deck6).addClass('deckon6');
			$('#'+deck6).html('デッキ選択中');
		tsukaimaname = test7;
			$('#deck7').removeClass(deck7)
			.addClass(tsukaimaname);
			deck7 = tsukaimaname;
			$('.tsukaima').removeClass('deckon7');
			$('#'+deck7).addClass('deckon7');
			$('#'+deck7).html('デッキ選択中');
		tsukaimaname = test8;
			$('#deck8').removeClass(deck8)
			.addClass(tsukaimaname);
			deck8 = tsukaimaname;
			$('.tsukaima').removeClass('deckon8');
			$('#'+deck8).addClass('deckon8');
			$('#'+deck8).html('デッキ選択中');




});




jQuery( function() {
//deck1 = 1,
	jQuery( '#deck' ) . sortable( {
		helper:'clone',
		opacity: 0.5,
		scroll:false,
		stop: function(event, ui) {

		var shiriaratest = $('#deck').sortable('toArray').join(',');

		var deckon1test = $('.deckon1').attr('id');
		var deckon2test = $('.deckon2').attr('id');
		var deckon3test = $('.deckon3').attr('id');
		var deckon4test = $('.deckon4').attr('id');
		var deckon5test = $('.deckon5').attr('id');
		var deckon6test = $('.deckon6').attr('id');
		var deckon7test = $('.deckon7').attr('id');
		var deckon8test = $('.deckon8').attr('id');
		var shiriaratest2 = shiriaratest.replace('deck1',deckon1test)
										.replace('deck2',deckon2test)
										.replace('deck3',deckon3test)
										.replace('deck4',deckon4test)
										.replace('deck5',deckon5test)
										.replace('deck6',deckon6test)
										.replace('deck7',deckon7test)
										.replace('deck8',deckon8test);
		var deckhairetsu = shiriaratest2.split(",");
		var urltest = '?'+'deck1='+deckhairetsu[0]+'&deck2='+deckhairetsu[1]+'&deck3='+deckhairetsu[2]+'&deck4='+deckhairetsu[3]+'&deck5='+deckhairetsu[4]+'&deck6='+deckhairetsu[5]+'&deck7='+deckhairetsu[6]+'&deck8='+deckhairetsu[7];
		var newdeckhairetsu0 = deckhairetsu[0].substr(0,1);
		var newdeckhairetsu1 = deckhairetsu[1].substr(0,1);
		var newdeckhairetsu2 = deckhairetsu[2].substr(0,1);
		var newdeckhairetsu3 = deckhairetsu[3].substr(0,1);
		var newdeckhairetsu4 = deckhairetsu[4].substr(0,1);
		var newdeckhairetsu5 = deckhairetsu[5].substr(0,1);
		var newdeckhairetsu = [];
		newdeckhairetsu.push(newdeckhairetsu0,newdeckhairetsu1,newdeckhairetsu2,newdeckhairetsu3,newdeckhairetsu4,newdeckhairetsu5);
		$.unique(newdeckhairetsu);
		newdeckhairetsu.some(function(v,i){
			if (v=='u') newdeckhairetsu.splice(i,1);
			});
		newdeckhairetsu1 = newdeckhairetsu.length;
							if (newdeckhairetsu1 == 0 || newdeckhairetsu1 == 1) {
				$('#costkeisan').text('1 Tribe [Initial Mana 40(+10)]');}
				else if (newdeckhairetsu1 == 2) {
				$('#costkeisan').text('2 Tribe [Initial Mana 35(+5)]');}
				else {$('#costkeisan').text('3 Tribe [Initial Mana 30(No Bonus)]');};
		}
	} );
	jQuery( '#deck1' ) . droppable( {
		accept: '.flag1',
		drop: function(event, ui) {
			$(this).removeClass(deck1)
			.addClass(tsukaimaname);
			$('#'+deck1).html('');
			deck1 = tsukaimaname;
			$('.tsukaima').removeClass('deckon1');
			$('#'+deck1).addClass('deckon1');
			$('#'+deck1).html('デッキ選択中');

				var shiriaratest = $('#deck').sortable('toArray').join(',');

		var deckon1test = $('.deckon1').attr('id');
		var deckon2test = $('.deckon2').attr('id');
		var deckon3test = $('.deckon3').attr('id');
		var deckon4test = $('.deckon4').attr('id');
		var deckon5test = $('.deckon5').attr('id');
		var deckon6test = $('.deckon6').attr('id');
		var deckon7test = $('.deckon7').attr('id');
		var deckon8test = $('.deckon8').attr('id');
		var shiriaratest2 = shiriaratest.replace('deck1',deckon1test)
										.replace('deck2',deckon2test)
										.replace('deck3',deckon3test)
										.replace('deck4',deckon4test)
										.replace('deck5',deckon5test)
										.replace('deck6',deckon6test)
										.replace('deck7',deckon7test)
										.replace('deck8',deckon8test);
		var deckhairetsu = shiriaratest2.split(",");
		var urltest = '?'+'deck1='+deckhairetsu[0]+'&deck2='+deckhairetsu[1]+'&deck3='+deckhairetsu[2]+'&deck4='+deckhairetsu[3]+'&deck5='+deckhairetsu[4]+'&deck6='+deckhairetsu[5]+'&deck7='+deckhairetsu[6]+'&deck8='+deckhairetsu[7];
		var newdeckhairetsu0 = deckhairetsu[0].substr(0,1);
		var newdeckhairetsu1 = deckhairetsu[1].substr(0,1);
		var newdeckhairetsu2 = deckhairetsu[2].substr(0,1);
		var newdeckhairetsu3 = deckhairetsu[3].substr(0,1);
		var newdeckhairetsu4 = deckhairetsu[4].substr(0,1);
		var newdeckhairetsu5 = deckhairetsu[5].substr(0,1);
		var newdeckhairetsu = [];
		newdeckhairetsu.push(newdeckhairetsu0,newdeckhairetsu1,newdeckhairetsu2,newdeckhairetsu3,newdeckhairetsu4,newdeckhairetsu5);
		$.unique(newdeckhairetsu);
		newdeckhairetsu.some(function(v,i){
			if (v=='u') newdeckhairetsu.splice(i,1);
			});
		newdeckhairetsu1 = newdeckhairetsu.length;
							if (newdeckhairetsu1 == 0 || newdeckhairetsu1 == 1) {
				$('#costkeisan').text('1 Tribe [Initial Mana 40(+10)]');}
				else if (newdeckhairetsu1 == 2) {
				$('#costkeisan').text('2 Tribe [Initial Mana 35(+5)]');}
				else {$('#costkeisan').text('3 Tribe [Initial Mana 30(No Bonus)]');};
		},
	} );
	jQuery( '#deck2' ) . droppable( {
		accept: '.flag1',
		drop: function(event, ui) {
			$(this).removeClass(deck2)
			.addClass(tsukaimaname);
			$('#'+deck2).html('');
			deck2 = tsukaimaname;
			$('.tsukaima').removeClass('deckon2');
			$('#'+deck2).addClass('deckon2');
			$('#'+deck2).html('デッキ選択中');

			var shiriaratest = $('#deck').sortable('toArray').join(',');

		var deckon1test = $('.deckon1').attr('id');
		var deckon2test = $('.deckon2').attr('id');
		var deckon3test = $('.deckon3').attr('id');
		var deckon4test = $('.deckon4').attr('id');
		var deckon5test = $('.deckon5').attr('id');
		var deckon6test = $('.deckon6').attr('id');
		var deckon7test = $('.deckon7').attr('id');
		var deckon8test = $('.deckon8').attr('id');
		var shiriaratest2 = shiriaratest.replace('deck1',deckon1test)
										.replace('deck2',deckon2test)
										.replace('deck3',deckon3test)
										.replace('deck4',deckon4test)
										.replace('deck5',deckon5test)
										.replace('deck6',deckon6test)
										.replace('deck7',deckon7test)
										.replace('deck8',deckon8test);
		var deckhairetsu = shiriaratest2.split(",");
		var urltest = '?'+'deck1='+deckhairetsu[0]+'&deck2='+deckhairetsu[1]+'&deck3='+deckhairetsu[2]+'&deck4='+deckhairetsu[3]+'&deck5='+deckhairetsu[4]+'&deck6='+deckhairetsu[5]+'&deck7='+deckhairetsu[6]+'&deck8='+deckhairetsu[7];
		var newdeckhairetsu0 = deckhairetsu[0].substr(0,1);
		var newdeckhairetsu1 = deckhairetsu[1].substr(0,1);
		var newdeckhairetsu2 = deckhairetsu[2].substr(0,1);
		var newdeckhairetsu3 = deckhairetsu[3].substr(0,1);
		var newdeckhairetsu4 = deckhairetsu[4].substr(0,1);
		var newdeckhairetsu5 = deckhairetsu[5].substr(0,1);
		var newdeckhairetsu = [];
		newdeckhairetsu.push(newdeckhairetsu0,newdeckhairetsu1,newdeckhairetsu2,newdeckhairetsu3,newdeckhairetsu4,newdeckhairetsu5);
		$.unique(newdeckhairetsu);
		newdeckhairetsu.some(function(v,i){
			if (v=='u') newdeckhairetsu.splice(i,1);
			});
		newdeckhairetsu1 = newdeckhairetsu.length;
							if (newdeckhairetsu1 == 0 || newdeckhairetsu1 == 1) {
				$('#costkeisan').text('1 Tribe [Initial Mana 40(+10)]');}
				else if (newdeckhairetsu1 == 2) {
				$('#costkeisan').text('2 Tribe [Initial Mana 35(+5)]');}
				else {$('#costkeisan').text('3 Tribe [Initial Mana 30(No Bonus)]');};
		},
	} );
	jQuery( '#deck3' ) . droppable( {
		accept: '.flag1',
		drop: function(event, ui) {
			$(this).removeClass(deck3)
			.addClass(tsukaimaname);
			$('#'+deck3).html('');
			deck3 = tsukaimaname;
			$('.tsukaima').removeClass('deckon3');
			$('#'+deck3).addClass('deckon3');
			$('#'+deck3).html('デッキ選択中');

			var shiriaratest = $('#deck').sortable('toArray').join(',');

		var deckon1test = $('.deckon1').attr('id');
		var deckon2test = $('.deckon2').attr('id');
		var deckon3test = $('.deckon3').attr('id');
		var deckon4test = $('.deckon4').attr('id');
		var deckon5test = $('.deckon5').attr('id');
		var deckon6test = $('.deckon6').attr('id');
		var deckon7test = $('.deckon7').attr('id');
		var deckon8test = $('.deckon8').attr('id');
		var shiriaratest2 = shiriaratest.replace('deck1',deckon1test)
										.replace('deck2',deckon2test)
										.replace('deck3',deckon3test)
										.replace('deck4',deckon4test)
										.replace('deck5',deckon5test)
										.replace('deck6',deckon6test)
										.replace('deck7',deckon7test)
										.replace('deck8',deckon8test);
		var deckhairetsu = shiriaratest2.split(",");
		var urltest = '?'+'deck1='+deckhairetsu[0]+'&deck2='+deckhairetsu[1]+'&deck3='+deckhairetsu[2]+'&deck4='+deckhairetsu[3]+'&deck5='+deckhairetsu[4]+'&deck6='+deckhairetsu[5]+'&deck7='+deckhairetsu[6]+'&deck8='+deckhairetsu[7];
		var newdeckhairetsu0 = deckhairetsu[0].substr(0,1);
		var newdeckhairetsu1 = deckhairetsu[1].substr(0,1);
		var newdeckhairetsu2 = deckhairetsu[2].substr(0,1);
		var newdeckhairetsu3 = deckhairetsu[3].substr(0,1);
		var newdeckhairetsu4 = deckhairetsu[4].substr(0,1);
		var newdeckhairetsu5 = deckhairetsu[5].substr(0,1);
		var newdeckhairetsu = [];
		newdeckhairetsu.push(newdeckhairetsu0,newdeckhairetsu1,newdeckhairetsu2,newdeckhairetsu3,newdeckhairetsu4,newdeckhairetsu5);
		$.unique(newdeckhairetsu);
		newdeckhairetsu.some(function(v,i){
			if (v=='u') newdeckhairetsu.splice(i,1);
			});
		newdeckhairetsu1 = newdeckhairetsu.length;
							if (newdeckhairetsu1 == 0 || newdeckhairetsu1 == 1) {
				$('#costkeisan').text('1 Tribe [Initial Mana 40(+10)]');}
				else if (newdeckhairetsu1 == 2) {
				$('#costkeisan').text('2 Tribe [Initial Mana 35(+5)]');}
				else {$('#costkeisan').text('3 Tribe [Initial Mana 30(No Bonus)]');};
		},
	} );
	jQuery( '#deck4' ) . droppable( {
		accept: '.flag1',
		drop: function(event, ui) {
			$(this).removeClass(deck4)
			.addClass(tsukaimaname);
			$('#'+deck4).html('');
			deck4 = tsukaimaname;
			$('.tsukaima').removeClass('deckon4');
			$('#'+deck4).addClass('deckon4');
			$('#'+deck4).html('デッキ選択中');

			var shiriaratest = $('#deck').sortable('toArray').join(',');

		var deckon1test = $('.deckon1').attr('id');
		var deckon2test = $('.deckon2').attr('id');
		var deckon3test = $('.deckon3').attr('id');
		var deckon4test = $('.deckon4').attr('id');
		var deckon5test = $('.deckon5').attr('id');
		var deckon6test = $('.deckon6').attr('id');
		var deckon7test = $('.deckon7').attr('id');
		var deckon8test = $('.deckon8').attr('id');
		var shiriaratest2 = shiriaratest.replace('deck1',deckon1test)
										.replace('deck2',deckon2test)
										.replace('deck3',deckon3test)
										.replace('deck4',deckon4test)
										.replace('deck5',deckon5test)
										.replace('deck6',deckon6test)
										.replace('deck7',deckon7test)
										.replace('deck8',deckon8test);
		var deckhairetsu = shiriaratest2.split(",");
		var urltest = '?'+'deck1='+deckhairetsu[0]+'&deck2='+deckhairetsu[1]+'&deck3='+deckhairetsu[2]+'&deck4='+deckhairetsu[3]+'&deck5='+deckhairetsu[4]+'&deck6='+deckhairetsu[5]+'&deck7='+deckhairetsu[6]+'&deck8='+deckhairetsu[7];
		var newdeckhairetsu0 = deckhairetsu[0].substr(0,1);
		var newdeckhairetsu1 = deckhairetsu[1].substr(0,1);
		var newdeckhairetsu2 = deckhairetsu[2].substr(0,1);
		var newdeckhairetsu3 = deckhairetsu[3].substr(0,1);
		var newdeckhairetsu4 = deckhairetsu[4].substr(0,1);
		var newdeckhairetsu5 = deckhairetsu[5].substr(0,1);
		var newdeckhairetsu = [];
		newdeckhairetsu.push(newdeckhairetsu0,newdeckhairetsu1,newdeckhairetsu2,newdeckhairetsu3,newdeckhairetsu4,newdeckhairetsu5);
		$.unique(newdeckhairetsu);
		newdeckhairetsu.some(function(v,i){
			if (v=='u') newdeckhairetsu.splice(i,1);
			});
		newdeckhairetsu1 = newdeckhairetsu.length;
							if (newdeckhairetsu1 == 0 || newdeckhairetsu1 == 1) {
				$('#costkeisan').text('1 Tribe [Initial Mana 40(+10)]');}
				else if (newdeckhairetsu1 == 2) {
				$('#costkeisan').text('2 Tribe [Initial Mana 35(+5)]');}
				else {$('#costkeisan').text('3 Tribe [Initial Mana 30(No Bonus)]');};
		},
	} );
	jQuery( '#deck5' ) . droppable( {
		accept: '.flag1',
		drop: function(event, ui) {
			$(this).removeClass(deck5)
			.addClass(tsukaimaname);
			$('#'+deck5).html('');
			deck5 = tsukaimaname;
			$('.tsukaima').removeClass('deckon5');
			$('#'+deck5).addClass('deckon5');
			$('#'+deck5).html('デッキ選択中');

			var shiriaratest = $('#deck').sortable('toArray').join(',');

		var deckon1test = $('.deckon1').attr('id');
		var deckon2test = $('.deckon2').attr('id');
		var deckon3test = $('.deckon3').attr('id');
		var deckon4test = $('.deckon4').attr('id');
		var deckon5test = $('.deckon5').attr('id');
		var deckon6test = $('.deckon6').attr('id');
		var deckon7test = $('.deckon7').attr('id');
		var deckon8test = $('.deckon8').attr('id');
		var shiriaratest2 = shiriaratest.replace('deck1',deckon1test)
										.replace('deck2',deckon2test)
										.replace('deck3',deckon3test)
										.replace('deck4',deckon4test)
										.replace('deck5',deckon5test)
										.replace('deck6',deckon6test)
										.replace('deck7',deckon7test)
										.replace('deck8',deckon8test);
		var deckhairetsu = shiriaratest2.split(",");
		var urltest = '?'+'deck1='+deckhairetsu[0]+'&deck2='+deckhairetsu[1]+'&deck3='+deckhairetsu[2]+'&deck4='+deckhairetsu[3]+'&deck5='+deckhairetsu[4]+'&deck6='+deckhairetsu[5]+'&deck7='+deckhairetsu[6]+'&deck8='+deckhairetsu[7];
		var newdeckhairetsu0 = deckhairetsu[0].substr(0,1);
		var newdeckhairetsu1 = deckhairetsu[1].substr(0,1);
		var newdeckhairetsu2 = deckhairetsu[2].substr(0,1);
		var newdeckhairetsu3 = deckhairetsu[3].substr(0,1);
		var newdeckhairetsu4 = deckhairetsu[4].substr(0,1);
		var newdeckhairetsu5 = deckhairetsu[5].substr(0,1);
		var newdeckhairetsu = [];
		newdeckhairetsu.push(newdeckhairetsu0,newdeckhairetsu1,newdeckhairetsu2,newdeckhairetsu3,newdeckhairetsu4,newdeckhairetsu5);
		$.unique(newdeckhairetsu);
		newdeckhairetsu.some(function(v,i){
			if (v=='u') newdeckhairetsu.splice(i,1);
			});
		newdeckhairetsu1 = newdeckhairetsu.length;
							if (newdeckhairetsu1 == 0 || newdeckhairetsu1 == 1) {
				$('#costkeisan').text('1 Tribe [Initial Mana 40(+10)]');}
				else if (newdeckhairetsu1 == 2) {
				$('#costkeisan').text('2 Tribe [Initial Mana 35(+5)]');}
				else {$('#costkeisan').text('3 Tribe [Initial Mana 30(No Bonus)]');};
		},
	} );
	jQuery( '#deck6' ) . droppable( {
		accept: '.flag1',
		drop: function(event, ui) {
			$(this).removeClass(deck6)
			.addClass(tsukaimaname);
			$('#'+deck6).html('');
			deck6 = tsukaimaname;
			$('.tsukaima').removeClass('deckon6');
			$('#'+deck6).addClass('deckon6');
			$('#'+deck6).html('デッキ選択中');

			var shiriaratest = $('#deck').sortable('toArray').join(',');

		var deckon1test = $('.deckon1').attr('id');
		var deckon2test = $('.deckon2').attr('id');
		var deckon3test = $('.deckon3').attr('id');
		var deckon4test = $('.deckon4').attr('id');
		var deckon5test = $('.deckon5').attr('id');
		var deckon6test = $('.deckon6').attr('id');
		var deckon7test = $('.deckon7').attr('id');
		var deckon8test = $('.deckon8').attr('id');
		var shiriaratest2 = shiriaratest.replace('deck1',deckon1test)
										.replace('deck2',deckon2test)
										.replace('deck3',deckon3test)
										.replace('deck4',deckon4test)
										.replace('deck5',deckon5test)
										.replace('deck6',deckon6test)
										.replace('deck7',deckon7test)
										.replace('deck8',deckon8test);
		var deckhairetsu = shiriaratest2.split(",");
		var urltest = '?'+'deck1='+deckhairetsu[0]+'&deck2='+deckhairetsu[1]+'&deck3='+deckhairetsu[2]+'&deck4='+deckhairetsu[3]+'&deck5='+deckhairetsu[4]+'&deck6='+deckhairetsu[5]+'&deck7='+deckhairetsu[6]+'&deck8='+deckhairetsu[7];
		var newdeckhairetsu0 = deckhairetsu[0].substr(0,1);
		var newdeckhairetsu1 = deckhairetsu[1].substr(0,1);
		var newdeckhairetsu2 = deckhairetsu[2].substr(0,1);
		var newdeckhairetsu3 = deckhairetsu[3].substr(0,1);
		var newdeckhairetsu4 = deckhairetsu[4].substr(0,1);
		var newdeckhairetsu5 = deckhairetsu[5].substr(0,1);
		var newdeckhairetsu = [];
		newdeckhairetsu.push(newdeckhairetsu0,newdeckhairetsu1,newdeckhairetsu2,newdeckhairetsu3,newdeckhairetsu4,newdeckhairetsu5);
		$.unique(newdeckhairetsu);
		newdeckhairetsu.some(function(v,i){
			if (v=='u') newdeckhairetsu.splice(i,1);
			});
		newdeckhairetsu1 = newdeckhairetsu.length;
							if (newdeckhairetsu1 == 0 || newdeckhairetsu1 == 1) {
				$('#costkeisan').text('1 Tribe [Initial Mana 40(+10)]');}
				else if (newdeckhairetsu1 == 2) {
				$('#costkeisan').text('2 Tribe [Initial Mana 35(+5)]');}
				else {$('#costkeisan').text('3 Tribe [Initial Mana 30(No Bonus)]');};
		},
	} );
	jQuery( '#deck7' ) . droppable( {
		accept: '.flag1',
		drop: function(event, ui) {
			$(this).removeClass(deck7)
			.addClass(tsukaimaname);
			$('#'+deck7).html('');
			deck7 = tsukaimaname;
			$('.tsukaima').removeClass('deckon7');
			$('#'+deck7).addClass('deckon7');
			$('#'+deck7).html('デッキ選択中');

			var shiriaratest = $('#deck').sortable('toArray').join(',');

		var deckon1test = $('.deckon1').attr('id');
		var deckon2test = $('.deckon2').attr('id');
		var deckon3test = $('.deckon3').attr('id');
		var deckon4test = $('.deckon4').attr('id');
		var deckon5test = $('.deckon5').attr('id');
		var deckon6test = $('.deckon6').attr('id');
		var deckon7test = $('.deckon7').attr('id');
		var deckon8test = $('.deckon8').attr('id');
		var shiriaratest2 = shiriaratest.replace('deck1',deckon1test)
										.replace('deck2',deckon2test)
										.replace('deck3',deckon3test)
										.replace('deck4',deckon4test)
										.replace('deck5',deckon5test)
										.replace('deck6',deckon6test)
										.replace('deck7',deckon7test)
										.replace('deck8',deckon8test);
		var deckhairetsu = shiriaratest2.split(",");
		var urltest = '?'+'deck1='+deckhairetsu[0]+'&deck2='+deckhairetsu[1]+'&deck3='+deckhairetsu[2]+'&deck4='+deckhairetsu[3]+'&deck5='+deckhairetsu[4]+'&deck6='+deckhairetsu[5]+'&deck7='+deckhairetsu[6]+'&deck8='+deckhairetsu[7];
		var newdeckhairetsu0 = deckhairetsu[0].substr(0,1);
		var newdeckhairetsu1 = deckhairetsu[1].substr(0,1);
		var newdeckhairetsu2 = deckhairetsu[2].substr(0,1);
		var newdeckhairetsu3 = deckhairetsu[3].substr(0,1);
		var newdeckhairetsu4 = deckhairetsu[4].substr(0,1);
		var newdeckhairetsu5 = deckhairetsu[5].substr(0,1);
		var newdeckhairetsu = [];
		newdeckhairetsu.push(newdeckhairetsu0,newdeckhairetsu1,newdeckhairetsu2,newdeckhairetsu3,newdeckhairetsu4,newdeckhairetsu5);
		$.unique(newdeckhairetsu);
		newdeckhairetsu.some(function(v,i){
			if (v=='u') newdeckhairetsu.splice(i,1);
			});
		newdeckhairetsu1 = newdeckhairetsu.length;
							if (newdeckhairetsu1 == 0 || newdeckhairetsu1 == 1) {
				$('#costkeisan').text('1 Tribe [Initial Mana 40(+10)]');}
				else if (newdeckhairetsu1 == 2) {
				$('#costkeisan').text('2 Tribe [Initial Mana 35(+5)]');}
				else {$('#costkeisan').text('3 Tribe [Initial Mana 30(No Bonus)]');};
		},
	} );
	jQuery( '#deck8' ) . droppable( {
		accept: '.flag1',
		drop: function(event, ui) {
			$(this).removeClass(deck8)
			.addClass(tsukaimaname);
			$('#'+deck8).html('');
			deck8 = tsukaimaname;
			$('.tsukaima').removeClass('deckon8');
			$('#'+deck8).addClass('deckon8');
			$('#'+deck8).html('デッキ選択中');

			var shiriaratest = $('#deck').sortable('toArray').join(',');

		var deckon1test = $('.deckon1').attr('id');
		var deckon2test = $('.deckon2').attr('id');
		var deckon3test = $('.deckon3').attr('id');
		var deckon4test = $('.deckon4').attr('id');
		var deckon5test = $('.deckon5').attr('id');
		var deckon6test = $('.deckon6').attr('id');
		var deckon7test = $('.deckon7').attr('id');
		var deckon8test = $('.deckon8').attr('id');
		var shiriaratest2 = shiriaratest.replace('deck1',deckon1test)
										.replace('deck2',deckon2test)
										.replace('deck3',deckon3test)
										.replace('deck4',deckon4test)
										.replace('deck5',deckon5test)
										.replace('deck6',deckon6test)
										.replace('deck7',deckon7test)
										.replace('deck8',deckon8test);
		var deckhairetsu = shiriaratest2.split(",");
		var urltest = '?'+'deck1='+deckhairetsu[0]+'&deck2='+deckhairetsu[1]+'&deck3='+deckhairetsu[2]+'&deck4='+deckhairetsu[3]+'&deck5='+deckhairetsu[4]+'&deck6='+deckhairetsu[5]+'&deck7='+deckhairetsu[6]+'&deck8='+deckhairetsu[7];
		var newdeckhairetsu0 = deckhairetsu[0].substr(0,1);
		var newdeckhairetsu1 = deckhairetsu[1].substr(0,1);
		var newdeckhairetsu2 = deckhairetsu[2].substr(0,1);
		var newdeckhairetsu3 = deckhairetsu[3].substr(0,1);
		var newdeckhairetsu4 = deckhairetsu[4].substr(0,1);
		var newdeckhairetsu5 = deckhairetsu[5].substr(0,1);
		var newdeckhairetsu = [];
		newdeckhairetsu.push(newdeckhairetsu0,newdeckhairetsu1,newdeckhairetsu2,newdeckhairetsu3,newdeckhairetsu4,newdeckhairetsu5);
		$.unique(newdeckhairetsu);
		newdeckhairetsu.some(function(v,i){
			if (v=='u') newdeckhairetsu.splice(i,1);
			});
		newdeckhairetsu1 = newdeckhairetsu.length;
							if (newdeckhairetsu1 == 0 || newdeckhairetsu1 == 1) {
				$('#costkeisan').text('1 Tribe [Initial Mana 40(+10)]');}
				else if (newdeckhairetsu1 == 2) {
				$('#costkeisan').text('2 Tribe [Initial Mana 35(+5)]');}
				else {$('#costkeisan').text('3 Tribe [Initial Mana 30(No Bonus)]');};
		},
	} );
	jQuery( '.flag1' ) . draggable( {
		cancel:('.deckon1,.deckon2,.deckon3,.deckon4,.deckon5,.deckon6,.deckon7,.deckon8'),
		opacity: 0.5,
		helper:'clone',
		scroll:false,
		start: function(event,ui) {
		tsukaimaname = $(this).attr('id');
		},

	} );
	jQuery( '#Container' ) . droppable( {
		accept:'.tsukaima2',
		drop: function(event, ui) {
			$(ui.draggable).removeClass()
					.addClass('tsukaima2 flag2 ui-sortable-handle ui-droppable');
		if($(ui.draggable).attr('id') == 'deck1') {
		$('.tsukaima').removeClass('deckon1');
			$('#'+deck1).html('')}
		else if($(ui.draggable).attr('id') == 'deck2') {
		$('.tsukaima').removeClass('deckon2');
			$('#'+deck2).html('')}
		else if($(ui.draggable).attr('id') == 'deck3') {
		$('.tsukaima').removeClass('deckon3');
			$('#'+deck3).html('')}
		else if($(ui.draggable).attr('id') == 'deck4') {
		$('.tsukaima').removeClass('deckon4');
			$('#'+deck4).html('')}
		else if($(ui.draggable).attr('id') == 'deck5') {
		$('.tsukaima').removeClass('deckon5');
			$('#'+deck5).html('')}
		else if($(ui.draggable).attr('id') == 'deck6') {
		$('.tsukaima').removeClass('deckon6');
			$('#'+deck6).html('')}
		else if($(ui.draggable).attr('id') == 'deck7') {
		$('.tsukaima').removeClass('deckon7');
			$('#'+deck7).html('')}
		else if($(ui.draggable).attr('id') == 'deck8') {
		$('.tsukaima').removeClass('deckon8');
			$('#'+deck8).html('')}
			
			var shiriaratest = $('#deck').sortable('toArray').join(',');

		var deckon1test = $('.deckon1').attr('id');
		var deckon2test = $('.deckon2').attr('id');
		var deckon3test = $('.deckon3').attr('id');
		var deckon4test = $('.deckon4').attr('id');
		var deckon5test = $('.deckon5').attr('id');
		var deckon6test = $('.deckon6').attr('id');
		var deckon7test = $('.deckon7').attr('id');
		var deckon8test = $('.deckon8').attr('id');
		var shiriaratest2 = shiriaratest.replace('deck1',deckon1test)
										.replace('deck2',deckon2test)
										.replace('deck3',deckon3test)
										.replace('deck4',deckon4test)
										.replace('deck5',deckon5test)
										.replace('deck6',deckon6test)
										.replace('deck7',deckon7test)
										.replace('deck8',deckon8test);
		var deckhairetsu = shiriaratest2.split(",");
		var urltest = '?'+'deck1='+deckhairetsu[0]+'&deck2='+deckhairetsu[1]+'&deck3='+deckhairetsu[2]+'&deck4='+deckhairetsu[3]+'&deck5='+deckhairetsu[4]+'&deck6='+deckhairetsu[5]+'&deck7='+deckhairetsu[6]+'&deck8='+deckhairetsu[7];
		var newdeckhairetsu0 = deckhairetsu[0].substr(0,1);
		var newdeckhairetsu1 = deckhairetsu[1].substr(0,1);
		var newdeckhairetsu2 = deckhairetsu[2].substr(0,1);
		var newdeckhairetsu3 = deckhairetsu[3].substr(0,1);
		var newdeckhairetsu4 = deckhairetsu[4].substr(0,1);
		var newdeckhairetsu5 = deckhairetsu[5].substr(0,1);
		var newdeckhairetsu = [];
		newdeckhairetsu.push(newdeckhairetsu0,newdeckhairetsu1,newdeckhairetsu2,newdeckhairetsu3,newdeckhairetsu4,newdeckhairetsu5);
		$.unique(newdeckhairetsu);
		newdeckhairetsu.some(function(v,i){
			if (v=='u') newdeckhairetsu.splice(i,1);
			});
		newdeckhairetsu1 = newdeckhairetsu.length;
							if (newdeckhairetsu1 == 0 || newdeckhairetsu1 == 1) {
				$('#costkeisan').text('1 Tribe [Initial Mana 40(+10)]');}
				else if (newdeckhairetsu1 == 2) {
				$('#costkeisan').text('2 Tribe [Initial Mana 35(+5)]');}
				else {$('#costkeisan').text('3 Tribe [Initial Mana 30(No Bonus)]');};
		},

		
	} );
	$('.inputall').click(function() {
		$('.tsukaima').show();
		inputjin_val = $('#inputjin:checked').val();
		if (inputjin_val == 'on')
		{}
		else {inputjin_val = '.jin'};
		inputshin_val = $('#inputshin:checked').val();
		if (inputshin_val == 'on')
		{}
		else {inputshin_val = '.shin'};
		var inputma_val = $('#inputma:checked').val();
		if (inputma_val == 'on')
		{}
		else {inputma_val = '.ma'};
		var inputkai_val = $('#inputkai:checked').val();
		if (inputkai_val == 'on')
		{}
		else {inputkai_val = '.kai'};
		var inputfu_val = $('#inputfu:checked').val();
		if (inputfu_val == 'on')
		{}
		else {inputfu_val = '.fu'};
		$(inputjin_val+','+inputshin_val+','+inputma_val+','+inputkai_val+','+inputfu_val).hide();
		var inputcost10_val = $('#inputcost10:checked').val();
		if (inputcost10_val == 'on')
		{}
		else {inputcost10_val = '.cost10'};
		var inputcost20_val = $('#inputcost20:checked').val();
		if (inputcost20_val == 'on')
		{}
		else {inputcost20_val = '.cost20'};
		var inputcost30_val = $('#inputcost30:checked').val();
		if (inputcost30_val == 'on')
		{}
		else {inputcost30_val = '.cost30'};
		var inputcost40_val = $('#inputcost40:checked').val();
		if (inputcost40_val == 'on')
		{}
		else {inputcost40_val = '.cost40'};
		var inputcost50_val = $('#inputcost50:checked').val();
		if (inputcost50_val == 'on')
		{}
		else {inputcost50_val = '.cost50'};
		var inputcost60_val = $('#inputcost60:checked').val();
		if (inputcost60_val == 'on')
		{}
		else {inputcost60_val = '.cost60'};
		var inputcost70_val = $('#inputcost70:checked').val();
		if (inputcost70_val == 'on')
		{}
		else {inputcost70_val = '.cost70'};
		var inputcost80_val = $('#inputcost80:checked').val();
		if (inputcost80_val == 'on')
		{}
		else {inputcost80_val = '.cost80'};
		var inputcost90_val = $('#inputcost90:checked').val();
		if (inputcost90_val == 'on')
		{}
		else {inputcost90_val = '.cost90'};
		$(inputcost10_val+','+inputcost20_val+','+inputcost30_val+','+inputcost40_val+','+inputcost50_val+','+inputcost60_val+','+inputcost70_val+','+inputcost80_val+','+inputcost90_val).hide();
		var inputkin_val = $('#inputkin:checked').val();
		if (inputkin_val == 'on')
		{}
		else {inputkin_val = '.kin'};
		var inputen_val = $('#inputen:checked').val();
		if (inputen_val == 'on')
		{}
		else {inputen_val = '.en'};
		$(inputkin_val+','+inputen_val).hide();
		var tsukaimatype_val = $('#tsukaimatype').val();
		var tsukaimatypeshin = ('.'+tsukaimatype_val);
		if (tsukaimatypeshin == '.all')
		{}
		else {
		var lastdata = [];
		lastdata.push('.eiyu','.seireiju','.sendousha','.daisenshi','.danzaisha','.tenken','.majin','.shugosha','.seima','.goeiken','.junshinsha','.kyosenshi','.choma','.unmeishin','.jiaishin','.furaijin','.genma','.seisenshi','.oogami','.fumogami','.daitenrei','.reiou','.kyouka','.yaminomono','.kyogensha','.kaii','.hanyou','.jashin','.kokumeishin','.yousei','.youen','.kaiou','.wap','.enyou','.kugutsu','.bantoushi','.konmei','.akuryou','.shiou','.ankokumadou');
		for(i=0; i<lastdata.length; i++){
    if(lastdata[i] == tsukaimatypeshin){
        //spliceメソッドで要素を削除
        lastdata.splice(i, 1);}
        };
		var lastdata2 = lastdata.join(',');
		$(lastdata2).hide();}
	} );
	$('#inputshuzokuall').click(function() {
		$('.tsukaima').show();
    			if($('#inputshuzokuall').is(':checked')) { //全選択・全解除がcheckedだったら
        		$('.inputshuzoku').prop('checked', true); //アイテムを全部checkedにする
			} else { //全選択・全解除がcheckedじゃなかったら
	      		$('.inputshuzoku').prop('checked', false); //アイテムを全部checkedはずす
   		 };
		inputjin_val = $('#inputjin:checked').val();
		if (inputjin_val == 'on')
		{}
		else {inputjin_val = '.jin'};
		inputshin_val = $('#inputshin:checked').val();
		if (inputshin_val == 'on')
		{}
		else {inputshin_val = '.shin'};
		var inputma_val = $('#inputma:checked').val();
		if (inputma_val == 'on')
		{}
		else {inputma_val = '.ma'};
		var inputkai_val = $('#inputkai:checked').val();
		if (inputkai_val == 'on')
		{}
		else {inputkai_val = '.kai'};
		var inputfu_val = $('#inputfu:checked').val();
		if (inputfu_val == 'on')
		{}
		else {inputfu_val = '.fu'};
		$(inputjin_val+','+inputshin_val+','+inputma_val+','+inputkai_val+','+inputfu_val).hide();
		var inputcost10_val = $('#inputcost10:checked').val();
		if (inputcost10_val == 'on')
		{}
		else {inputcost10_val = '.cost10'};
		var inputcost20_val = $('#inputcost20:checked').val();
		if (inputcost20_val == 'on')
		{}
		else {inputcost20_val = '.cost20'};
		var inputcost30_val = $('#inputcost30:checked').val();
		if (inputcost30_val == 'on')
		{}
		else {inputcost30_val = '.cost30'};
		var inputcost40_val = $('#inputcost40:checked').val();
		if (inputcost40_val == 'on')
		{}
		else {inputcost40_val = '.cost40'};
		var inputcost50_val = $('#inputcost50:checked').val();
		if (inputcost50_val == 'on')
		{}
		else {inputcost50_val = '.cost50'};
		var inputcost60_val = $('#inputcost60:checked').val();
		if (inputcost60_val == 'on')
		{}
		else {inputcost60_val = '.cost60'};
		var inputcost70_val = $('#inputcost70:checked').val();
		if (inputcost70_val == 'on')
		{}
		else {inputcost70_val = '.cost70'};
		var inputcost80_val = $('#inputcost80:checked').val();
		if (inputcost80_val == 'on')
		{}
		else {inputcost80_val = '.cost80'};
		var inputcost90_val = $('#inputcost90:checked').val();
		if (inputcost90_val == 'on')
		{}
		else {inputcost90_val = '.cost90'};
		$(inputcost10_val+','+inputcost20_val+','+inputcost30_val+','+inputcost40_val+','+inputcost50_val+','+inputcost60_val+','+inputcost70_val+','+inputcost80_val+','+inputcost90_val).hide();
		var inputkin_val = $('#inputkin:checked').val();
		if (inputkin_val == 'on')
		{}
		else {inputkin_val = '.kin'};
		var inputen_val = $('#inputen:checked').val();
		if (inputen_val == 'on')
		{}
		else {inputen_val = '.en'};
		$(inputkin_val+','+inputen_val).hide();
		var tsukaimatype_val = $('#tsukaimatype').val();
		var tsukaimatypeshin = ('.'+tsukaimatype_val);
		if (tsukaimatypeshin == '.all')
		{}
		else {
		var lastdata = [];
		lastdata.push('.eiyu','.seireiju','.sendousha','.daisenshi','.danzaisha','.tenken','.majin','.shugosha','.seima','.goeiken','.junshinsha','.kyosenshi','.choma','.unmeishin','.jiaishin','.furaijin','.genma','.seisenshi','.oogami','.fumogami','.daitenrei','.reiou','.kyouka','.yaminomono','.kyogensha','.kaii','.hanyou','.jashin','.kokumeishin','.yousei','.youen','.kaiou','.wap','.enyou','.kugutsu','.bantoushi','.konmei','.akuryou','.shiou','.ankokumadou');
		for(i=0; i<lastdata.length; i++){
    if(lastdata[i] == tsukaimatypeshin){
        //spliceメソッドで要素を削除
        lastdata.splice(i, 1);}
        };
		var lastdata2 = lastdata.join(',');
		$(lastdata2).hide();}
	} );
	$('#inputcostall').click(function() {
		$('.tsukaima').show();
			if($('#inputcostall').is(':checked')) { //全選択・全解除がcheckedだったら
        		$('.inputcost').prop('checked', true); //アイテムを全部checkedにする
			} else { //全選択・全解除がcheckedじゃなかったら
	      		$('.inputcost').prop('checked', false); //アイテムを全部checkedはずす
		};
		inputjin_val = $('#inputjin:checked').val();
		if (inputjin_val == 'on')
		{}
		else {inputjin_val = '.jin'};
		inputshin_val = $('#inputshin:checked').val();
		if (inputshin_val == 'on')
		{}
		else {inputshin_val = '.shin'};
		var inputma_val = $('#inputma:checked').val();
		if (inputma_val == 'on')
		{}
		else {inputma_val = '.ma'};
		var inputkai_val = $('#inputkai:checked').val();
		if (inputkai_val == 'on')
		{}
		else {inputkai_val = '.kai'};
		var inputfu_val = $('#inputfu:checked').val();
		if (inputfu_val == 'on')
		{}
		else {inputfu_val = '.fu'};
		$(inputjin_val+','+inputshin_val+','+inputma_val+','+inputkai_val+','+inputfu_val).hide();
		var inputcost10_val = $('#inputcost10:checked').val();
		if (inputcost10_val == 'on')
		{}
		else {inputcost10_val = '.cost10'};
		var inputcost20_val = $('#inputcost20:checked').val();
		if (inputcost20_val == 'on')
		{}
		else {inputcost20_val = '.cost20'};
		var inputcost30_val = $('#inputcost30:checked').val();
		if (inputcost30_val == 'on')
		{}
		else {inputcost30_val = '.cost30'};
		var inputcost40_val = $('#inputcost40:checked').val();
		if (inputcost40_val == 'on')
		{}
		else {inputcost40_val = '.cost40'};
		var inputcost50_val = $('#inputcost50:checked').val();
		if (inputcost50_val == 'on')
		{}
		else {inputcost50_val = '.cost50'};
		var inputcost60_val = $('#inputcost60:checked').val();
		if (inputcost60_val == 'on')
		{}
		else {inputcost60_val = '.cost60'};
		var inputcost70_val = $('#inputcost70:checked').val();
		if (inputcost70_val == 'on')
		{}
		else {inputcost70_val = '.cost70'};
		var inputcost80_val = $('#inputcost80:checked').val();
		if (inputcost80_val == 'on')
		{}
		else {inputcost80_val = '.cost80'};
		var inputcost90_val = $('#inputcost90:checked').val();
		if (inputcost90_val == 'on')
		{}
		else {inputcost90_val = '.cost90'};
		$(inputcost10_val+','+inputcost20_val+','+inputcost30_val+','+inputcost40_val+','+inputcost50_val+','+inputcost60_val+','+inputcost70_val+','+inputcost80_val+','+inputcost90_val).hide();
		var inputkin_val = $('#inputkin:checked').val();
		if (inputkin_val == 'on')
		{}
		else {inputkin_val = '.kin'};
		var inputen_val = $('#inputen:checked').val();
		if (inputen_val == 'on')
		{}
		else {inputen_val = '.en'};
		$(inputkin_val+','+inputen_val).hide();
		var tsukaimatype_val = $('#tsukaimatype').val();
		var tsukaimatypeshin = ('.'+tsukaimatype_val);
		if (tsukaimatypeshin == '.all')
		{}
		else {
		var lastdata = [];
		lastdata.push('.eiyu','.seireiju','.sendousha','.daisenshi','.danzaisha','.tenken','.majin','.shugosha','.seima','.goeiken','.junshinsha','.kyosenshi','.choma','.unmeishin','.jiaishin','.furaijin','.genma','.seisenshi','.oogami','.fumogami','.daitenrei','.reiou','.kyouka','.yaminomono','.kyogensha','.kaii','.hanyou','.jashin','.kokumeishin','.yousei','.youen','.kaiou','.wap','.enyou','.kugutsu','.bantoushi','.konmei','.akuryou','.shiou','.ankokumadou');
		for(i=0; i<lastdata.length; i++){
    if(lastdata[i] == tsukaimatypeshin){
        //spliceメソッドで要素を削除
        lastdata.splice(i, 1);}
        };
		var lastdata2 = lastdata.join(',');
		$(lastdata2).hide();}
	} );
	$('#inputshateiall').click(function() {
		$('.tsukaima').show();
			if($('#inputshateiall').is(':checked')) { //全選択・全解除がcheckedだったら
        		$('.inputshatei').prop('checked', true); //アイテムを全部checkedにする
			} else { //全選択・全解除がcheckedじゃなかったら
	      		$('.inputshatei').prop('checked', false); //アイテムを全部checkedはずす
		};
		inputjin_val = $('#inputjin:checked').val();
		if (inputjin_val == 'on')
		{}
		else {inputjin_val = '.jin'};
		inputshin_val = $('#inputshin:checked').val();
		if (inputshin_val == 'on')
		{}
		else {inputshin_val = '.shin'};
		var inputma_val = $('#inputma:checked').val();
		if (inputma_val == 'on')
		{}
		else {inputma_val = '.ma'};
		var inputkai_val = $('#inputkai:checked').val();
		if (inputkai_val == 'on')
		{}
		else {inputkai_val = '.kai'};
		var inputfu_val = $('#inputfu:checked').val();
		if (inputfu_val == 'on')
		{}
		else {inputfu_val = '.fu'};
		$(inputjin_val+','+inputshin_val+','+inputma_val+','+inputkai_val+','+inputfu_val).hide();
		var inputcost10_val = $('#inputcost10:checked').val();
		if (inputcost10_val == 'on')
		{}
		else {inputcost10_val = '.cost10'};
		var inputcost20_val = $('#inputcost20:checked').val();
		if (inputcost20_val == 'on')
		{}
		else {inputcost20_val = '.cost20'};
		var inputcost30_val = $('#inputcost30:checked').val();
		if (inputcost30_val == 'on')
		{}
		else {inputcost30_val = '.cost30'};
		var inputcost40_val = $('#inputcost40:checked').val();
		if (inputcost40_val == 'on')
		{}
		else {inputcost40_val = '.cost40'};
		var inputcost50_val = $('#inputcost50:checked').val();
		if (inputcost50_val == 'on')
		{}
		else {inputcost50_val = '.cost50'};
		var inputcost60_val = $('#inputcost60:checked').val();
		if (inputcost60_val == 'on')
		{}
		else {inputcost60_val = '.cost60'};
		var inputcost70_val = $('#inputcost70:checked').val();
		if (inputcost70_val == 'on')
		{}
		else {inputcost70_val = '.cost70'};
		var inputcost80_val = $('#inputcost80:checked').val();
		if (inputcost80_val == 'on')
		{}
		else {inputcost80_val = '.cost80'};
		var inputcost90_val = $('#inputcost90:checked').val();
		if (inputcost90_val == 'on')
		{}
		else {inputcost90_val = '.cost90'};
		$(inputcost10_val+','+inputcost20_val+','+inputcost30_val+','+inputcost40_val+','+inputcost50_val+','+inputcost60_val+','+inputcost70_val+','+inputcost80_val+','+inputcost90_val).hide();
		var inputkin_val = $('#inputkin:checked').val();
		if (inputkin_val == 'on')
		{}
		else {inputkin_val = '.kin'};
		var inputen_val = $('#inputen:checked').val();
		if (inputen_val == 'on')
		{}
		else {inputen_val = '.en'};
		$(inputkin_val+','+inputen_val).hide();
		var tsukaimatype_val = $('#tsukaimatype').val();
		var tsukaimatypeshin = ('.'+tsukaimatype_val);
		if (tsukaimatypeshin == '.all')
		{}
		else {
		var lastdata = [];
		lastdata.push('.eiyu','.seireiju','.sendousha','.daisenshi','.danzaisha','.tenken','.majin','.shugosha','.seima','.goeiken','.junshinsha','.kyosenshi','.choma','.unmeishin','.jiaishin','.furaijin','.genma','.seisenshi','.oogami','.fumogami','.daitenrei','.reiou','.kyouka','.yaminomono','.kyogensha','.kaii','.hanyou','.jashin','.kokumeishin','.yousei','.youen','.kaiou','.wap','.enyou','.kugutsu','.bantoushi','.konmei','.akuryou','.shiou','.ankokumadou');
		for(i=0; i<lastdata.length; i++){
    if(lastdata[i] == tsukaimatypeshin){
        //spliceメソッドで要素を削除
        lastdata.splice(i, 1);}
        };
		var lastdata2 = lastdata.join(',');
		$(lastdata2).hide();}
	} );
	$('#tsukaimatype').change(function() {
		$('.tsukaima').show();
		inputjin_val = $('#inputjin:checked').val();
		if (inputjin_val == 'on')
		{}
		else {inputjin_val = '.jin'};
		inputshin_val = $('#inputshin:checked').val();
		if (inputshin_val == 'on')
		{}
		else {inputshin_val = '.shin'};
		var inputma_val = $('#inputma:checked').val();
		if (inputma_val == 'on')
		{}
		else {inputma_val = '.ma'};
		var inputkai_val = $('#inputkai:checked').val();
		if (inputkai_val == 'on')
		{}
		else {inputkai_val = '.kai'};
		var inputfu_val = $('#inputfu:checked').val();
		if (inputfu_val == 'on')
		{}
		else {inputfu_val = '.fu'};
		$(inputjin_val+','+inputshin_val+','+inputma_val+','+inputkai_val+','+inputfu_val).hide();
		var inputcost10_val = $('#inputcost10:checked').val();
		if (inputcost10_val == 'on')
		{}
		else {inputcost10_val = '.cost10'};
		var inputcost20_val = $('#inputcost20:checked').val();
		if (inputcost20_val == 'on')
		{}
		else {inputcost20_val = '.cost20'};
		var inputcost30_val = $('#inputcost30:checked').val();
		if (inputcost30_val == 'on')
		{}
		else {inputcost30_val = '.cost30'};
		var inputcost40_val = $('#inputcost40:checked').val();
		if (inputcost40_val == 'on')
		{}
		else {inputcost40_val = '.cost40'};
		var inputcost50_val = $('#inputcost50:checked').val();
		if (inputcost50_val == 'on')
		{}
		else {inputcost50_val = '.cost50'};
		var inputcost60_val = $('#inputcost60:checked').val();
		if (inputcost60_val == 'on')
		{}
		else {inputcost60_val = '.cost60'};
		var inputcost70_val = $('#inputcost70:checked').val();
		if (inputcost70_val == 'on')
		{}
		else {inputcost70_val = '.cost70'};
		var inputcost80_val = $('#inputcost80:checked').val();
		if (inputcost80_val == 'on')
		{}
		else {inputcost80_val = '.cost80'};
		var inputcost90_val = $('#inputcost90:checked').val();
		if (inputcost90_val == 'on')
		{}
		else {inputcost90_val = '.cost90'};
		$(inputcost10_val+','+inputcost20_val+','+inputcost30_val+','+inputcost40_val+','+inputcost50_val+','+inputcost60_val+','+inputcost70_val+','+inputcost80_val+','+inputcost90_val).hide();
		var inputkin_val = $('#inputkin:checked').val();
		if (inputkin_val == 'on')
		{}
		else {inputkin_val = '.kin'};
		var inputen_val = $('#inputen:checked').val();
		if (inputen_val == 'on')
		{}
		else {inputen_val = '.en'};
		$(inputkin_val+','+inputen_val).hide();
		var tsukaimatype_val = $('#tsukaimatype').val();
		var tsukaimatypeshin = ('.'+tsukaimatype_val);
		if (tsukaimatypeshin == '.all')
		{}
		else {
		var lastdata = [];
		lastdata.push('.eiyu','.seireiju','.sendousha','.daisenshi','.danzaisha','.tenken','.majin','.shugosha','.seima','.goeiken','.junshinsha','.kyosenshi','.choma','.unmeishin','.jiaishin','.furaijin','.genma','.seisenshi','.oogami','.fumogami','.daitenrei','.reiou','.kyouka','.yaminomono','.kyogensha','.kaii','.hanyou','.jashin','.kokumeishin','.yousei','.youen','.kaiou','.wap','.enyou','.kugutsu','.bantoushi','.konmei','.akuryou','.shiou','.ankokumadou');
		for(i=0; i<lastdata.length; i++){
    if(lastdata[i] == tsukaimatypeshin){
        //spliceメソッドで要素を削除
        lastdata.splice(i, 1);}
        };
		var lastdata2 = lastdata.join(',');
		$(lastdata2).hide();}
	} );
	$('#shiriara').click(function() {
	var shiriaratest = $('#deck').sortable('toArray').join(',');

		var deckon1test = $('.deckon1').attr('id');
		var deckon2test = $('.deckon2').attr('id');
		var deckon3test = $('.deckon3').attr('id');
		var deckon4test = $('.deckon4').attr('id');
		var deckon5test = $('.deckon5').attr('id');
		var deckon6test = $('.deckon6').attr('id');
		var deckon7test = $('.deckon7').attr('id');
		var deckon8test = $('.deckon8').attr('id');
		var shiriaratest2 = shiriaratest.replace('deck1',deckon1test)
										.replace('deck2',deckon2test)
										.replace('deck3',deckon3test)
										.replace('deck4',deckon4test)
										.replace('deck5',deckon5test)
										.replace('deck6',deckon6test)
										.replace('deck7',deckon7test)
										.replace('deck8',deckon8test);
		var deckhairetsu = shiriaratest2.split(",");
		var urltest = '?'+'deck1='+deckhairetsu[0]+'&deck2='+deckhairetsu[1]+'&deck3='+deckhairetsu[2]+'&deck4='+deckhairetsu[3]+'&deck5='+deckhairetsu[4]+'&deck6='+deckhairetsu[5]+'&deck7='+deckhairetsu[6]+'&deck8='+deckhairetsu[7];
		var newdeckhairetsu0 = deckhairetsu[0].substr(0,1);
		var newdeckhairetsu1 = deckhairetsu[1].substr(0,1);
		var newdeckhairetsu2 = deckhairetsu[2].substr(0,1);
		var newdeckhairetsu3 = deckhairetsu[3].substr(0,1);
		var newdeckhairetsu4 = deckhairetsu[4].substr(0,1);
		var newdeckhairetsu5 = deckhairetsu[5].substr(0,1);
		var newdeckhairetsu = [];
		newdeckhairetsu.push(newdeckhairetsu0,newdeckhairetsu1,newdeckhairetsu2,newdeckhairetsu3,newdeckhairetsu4,newdeckhairetsu5);
		$.unique(newdeckhairetsu);
		newdeckhairetsu.some(function(v,i){
			if (v=='u') newdeckhairetsu.splice(i,1);
			});
		newdeckhairetsu1 = newdeckhairetsu.length;
							if (newdeckhairetsu1 == 0 || newdeckhairetsu1 == 1) {
				$('#costkeisan').text('1 Tribe [Initial Mana 40(+10)]');}
				else if (newdeckhairetsu1 == 2) {
				$('#costkeisan').text('2 Tribe [Initial Mana 35(+5)]');}
				else {$('#costkeisan').text('3 Tribe [Initial Mana 30(No Bonus)]');};
			var surl = (location.protocol+'//'+location.host+location.pathname+urltest);
			var uurl = encodeURIComponent(surl);
			var turl = ("https://api-ssl.bitly.com/v3/shorten?access_token=615ef8a6fe7f20c8b37d8d438c6df7e464b9c29f&longUrl="+uurl);
			$.getJSON(turl,function(json){
			var trueurl = (json.data.url);
			$('#param').val(trueurl);
			});
		});
	});

$(document).ready(function(){
		var shiriaratest = $('#deck').sortable('toArray').join(',');

		var deckon1test = $('.deckon1').attr('id');
		var deckon2test = $('.deckon2').attr('id');
		var deckon3test = $('.deckon3').attr('id');
		var deckon4test = $('.deckon4').attr('id');
		var deckon5test = $('.deckon5').attr('id');
		var deckon6test = $('.deckon6').attr('id');
		var deckon7test = $('.deckon7').attr('id');
		var deckon8test = $('.deckon8').attr('id');
		var shiriaratest2 = shiriaratest.replace('deck1',deckon1test)
										.replace('deck2',deckon2test)
										.replace('deck3',deckon3test)
										.replace('deck4',deckon4test)
										.replace('deck5',deckon5test)
										.replace('deck6',deckon6test)
										.replace('deck7',deckon7test)
										.replace('deck8',deckon8test);
		var deckhairetsu = shiriaratest2.split(",");
		var urltest = '?'+'deck1='+deckhairetsu[0]+'&deck2='+deckhairetsu[1]+'&deck3='+deckhairetsu[2]+'&deck4='+deckhairetsu[3]+'&deck5='+deckhairetsu[4]+'&deck6='+deckhairetsu[5]+'&deck7='+deckhairetsu[6]+'&deck8='+deckhairetsu[7];
		var newdeckhairetsu0 = deckhairetsu[0].substr(0,1);
		var newdeckhairetsu1 = deckhairetsu[1].substr(0,1);
		var newdeckhairetsu2 = deckhairetsu[2].substr(0,1);
		var newdeckhairetsu3 = deckhairetsu[3].substr(0,1);
		var newdeckhairetsu4 = deckhairetsu[4].substr(0,1);
		var newdeckhairetsu5 = deckhairetsu[5].substr(0,1);
		var newdeckhairetsu = [];
		newdeckhairetsu.push(newdeckhairetsu0,newdeckhairetsu1,newdeckhairetsu2,newdeckhairetsu3,newdeckhairetsu4,newdeckhairetsu5);
		$.unique(newdeckhairetsu);
		newdeckhairetsu.some(function(v,i){
			if (v=='u') newdeckhairetsu.splice(i,1);
			});
		newdeckhairetsu1 = newdeckhairetsu.length;
							if (newdeckhairetsu1 == 0 || newdeckhairetsu1 == 1) {
				$('#costkeisan').text('1 Tribe [Initial Mana 40(+10)]');}
				else if (newdeckhairetsu1 == 2) {
				$('#costkeisan').text('2 Tribe [Initial Mana 35(+5)]');}
				else {$('#costkeisan').text('3 Tribe [Initial Mana 30(No Bonus)]');};
});

$(function() {
	$('#reset').click(function() {
	$('.tsukaima2').removeClass()
					.addClass('tsukaima2 flag2 ui-sortable-handle ui-droppable');
		$('.tsukaima').removeClass('deckon1');
			$('#'+deck1).html('');
		$('.tsukaima').removeClass('deckon2');
			$('#'+deck2).html('');
		$('.tsukaima').removeClass('deckon3');
			$('#'+deck3).html('');
		$('.tsukaima').removeClass('deckon4');
			$('#'+deck4).html('');
		$('.tsukaima').removeClass('deckon5');
			$('#'+deck5).html('');
		$('.tsukaima').removeClass('deckon6');
			$('#'+deck6).html('');
		$('.tsukaima').removeClass('deckon7');
			$('#'+deck7).html('');
		$('.tsukaima').removeClass('deckon8');
			$('#'+deck8).html('');
		var shiriaratest = $('#deck').sortable('toArray').join(',');

		var deckon1test = $('.deckon1').attr('id');
		var deckon2test = $('.deckon2').attr('id');
		var deckon3test = $('.deckon3').attr('id');
		var deckon4test = $('.deckon4').attr('id');
		var deckon5test = $('.deckon5').attr('id');
		var deckon6test = $('.deckon6').attr('id');
		var deckon7test = $('.deckon7').attr('id');
		var deckon8test = $('.deckon8').attr('id');
		var shiriaratest2 = shiriaratest.replace('deck1',deckon1test)
										.replace('deck2',deckon2test)
										.replace('deck3',deckon3test)
										.replace('deck4',deckon4test)
										.replace('deck5',deckon5test)
										.replace('deck6',deckon6test)
										.replace('deck7',deckon7test)
										.replace('deck8',deckon8test);
		var deckhairetsu = shiriaratest2.split(",");
		var urltest = '?'+'deck1='+deckhairetsu[0]+'&deck2='+deckhairetsu[1]+'&deck3='+deckhairetsu[2]+'&deck4='+deckhairetsu[3]+'&deck5='+deckhairetsu[4]+'&deck6='+deckhairetsu[5]+'&deck7='+deckhairetsu[6]+'&deck8='+deckhairetsu[7];
		var newdeckhairetsu0 = deckhairetsu[0].substr(0,1);
		var newdeckhairetsu1 = deckhairetsu[1].substr(0,1);
		var newdeckhairetsu2 = deckhairetsu[2].substr(0,1);
		var newdeckhairetsu3 = deckhairetsu[3].substr(0,1);
		var newdeckhairetsu4 = deckhairetsu[4].substr(0,1);
		var newdeckhairetsu5 = deckhairetsu[5].substr(0,1);
		var newdeckhairetsu = [];
		newdeckhairetsu.push(newdeckhairetsu0,newdeckhairetsu1,newdeckhairetsu2,newdeckhairetsu3,newdeckhairetsu4,newdeckhairetsu5);
		$.unique(newdeckhairetsu);
		newdeckhairetsu.some(function(v,i){
			if (v=='u') newdeckhairetsu.splice(i,1);
			});
		newdeckhairetsu1 = newdeckhairetsu.length;
							if (newdeckhairetsu1 == 0 || newdeckhairetsu1 == 1) {
				$('#costkeisan').text('1 Tribe [Initial Mana 40(+10)]');}
				else if (newdeckhairetsu1 == 2) {
				$('#costkeisan').text('2 Tribe [Initial Mana 35(+5)]');}
				else {$('#costkeisan').text('3 Tribe [Initial Mana 30(No Bonus)]');};
		});
});


$(function() {
	//クリックしたときのファンクションをまとめて指定
	$('.tab li').click(function() {

		//.index()を使いクリックされたタブが何番目かを調べ、
		//indexという変数に代入します。
		var index = $('.tab li').index(this);

		//コンテンツを一度すべて非表示にし、
		$('.content li').css('display','none');

		//クリックされたタブと同じ順番のコンテンツを表示します。
		$('.content li').eq(index).css('display','block');

		//一度タブについているクラスselectを消し、
		$('.tab li').removeClass('select');

		//クリックされたタブのみにクラスselectをつけます。
		$(this).addClass('select')
	});
});

$(document).ready(function(){
  $('#param').focus(function(){
    $(this).select();
  });
});

function padZero(number){if(number<=999){number=("00"+number).slice(-3);}return number;}

//races
//j = beast
//s = celestial
//m = magic
//k = sea
//f = undead
var races = "jsmkf";

//cards
//number of cards for each race
//can be set to a higher value once more cards are added
var cards = [50,50,50,50,50];

for(i = 0; i < races.length; i++){
	for(j = 0; j < cards[i]; j++){
		id = '.'+races[i]+'-'+padZero(j);
		
		$(document).on('click',id,function(){
			if(this.id[0] == "d"){card = $("#"+$(this).attr("class").split(" ").pop());}
			else{card = $(this);}
			
			if(card.attr("id")[0] == "j"){race = "人獣";}
			if(card.attr("id")[0] == "s"){race = "神族";}
			if(card.attr("id")[0] == "m"){race = "魔種";}
			if(card.attr("id")[0] == "k"){race = "海種";}
			if(card.attr("id")[0] == "f"){race = "不死";}
			
			var tsukaimadata = [
				card.attr('data-tsukaimamei'),
				card.attr('data-type'),
				card.attr('data-cost'),
				card.attr('data-shatei'),
				card.attr('data-level1hp'),
				card.attr('data-level1ap'),
				card.attr('data-level1atk'),
				card.attr('data-level1pow'),
				card.attr('data-level1def'),
				card.attr('data-level1res'),
				card.attr('data-level1as'),
				card.attr('data-level1ms'),
				card.attr('data-level20hp'),
				card.attr('data-level20ap'),
				card.attr('data-level20atk'),
				card.attr('data-level20pow'),
				card.attr('data-level20def'),
				card.attr('data-level20res'),
				card.attr('data-level20as'),
				card.attr('data-level20ms'),
				card.attr('data-activeskillshiteitype'),
				card.attr('data-activeskillkoukatype'),
				card.attr('data-activeskillshouhiap'),
				card.attr('data-activeskillcooldown'),
				card.attr('data-activeskill'),
				card.attr('data-passiveskillshiteitype'),
				card.attr('data-passiveskillkoukatype'),
				card.attr('data-passiveskill'),
				card.attr('data-jpn')
			];
			
			if(tsukaimadata[28] == undefined || tsukaimadata[28] == null){$('#tsukaimamei').html(tsukaimadata[0]);}
			else{$('#tsukaimamei').html(tsukaimadata[0]+'<a href="http://wiki.4gamer.net/lova/使い魔/'+race+'/'+tsukaimadata[28]+'" target="_blank"><button style="font-size:12px;height:18px;float:right;">Wiki</button></a>');}
			
			$('#type').html(tsukaimadata[1]);
			$('#cost').html(tsukaimadata[2]);
			$('#shatei').html(tsukaimadata[3]);
			$('#level1hp').html(tsukaimadata[4]);
			$('#level1ap').html(tsukaimadata[5]);
			$('#level1atk').html(tsukaimadata[6]);
			$('#level1pow').html(tsukaimadata[7]);
			$('#level1def').html(tsukaimadata[8]);
			$('#level1res').html(tsukaimadata[9]);
			$('#level1as').html(tsukaimadata[10]);
			$('#level1ms').html(tsukaimadata[11]);
			$('#level20hp').html(tsukaimadata[12]);
			$('#level20ap').html(tsukaimadata[13]);
			$('#level20atk').html(tsukaimadata[14]);
			$('#level20pow').html(tsukaimadata[15]);
			$('#level20def').html(tsukaimadata[16]);
			$('#level20res').html(tsukaimadata[17]);
			$('#level20as').html(tsukaimadata[18]);
			$('#level20ms').html(tsukaimadata[19]);
			$('#activeskillshiteitype').html(tsukaimadata[20]);
			$('#activeskillkoukatype').html(tsukaimadata[21]);
			$('#activeskillshouhiap').html(tsukaimadata[22]);
			$('#activeskillcooldown').html(tsukaimadata[23]);
			$('#activeskill').html(tsukaimadata[24]);
			$('#passiveskillshiteitype').html(tsukaimadata[25]);
			$('#passiveskillkoukatype').html(tsukaimadata[26]);
			$('#passiveskill').html(tsukaimadata[27]);
		});
	}
}
