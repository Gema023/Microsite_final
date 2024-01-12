let obtainParam = (url) => {
    let urlParam = String(url.match(/\?+.+/));
    urlParam = urlParam.replace("?id=", "")
    return urlParam;
};

let param = obtainParam(document.URL);

let containerProyectos = document.querySelector(".container2");

fetch("data/anuario.json")
.then((res) => res.json())
.then((data) => {
    let proyecto = data[Number(param)]
    console.log(proyecto);
    containerProyectos.innerHTML = `
    <div class="portada_proyectos">
        <img src="${proyecto.imagenes}" alt="" class="imagen_portada_proyectos">
    </div>
    <p class="texto_proyectos">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, impedit non recusandae minima deserunt laborum modi labore ratione odio quo error dolorum accusamus autem eveniet repudiandae beatae amet aspernatur. Quia mollitia eveniet a delectus molestias officia repudiandae incidunt commodi nam!</p>
    <article class="container3_proyectos">
    <p class="texto_proyectos">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo natus mollitia sequi facere deleniti exercitationem nihil sapiente cum, labore veniam animi laboriosam et quasi necessitatibus neque! Iusto accusamus illum neque expedita magni quibusdam sit ipsum, dolorum sapiente perferendis ducimus aliquid. Repudiandae quidem qui, dicta perspiciatis maxime incidunt assumenda molestiae. Itaque enim, odit dolore dicta molestias officiis reprehenderit dignissimos alias est in necessitatibus? Magni veritatis amet eveniet itaque corporis deserunt, voluptatum vel, nam fugiat alias nostrum. Quo sed maxime atque ab nemo quaerat veniam. Veritatis reiciendis pariatur, beatae qui ut incidunt ea adipisci labore maxime eligendi sapiente quibusdam ducimus dicta quas. Saepe alias unde ipsam totam nostrum nisi sed. Voluptatum cumque laborum dolore quidem voluptatibus harum exercitationem, officiis iure corrupti perferendis et tenetur fugit dolor culpa nulla cum? Voluptas ad excepturi odio in, deserunt aut ipsa. Enim hic culpa autem minima sequi atque harum minus voluptatibus neque, sint alias dicta vel.
    </p>
        <div class="container_imagen_proyectos">
            <img class="imagen_proyectos" src="${proyecto.imagenes}" alt="">
        </div>
    </article>
    `
});

let menuDesplegable = document.querySelector('.desplegable');

let menu = document.querySelector('#menu');

menuDesplegable.addEventListener('click', () => {
    menu.classList.toggle('none');
});