Ext.define('SlideNav.view.Main', {
				extend: 'Ext.TabPanel',
				xtype: 'main',
				config: {
								tabBarPosition : 'bottom',
								items : [{
												title : 'Home',
												iconCls : 'home',
												html : ['This is a very simple example of Facebook style slide navigation. ',
												'The component is mostly developed with CSS3 animations and a small bit of javascript code. ',
												'Use it freely in your Sencha Touch application'].join(''),
												styleHtmlContent : true
								}, {
												xtype : 'titlebar',
												title : 'Slide Nav',
												docked : 'top',
												items :[{
																align : 'left',
																name : 'nav_btn',
																iconCls : 'list',
																ui : 'plain'
												}]
								}]
				}
});
