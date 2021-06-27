function fetchFunction() {
    console.log("fetch from front end!!!")
    try {
        // fetch('http://localhost:8085/topics')
        fetch('https://ancient-ocean-17605.herokuapp.com/')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const ul = document.getElementById("ul");
                var li;
                for (let index = 0; index < data.length; index++) {
                    li = document.createElement("li");
                    li.innerHTML = data[index].id;
                    ul.appendChild(li);
                }
                li.innerHTML = "hey";
                ul.appendChild(li);
            });
    } catch (error) {
        console.log("there was an error!!!")
        console.log("the error: ", error)
    }
}

export default function Fourth() {
    return (
        <div>
            <h2>The fourth Page</h2>
            <button onClick={() => fetchFunction()}>My Fetch Button</button>
            <button onClick={() => console.clear()}>My Clear Button</button>
            <ul id="ul"></ul>
        </div>
    );
}
