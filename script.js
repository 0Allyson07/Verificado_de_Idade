function verificar(){
 var data = new Date();
 var ano = data.getFullYear();
 var txtano = window.document.getElementById('txtano');
 var res = window.document.getElementById('res');

  if (txtano.value.length == 0 || txtano.value > ano){
      window.alert('verifique os dados e tente novamente');
  } else {
      var radsex = window.document.getElementsByName('radsex');
      var idade = ano - Number(txtano.value)
      var gen = '';
      var img = window.document.createElement('img');
      img.setAttribute('id','foto')
      if (radsex[0].checked){
          gen = 'Homem'
        if (idade >=0 && idade < 10){
            //criança
            img.setAttribute('src','img/crianca_m.png')
        }  else if(idade <21){
            //jovem
            img.setAttribute('src','img/jovem_m.png')
        } else if (idade <50){
            //adulto
            img.setAttribute('src','img/adult_m.png')
        } else{
            //idoso
           img.setAttribute('src','img/idoso_m.png') 
        }
      } else if(radsex[1].checked){
           gen = 'Mulher'
           if (idade >=0 && idade <=11){
            //criança
            img.setAttribute('src','img/crianca_f.png')
        }  else if(idade <21){
            //jovem
            img.setAttribute('src','img/jovem_f.png')
        } else if (idade <50){
            //adulto
            img.setAttribute('src','img/adult_f.png')
        } else{
            //idoso
            img.setAttribute('src','img/idoso_f.png')
           
        }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${gen} com ${idade} anos` 
      res.appendChild(img) 
}
}