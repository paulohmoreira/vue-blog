<template>
    <main class="login">
        <section class="forms">
            <div class="form-box">
                <div class="selector-box">
                    <div id="form-btn" class="form-btn"></div>
                    <button type="button" class="toggle-btn" v-on:click="changeLogin">Login</button>
                    <button type="button" class="toggle-btn" v-on:click="changeRegister">Cadastrar</button>
                </div>
                <!-- User login form. -->
                <form id="login-form" class="login-form" @submit.prevent="login">
                    <h2>Login</h2>
                    <input
                        type="email"
                        class="input-field"
                        placeholder="Email..." 
                        v-model="login_form.email" />
                    <input
                        type="password"
                        class="input-field"
                        placeholder="Senha..."
                        v-model="login_form.password" />
                    <input
                        type="submit"
                        class="submit-btn"
                        value="Entrar"
                    />
                </form>

                <!-- User register form. -->
                <form id="register-form" class="register-form" @submit.prevent="register">
                    <h2>Registre-se</h2>
                    <input
                        type="email"
                        class="input-field"
                        placeholder="Email..." 
                        v-model="register_form.email" />
                    <input
                        type="password"
                        class="input-field"
                        placeholder="Senha..."
                        v-model="register_form.password" />
                    <input
                        type="submit"
                        class="submit-btn"
                        value="Cadastrar"
                    />
                </form>
            </div>
        </section>
    </main>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
    setup () {
        // Manipulating data from forms and integrating with the store file
        const register_form = ref({});
        const login_form = ref({});
        const store = useStore();
        

        const register = () => {
            store.dispatch('register', register_form.value)
        }

        const login = () => {
            store.dispatch('login', login_form.value)
        }

        return {
            register_form,
            login_form,
            register,
            login
        }
    },
    // Methods to toggle the forms login and register
    methods: {
        changeLogin: function () {    
            document.getElementById('login-form').classList.remove('x-register-position');        
            document.getElementById('login-form').classList.add('x-login-position');            
            document.getElementById('register-form').classList.remove('y-register-position');
            document.getElementById('register-form').classList.add('y-login-position');
            document.getElementById('form-btn').classList.remove('z-register-position');
            document.getElementById('form-btn').classList.add('z-login-position');
        },
        changeRegister: function () {            
            document.getElementById('login-form').classList.remove('x-login-position');
            document.getElementById('login-form').classList.add('x-register-position');
            document.getElementById('register-form').classList.remove('y-login-position');
            document.getElementById('register-form').classList.add('y-register-position');
            document.getElementById('form-btn').classList.remove('z-login-position');
            document.getElementById('form-btn').classList.add('z-register-position');
        }
    }
}

</script>

<style>
.login {
    height: 100%;
    width: 100%;
    background-color: rgb(243, 243, 243);
}
.form-box {
    width: 380px;
    height: 370px;
    position: relative;
    margin: 5% auto;
    background: white;
    padding: 6px;
    border-radius: 10px;
    overflow: hidden;
}
.selector-box {
    width: 220px;
    margin: 35px auto;
    position: relative;
    box-shadow: 0 0 12px 5px rgb(227, 255, 248);
    border-radius: 30px;
    background-color: #999;
    font-size: 12px;
}
.toggle-btn{
    padding: 10px 28px;
    cursor: pointer;
    background: transparent;
    border: 0;
    outline: none;
    position: relative;
    color: white;
}
.form-btn {
    top: 0;
    position: absolute;
    width: 110px;
    height: 100%;
    background: linear-gradient(to right, rgb(1, 90, 48), rgb(51, 175, 117));
    border-radius: 30px;
    transition: 0.3s;
    left: 0;
}
.login-form {
    top: 120px;
    position: absolute;
    width: 280px;
    transition: 0.3s;
    left: 50px;
}
.register-form {
    top: 120px;
    position: absolute;
    width: 280px;
    transition: 0.3s;
    left: 450px;
}
.input-field {
    width: 100%;
    padding: 10px 0;
    margin: 5px 0;
    border-left: 0;
    border-top: 0;
    border-right: 0;
    border-bottom: 1px solid #999;
    outline: none;
    background: transparent;
}
.submit-btn {
    width: 60%;
    padding: 10px 30px;
    cursor: pointer;
    display: block;
    margin: 30px auto;
    background: linear-gradient(to right, rgb(1, 90, 48), rgb(51, 175, 117));
    color: white;
    border: 0;
    outline: none;
    border-radius: 11px;
}
.x-login-position{
    left: 50px
}
.y-login-position{
    left: 450px;
}
.z-login-position{
    left: 0
}
.x-register-position{
    left: -400px;
}
.y-register-position{
    left: 50px
}
.z-register-position{
    left: 110px
}
</style>