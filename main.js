window.onload = function(){
    let post_btn = document.getElementById('post-button');
    
    
    const postComment = () =>{
        let post_name = document.getElementById('name-input');
        let post_comment = document.getElementById('comment-box');
        let comment_display = document.getElementById('comment-display');
    
        let div = document.createElement('div');
        let h4 = document.createElement('h4');
        let p = document.createElement('p');
        div.className = 'comment-post';
        let nameNode = document.createTextNode(post_name.value);
        let commentNode = document.createTextNode(post_comment.value);
        
        h4.appendChild(nameNode);
        p.appendChild(commentNode);
        div.appendChild(h4);
        div.appendChild(p);
        
        
        console.log(div)
        post_name.value = "";
        post_comment.value = "";
        comment_display.appendChild(div);
    }
    
    
    post_btn.addEventListener('click', postComment)
}