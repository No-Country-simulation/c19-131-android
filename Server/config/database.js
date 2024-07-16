const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user_ecommerce_movil:SrMYSnIvd3vdRr5D@dbmovilecommerce.7w85abo.mongodb.net/?retryWrites=true&w=majority&appName=dbMovilEcommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Conectado a MongoDB Atlas');
}).catch((error) => {
    console.error('Error al conectar a MongoDB Atlas', error);
});

module.exports = mongoose;
