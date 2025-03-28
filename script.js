


const markdownInput = document.getElementById('markdown');
const previewOutput = document.getElementById('preview');
const clearBtn = document.querySelector('#Clear');

marked.setOptions({
    gfm: true, 
    breaks: true
});

    markdownInput.addEventListener('input', () => {
        previewOutput.innerHTML = marked.parse(markdownInput.value);
    });


    clearBtn.addEventListener('click', () => {
        markdownInput.value = "";
        previewOutput.innerText = "";
    })

