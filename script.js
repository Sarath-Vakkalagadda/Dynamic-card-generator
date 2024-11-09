function createCard(title,cname,views,age,thumbnail,duration){
    let viewstr
    if (views < 1000) {
        viewstr = views;
    }
    else if (views > 1000000) {
        viewstr = Math.floor(views / 1000000) + "M";
    }
    else {
        viewstr = Math.floor(views / 1000) + "K";
    }
    let html=`<div class="container2">
            <div class="card">
                <div class="image">
                    <img
                        src="${thumbnail}">
                    <div class="capsule">${duration}</div>
                </div>
                <div class="content">
                    <h2>${title}</h2>
                    <p>${cname}. ${viewstr} views. ${age} months ago</p>

                </div>

            </div>
        </div>`
        document.getElementById("sigma").innerHTML=document.getElementById("sigma").innerHTML+html;
}

function mus(){
    const  a = document.getElementById("Ctitle").value;
    const  b = document.getElementById("Chname").value;
    const  c = document.getElementById("vcount").value;
    const  d = document.getElementById("age").value;
    const  e = document.getElementById("thumb").value;
    const  f = document.getElementById("duration").value;
    createCard(a,b,c,d,e,f)

}