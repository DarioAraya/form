//cargando respectivo js a los inputs
const textFields = document.querySelectorAll(".mdc-text-field");
for (let tf of textFields) {
  mdc.textField.MDCTextField.attachTo(tf);
}
//cargando js de MDCList
const list_item= document.querySelector('.mdc-deprecated-list');
const MDCList = mdc.list.MDCList;
const list = new MDCList(list_item);
const list_items = document.querySelectorAll('.mdc-deprecated-list-item');







document.addEventListener('click',e=>{
  //cargando respectivo js a los inputs
  const textFields = document.querySelectorAll(".mdc-text-field");
  //recorriendo todos los textfields para cargar su respectivo js
  for (let tf of textFields) {
    mdc.textField.MDCTextField.attachTo(tf);
  }
  //recorriendo todos los elementos del menu
  for (let lt  of list_items) {
    //rescatando el segundo elemento dentro de cada li, este seria donde esta el texto
    const lt_child =lt.children[1].classList;

    //removiendo la clase selected del elemento de texto, esto se usa para darle color al texto cuando esta seleccionado
    if(lt.children[1].classList.value=='mdc-deprecated-list-item__text selected'){
      lt.children[1].classList.remove('selected');
    }
    //si e.target devuelve true al compararse con el li o el elemento de texto
    if(e.target.matches(`.${lt.classList.value}`)||e.target.matches(`.${lt_child.value}`)){
      //el menu tiene un atributo llamado tabindex, cada que se da click este cambia al li seleccionado, por defecto es -1
      const selected = lt.getAttribute('tabindex');
      //si tabindex es 0
      if(selected==0){
        //añadimos al elemento de texto del menu la propiedad selected, esto le dara el color
        lt_child.toggle('selected');
        search_selected();
      }   
    }
  }
});

const data_company = `
<!--content-->
<div class="grid-form form-title title-top">${'Datos de la empresa'}</div>
<!--Rut de la empresa-->
  <div class="grid-form rut">${'RUT de la empresa'}</div>
  <div class="grid-form form-input rut">
    <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label" id="rut_empresa">
      <span class="mdc-text-field__ripple rut"></span>
        <input class="mdc-text-field__input rut" type="text" placeholder="Escriba texto" aria-label="Label"/>
      <span class="mdc-line-ripple rut"></span>
    </label>
    <div class="mdc-text-field-helper-line">
      <div class="mdc-text-field-helper-text" aria-hidden="true">
        Por Ejemplo
      </div>
    </div>
  </div>
<!--Razon social-->
  <div class="grid-form razon">Raz&#243;n social</div>
  <div class="grid-form form-input razon">
    <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label" id="razon_social">
      <span class="mdc-text-field__ripple razon"></span>
        <input class="mdc-text-field__input razon" type="text" placeholder="Escriba texto" aria-label="Label"/>
      <span class="mdc-line-ripple razon"></span>
    </label>
    <div class="mdc-text-field-helper-line">
      <div class="mdc-text-field-helper-text" aria-hidden="true">
        Por Ejemplo
      </div>
    </div>
  </div>
<!--Direccion de la empresa-->
  <div class="grid-form direccion">Direcci&#243;n de la empresa</div>
  <div class="grid-form form-input direccion">
    <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label" id="#direccion">
      <span class="mdc-text-field__ripple direccion"></span>
        <input class="mdc-text-field__input direccion" type="text" placeholder="Escriba texto" aria-label="Label"/>
      <span class="mdc-line-ripple direccion"></span>
    </label>
    <div class="mdc-text-field-helper-line">
      <div class="mdc-text-field-helper-text" aria-hidden="true">
        Por Ejemplo
      </div>
    </div>
  </div>
<!--Comuna-->
  <div class="grid-form comuna">Comuna</div>
  <div class="grid-form form-input comuna">
    <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label" id="#comuna">
      <span class="mdc-text-field__ripple comuna"></span>
        <input class="mdc-text-field__input comuna" type="text" placeholder="Escriba texto" aria-label="Label"/>
      <span class="mdc-line-ripple comuna"></span>
    </label>
    <div class="mdc-text-field-helper-line">
      <div class="mdc-text-field-helper-text" aria-hidden="true">
        Por Ejemplo
      </div>
    </div>
  </div>
<!--Actividad economica-->
  <div class="grid-form actividad">Actividad econ&#243;mica</div>
  <div class="grid-form form-input actividad">
    <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label" id="#actividad">
      <span class="mdc-text-field__ripple actividad"></span>
        <input class="mdc-text-field__input actividad" type="text" placeholder="Escriba texto" aria-label="Label"/>
      <span class="mdc-line-ripple actividad"></span>
    </label>
    <div class="mdc-text-field-helper-line">
      <div class="mdc-text-field-helper-text" aria-hidden="true">
        Por Ejemplo
      </div>
    </div>
  </div>
<!--Boton-->
  <div class="grid-form botton"></div>
  <div class="grid-form form-input form-button">
    <button class="mdc-button mdc-button--raised">
      <span class="mdc-button__label">ENVIAR</span>
    </button>
  </div>
`;

