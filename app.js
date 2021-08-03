const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const boxes = [box1, box2, box3, box4];

const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');
const pages = [page1, page2, page3, page4];

const p_show1 = pages;
const p_show2 = [page2, page3, page4, page1];
const p_show3 = [page3, page4, page1, page2];
const p_show4 = [page4, page1, page2, page3];

const r_b1 = boxes //if #box1 is clicked add rotate classes to boxes;
const r_b2 = [box2, box3, box4, box1]; // if #box2 is clicked add rotate classes to this array;
const r_b3 = [box3, box4, box1, box2]; // if #box3 is clicked add rotate classes to this array;
const r_b4 = [box4, box1, box2, box3]; // if #box4 is clicked add rotate classes to this array;

const home = document.querySelector('.home');
const state = {
    selectedBoxOrder: [],
};

box1.addEventListener("click", () => {
    console.log("clicked blue")
    state.selectedBoxOrder = r_b1;
    p_show1.forEach((page, index) => {
        if (index !== 0 ) {
            page.classList.add('hide');
        }
    });
    r_b1.forEach((box, index) => {
        box.classList.add(`rotate${index + 1}`);
        setTimeout(function(){ box.classList.add('hide') }, 490);
    });
});

box2.addEventListener("click", () => {
    console.log("clicked red")
    state.selectedBoxOrder = r_b2;
    p_show2.forEach((page, index) => {
        if (index !== 0 ) {
            page.classList.add('hide');
        }
    });
    r_b2.forEach((box, index) => {
        box.classList.add(`rotate${index + 1}`);
        setTimeout(function(){ box.classList.add('hide') }, 490);
    })
});

box3.addEventListener("click", () => {
    console.log("clicked yellow")
    state.selectedBoxOrder = r_b3;
    p_show3.forEach((page, index) => {
        if (index !== 0 ) {
            page.classList.add('hide');
        }
    });
    r_b3.forEach((box, index) => {
        box.classList.add(`rotate${index + 1}`);
        setTimeout(function(){ box.classList.add('hide') }, 490);
    })
});

box4.addEventListener("click", () => {
    console.log("clicked green")
    state.selectedBoxOrder = r_b4;
    p_show4.forEach((page, index) => {
        if (index !== 0 ) {
            page.classList.add('hide');
        }
    });
    r_b4.forEach((box, index) => {
        box.classList.add(`rotate${index + 1}`);
        setTimeout(function(){ box.classList.add('hide') }, 490);
    })
});

home.addEventListener("click", () => {

    console.log(state.selectedBoxOrder)
    state.selectedBoxOrder.forEach((box, index) => {
        box.classList.remove('hide');
        box.style.animationName = `rotateClose${index + 1}`;
        setTimeout(function(){ 
            box.classList.remove(`rotate${index + 1}`);
            box.style.animationName = '';
            pages.forEach((page, index) => {
                page.classList.remove('hide');
            });
        }, 490);
    });
});