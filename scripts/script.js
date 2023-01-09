var a=1;
var b=1;
var c=1;
function zmiana(){
    if(a==0)
    {
        document.getElementById('tryb').src='img/mode2.png';
        document.getElementById('tabelka').className='black'
        document.getElementById('body').className='black'
        a=1;
    }
    else
    {
        document.getElementById('tryb').src='img/mode1.png';
        document.getElementById('tabelka').className='white'
        document.getElementById('body').className='white'
        a=0;
    }
}
var d = '';
var y = '';
var z = '';
var wynik = '';
var znak = ' ';
var znak1 = 0;
var p = 0;
var l = 0;
function wpisz(x){
    switch(x){
        case '=': y=parseInt(y,10);z=parseInt(z,10);
        if(znak=='&Cross;') wynik=y*z;
        if(znak=='&minus;') wynik=y-z;
        if(znak=='&plus;') wynik=y+z;
        if(znak=='&divide;')if(z==0){y='Nie można dzielić przez ';znak='';z='zero';wynik='';}else wynik=y/z;
        
        wynik = " = "+wynik;
        if(z=='zero') wynik = "";
        break;
        case 'CE': 
        y = '';
        z = '';
        wynik = '';
        znak = '';
        znak1 = 0;
        p = 0;
        l = 0; break;
        case 'C': if(znak1==0){y = '';z = '';wynik = '';p = 0;l = 0;znak=' ';znak1=0;}else{l = 0;z = '';wynik = '';} break;
        case 'as': if(znak1==0)y=d;else z=d;  break;

        case '/': if(y!='')if(znak1==0){znak='&divide;';}else{y=parseInt(y,10);z=parseInt(z,10);
            if(znak=='&divide;') y=y/z;
            if(znak=='&Cross;') y=y*z;
            if(znak=='&minus;') y=y-z;
            if(znak=='&plus;') y=y+z; z = '';
        wynik = '';
        znak1 = 0;
        p = 0;
        l = 0; znak='&divide;';} znak1=1; break;

        case '*': if(y!='')if(znak1==0){znak='&Cross;';}else{y=parseInt(y,10);z=parseInt(z,10);
            if(znak=='&divide;') y=y/z;
            if(znak=='&Cross;') y=y*z;
            if(znak=='&minus;') y=y-z;
            if(znak=='&plus;') y=y+z; z = '';
        wynik = '';
        znak1 = 0;
        p = 0;
        l = 0; znak='&Cross;';} znak1=1; break;

        case '-': if(y!='')if(znak1==0){znak='&minus;';}else{y=parseInt(y,10);z=parseInt(z,10);
            if(znak=='&divide;') y=y/z;
            if(znak=='&Cross;') y=y*z;
            if(znak=='&minus;') y=y-z;
            if(znak=='&plus;') y=y+z; z = '';
        wynik = '';
        znak1 = 0;
        p = 0;
        l = 0; znak='&minus;';} znak1=1; break;

        case '+': if(y!='')if(znak1==0){znak='&plus;';}else{y=parseInt(y,10);z=parseInt(z,10);
            if(znak=='&divide;') y=y/z;
            if(znak=='&Cross;') y=y*z;
            if(znak=='&minus;') y=y-z;
            if(znak=='&plus;') y=y+z; z = '';
        wynik = '';
        znak1 = 0;
        p = 0;
        l = 0; znak='&plus;';} znak1=1; break;
        

        case '+-': d=y; if(znak1==0)    
        {
            parseInt(y,10);
            if(y>0)
            y=-y;
            else
            y=Math.abs(y);
        }
        else
        {
            parseInt(z,10);
            if(z>0)
            z=-z;
            else
            z=Math.abs(z);
        }
        break;
        case ',': if(znak1==0){if(p==0){d=y;y=y+'.'; p=1;}}else{if(l==0){d=z;z=z+'.'; l=1;}}; break;
        case '0': if(znak1==0){d=y;y=y+x;}else{d=z;z=z+x;} break;
        case '1': if(znak1==0){d=y;y=y+x;}else{d=z;z=z+x;} break;
        case '2': if(znak1==0){d=y;y=y+x;}else{d=z;z=z+x;} break;
        case '3': if(znak1==0){d=y;y=y+x;}else{d=z;z=z+x;} break;
        case '4': if(znak1==0){d=y;y=y+x;}else{d=z;z=z+x;} break;
        case '5': if(znak1==0){d=y;y=y+x;}else{d=z;z=z+x;} break;
        case '6': if(znak1==0){d=y;y=y+x;}else{d=z;z=z+x;} break;
        case '7': if(znak1==0){d=y;y=y+x;}else{d=z;z=z+x;} break;
        case '8': if(znak1==0){d=y;y=y+x;}else{d=z;z=z+x;} break;
        case '9': if(znak1==0){d=y;y=y+x;}else{d=z;z=z+x;} break;
    }
    document.getElementById('wynik').innerHTML=y+' '+znak+' '+z+wynik;
    
}
