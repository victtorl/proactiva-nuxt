function goTo(link:string) {
    // //el 96 es el tamaño del header
    const position = document.getElementById(link).offsetTop - 102;
    // smooth scroll
    window.scrollTo({ top: position, behavior: "smooth" });
    console.log(position);
}

export {goTo}