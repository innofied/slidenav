Ext.define('SlideNav.view.Viewport', {
				extend: 'Ext.Container',
				xtype: 'app_viewport',
				requires: [
				'Ext.TitleBar'
				],
				config: {
								layout: 'vbox',
								items : [{
												xtype : 'main',
												cls: 'slide',
												
												// Needed to fit the whole content
												height : '100%'
								}, {
												xtype : 'navigation',
												height : 250
								}]
				}
});
