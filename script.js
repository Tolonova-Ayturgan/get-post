const get = document.getElementById("get")
const post = document.getElementById("post")
function myFunction() {  
    if (get.style.display === "none") {  
      post.style.display = "none";
      get.style.display = "block";
    } else {
      post.style.display = "block";
      get.style.display = "none";
    }
  }





async function getUsers(){
    const url = await fetch("https://jsonplaceholder.typicode.com/users", {
        headers: {
            "Content-type": "application/json"
        }
    })
    console.log(url);

    let get = await url.json()
    get.map((element) => {
        console.log(element);
        const div = document.createElement("div")
        const h1 = document.createElement("h1")
        const h2 = document.createElement("h2")
        const h3 = document.createElement("h3")
        const span = document.createElement("span")

        h1.innerHTML = element.id
        h2.innerHTML = element.name
        h3.innerHTML = element.username
        span.innerHTML = element.email

        post.addEventListener("click", () => {
            const object = {
                id: element.id,
                name: element.name,
                username: element.username,
                email: element.email,
            }    
            postFire(object)

        })
        
    
        document.body.append(div)
        div.append(h1)
        div.append(h2)
        div.append(h3)
        div.append(span)

    })

}



const fireUrl = "https://base1-c11a6-default-rtdb.firebaseio.com/lesson.json"
async function postFire(go){
    const response = await fetch(fireUrl, {
        method: "POST",
        body: JSON.stringify(go)
    })
    const res = await response.json()
    console.log(response);
}

get.addEventListener("click",getUsers)




