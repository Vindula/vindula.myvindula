$j = jQuery.noConflict();
$j(document).ready(function(){
	$j('input.comments').live('click', function(){
		var url = $j('#portal_url').val() + "/myvindula-comments";
		var ctx = $j(this);
		
		var id_obj = $j(this).attr('id');
		var type = $j(this).parent().find('#'+id_obj).find('#type').val();
		var isPlone = $j(this).parent().find('#'+id_obj).find('#isPlone').val();
		
		$j.get(url,{id_obj:id_obj,
					type:type,
					isPlone:isPlone}, function(data){

				ctx.parent().find('#new-comments').html(data);
				ctx.parent().find('#new-comments').css('display','block');
				ctx.css('display','none');
				//$j('#spinner').addClass('display-none');
			});
	});
	
	$j('span.link').live('click', function(){
		var url = $j('#portal_url').val() + "/myvindula-like";
		//var url_sucess = $j('#context_url').val();
    	
    	var ctx = $j(this);
		//var username = $j('#username').val();
		
		var id_obj = $j(this).attr('id');
		var type = $j(this).parent().parent().find('#'+id_obj).find('#type').val();
		var isPlone = $j(this).parent().parent().find('#'+id_obj).find('#isPlone').val();
		
		var dislike = $j(this).attr('src');
		$j.get(url,{//username:username,
 				    id_obj:id_obj,
					type:type,
					isPlone:isPlone,
					dislike:dislike}, function(data){

                    ctx.parent().html(data);
                    //window.location=url_sucess;
			});
	});
	
	$j('input#save-coment').live('click', function(){
	    var url = $j('#portal_url').val() + "/myvindula-comments";
        //var url_sucess = $j('#context_url').val();
        
        var ctx = $j(this);
        
        ctx.hide()
        ctx.parent().find('#cancel-coment').hide();
        ctx.parent().find('#load-save').show();
        
        //var username = $j('#username').val();
        var parametros = $j(this).parent().parent();
        var id_obj = parametros.find('#id_obj').val();
        var isPlone = parametros.find('#isPlone').val();
        var type = parametros.find('#type').val();
        var text = parametros.find('#text').val();
        
        $j.get(url,{form_ajax:'True',
                    form_submitted_comment:'True',
                    id_obj:id_obj,
                    type:type,
                    isPlone:isPlone,
                    text:text}, function(data){
                    
                    var comment_pai = ctx.closest('.comment')
                    var coments_cont = comment_pai.find('.comments-cont');
                    
                    if(coments_cont.length > 0)
                        coments_cont.eq(0).append(data);
                    else
                        comment_pai.append('<div class="comments-cont">'+data+'</div>');
                    
                    ctx.parents('#new-comments').html('');
                    $j('textarea#text').val('');
                    comment_pai.find('.bt_comments').eq(0).css('display', '')
                    
                    //window.location=url_sucess;
            });
	});
	
	$j('input.excluir').live('click', function(){
        var url = $j('#portal_url').val() + "/myvindula-comments";
        //var url_sucess = $j('#context_url').val();
        
        var ctx = $j(this);
        
        ctx.hide();
        ctx.parent().find('#load-save').show();
        
        //var username = $j('#username').val();
        var parametros = $j(this).parent().parent();
        var id_comments = parametros.find('#id_comments').val();
        
        $j.get(url,{form_excluir:'True',
                    form_ajax:'True',
                    id_comments:id_comments
                    }, function(data){
                    
                    var comment_pai = ctx.closest('.comment');
                    comment_pai.remove();
            });
    });
    
    $j('input.excluir-howareu').live('click', function(){
        var url = $j('#portal_url').val() + "/myvindula";
        //var url_sucess = $j('#context_url').val();
        
        var ctx = $j(this);
        
        ctx.hide();
        ctx.parent().find('#load-save').show();
        
        //var username = $j('#username').val();
        var parametros = $j(this).parent().parent();
        var id_howareu = parametros.find('#id_howareu').val();
        
        $j.get(url,{form_excluir:'True',
                    form_ajax:'True',
                    id_howareu:id_howareu
                    }, function(data){
                    
                    var comment_pai = ctx.closest('.comment');
                    comment_pai.remove();
            });
    });
    
});