let count = 0;
const btnShuffle = document.querySelector('#casinoShuffle');
const btnStop = document.querySelector('#casinoStop');
const casino1 = document.querySelector('#casino1');
const casino2 = document.querySelector('#casino2');
const casino3 = document.querySelector('#casino3');
const casino4 = document.querySelector('#casino4');
const casino5 = document.querySelector('#casino5');
const casino6 = document.querySelector('#casino6');
const set_label_1 = document.querySelector('#set_label_1');
mCasino1 = new SlotMachine(casino1, {
  active: 0,
  delay: 500
});
mCasino2 = new SlotMachine(casino2, {
  active: 8,
  delay: 500
});
mCasino3 = new SlotMachine(casino3, {
  active: 2,
  delay: 500
});
mCasino4 = new SlotMachine(casino4, {
  active: 3,
  delay: 500
});
mCasino5 = new SlotMachine(casino5, {
  active: 9,
  delay: 500
});
mCasino6 = new SlotMachine(casino6, {
  active: 6,
  delay: 500
});


btnShuffle.addEventListener('click', () => {
    count = 3;
    mCasino1.shuffle(9999);
    mCasino2.shuffle(9999);
    mCasino3.shuffle(9999);
    mCasino4.shuffle(9999);
    mCasino5.shuffle(9999);
    mCasino6.shuffle(9999);
  });
  
  btnStop.addEventListener('click', () => {
    switch(count) {
      case 3:
        var res_1 = randomIntFromInterval(100000, 999999);
        ReplaceContentLabel('set_label_1',res_1)
        console.log(res_1);
        break;
      case 2:
        var res_2 = randomIntFromInterval(100000, 999999);  
        ReplaceContentLabel('set_label_2', res_2)
        console.log(res_2);
        break;
      case 1:
        mCasino1.stop();
        mCasino2.stop();
        mCasino3.stop();
        mCasino4.stop();
        mCasino5.stop();
        mCasino6.stop();
        var res_3 = randomIntFromInterval(100000, 999999);
        ReplaceContentLabel('set_label_3', res_3);
        set_Results(res_3);
        break;
    }
    count--;
  });
  
  function set_Results(set_Value) {
    console.log(set_Value);
    var setter = split_digits(set_Value);
    setter.forEach(displayResult);
  }
  
  function split_digits(n) {
    return Array.from(String(n), Number);
  }
  
  function displayResult(element, index, array) {
    if(index == 0){
      var cas0 = transform_Ratio(element);
      //console.log(cas0);
      mCasino1._changeTransform(cas0);
    }
    if(index == 1){
      var cas1 = transform_Ratio(element);
      //console.log(cas1);
      mCasino2._changeTransform(cas1);
    }
    if(index == 2){
      var cas2 = transform_Ratio(element);
      //console.log(cas2);
      mCasino3._changeTransform(cas2);
    }
    if(index == 3){
      var cas3 = transform_Ratio(element);
      //console.log(cas3);
      mCasino4._changeTransform(cas3);
    }
    if(index == 4){
      var cas4 = transform_Ratio(element);
      //console.log(cas4);
      mCasino5._changeTransform(cas4);
    }
    if(index == 5){
      var cas5 = transform_Ratio(element);
      //console.log(cas5);
      mCasino6._changeTransform(cas5);
    }
  }
  
  function transform_Ratio(val) {
    if(val == 0){
      return 0
    }
    else{
      return ((val * -100)); 
    }
  }

  function ReplaceContentLabel(id,content) {
    var container = document.getElementById(id);
    container.innerHTML = content;
    }

    function randomIntFromInterval(min,max)
    {
        return Math.floor(Math.random()*(max-min+1)+min);
    }