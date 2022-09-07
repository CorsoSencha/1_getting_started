Ext.define('App.view.main.Main', {
    extend: 'Ext.container.Container',
    
    /* Marks these are required classes to be to loaded before loading this view */ 
    requires: [
        'App.view.main.MainController',
        'App.view.main.MainModel'
    ],
        
    xtype: 'app-main',
    controller: 'main',
    
      /* View model of the view */ 
    
    viewModel: {
        type: 'main'
    },  

    items: [
        {html: 'One'},
        {html: 'Two'}
    ]
});