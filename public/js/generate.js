function create(element) {
    return document.createElement(element);
}

function createComponent(type, value) {
    value = value || null;
    var component = document.createElement(type);
    if (value){
        text = document.createTextNode(value);
        component.appendChild(text);
    }    
    return component;
}

function joinComponent(container, ...components) {
    for (let component of components){
        container.appendChild(component);
    }
    return container;
}

document.addEventListener("DOMContentLoaded", function(event){
    generate(5);
    generateGradient(5);
    document.querySelector(".close-preview").addEventListener("click", function() {
        document.querySelector(".preview").style.display = "none";
    });
});

const generateColorHandler = function(){
    let number = document.querySelector("#colorTemplateField").value;
    let samples = document.querySelectorAll(".sample-template");

    for (let index = 0; index < samples.length; index++) {
        const element = samples[index];
        element.parentNode.removeChild(element);
    }
    generate(number);
};

const generateGradientHandler = function() {
    let number = document.querySelector("#gradientTemplateField").value;
    let samples = document.querySelectorAll(".sample-grad-template");

    for (let index = 0; index < samples.length; index++) {
        const element = samples[index];
        element.parentNode.removeChild(element);
    }
    generateGradient(number);
};

const generate = function(number) {
    // <div class="template">
    //     <div class="head"></div>
    //     <div class="body"></div>
    // </div>

    for(let i = 0; i < number; i++){
        let div0 = create("DIV");
            const div1 = create("DIV");
            const div2 = create("DIV");

        div0.classList.add("template", "sample-template");
        div1.classList.add("head");
        div2.classList.add("body");

        let color = randomColor();
        div1.style.backgroundColor = color;
        div1.innerHTML = color;
        div0 = joinComponent(div0, div1, div2);
        document.querySelector("#colors").appendChild(div0);
    }
};

const generateGradient = function(number) {
    for(let i = 0; i < number; i++){
        let div0 = create("DIV");
            const h0 = create("h3");
            const div1 = create("DIV");

        h0.classList.add("fill-container");
        div0.classList.add("template", "sample-grad-template");
        div1.classList.add("input", "hang");

        let color1 = randomColor();
        let color2 = randomColor();
        let angle = Math.round((Math.random()*359)+1);

        h0.style.textAlign = "center";
        h0.style.color = "#777";
        div0.style.backgroundImage = `linear-gradient(${angle}deg, ${color1}, ${color2})`;

        h0.innerHTML = "Click to preview";
        div1.innerHTML = `${color1}, ${color2}, angle = ${angle}deg`;

        div0 = joinComponent(div0, h0, div1);
        div0.addEventListener("click", function() {
            document.querySelector(".preview").style.display = "flex";
            document.querySelector("section.preview .body").style.backgroundImage = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
        });
        document.querySelector("#gradients").appendChild(div0);
    }
};

function randomColor(){
	function genFirstCode(){
		let code = Math.round((Math.random()*14)+1);
		switch(code){
			case 10:
				code = 'a';
				break;
			case 11:
				code = 'b';
				break;
			case 12:
				code = 'c';
				break;
			case 13:
				code = 'd';
				break;
			case 14:
				code = 'e';
				break;
			case 15:
				code = 'f';
				break;
			default:
				code = code.toString();
				break;
		}
		return code;
	}
	
	function genSecondCode(){
		let code = Math.round((Math.random()*14)+1);
		switch(code){
			case 10:
				code = 'a';
				break;
			case 11:
				code = 'b';
				break;
			case 12:
				code = 'c';
				break;
			case 13:
				code = 'd';
				break;
			case 14:
				code = 'e';
				break;
			case 15:
				code = 'f';
				break;
			default:
				code = code.toString();
				break;
		}
		return code;
    }

	let red, green, blue;
	red = genFirstCode() + genSecondCode();
	green = genFirstCode() + genSecondCode();
    blue = genFirstCode() + genSecondCode();

	return '#'+red+green+blue;
}