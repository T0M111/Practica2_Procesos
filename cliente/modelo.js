// modelo.js
// Implementación inicial del diagrama de clases (estilo prototipos, sin 'class')
// Sistema actúa como punto de entrada de la lógica de dominio.

function Sistema() {
  // Diccionario (array asociativo) de usuarios: clave = nick, valor = objeto Usuario
  this.usuarios = {};

  // Agrega un usuario nuevo con el nick indicado.
  // Si el nick ya existe, simplemente lo sobrescribe (más adelante podemos validar).
  this.agregarUsuario = function (nick) {
    this.usuarios[nick] = new Usuario(nick);
    return this.usuarios[nick];
  };

  // Devuelve la colección (diccionario) completa de usuarios
  this.obtenerUsuarios = function () {
    return this.usuarios; 
  };

  // Devuelve true si existe un usuario con ese nick, false en caso contrario
  this.usuarioActivo = function (nick) {
    return Object.prototype.hasOwnProperty.call(this.usuarios, nick);
  };

  // Elimina el usuario con el nick dado. Devuelve true si se eliminó, false si no existía
  this.eliminarUsuario = function (nick) {
    if (!this.usuarioActivo(nick)) {
      return false;
    }
    delete this.usuarios[nick];
    return true;
  };

  // Devuelve el número de usuarios almacenados actualmente
  this.numeroUsuarios = function () {
    return Object.keys(this.usuarios).length;
  };
}

function Usuario(nick) {
  this.nick = nick;
  this.email = null;
  this.fechaAlta = new Date();
}

// window.sistema = new Sistema(); // Descomentar para crear instancia global automática
