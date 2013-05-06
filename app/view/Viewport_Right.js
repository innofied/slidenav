Ext.define('SlideNav.view.Viewport', {
				extend: 'Ext.Container',
				xtype: 'app_viewport',
				requires: [
				'Ext.TitleBar'
				],
				config: {
								layout: 'hbox',
								items : [{
												xtype : 'main',
												cls: 'slide',
												
												// Needed to fit the whole content
												width: '100%',
												
												// Initial position of the main container
												left: 0,
												items : [{
																xtype : 'titlebar',
																title : 'Slide Nav',
																items :[{
																				align : 'right',
																				name : 'nav_btn',
																				iconCls : 'list',
																				ui : 'plain'
																}]
												}]
								}, {
												xtype : 'navigation',
												width : 250
								}]
				}
});
