import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    languages: "Languages",
    year: "Year",
    monthLabel: "Month",
    type: "Type",
    search: "Search",
    file: "File",
    region: "Region",
    name: "Name",
    lang: {
      english: "English",
      spanish: "Spanish",
      portuguese: "Portuguese",
    },
    menu: {
      home: "Home",
      login: "Login",
      logout: "Logout",
    },
    login: {
      username: "Username",
      password: "Password",
      submit: "Submit",
      error: "Username or Password is incorrect",
    },
    section: {
      userManager: "User Manager",
      certifications: "Certifications",
      documentations: "Documentation",
      historicalMovements: "Historical Throughput",
      publicAccess: "Public Access",
      currentPolicies: "Current Policies",
      regulations: "Regulations",
    },
    historicalMovement: {
      title: "Historical Throughput Admin",
    },
    certificateAdmin: {
      title: "Certificate Admin",
      name: "Name",
      region: "Region",
    },
    publicAccessAdmin: {
      title: "Public Access Admin",
      name: "Name",
    },
    documentAdmin: {
      title: "Document Admin",
      name: "Name",
      office: "Office",
      nameAlreadyInUse: "Name already in use.",
    },
    currentPolicyAdmin: {
      title: "Current Policies Admin",
      name: "Name",
      office: "Office",
      nameAlreadyInUse: "Name already in use.",
    },
    regulationAdmin: {
      title: "Regulation Admin",
      name: "Name",
      office: "Office",
      nameAlreadyInUse: "Name already in use.",
    },
    offices: {
      regionalOffice: "Regional Office",
      terminalBrandsen: "Brandsen + 166 km pipeline",
      terminalMaritimaPuertoRosales: "Puerto Rosales + 44 km pipeline",
      representativeOffice: "Representative Office",
      acuPetroleo: "Açu Petroleo",
      vitoriaTerminal: "Vitória",
      tuxpan: "Tuxpan",
      terminalCartagena: "Cartagena",
      terminal: "Terminal",
      terminalAndRepresentativeOffice: "COASSA",
      terminalCallao: "Callao",
      terminalEten: "Eten",
      terminalChimbote: "Chimbote",
      terminalMatarani: "Matarani",
      marinePlatformPiscoCamisea: "Pisco",
      terminalSupe: "Supe",
      terminalSalaverry: "Salaverry",
      puertoBahia: "Puerto Bahía",
    },
    month: {
      all: "All",
      select: "Select",
      january: "January",
      february: "February",
      march: "March",
      april: "April",
      may: "May",
      june: "June",
      july: "July",
      august: "August",
      september: "September",
      october: "October",
      november: "November",
      december: "December",
    },
    fileForm: {
      selectDocument: "Select your document to upload",
      selectPdf: "Select one PDF to upload",
      selectFile: "Select one File to upload",
      historyAlreadyCreated: "The file for this period is already uploaded",
      save: "Save",
      goBack: "Go back",
    },
    userForm: {
      password: "Password",
      newPassword: "New Password",
      country: "Country",
      title: "User Manager",
      username: "Username",
      location: "Country",
      userAlreadyCreated: "Username Already Created.",
    },
    message: {
      registerDoesntExists: "Register doesn't exists.",
      somethingWentWrong: "Something went wrong.",
      troublesWithFileSaving: "We couldn't save the file.",
      troublesWithRecordSaving: "We couldn't save the record.",
      recordSaved: "Record Saved.",
      userOrPasswordIncorrect: "User or Password Incorrect.",
      required: "Required field.",
      invalidUser: "Invalid User.",
      userAlreadyCreated: "User Already Created.",
      restrictedAccess: "Restricted Access",
    },
    locations: {
      select: "Select",
      all: "All Regions",
      argentina: "Argentina",
      brazil: "Brazil",
      colombia: "Colombia",
      mexico: "Mexico",
      panama: "Panama",
      peru: "Peru",
    },
  },
  es: {
    languages: "Languajes",
    year: "Año",
    monthLabel: "Mes",
    type: "Tipo",
    search: "Buscar",
    file: "Archivo",
    region: "Región",
    name: "Nombre",
    lang: {
      english: "Inglés",
      spanish: "Español",
      portuguese: "Portugues",
    },
    menu: {
      home: "Inicio",
      login: "Ingresar",
      logout: "Salir",
    },
    login: {
      username: "Usuario",
      password: "Contraseña",
      submit: "Ingresar",
      error: "Has introducido mal el email o la contraseña.",
    },
    section: {
      userManager: "Administrador de Usuarios",
      certifications: "Certificados",
      documentations: "Documentación",
      historicalMovements: "Rendimiento Históricos",
      publicAccess: "Acceso Público",
      currentPolicies: "Políticas Vigentes",
      regulations: "Procedimientos & Normativas",
    },
    historicalMovement: {
      title: "Administración Rendimientos Históricos",
    },
    certificateAdmin: {
      title: "Administrador de Certificados",
      name: "Nombre",
      region: "Región",
    },
    publicAccessAdmin: {
      title: "Administrador de Acceso Público",
      name: "Nombre",
    },
    documentAdmin: {
      title: "Administrador de Documentos",
      name: "Nombre",
      office: "Oficina",
      nameAlreadyInUse: "Este nombre ya esta en uso.",
    },
    currentPolicyAdmin: {
      title: "Administrador Políticas Vigentes",
      name: "Nombre",
      office: "Oficina",
      nameAlreadyInUse: "Este nombre ya esta en uso.",
    },
    regulationAdmin: {
      title: "Administrador Procedimientos & Normativas",
      name: "Name",
      office: "Office",
      nameAlreadyInUse: "Name already in use.",
    },
    offices: {
      regionalOffice: "Oficina Regional",
      terminalBrandsen: "Brandsen + 166 km pipeline",
      terminalMaritimaPuertoRosales: "Puerto Rosales + 44 km pipeline",
      representativeOffice: "Oficina de Representación",
      acuPetroleo: "Açu Petroleo",
      vitoriaTerminal: "Vitória",
      tuxpan: "Tuxpan",
      terminalCartagena: "Cartagena",
      terminal: "Terminal de Tanques",
      terminalAndRepresentativeOffice: "COASSA",
      terminalCallao: "Callao",
      terminalEten: "Eten",
      terminalChimbote: "Chimbote",
      terminalMatarani: "Matarani",
      marinePlatformPiscoCamisea: "Pisco",
      terminalSupe: "Supe",
      terminalSalaverry: "Salaverry",
      puertoBahia: "Puerto Bahía",
    },
    month: {
      all: "Todos",
      select: "Seleccionar",
      january: "Enero",
      february: "Febrero",
      march: "Marzo",
      april: "Abril",
      may: "Mayo",
      june: "Junio",
      july: "Julio",
      august: "Agosto",
      september: "Septiember",
      october: "Octubre",
      november: "Noviembre",
      december: "Diciembre",
    },
    fileForm: {
      selectDocument: "Selecciona un documento",
      selectPdf: "Selecciona un PDF",
      selectFile: "Selecciona un archivo",
      historyAlreadyCreated: "Ya existe un archivo para este período.",
      save: "Guardar",
      goBack: "Volver",
    },
    userForm: {
      password: "Contraseña",
      newPassword: "Nueva Contraseña",
      country: "Pais",
      title: "Administrador de Usuario",
      username: "Usuario",
      location: "Pais",
      userAlreadyCreated: "Ya existe ese nombre de usuario.",
    },
    message: {
      registerDoesntExists: "No existe un registro con ese Id",
      somethingWentWrong: "Algo salió mal.",
      troublesWithFileSaving: "No se pudo guardar el archivo.",
      troublesWithRecordSaving: "Error al guardar el registro.",
      recordSaved: "Registro Guardado.",
      userOrPasswordIncorrect: "Usuario y/o Contraseña Incorrectos.",
      required: "Este campo es obligatorio.",
      invalidUser: "Usuario Inválido.",
      userAlreadyCreated: "User Already Created.",
      restrictedAccess: "Acceso Restringido",
    },
    locations: {
      select: "Seleccionar",
      all: "Todas las Regiones",
      argentina: "Argentina",
      brazil: "Brasil",
      colombia: "Colombia",
      mexico: "México",
      panama: "Panamá",
      peru: "Perú",
    },
  },
  pt: {
    languages: "Languages",
    year: "Year",
    monthLabel: "Month",
    search: "Search",
    file: "File",
    type: "Type",
    region: "Region",
    name: "Name",
    lang: {
      english: "English",
      spanish: "Spanish",
      portuguese: "Portuguese",
    },
    menu: {
      home: "Home",
      login: "Login",
      logout: "Logout",
    },
    login: {
      username: "Username",
      password: "Password",
      submit: "Submit",
      error: "Username or Password is incorrect",
    },
    section: {
      userManager: "User Manager",
      certifications: "Certifications",
      documentations: "Documentation",
      historicalMovements: "Histórico de movimentações",
      publicAccess: "Public Access",
      regulations: "Regulations",
    },
    historicalMovement: {
      title: "Taxa de Transferência Histórica Admin",
    },
    certificateAdmin: {
      title: "Certificate Admin",
      name: "Name",
      region: "Region",
    },
    documentAdmin: {
      title: "Document Admin",
      name: "Name",
      office: "Office",
      nameAlreadyInUse: "Name already in use.",
    },
    currentPolicyAdmin: {
      title: "Current Policies Admin",
      name: "Name",
      office: "Office",
      nameAlreadyInUse: "Name already in use.",
    },
    regulationAdmin: {
      title: "Regulation Admin",
      name: "Name",
      office: "Office",
      nameAlreadyInUse: "Name already in use.",
    },
    publicAccessAdmin: {
      title: "Public Access Admin",
      name: "Name",
    },
    offices: {
      regionalOffice: "Regional Office",
      terminalBrandsen: "Brandsen + 166 km pipeline",
      terminalMaritimaPuertoRosales: "Puerto Rosales + 44 km pipeline",
      representativeOffice: "Representative Office",
      acuPetroleo: "Açu Petroleo",
      vitoriaTerminal: "Vitória",
      tuxpan: "Tuxpan",
      terminalCartagena: "Cartagena",
      terminal: "Terminal",
      terminalAndRepresentativeOffice: "COASSA",
      terminalCallao: "Callao",
      terminalEten: "Eten",
      terminalChimbote: "Chimbote",
      terminalMatarani: "Matarani",
      marinePlatformPiscoCamisea: "Pisco",
      terminalSupe: "Supe",
      terminalSalaverry: "Salaverry",
      puertoBahia: "Puerto Bahía",
    },
    month: {
      all: "All",
      select: "Select",
      january: "January",
      february: "February",
      march: "March",
      april: "April",
      may: "May",
      june: "June",
      july: "July",
      august: "August",
      september: "September",
      october: "October",
      november: "November",
      december: "December",
    },
    fileForm: {
      selectDocument: "Select your document to upload",
      selectPdf: "Select one PDF to upload",
      selectFile: "Select one File to upload",
      historyAlreadyCreated: "The file for this period is already uploaded",
      save: "Save",
      goBack: "Go back",
    },
    userForm: {
      password: "Password",
      newPassword: "New Password",
      country: "Country",
      title: "User Manager",
      username: "Username",
      location: "Country",
      userAlreadyCreated: "Username Already Created.",
    },
    message: {
      registerDoesntExists: "Register doesn't exists.",
      somethingWentWrong: "Something went wrong.",
      troublesWithFileSaving: "We couldn't save the file.",
      troublesWithRecordSaving: "We couldn't save the record.",
      recordSaved: "Record Saved.",
      userOrPasswordIncorrect: "User or Password Incorrect.",
      required: "Required field.",
      invalidUser: "Invalid User.",
      userAlreadyCreated: "User Already Created.",
      restrictedAccess: "Restricted Access",
    },
    locations: {
      select: "Select",
      all: "All Regions",
      argentina: "Argentina",
      brazil: "Brazil",
      colombia: "Colombia",
      mexico: "Mexico",
      panama: "Panama",
      peru: "Peru",
    },
  },
};

const i18n = new VueI18n({
  locale: localStorage.getItem("lang") || "en", // set locale
  fallbackLocale: "es", // set fallback locale
  messages, // set locale messages
});

export default i18n;