const data_agent = `
<div class="grid-form form-title title-top">Datos del representante legal</div>
<!--Rut representante-->
<div class="grid-form legal">RUT del representante legal</div>
<div class="grid-form form-input legal">
  <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label" id="legal">
    <span class="mdc-text-field__ripple legal"></span>
    <input class="mdc-text-field__input legal" type="text" placeholder="Escriba texto" aria-label="Label"/>
    <span class="mdc-line-ripple legal"></span>
  </label>
  <div class="mdc-text-field-helper-line">
      <div class="mdc-text-field-helper-text" aria-hidden="true">
        Por Ejemplo
      </div>
  </div>
</div>

<!--Nombre representante-->
<div class="grid-form nombre">Nombre del representante legal</div>
<div class="grid-form form-input nombre">
  <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label" id="nombre">
    <span class="mdc-text-field__ripple nombre"></span>
    <input class="mdc-text-field__input nombre" type="text" placeholder="Escriba texto" aria-label="Label"/>
    <span class="mdc-line-ripple nombre"></span>
  </label>
  <div class="mdc-text-field-helper-line">
      <div class="mdc-text-field-helper-text" aria-hidden="true">
        Por Ejemplo
      </div>
  </div>
</div>

<!--Email representante-->
<div class="grid-form email">Email del representante legal</div>
<div class="grid-form form-input email">
  <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label" id="email">
    <span class="mdc-text-field__ripple email"></span>
    <input class="mdc-text-field__input email" type="text" placeholder="Escriba texto" aria-label="Label"/>
    <span class="mdc-line-ripple email"></span>
  </label>
  <div class="mdc-text-field-helper-line">
      <div class="mdc-text-field-helper-text" aria-hidden="true">
        Por Ejemplo
      </div>
  </div>
</div>

<!--Rut vigente-->
<div class="grid-form rut-vigente">Rut vigente</div>
  <div class="grid-form form-input rut-vigente">
    <div class="grid-form input-attach front"> 
      <button id="attach_file" class="mdc-icon-button button1" aria-label="attach_file" aria-pressed="false">
      <div class="mdc-icon-button__ripple front"></div>
      <i class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on" id="i_top">attach_file</i>
      <i class="material-icons mdc-icon-button__icon" id="i_top2">attach_file_border</i>
      </button>
      RUT parte frontal
    </div>
    <div class="grid-form input-attach back"> 
      <button id="attach_file" class="mdc-icon-button button2" aria-label="attach_file" aria-pressed="false">
      <div class="mdc-icon-button__ripple back"></div>
      <i class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on" id="i_back">attach_file</i>
      <i class="material-icons mdc-icon-button__icon" id="i_back2">attach_file_border</i>
      </button>
      RUT parte trasera
    </div>
</div>

<!--Certificado digital-->
<div class="grid-form certificado">¿Tiene certificado digital?</div>
<div class="grid-form form-input certificado mdc-form-field">
  <div class="mdc-radio radio-1">
    <input class="mdc-radio__native-control radio-1" type="radio" id="radio-1" name="radios" checked>
    <div class="mdc-radio__background radio-1">
      <div class="mdc-radio__outer-circle radio-1"></div>
      <div class="mdc-radio__inner-circle radio-1"></div>
    </div>
    <div class="mdc-radio__ripple radio-1"></div>
  </div>
  <label for="radio-1" id="yes">Si</label>


  <div class="mdc-radio radio-2">
    <input class="mdc-radio__native-control radio-2" type="radio" id="radio-2" name="radios">
    <div class="mdc-radio__background radio-2">
      <div class="mdc-radio__outer-circle radio-2"></div>
      <div class="mdc-radio__inner-circle radio-2"></div>
    </div>
    <div class="mdc-radio__ripple radio-2"></div>
  </div>
  <label for="radio-2" id="no">No</label>
</div>

<!--Boton-->
<div class="grid-form button-2"></div>
<div class="grid-form form-input form-button button-2">
  <button class="mdc-button mdc-button--raised button-2">
    <span class="mdc-button__label button-2">ENVIAR</span>
  </button>
</div>
`;


//remover datos de la empresa
const clean_data=()=>{
  const clean = document.getElementById('content-item'); 
  clean.innerHTML = '';
  console.log('se limpiaron los elementos')
}

//generar datps de la empresa
const generate_data = (html)=>{   
  const clean = document.getElementById('content-item'); 
  clean.innerHTML=html;
  console.log('se agregaron los elementos')
}

const search_selected =()=>{
  const selectedItem = document.querySelector('.selected');
  //si el elemento con la clase  tiene el texto mostrara lo siguiente
  if(selectedItem.textContent=='Datos de la empresa'){        
    //limpiar div padre
    clean_data();
    //cargar div padre
    generate_data(data_company); 
  }
  if(selectedItem.textContent=='Datos del representante legal'){        
    //limpiar div padre
    clean_data();
    //cargar div padre
    generate_data(data_agent); 

  }
}

//funciones para generar elementos
const nuevoDiv = (clase,id) => {
  const div = document.createElement("DIV");
  div.setAttribute("class", clase);
  div.setAttribute("id", id);
  return div;
};

search_selected();



