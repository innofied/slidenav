Ext.define('SlideNav.controller.App',{
				extend: 'Ext.app.Controller',    
				config:{
								refs:{
												main : 'main',
												navigation : 'navigation',
												
												navBtn : 'button[name="nav_btn"]'
								},
				
								control : {
												navBtn : {
																tap : 'toggleNav'
												},
												
												navigation : {
																itemtap : function(list, index, target, record){
																				this.toggleNav();
																}
												}
								}
				},
				
				/**
				 * Toggle the slide navogation view
				 */
				toggleNav : function(){
								var me = this,
								mainEl = me.getMain().element;
								
								if (mainEl.hasCls('out')) {
												mainEl.removeCls('out').addCls('in'); 
												me.getMain().setMasked(false);
								} else {
												mainEl.removeCls('in').addCls('out');  
												me.getMain().setMasked(true);
								}
				}
});