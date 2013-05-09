Ext.define('SlideNav.view.Viewport', {
				extend: 'Ext.Container',
				xtype: 'app_viewport',
				requires: [
				'Ext.TitleBar'
				],
				config: {
								fullscreen: true,
								layout: 'hbox',
								items : [{
												xtype : 'main',
												cls: 'slide',
												
												// Needed to fit the whole content
												width: '100%'												
								}, {
												xtype : 'navigation',
												width : 250
								}]
				}
});
