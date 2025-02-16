<template>

    <div class="h-[100%] mx-7 lg:mx-24 mt-16 pb-10 pt-[36px] fonr lg:pt-0 text-paragraph">
        <div class="flex flex-col lg:flex-row justify-between ">
            <div class="flex flex-col lg:w-[50%]  ">
                <h1 class="text-5xl 2xl:text-6xl 3xl:text-6xl pb-4">
                    Contácto
                </h1>
                <h4 class="xl:text-[16px] 2xl:text-[20px] 3xl:text-[24px] italic font-semibold">Por favor complete el siguiente formulario para enviarnos un email.</h4>
                <p class="xl:text-[19px] 2xl:text-[22px] 3xl:text-[24px] text-justify py-4">
                    ¡Bienvenido a Proactiva, donde la excelencia se encuentra con la acción proactiva! 
                    Estamos emocionados de recibir tus consultas, comentarios o sugerencias a través de 
                    nuestro formulario de contacto.  Completa el formulario con tus detalles y necesidades, 
                    y nuestro equipo altamente capacitado se pondrá en contacto contigo prontamente.

                </p>
                <h5 class="xl:text-[19px] 2xl:text-[22px] 3xl:text-[24px] font-bold">E-mail:</h5>
                <h5 class="xl:text-[19px] 2xl:text-[22px] 3xl:text-[24px] font-semibold">grupoproactivaperu@gmail.com</h5>
            </div>

            <!-- FORMULARIO -->
            <!-- <div class="flex flex-col  lg:w-[45%]">
                <input type="text" placeholder="Nombre" class="outline outline-transparent mb-4 bg-[#d1c8c1] py-4 px-4 placeholder:text-[#000000] placeholder:font-bold">
                <input type="text" placeholder="Celular" class="outline outline-transparent mb-4 bg-[#d1c8c1] py-4 px-4 placeholder:text-[#000000] placeholder:font-bold">
                <input type="text" placeholder="Correo" class="outline outline-transparent mb-4 bg-[#d1c8c1] py-4 px-4 placeholder:text-[#000000] placeholder:font-bold">
                <input type="text" placeholder="Asunto" class="outline outline-transparent mb-4 bg-[#d1c8c1] py-4 px-4 placeholder:text-[#000000] placeholder:font-bold">
                <textarea name=""  placeholder="Mensaje" id="" cols="30" rows="10" class="outline outline-transparent mb-4 bg-[#d1c8c1] py-4 px-4 placeholder:text-[#000000] placeholder:font-bold"></textarea>

                <div class="w-full flex justify-end bg-red">
                <button class="rounded-full px-10 py-1 bg-colorbutton xl:text-[24px] 2xl:text-[26px] 3xl:text-[30px] text-white" >
                    ENVIAR
                </button>
                </div>
            </div> -->

            <form action="https://fabform.io/f/{form-id}" method="post">
    <div class="bg-white p-8 rounded-lg shadow-lg  lg:max-w-md w-full">
        <!-- <h1 class="text-2xl font-bold text-gray-800 mb-6">Contact Us</h1> -->
        <div  method="post">
            <div class="mb-4">
                <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label>
                <input type="text" id="name" v-model="state.name" name="name" class="border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="" required>
                <div class="c-message-error text-xs   text-red-600 "
                  v-for="error of v$.name.$errors" :key="error.$uid">
                  <span>{{ error.$message }}</span>
                </div>
            </div>
            <div class="mb-4">
                <label for="name" class="block text-sm font-medium text-gray-700">Celular</label>
                <input type="number" id="phone"v-model="state.phone"  name="name" class="border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="+51" required>
                <div class="c-message-error text-xs   text-red-600 "
                  v-for="error of v$.phone.$errors" :key="error.$uid">
                  <span>{{ error.$message }}</span>
                </div>
            </div>
            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Correo</label>
                <input type="email" id="email" v-model="state.email" name="email" class="border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="" required>
               <div class="c-message-error text-xs   text-red-600 "
                  v-for="error of v$.email.$errors" :key="error.$uid">
                  <span>{{ error.$message }}</span>
                </div> 
            </div>
            <div class="mb-4">
                <label for="message" class="block text-sm font-medium text-gray-700">Mensaje</label>
                <textarea id="message" name="message" v-model="state.message" class="border-2 border-gray-300 p-2 rounded-lg w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Escriba su mensaje" required></textarea>
                <div class="c-message-error text-xs   text-red-600 "
                  v-for="error of v$.message.$errors" :key="error.$uid">
                  <span>{{ error.$message }}</span>
                </div>
            </div>
            <button type="submit" @click="sendToWhatsApp" class="bg-primary text-white p-2 rounded-lg font-semibold w-full hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-100">Enviar</button>
        </div>
        <div class="mt-4 text-sm text-gray-600">
            Si prefiere no utilizar formularios web, puede enviarnos sus consultas a nuestra dirección de correo electrónico: <a href="https://veilmail.io/irish-geoff" class="underline" target="_blank">grupoproactivaperu@gmail.com</a>.
        </div>
    </div>
    </form>

        </div>

    </div>

</template>

<script setup >
import { useVuelidate } from '@vuelidate/core'
import { required,helpers,email,minLength } from '@vuelidate/validators'

const state=reactive({
    name:'',
    phone:'',
    email:'',
    message:'',
})

const rules = computed(() => {
    return {
        name: {
            required: helpers.withMessage('Este campo es requerido', required),
            // $autoDirty: true ,
        },
        phone: {
            required: helpers.withMessage('Este campo es requerido', required),
            // $autoDirty: true ,
        },
        email: {
            required: helpers.withMessage('Ingrese un correo', required),
            email: helpers.withMessage('Ingrese un correo válido', email),
        },
        message: {
            required: helpers.withMessage('Este campo es requerido', required),
        },
    }
})

const v$ = useVuelidate(rules, state);

const sendToWhatsApp=()=> {
    v$.value.$touch();
    if (!v$.value.$error) {
        peticionAppScriptForm()
      let message = `*Nombre: ${state.name}* \n *Teléfono: ${state.phone}* \n  *Correo: ${state.email}* \n *Mensaje: ${state.message}* \n \n`;
      const encodedMessage = encodeURIComponent(message);
      const phoneNumber = "+51982043391"; // Número con código de país  // 
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      state.name=''
      state.phone=''
      state.email=''
      state.message=''
      window.open(whatsappUrl, "_blank");
    }
   }


  //en la configuración de google debe ser el autor con los datos con los que se ejecute y cualquier usuario not need
  function peticionAppScriptForm() {
    var url = "https://script.google.com/macros/s/AKfycbzcnry9BLFavMfq8YT8AVkfNbhIgY7CmYUROndZxQW4bYHUFjIckt247Nva-h8-NA4cFA/exec";
    
          
    fetch(url, {
        mode: "no-cors",
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name:state.name,
            phone: state.phone,
            email:state.email,
            message:state.message,
        })
    })
        .then(function (res) {
            console.log(res);
            return res
        })
        .then(function (res) {
            console.log(res.text());
        })
        .catch(function (error) {
            console.log('Request failure: ', error);
        });
}   

</script>