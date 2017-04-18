const inputs = document.querySelectorAll('input');


function changeValue() {
    const suffix = event.target.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${event.target.name}`, event.target.value + suffix);
}

inputs.forEach( input => input.addEventListener('change', changeValue ))
inputs.forEach( input => input.addEventListener('mousemove', changeValue));


