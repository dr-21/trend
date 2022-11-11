function getLttImage() {
    fetch("data/data.json")
        .then((res) => res.json())
        .then((data) => {
            let image64 = data["img"];
            let image = document.getElementById("lttImage");
            image.src = `data:image/jpg;base64,${image64}`;
        });
}

getLttImage();
