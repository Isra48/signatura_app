import React, { useState } from 'react';
import Template from './HTML0'
import DropdownCi from './dropdownCi.jsx';
import DropdownCL from './dropdownCL'; 
import  Navbar from './navbar/navbar'
import ladamx from './ladamx.json';
import Ci from './ci.json';
import './styles.css';
import ReactDOMServer from 'react-dom/server';
import Lottie from 'react-lottie';
import Loading from './assets/loading.json'




 

function App() {

const [interruptor, setinterruptor] = useState(false);


  const [loading, setloading] = useState(false);
  
  const lottieOptions = {
    animationData: Loading,
    loop: true,
    autoplay: true
  };




  const [colaboradorSCL, setColaboradorSCL] = useState({
    nombre: '(Nombre) ',
    apellido: '(Apellido)',
    puesto:'(Aquí va el puesto del colaboraddor)',
    pais: '(Agrega el pais)',
    ciudad: 'Solo aplica en MX y COL',
    phone:'0000',
    clave:' clave internacional telefonica',
    lada:' clave lada por estados cdmx',
    ext:'0000',
    mobile:'000000',
    skype:'',
    whatsapp:false,
    correo:'(Ingresa correo:)'
  
    
  });

  const [colaboradorItus, setColaboradorItus] = useState({
    nombre: '(Nombre)',
    apellido: '(Apellido)',
    puesto:'(Aquí va el puesto del colaboraddor)',
    pais: '(Agrega el pais)',
    ciudad: 'Solo aplica en MX y COL',
    phone:'0000',
    clave:' clave internacional telefonica',
    lada:' clave lada por estados cdmx',
    ext:'0000',
    mobile:'00000000',
    skype:'',
    whatsapp:false,
    correo:'(Ingresa correo:)'
  

  });

  //Logica formato Telefono://
  function separarPorLaMitad(str) {
    let mitad = Math.floor(str.length / 2);
    let primeraMitad = str.slice(0, mitad);
    let segundaMitad = str.slice(mitad);
  
    return primeraMitad + " " + segundaMitad;
  }
  






  

  const htmlCode = `<!DOCTYPE html>  <head>
    <meta charset="UTF-8">
  </head><html lang="en"> <BODY style="font-size: 10pt; font-family: Tahoma, sans-serif"><table style="width: 430px; font-size: 10pt; font-family: Arial, sans-serif;" cellpadding="0" cellspacing="0"><tbody><tr></tr><tr><td style="margin-bottom: 10px;"><a href="http://www.seacargo.com/" target="_blank" rel="noopener"><img border="0" alt="línea" width="430" style="width:430px; height:2px; border:0; margin-bottom:5px; padding-top: 10px;" src="http://www.seacargo.com/LineaAzul.png"></a> </td></tr><tr><td style="font-size: 14pt; font-family: Tahoma; width: 511px; padding-bottom: 10px; vertical-align:top;margin-bottom: 10px; font-weight: 400;" valign="top"><span style="font-family: Helvetica; font-size: 9pt; color:#878787; font-weight: 500;"><span style="font-weight: 600; color:#0043F6;"> ${colaboradorSCL.nombre} ${colaboradorSCL.apellido.toUpperCase()}</span> | <span style="color:red;"><strong>${colaboradorSCL.puesto}</strong></span> | ${colaboradorSCL.pais}, ${colaboradorSCL.ciudad} |<br>Phone: +(${Ci[colaboradorSCL.clave]})  ${separarPorLaMitad(colaboradorSCL.phone)} ext: ${colaboradorSCL.ext} | Mobile: +${Ci[colaboradorSCL.clave]} (${ladamx[colaboradorSCL.lada]}) ${separarPorLaMitad(colaboradorSCL.mobile)} ${colaboradorSCL.whatsapp ? `| <a   href="https://wa.me/${Ci[colaboradorSCL.clave]}${ladamx[colaboradorSCL.lada]}${colaboradorSCL.mobile}" target="_blank">WhatsApp</a>` : '' } <br>Skype: ${colaboradorSCL.skype} | E-mail: <a href="mailto:${colaboradorSCL.correo}">${colaboradorSCL.correo}</span></td></tr><tr style="margin-bottom: 10px;"> <td style="margin-bottom: 10px;"><a href="http://www.seacargo.com/" target="_blank" rel="noopener"><img border="0" alt="logo" width="130" style="width:130px; height:71px; border:0; margin-bottom:5px; padding-top: 10px;" src="https://seacargo.com/wp-content/uploads/2023/05/Logo_firmas.png"></a></td></tr></tbody> </table></BODY> </html>`;






{/* Template Ityus */}

  const htmlCodeItus = `<tbody><tr>
  <td width="614" colspan="2" valign="top" style="width:460.45pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="ES-TRAD">&nbsp;<img src="https://itusmarine.com/wp-content/uploads/2023/06/FIRMA-ITUS.gif" class="CToWUd a6T" data-bit="iit" tabindex="0"><div class="a6S" dir="ltr" style="opacity: 0.01; left: 560.196px; top: 446.033px;"><div id=":17j" class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q" role="button" tabindex="0" aria-label="Descargar el archivo adjunto " jslog="91252; u014N:cOuCgd,Kr2w4b,xr6bB; 4:WyIjbXNnLWY6MTc2Njk5NjU3NjU2ODY3NTQyNyIsbnVsbCxbXV0." data-tooltip-class="a1V" data-tooltip="Descargar"><div class="akn"><div class="aSK J-J5-Ji aYr"></div></div></div></div></span></p>
  <p class="MsoNormal"><span lang="ES-TRAD">&nbsp;</span></p>
  </td>
 </tr>
 <tr>
  <td width="85" valign="top" style="width:63.55pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="ES-TRAD">&nbsp;<img src="https://ci3.googleusercontent.com/mail-sig/AIorK4z7uDCJqEafZSHNBNL2Wxw6kpLsXjCovRsZucih1KeFeK-1-gJfwXS6XlHqoyCXfUB-9RmpLr8" class="CToWUd" data-bit="iit"></span></p>
  </td>
  <td width="529" valign="top" style="width:14.0cm;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><b><span lang="EN-US" style="font-size:18.0pt;color:#ffe599">| </span></b><b><span lang="EN-US" style="font-size:16.0pt;color:#05227b"> ${colaboradorItus.nombre}</span></b><b><span lang="EN-US" style="font-size:18.0pt;color:#05227b"> </span></b><b><span lang="EN-US" style="font-size:18.0pt;color:#ffe599">|</span></b><b><span lang="EN-US" style="font-size:18.0pt;color:#05227b"> </span></b><b><span lang="EN-US" style="font-size:16.0pt;color:#05227b">${colaboradorItus.puesto}</span></b><b><span lang="EN-US" style="font-size:18.0pt;color:#05227b"></span></b></p>
  </td>
 </tr>
 <tr style="height:70.35pt">
  <td width="614" colspan="2" valign="top" style="width:460.45pt;padding:0cm 5.4pt 0cm 5.4pt;height:70.35pt">
  <p style="margin:0cm"><b><span style="font-size:10.0pt;font-family:&quot;Helvetica&quot;,sans-serif;color:#666666">Tel Chile:</span></b><span style="font-size:10.0pt;font-family:&quot;Helvetica&quot;,sans-serif;color:#666666">&nbsp;+56 (2) 2979 0358<b></b></span></p>
  <p style="margin:0cm"><b><span style="font-size:10.0pt;font-family:&quot;Helvetica&quot;,sans-serif;color:#666666">Tel México:</span></b><span style="font-size:10.0pt;font-family:&quot;Helvetica&quot;,sans-serif;color:#666666">&nbsp;+52 55 4163 6565 Ext: 81104<b></b></span></p>
  <p style="margin:0cm"><b><span style="font-size:10.0pt;font-family:&quot;Helvetica&quot;,sans-serif;color:#666666">Mobile:</span></b><span style="font-size:10.0pt;font-family:&quot;Helvetica&quot;,sans-serif;color:#666666">&nbsp;+52 81 1531 3636</span></p>
  <p style="margin:0cm"><b><span style="font-size:10.0pt;font-family:&quot;Helvetica&quot;,sans-serif;color:#666666">E-mail:</span></b><span style="font-size:10.0pt;font-family:&quot;Helvetica&quot;,sans-serif;color:#666666">&nbsp;</span><a href="mailto:roberto.melendez@itusmarine.com" target="_blank"><span style="font-size:10.0pt;font-family:&quot;Helvetica&quot;,sans-serif">roberto.melendez@<wbr>itusmarine.com</span></a><span style="font-size:10.0pt;font-family:&quot;Helvetica&quot;,sans-serif"></span></p>
  <p style="margin:0cm"><b><span style="font-size:10.0pt;font-family:&quot;Helvetica&quot;,sans-serif;color:#666666">Skype</span></b><span style="font-size:10.0pt;font-family:&quot;Helvetica&quot;,sans-serif;color:#666666">: roberto.melendez.itusmarine</span></p>
  <p style="margin:0cm"><a href="http://www.itusmarine.com/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://www.itusmarine.com/&amp;source=gmail&amp;ust=1685814250876000&amp;usg=AOvVaw0YDjVdtrkgg83_u9zKdu7w"><span style="font-size:10.0pt;font-family:&quot;Helvetica&quot;,sans-serif">www.itusmarine.com</span></a><span style="font-size:10.0pt;font-family:&quot;Helvetica&quot;,sans-serif"></span></p>
  </td>
 </tr>
</tbody>`;








  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setColaboradorSCL({ ...colaboradorSCL, [name]: value });
  };


  const handleInputChangeItus =(event) => {
    const { name, value } = event.target;
    setColaboradorItus({ ...colaboradorItus, [name]: value });


  };


  const handleSubmit = (event) => {
    
    console.log("it works mdf")

   
  };
  const downloadHTML = () => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, "1200");
    let htmlContent = ReactDOMServer.renderToString(htmlCode);
    htmlContent = htmlContent.replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    const element = document.createElement('a');
    const file = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `firma_${colaboradorSCL.nombre.replace(' ','_')}.html`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  








  return (

<div>

<Navbar setinterruptor={setinterruptor} interruptor={interruptor}/>

  {!interruptor ?
  
  

  <div className='container'>
<div className='editor_container'>  
<h2 className='title_editor'>Editor de firma:</h2>
<div className='editor'>

      <form onSubmit={handleSubmit}>
      <div className='col2'>
      <label>
          Nombre completo:
          
          <input
            type="text"
            name="nombre"
            value={colaboradorSCL.nombre}
            onChange={handleInputChange}
          />
          
        </label>
        <label>
          Apellido:
          
          <input
            type="text"
            name="apellido"
            value={colaboradorSCL.apellido}
            onChange={handleInputChange}
          />
          
        </label>
        
     
    </div>
    <label>
          Puesto:
          <input
            type="text"
            name="puesto"
            value={colaboradorSCL.puesto}
            onChange={handleInputChange}
          />
          </label>

    <div className='col2'>
          <label>
          País:
          <input
            type="text"
            name="pais"
            value={colaboradorSCL.pais}
            onChange={handleInputChange}
          />
          
        </label>
        <br/>
        <label>
          Ciudad:
          <input
            type="text"
            name="ciudad"
            value={colaboradorSCL.ciudad}
            onChange={handleInputChange}
          />
          
        </label>
          </div>
        

        <br />
        <label>
          Correo:
          <input
            type="mail"
            name="correo"
            value={colaboradorSCL.correo}
            onChange={handleInputChange}
          />
        </label>
        <br />

      
  
        
        <br/>
        <div className='col2'>
        <label>
          Clave internacional telefonica:
          <DropdownCi onChange={handleInputChange} name="clave" value={colaboradorSCL.clave}/>
        </label>  
    
        <label>
          Clave Lada (MX):
          <DropdownCL onChange={handleInputChange} name="lada" value={colaboradorSCL.lada}/>
        </label>  
      
        </div>
        
    <div className='col2'>
    <label>
          Ext:
          <br/>
          <input
            type="text"
            name="ext"
            value={colaboradorSCL.ext}
            onChange={handleInputChange}
          />
        </label>

        <label>
         Office Phone:
          <input
            type="number"
            name="phone"
            value={colaboradorSCL.phone}
            onChange={handleInputChange}
            className='phone_input'
          />
          
        </label>



    </div>

        <div className='col2_mobile'>
        <label class="container_checkmark">whatsapp
        <input
         type="radio"
         name="whatsapp"
         value={colaboradorSCL.whatsapp}
         onChange={handleInputChange}
         />
        <span class="checkmark"></span>
        </label>
          


        <label>
          Mobile:
          <input
            type="number"
            name="mobile"
            value={colaboradorSCL.mobile}
            onChange={handleInputChange}
            className='mobile_input'
          />
          
        </label>
        </div>
        
        
        
        
        <br/>
        
        <label>
          Skype:
          <input
            type="text"
            name="skype"
            value={colaboradorSCL.skype}
            onChange={handleInputChange}
          />
          
        </label>
        <br/>
        <label>
    
          
        </label>
        <br/>

      </form>
   
      
    </div>
    </div>


  

    {/*'<div>{htmlCode}</div>*/ }





<div className='container_preview'>
<h2 className='title_Preview'>Preview:</h2>
{

loading ? <div className='Preview_loading'>
 <h4>Generando archivo...</h4>
<Lottie  options={lottieOptions} />

</div>  : <div>
 <div className='Preview'>
      

      <Template htmlCode={htmlCode}/>
      
     
    </div>
     <div className='btn_container'>
     <button className='button-19' type="submit" onClick={downloadHTML} >Download </button>
     
   
  
   
     </div>
     </div>
    }

   

</div>




</div>
  







:



<div className='container'>
  {/* aqui empieza Itus*/}
  
<div className='editor_container'>  
<h2 className='title_editor'>Editor de firma:</h2>
<div className='editor'>

      <form onSubmit={handleSubmit}>
      <div className='col2'>
      <label>
          Nombre completo:
          
          <input
            type="text"
            name="nombre"
            value={colaboradorItus.nombre}
            onChange={handleInputChangeItus}
          />
          
        </label>
        <br/>
        <label>
          Puesto:
          <input
            type="text"
            name="puesto"
            value={colaboradorItus.puesto}
            onChange={handleInputChangeItus}
          />
          </label>
    </div>

        

        <br />
        <label>
          Correo:
          <input
            type="mail"
            name="correo"
            value={colaboradorSCL.correo}
            onChange={handleInputChange}
          />
        </label>
        <br />

      
  
        
        <br/>
        <div className='col2'>
        <label>
          Clave internacional telefonica:
          <DropdownCi onChange={handleInputChange} name="clave" value={colaboradorSCL.clave}/>
        </label>  
    
        <label>
          Clave Lada (MX):
          <DropdownCL onChange={handleInputChange} name="lada" value={colaboradorSCL.lada}/>
        </label>  
      
        </div>
        <div className='col2'>
    <label>
          Ext Chile:
          <br/>
          <input
            type="text"
            name="ext"
            value={colaboradorSCL.ext}
            onChange={handleInputChange}
          />
        </label>

        <label>
         Office Phone Chile:
          <input
            type="number"
            name="phone"
            value={colaboradorSCL.phone}
            onChange={handleInputChange}
            className='phone_input'
          />
          
        </label>



    </div>


        
    <div className='col2'>
    <label>
          Ext:
          <br/>
          <input
            type="text"
            name="ext"
            value={colaboradorSCL.ext}
            onChange={handleInputChange}
          />
        </label>

        <label>
         Office Phone:
          <input
            type="number"
            name="phone"
            value={colaboradorSCL.phone}
            onChange={handleInputChange}
            className='phone_input'
          />
          
        </label>



    </div>
  

    
  


        <label>
          Mobile:
          <input
            type="number"
            name="mobile"
            value={colaboradorSCL.mobile}
            onChange={handleInputChange}
            className='phone_input'
          />
          
        </label>
    
        
        
        
        
        <br/>
        
        <label>
          Skype:
          <input
            type="text"
            name="skype"
            value={colaboradorSCL.skype}
            onChange={handleInputChange}
          />
          
        </label>
        <br/>
        <label>
    
          
        </label>
        <br/>

      </form>
   
      
    </div>
    </div>
    <div className='container_preview_Itus'>
<h2 className='title_Preview'>Preview:</h2>
{

loading ? <div className='Preview_loading'>
 <h4>Generando archivo...</h4>
<Lottie  options={lottieOptions} />

</div>  : <div>
 <div className='Preview'>
      

      <Template htmlCode={htmlCodeItus}/>
      
     
    </div>
     <div className='btn_container'>
     <button className='button-19' type="submit" onClick={downloadHTML} >Download </button>
     
   
  
   
     </div>
     </div>
    }

   

</div>
   </div>







}











</div>


    
  );
}

export default App;
