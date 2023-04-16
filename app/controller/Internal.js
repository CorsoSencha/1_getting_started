Ext.define('MyApp.controller.Internal', {

         extend: 'Ext.app.Controller',
         alias: 'controller.foo',


         clickMe: function() {
            alert("In internal")
         },
});
