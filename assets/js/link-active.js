	$(function(){
		$('#header .nav-item').filter(function(){return this.href==location.href}).parent().addClass('active').siblings().removeClass('active')
		$('#header .nav-item').click(function(){
			$(this).parent().addClass('active').siblings().removeClass('active')	
		})
	})