document.getElementById('date').innerHTML = moment().format('dddd MMM DD YYYY');
var formEl = document.getElementById('form');
var planEl = document.getElementById('planTime');

$(document).ready(()=> {
    for (i=5; i < 22; i++) {
        // this is the time text (5:00-6:00) of the schedule
        const timeEl = i +':00 - ' + (i+1)+':00';
        // I tried to make the create div variable global
        const divEl = document.createElement('div');
        let hTag = document.createElement('h1');
        const para = document.createElement('p');
        hTag.append(timeEl)
        divEl.append(hTag)

        var oldObjEl = localStorage.getItem(timeEl);
        // this is the local storage grabing the item if it isn't null and printing it out in the last div
        if (oldObjEl === null) {

        }
        else {
            para.append(oldObjEl)
            divEl.append(para)
        }

        divEl.addEventListener("click", (e) => {
            // to make sure the event listener is working I put console.log
            console.log("yes");
            // I connected the input value with newObjectiveEl
            var newObjectiveEl = document.getElementById('newObj').value;
            // made a variable for a paragraph element
            var node = document.createElement("p");
            // I made the input value into text or a string
            var textNode = document.createTextNode(newObjectiveEl);
            // I appended the string to a paragraph element
            node.appendChild(textNode);
            // Lastly appended the p tag to the divEl selected
            divEl.appendChild(node);

            localStorage.setItem(timeEl, node.innerHTML);

        })

        $("#timeZones").append(divEl)
        let m = moment()
        let m2 = moment(i, 'h:mm')
        
        // this is the color of the background (green is future/red is past)
        if (m.diff(m2, 'hours', true) > 1) {
            console.log(m);
            divEl.classList.add('past');
            divEl.classList.remove('planTime');
        }

        else if (m.diff(m2, 'hours', true) < 0) {
            divEl.classList.add('future');
            divEl.classList.remove('planTime');
        };
        divEl.classList.add('planTime');
        $("#timeZones").append(divEl);

    };


});

$('#reset').on('click', () => {
    localStorage.clear();
    location.reload();
 })



// this is the start of my old code that I worked days on and coming back to this code I cleaned it up and made it much easier to read

// for displaying different colors, when the time has passed the block of time turns red...use isSame, isBetween, and isBefore
console.log(moment().startOf('hour').fromNow());
// I need to make a function that displays a form and when saved displays the content in the right block

// I initially tried to do check boxes and you can find the code below...what i actually did was tie every "time box or whatever you want to call them" to a function that will append a child to that domain (copy and pasting this way was so much easier)

// // this is for 5-6 am
// function CB1() {
//     var newObjectiveEl = document.getElementById('newObj').value;
//     var node = document.createElement("LI");
//     var textNode = document.createTextNode(newObjectiveEl);
//     node.appendChild(textNode);
//     CB1El = document.getElementById('CB1');
//     CB1El.appendChild(node);
//     localStorage.setItem("56am", newObjectiveEl);

// };

// // this is for 6-7 am
// function CB2() {
//     var newObjectiveEl = document.getElementById('newObj').value;
//     var node = document.createElement("LI");
//     var textNode = document.createTextNode(newObjectiveEl);
//     node.appendChild(textNode);
//     CB2El = document.getElementById('CB2');
//     CB2El.appendChild(node);

// };

//this is for 7-8 am
// function CB3() {
//     var newObjectiveEl = document.getElementById('newObj').value;
//     var node = document.createElement("LI");
//     var textNode = document.createTextNode(newObjectiveEl);
//     node.appendChild(textNode);
//     CB3El = document.getElementById('CB3');
//     CB3El.appendChild(node);

// };

// // this is for 8-9 am
// function CB4() {
//     var newObjectiveEl = document.getElementById('newObj').value;
//     var node = document.createElement("LI");
//     var textNode = document.createTextNode(newObjectiveEl);
//     node.appendChild(textNode);
//     CB4El = document.getElementById('CB4');
//     CB4El.appendChild(node);

// };

// this is for 9-10 am
// function CB5() {
//     var newObjectiveEl = document.getElementById('newObj').value;
//     var node = document.createElement("LI");
//     var textNode = document.createTextNode(newObjectiveEl);
//     node.appendChild(textNode);
//     CB5El = document.getElementById('CB5');
//     CB5El.appendChild(node);

// };

// you get the idea...
// function CB6() {
//     var newObjectiveEl = document.getElementById('newObj').value;
//     var node = document.createElement("LI");
//     var textNode = document.createTextNode(newObjectiveEl);
//     node.appendChild(textNode);
//     CB6El = document.getElementById('CB6');
//     CB6El.appendChild(node);

// };

// function CB7() {
//     var newObjectiveEl = document.getElementById('newObj').value;
//     var node = document.createElement("LI");
//     var textNode = document.createTextNode(newObjectiveEl);
//     node.appendChild(textNode);
//     CB7El = document.getElementById('CB7');
//     CB7El.appendChild(node);

// };

// function CB8() {
//     var newObjectiveEl = document.getElementById('newObj').value;
//     var node = document.createElement("LI");
//     var textNode = document.createTextNode(newObjectiveEl);
//     node.appendChild(textNode);
//     CB8El = document.getElementById('CB8');
//     CB8El.appendChild(node);

