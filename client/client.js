const woffer = document.querySelector('form');
const error = document.querySelector('.error');
const loading = document.querySelector('.loading');
var woffs = document.querySelector('.woffs');


const baseUrl = "http://localhost:5000/woff" ;
loading.style.display = 'none';
renderData();
error.style.display ='none';

woffer.addEventListener('submit' , (event)=>{
    event.preventDefault();
    const formData = new FormData(woffer);
    const name = formData.get('name');
    const content = formData.get('content');
    console.log(name);
    const newWoff = {
        name,
        content
    }
    woffer.reset();
    woffer.style.display = 'none';
    loading.style.display = '';
    fetch( baseUrl , {
        method : 'POST',
        body : JSON.stringify(newWoff),
        headers : {
            'content-type' : 'application/json'
        }
    })
    .then(res => res.json())
    .then(data =>{
        if( data.message !=null){
            var p = document.createElement('p');
            p.textContent = data.message;
            p.style.color ='red';
            error.innerHTML = '';
            error.appendChild(p);
            error.style.display ='';
        }
        woffer.style.display = '';
        loading.style.display = 'none';
        renderData();
    });
});


function renderData(){
    woffs.innerHTML = '';
    fetch(baseUrl)
    .then(res => res.json())
    .then(woffers=>{
        woffers.reverse();
        woffers.forEach(woff => {
            var div = document.createElement('div');
            var title  = document.createElement('h5');
            var content = document.createElement('p');
            var date = document.createElement('small')
        
            title.textContent = woff.name;
            content.textContent = woff.content;
            date.textContent = new Date(woff.created);
        
            div.appendChild(title);
            div.appendChild(content);
            div.appendChild(date);
            woffs.appendChild(div);
        }); 
    })
    
}


