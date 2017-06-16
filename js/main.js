var baiDu={
	init: function(){
		this.defaultFocus();
		this.baiduSetting();
	},
	defaultFocus: function(){
		$('#searchInput').focus();
	},
	// 设置下拉菜单和侧边栏的显示与隐藏
	baiduSetting: function(){
		$('#setting-menu').mouseover(function() {
			$('#baiduSetting').show();
		}).mouseout(function() {
			$('#baiduSetting').hide();
		})
		$('#navMore,#moreProduct').mouseover(function() {
			$('#moreProduct').show();
		}).mouseout(function() {
			$('#moreProduct').hide();
		})
		
	}
}

// 加载执行
$(function(){
	baiDu.init();
})