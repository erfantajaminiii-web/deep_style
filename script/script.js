//(بخش توضیحات(برای نمایش بیشتر و کتمر
let see_details = document.querySelector('.btn_see_details');
let p_height = document.querySelector('.description_product_details');
let is_true = false;
see_details.addEventListener('click', () => {
    is_true = !is_true;
    if (is_true) {
        p_height.classList.add('active');
        p_height.classList.add('active::after');
        see_details.innerHTML = "نمایش کمتر-";
    }
    else {
        p_height.classList.remove('active');
        p_height.classList.remove('active::after');
        see_details.innerHTML = "نمایش بیشتر+";
    }
})

//بخش فرم برای فکوس روی اینپوت
let form_lbl = document.querySelector('.form_label');
let form_input = document.querySelector('.form_input');
let form_lbl2 = document.querySelector('.form_label2');
let form_input2 = document.querySelector('.form_input2');
form_input.addEventListener('focus', () => {
    form_lbl.classList.add('focus_style_lbl');
    form_input.classList.add('focus_style_input');
})
form_input2.addEventListener('focus', () => {
    form_lbl2.classList.add('focus_style_lbl');
    form_input2.classList.add('focus_style_input');
})

form_input.addEventListener('blur', () => {
    if (form_input.value == "") {
        form_lbl.classList.remove('focus_style_lbl');
        form_input.classList.remove('focus_style_input');
    }
    else {
        form_lbl.classList.add('focus_style_lbl');
        form_input.classList.remove('focus_style_input');
    }
})
form_input2.addEventListener('blur', () => {
    if (form_input2.value == "") {
        form_lbl2.classList.remove('focus_style_lbl');
        form_input2.classList.remove('focus_style_input');
    }
    else {
        form_lbl2.classList.add('focus_style_lbl');
        form_input2.classList.remove('focus_style_input');
    }
})

// برای قسمت دیدگاه (نوار آبی)
const items = document.querySelectorAll('.item_right li');
// حالت پیش فرض
for (let i = 0; i < 3; i++) {
    items[i].classList.add('selected');
}

items.forEach((item, index) => {

    item.addEventListener('click', () => {

        items.forEach(li => {
            li.classList.remove('selected');
        });

        for (let i = 0; i < index; i++) {
            items[i].classList.add('selected');
        }

        items[index].classList.add('selected');

    });

});




//قسمت گوشی در فوتر 
let on_click=document.querySelectorAll('.box1_footer_right_container_link_itemss');
let show_box=document.querySelectorAll('.footer_ul_js');
let icons_box=document.querySelectorAll('.icons');
on_click.forEach((box,i) => {
    box.addEventListener('click',()=>{
        show_box[i].classList.toggle('footer_js');
        icons_box[i].classList.toggle('rot');
    })
});


//برای اینپوت نامبر
let input_num=document.querySelector('.inpout_number');
let sum_input_num=document.querySelector('.sum');
let mines_input_num=document.querySelector('.mines');
sum_input_num.addEventListener('click' , ()=>{
    if(parseInt(input_num.value)>=0 && parseInt(input_num.value)<20)
        input_num.value=(parseInt(input_num.value)+1).toString();
})
mines_input_num.addEventListener('click' , ()=>{
    if(parseInt(input_num.value)>=1)
        input_num.value=(parseInt(input_num.value)-1).toString();
    else
        input_num.value='0';
})

//برای کیلیک روی رنگ ها
let colors = document.querySelectorAll('.item_color');
colors[0].classList.add('boredr_on');
colors.forEach(color => {
    color.addEventListener('click', function () {
        colors.forEach(item => {
            item.classList.remove('boredr_on');
            item.classList.add('boredr_off');
        });

        this.classList.remove('boredr_off');
        this.classList.add('boredr_on');
    });
});





