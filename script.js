function order_pizza()
{
    // alert('PIZZA');
    // alert('ham');
    let order_details = []; // array 

    //fill array

    // count
    let count_p =prompt('How many?');
    let det = '';
    if (count_p >2){
        alert('You will receive one cup of cofee without charge!!');
    }
    if (count_p > 0){
        det =  'ordered pizza, count: ' + count_p;
        order_details.push(det);
    }

    // tomato
    let yn_tomato = '';
    yn_tomato = prompt('do you want tomato? (yes/no)');
    if (yn_tomato == 'yes'){
        det =  'with tomato';
        order_details.push(det);
    }

    //pickles
    let yn_pickles = '';
    yn_pickles = prompt('do you want pickles? (yes/no)');
    if (yn_pickles == 'yes'){
        det =  'with pickles';
        order_details.push(det);
    }

    // do you want lettuce, pickles and tomatoes? Do you want another patty?
    let str_order_summary = '';
    order_details.forEach(element => {
        str_order_summary = str_order_summary + element + '; '
    });
    alert(str_order_summary);

    document.getElementById("pizza").style.backgroundColor = 'yellow';
    document.getElementById("hamburger").style.backgroundColor = 'red';
};


function order_hamburger()
{
    // alert('ham');
    let order_details = []; // array 

    //fill array

    // count
    let count_p =prompt('How many?');
    let det = '';
    if (count_p >2){
        alert('You will receive one cup of cola without charge');
    }
    if (count_p > 0){
        det =  'ordered hamburgers: ' + count_p;
        order_details.push(det);
    }

    // lettuce
    let yn_lettuce =prompt('do you want lettuce? (yes/no)');
    if (yn_lettuce == 'yes'){
        det =  'with lettuce';
        order_details.push(det);
    }

    //pickles
    let yn_pickles =prompt('do you want pickles? (yes/no)');
    if (yn_pickles == 'yes'){
        det =  'with pickles';
        order_details.push(det);
    }

    // do you want lettuce, pickles and tomatoes? Do you want another patty?
    let str_order_summary = '';
    order_details.forEach(element => {
        str_order_summary = str_order_summary + element + '; '
    });
    alert(str_order_summary);

    document.getElementById("pizza").style.backgroundColor = 'red';
    document.getElementById("hamburger").style.backgroundColor = 'yellow';

};