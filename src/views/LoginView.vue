<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-6">
          <form>
            <h2 class="mb-3">Iniciar sesión</h2>
            <div class="form-group">
              <label for="email">Correo electrónico</label>
              <input type="email" class="form-control" id="email" v-model="email">
            </div>
            <div class="form-group">
              <label for="password">Contraseña</label>
              <input type="password" class="form-control" id="password" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary btn-block">Iniciar sesión</button>
          </form>
        </div>
      </div>
    </div>
</template>
  
  <script>
  export default {
    name: 'LoginView',
    data() {
      return {
        email: "",
        password: ""
      };
    }
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 50px;
  }
  
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
  }
  
  .btn-primary:hover {
    background-color: #0069d9;
    border-color: #0062cc;
  }
  
  .btn-primary:focus,
  .btn-primary.focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
  }
  
  .btn-primary.disabled,
  .btn-primary:disabled {
    background-color: #007bff;
    border-color: #007bff;
  }
  </style>
  