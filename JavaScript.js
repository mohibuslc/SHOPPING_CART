

const incraseBtn = document.getElementById('incarse');
incraseBtn.addEventListener('click', function(){



    // const amountBalance = document.getElementById('amountText');

    // const amountBalanceInt = parseInt(amountBalance.value);
    
    // const caseNewCount = amountBalanceInt +1 ;

    // amountBalance.value = caseNewCount ;

    // const caseBalance =  caseNewCount * 59 ;

    // document.getElementById('balance').innerText = '$' +caseBalance ;


    productCaseTotal(true)

});

const decraseBtn = document.getElementById('decrace')
decraseBtn.addEventListener('click', function(){

    // const amountBalance = document.getElementById('amountText');

    // const amountBalanceInt = parseInt(amountBalance.value);
    
    // const caseNewCount = amountBalanceInt -1 ;

    // amountBalance.value = caseNewCount ;

    // const caseBalance =  caseNewCount * 59 ;

    // document.getElementById('balance').innerText = '$' +caseBalance ;
  

    productCaseTotal(false)
   
});

function productCaseTotal(isChange){

    const amountBalance = document.getElementById('amountText');

    const amountBalanceInt = parseInt(amountBalance.value);
    
    //const caseNewCount = amountBalanceInt -1 ;

    let caseNewCount = amountBalanceInt
    if(isChange == true){

        caseNewCount= amountBalanceInt +1 ;
    } 

    if(isChange == false && caseNewCount > 0) {

        caseNewCount= amountBalanceInt -1 ;

    }
    

    amountBalance.value = caseNewCount ;

    const caseBalance =  caseNewCount * 59 ;

    document.getElementById('balance').innerText = '$' +caseBalance ;

}

