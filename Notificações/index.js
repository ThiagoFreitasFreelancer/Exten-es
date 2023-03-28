


// const button = document.querySelector('.button');

// //console.log(button)

// // button.addEventListener('click', (e) => {

// //     let textArea = document.querySelector( '.text' );
// //     textArea.select();
// //     window.open(text, '_blank');

// // });

// document.getElementById("btn").addEventListener("click", function() {

//     var conteudo = document.querySelector("textarea[class='text']").value;
//     this.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(conteudo));
//     this.setAttribute("download", "conteudo.txt");

//     const downloadLink = document.createElement("a");
//     document.body.appendChild(downloadLink);
//     const blob = new Blob(conteudo)
//     downloadLink.href = URL.createObjectURL(blob);
//     downloadLink.download = "conteudo.txt";
//     downloadLink.click();
//     URL.revokeObjectURL(downloadLink.href);

// });

const textArea = document.querySelector(".text");
const downloadLink = document.createElement("a");
downloadLink.hidden = true;
document.body.appendChild(downloadLink);

document.querySelector(".button").addEventListener("click", () => {
  
    const blob = new Blob([textArea.value], { type: "text/plain;charset=utf-8" });
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "conteudo.txt";
    downloadLink.click();
    URL.revokeObjectURL(downloadLink.href);

});