// };

// function CB9() {
//     var newObjectiveEl = document.getElementById('newObj').value;
//     var node = document.createElement("LI");
//     var textNode = document.createTextNode(newObjectiveEl);
//     node.appendChild(textNode);
//     CB9El = document.getElementById('CB9');
//     CB9El.appendChild(node);

// };

// function CB10() {
//     var newObjectiveEl = document.getElementById('newObj').value;
//     var node = document.createElement("LI");
//     var textNode = document.createTextNode(newObjectiveEl);
//     node.appendChild(textNode);
//     CB10El = document.getElementById('CB1');
//     CB10El.appendChild(node);

// };

// function CB11() {
//     var newObjectiveEl = document.getElementById('newObj').value;
//     var node = document.createElement("LI");
//     var textNode = document.createTextNode(newObjectiveEl);
//     node.appendChild(textNode);
//     CB11El = document.getElementById('CB11');
//     CB11El.appendChild(node);

// };

// function CB12() {
//     var newObjectiveEl = document.getElementById('newObj').value;
//     var node = document.createElement("LI");
//     var textNode = document.createTextNode(newObjectiveEl);
//     node.appendChild(textNode);
//     CB12El = document.getElementById('CB12');
//     CB12El.appendChild(node);

// };

// function CB13() {
//     var newObjectiveEl = document.getElementById('newObj').value;
//     var node = document.createElement("LI");
//     var textNode = document.createTextNode(newObjectiveEl);
//     node.appendChild(textNode);
//     CB13El = document.getElementById('CB13');
//     CB13El.appendChild(node);

// };

// function CB14() {
//     var newObjectiveEl = document.getElementById('newObj').value;
//     var node = document.createElement("LI");
//     var textNode = document.createTextNode(newObjectiveEl);
//     node.appendChild(textNode);
//     CB14El = document.getElementById('CB14');
//     CB14El.appendChild(node);

// };

// function CB15() {
//     var newObjectiveEl = document.getElementById('newObj').value;
//     var node = document.createElement("LI");
//     var textNode = document.createTextNode(newObjectiveEl);
//     node.appendChild(textNode);
//     CB15El = document.getElementById('CB15');
//     CB15El.appendChild(node);

// };

// function CB16() {
//     var newObjectiveEl = document.getElementById('newObj').value;
//     var node = document.createElement("LI");
//     var textNode = document.createTextNode(newObjectiveEl);
//     node.appendChild(textNode);
//     CB16El = document.getElementById('CB16');
//     CB16El.appendChild(node);

// };

// function CB17() {
//     var newObjectiveEl = document.getElementById('newObj').value;
//     var node = document.createElement("LI");
//     var textNode = document.createTextNode(newObjectiveEl);
//     node.appendChild(textNode);
//     CB17El = document.getElementById('CB17');
//     CB17El.appendChild(node);

// };

// function newPlan(){

//     if (document.getElementById('CB1').value = true) {
//         CB1.appendChild(node);
//         console.log(newObjectiveEl);
//     };


//     if (document.getElementById('CB2').value = true) {
//         CB2.appendChild(node);
//         console.log(newObjectiveEl);
//     };

//     if (document.getElementById('CB3').value == true) {
//         CB3.appendChild(node);
//         console.log(newObjectiveEl);
//     };
    
//     if (document.getElementById('CB4').checked == true) {
//         CB4.appendChild(node);
//         console.log(newObjectiveEl);
//     };

//     if (document.getElementById('CB5').checked == true) {
//         CB5.appendChild(node);
//         console.log(newObjectiveEl);
//     };

//     if (document.getElementById('CB6').checked == true) {
//         CB6.appendChild(node);
//         console.log(newObjectiveEl);
//     };

//     if (document.getElementById('CB7').checked == true) {
//         CB7.appendChild(node);
//         console.log(newObjectiveEl);
//     };
    
//     if (document.getElementById('CB8').checked == true) {
//         CB8.appendChild(node);
//         console.log(newObjectiveEl);
//     };

//     if (document.getElementById('CB9').checked == true) {
//         CB9.appendChild(node);
//         console.log(newObjectiveEl);
//     };

//     if (document.getElementById('CB10').checked == true) {
//         CB10.appendChild(node);
//         console.log(newObjectiveEl);
//     };
    
//     if (document.getElementById('CB11').checked == true) {
//         CB11.appendChild(node);
//         console.log(newObjectiveEl);
//     };

//     if (document.getElementById('CB12').checked == true) {
//         CB12.appendChild(node);
//         console.log(newObjectiveEl);
//     };

//     if (document.getElementById('CB13').checked == true) {
//         CB13.appendChild(node);
//         console.log(newObjectiveEl);
//     };

//     if (document.getElementById('CB14').checked == true) {
//         CB14.appendChild(node);
//         console.log(newObjectiveEl);
//     };

//     if (document.getElementById('CB15').checked == true) {
//         CB15.appendChild(node);
//         console.log(newObjectiveEl);
//     };

//     if (document.getElementById('CB16').checked == true) {
//         CB16.appendChild(node);
//         console.log(newObjectiveEl);
//     };

//     if (document.getElementById('CB17').checked == true) {
//         CB17.appendChild(node);
//         console.log(newObjectiveEl);
//     };


 

//     };




