/* o seguinte algoritmo mostra um titulo na lateral do forum por nome */

var SpecialTitle = function(){
	var classObject = this;
	this.titleList = new Array;
	this.nameList = new Array;
	
	this.getName = function(value){
		return $(value).find('dt').eq(0).text();
	};
	
	this.setNewName = function(newName, num, increment){
		increment = typeof increment !== 'undefined' ? increment : true;
		this.nameList[this.nameList.length] = new Array(newName, num, increment);
	};
	
	this.setNewTitle = function(newTitle, num){
		this.titleList[num] = newTitle;
	};
	
	this.getTitle = function(name){
		var textInitial = '';
		for(var i = 0; i < this.nameList.length; i++){
			if(name == this.nameList[i][0]){
				if(this.nameList[i][1] > this.titleList.length){
					textInitial = '';
				} else {
					if(!this.nameList[i][2]){
						textInitial = '<br />Títulos Especiais:'+textInitial;
					};
					textInitial = textInitial + '<br /><b style="color: orange;">- '+this.titleList[this.nameList[i][1]]+'<b/>';
				};
			};
		};
		return textInitial;
	};
	
	this.init = function(){
		$('.postprofile').each(function(){
			var auxName = classObject.getName($(this));
			var title = classObject.getTitle(auxName);
			if(title != ''){
				$(this).find('dd').eq(1).append(title);
			};
		});
	};
};

var titulo = new SpecialTitle();
titulo.setNewTitle('True Emo do fórum', 1);
titulo.setNewTitle('Ancient God Leader', 2);
titulo.setNewTitle('Dorgado Master', 3);
titulo.setNewTitle('Herói Lendário', 4);
titulo.setNewTitle('Nanoescritor', 5);
titulo.setNewTitle('XD Master', 6);
titulo.setNewTitle('Love with JulieTheirSky', 7);

titulo.setNewName('Joher', 1, false);
titulo.setNewName('JoherUltimate', 1, false);
titulo.setNewName('DrLucifer', 2, false);
titulo.setNewName('DrLucifer', 5);
titulo.setNewName('Julio-Sama', 3, false);
titulo.setNewName('hitsugayasan', 5, false);
titulo.setNewName('BlackMage', 4, false);
titulo.setNewName('Leisen', 4, false);
titulo.setNewName('BladeLord', 4, false);
titulo.setNewName('Krazylil', 4, false);
titulo.setNewName('ATOMX', 7, false);
titulo.setNewName('Vinx XD', 6, false);

window.onload = function(){
	titulo.init();
};
