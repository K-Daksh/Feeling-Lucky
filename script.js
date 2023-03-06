'use strict';
let Player_Max_1=0,Player_Max_2=0;
let Player_Chance=1;
let mute_bool =true;
let Player_Current_1=0,Player_Current_2=0;
const Swap_Players = function(Player_Chance){
    if(Player_Chance){
        Player_Chance--;
    }else{
        Player_Chance++;
    }
}
const Change_Player = function (Player_Chance){
    if(Player_Chance){
        document.querySelector('.player--0').classList.remove('player--active');
        document.querySelector('.player--1').classList.add('player--active');
        
    }else{
        document.querySelector('.player--1').classList.remove('player--active');
        document.querySelector('.player--0').classList.add('player--active');
    }
}
const Check_Winner = function(){
    if(Player_Chance){
        if(Player_Max_1>=100){
            document.querySelector('.player--0').classList.add('player--winner');
            document.querySelector('#name--0').textContent='PLAYER 1 WON';
            document.querySelector('.btn--roll').classList.add('btn_blk');
            document.querySelector('.btn--hold').classList.add('btn_blk');
            document.querySelector('.btn_Score').classList.add('btn_blk');           
        }else{
            return;
        }
    }else{
        if(Player_Max_2>=100){
            document.querySelector('.player--1').classList.add('player--winner');
            document.querySelector('#name--1').textContent='PLAYER 2 WON';
            document.querySelector('.btn--roll').classList.add('btn_blk');
            document.querySelector('.btn--hold').classList.add('btn_blk');
            document.querySelector('.btn_Score').classList.add('btn_blk');
        }else{
            return;
        }
    }
}
const Add_Max = function(Player_Chance){
    if(Player_Chance){
        Player_Max_1+=Player_Current_1;
        document.querySelector('#score--0').textContent=`${Player_Max_1}`;
        document.querySelector('#current--0').textContent='0';
        Player_Current_1=0
        Check_Winner();
        return;

    }else{
        Player_Max_2+=Player_Current_2;
        document.querySelector('#score--1').textContent=`${Player_Max_2}`;
        document.querySelector('#current--1').textContent='0';
        Player_Current_2=0;
        Check_Winner();
        return;
    }
}

document.querySelector('.btn--mute').addEventListener('click',function(){
    const check_mute=String(document.querySelector('.btn--mute').textContent);
    console.log(check_mute);
    if(check_mute==="🔊 UNMUTE"){
        document.querySelector('.btn--mute').textContent="🔇 MUTE";
        new Audio("WrongBuzzerTrimmed.mp3").play();
    }else{
        document.querySelector('.btn--mute').textContent="🔊 UNMUTE";
        invrt_bl(sound_check);
    }
});
const Find_Dice_Random = function(){
    const Find_Random=Number(Math.trunc(Math.random()*6+1));
    return Find_Random;
}
const Show_Dice = function(Random_no,Player_Chance){
    document.querySelector('.dice').src=`dice-${Random_no}.png`;
    const grab_audio = document.querySelector('.btn--mute').textContent;
    if(Random_no==1){ 
        if(grab_audio=="🔇 MUTE"){
            new Audio("WrongBuzzerTrimmed.mp3").play();
        }
        if(Player_Chance){
            Player_Current_1=0;
            document.querySelector('#current--0').textContent='0';
            Change_Player(Player_Chance);
            Change_Player_no();
            return;

        }else{
            Player_Current_2=0;
            document.querySelector('#current--1').textContent='0';
            Change_Player(Player_Chance);
            Change_Player_no();
            return;
        }
    }
    if(Player_Chance){
        Player_Current_1+=Random_no;
        document.querySelector('#current--0').textContent=`${Player_Current_1}`;
    }else{
        Player_Current_2+=Random_no;
        document.querySelector('#current--1').textContent=`${Player_Current_2}`;
    }
    
}
document.querySelector('.btn--roll').addEventListener('click',function(){
    Show_Dice(Find_Dice_Random(),Player_Chance);
});
document.querySelector('.dice').addEventListener('click',function(){
    Show_Dice(Find_Dice_Random(),Player_Chance);
});
document.querySelector('.btn--hold').addEventListener('click',function(){
    Add_Max(Player_Chance);
    Change_Player(Player_Chance);
    Change_Player_no();
});
document.querySelector('.btn--new').addEventListener('click',function(){
    const g_audio = document.querySelector('.btn--mute').textContent;
    if(g_audio=="🔇 MUTE"){
        new Audio("WrongBuzzerTrimmed.mp3").play();
    }
    if(Player_Max_1 >=100 || Player_Max_2>=100){
        document.querySelector('.btn--roll').classList.remove('btn_blk');
        document.querySelector('.btn--hold').classList.remove('btn_blk');
        document.querySelector('.btn_Score').classList.remove('btn_blk');
        if(Player_Max_1>=100){
            document.querySelector('.player--0').classList.remove('player--winner');
            document.querySelector('#name--0').textContent='PLAYER 1';
        }else{
            document.querySelector('.player--1').classList.remove('player--winner');
            document.querySelector('#name--1').textContent='PLAYER 2';

        }
    }
    if(Player_Chance==0){
        Change_Player(Player_Chance);
    }
    Player_Current_1=0;
    Player_Current_2=0;
    Player_Max_1=0;
    Player_Max_2=0;
    document.querySelector('#current--0').textContent='0';
    document.querySelector('#current--1').textContent='0';
    document.querySelector('#score--1').textContent='0';
    document.querySelector('#score--0').textContent='0';
});

const Change_Player_no = function(){
    if(Player_Chance){
        Player_Chance=0;
    }else{
        Player_Chance=1;
    }
}
const Change_Player_no_default = function(){
    Player_Chance=1;
}
const Change_Player_no_undefault = function(){
    Player_Chance=1;
}
