Ext.define('SlideNav.view.Navigation', {
				extend: 'Ext.List',
				xtype: 'navigation',
				requires : ['Ext.data.Store'],
				config: {
								cls : 'nav-list',
								itemTpl : '{title}',
								data : [{
												title : 'Item 1'
								},{
												title : 'Item 2'
								},{
												title : 'Item 3'
								}]
				}
});