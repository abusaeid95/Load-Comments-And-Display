function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayCommnet(data))
}

function displayCommnet(data){
    const commentContainer = document.getElementById('comments');
    for(const comment of data){
        console.log(comment);
        const divCotainer = document.createElement('div');
        divCotainer.classList.add('divUi');
        divCotainer.innerHTML=
        `<h1> postId: ${comment.postId}</h1>
        <h5>ID: ${comment.id}</h5
        <h5>Name: ${comment.name}</h5>
        <h5>Eamil: ${comment.email}</h5>
        <h5>Details: ${comment.body}</h5>`
        ;
        commentContainer.appendChild(divCotainer);
}
    }
    loadPost();